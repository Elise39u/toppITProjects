import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DOMPurify from "dompurify";
import { Link } from "@inertiajs/react";

interface MonsterObj {
    Monster: MonsterData;
    user: GameUserData;
    areaId: number;
}

interface MonsterData {
    id: number;
    name: string;
    image_url: string;
    attack: number;
    magical_attack: number;
    defense: number;
    magical_defense: number;
    gold: number;
    xp: number;
    curhp: number;
    curmp: number;
    chance: number | null;
    aggressionLvL: number;
    type: string;
    info: string;
}

interface GameUserData {
    id: number;
    inventory_id: number | null;

    attack: number;
    magical_attack: number;
    defense: number;
    magical_defense: number;

    gold: number;
    inbank: number;
    curhp: number;
    maxhp: number;
    curmp: number;
    maxmp: number;
    current_exp: number;
    exp_to_next_level: number;
    level: number;
    current_location_id: number;

    primary_hand: string;
    secondary_hand: string;
}

type WinStatus = 'Death' | 'Flee' | 'Seduce' | '';

function getCookie(cName : String) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
}

const cookieName = getCookie("username") ?? "";
const last_location = getCookie("last_location") ?? 1;

//Add a usestate later to drain the Monsters health
const MonsterFight: React.FC<MonsterObj> = ( { Monster, user, areaId }) => {
    const [show, setShow] = useState(false);
    const [showMonsterInfo, setShowMonsterInfo] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMonsterShow = () => setShowMonsterInfo(true);
    const handleMonsterClose = () => setShowMonsterInfo(false);

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    const [typeSubmit, setTypeSubmit] = useState("");
    
    const [showDeathButton, setShowDeathButton] = useState(false); // Small problem.. React useState update one turn to late..
    const [showFightButtons, setShowFightButtons] = useState(true); //So if the user is dead or monster.. There can still be
    const [showLocationButtons, setShowLocationButtons] = useState(false); // Interacted for one more turn perhaps returning battle.
    const [showWayWonStatus, setShowWayWonStatus] = useState<WinStatus>("Death");

    const [monsterStunned, setMonsterStunned] = useState(false);
    const [userStunned, setUserStunned] = useState(false);
    const [fleeChance, setFleeChance] = useState(0);
    const [userStunChance, setUserStunChance] = useState(0);
    const [fleeAttemptCounter, setFleeAttemptCounter] = useState(0)
    const [tempUserHP, setTempUserHP] = useState(user.curhp);
    const [tempMonsterHP, setTempMonsterHP] = useState(Monster.curhp);
    const [fightLog, setFightLogs] = useState<string[]>([""]);

    const victoryMessages : Record<Exclude<WinStatus, ''>, string> = {
        Death: `You have defeated ${Monster.name}! Im actually suprised and not gonna lie... I am impressed. I might have misjudged you back when we met on that Night cutie.`,
        Flee: `${Monster.name} did actually flee.. Wow sad.. For you too you dont get any rewards.. Il reward you with a belly pet :)`,
        Seduce: `Look i know i took interest you.. But what ever you did to that ${Monster.name}.. Please never do that again.. Im getting scared and im the preggo one in this mess..`
    }

    async function cacluateDamage(attacker : string) {
        let attackDamge = 0;
        if(attacker === "user") {
            user.attack <= Monster.defense ? attackDamge = 0 : attackDamge = user.attack - Monster.defense;
            monsterStunned ? attackDamge *= 1.5 : null;
            setTempMonsterHP(tempMonsterHP - attackDamge);
            addLog(`${cookieName} attacked ${Monster.name} for ${attackDamge} damage!`);
        } else {
            Monster.attack <= user.defense ? attackDamge = 0 : attackDamge = Monster.attack - user.defense;
            userStunned ? attackDamge *= 1.5 : null;
            setTempUserHP(tempUserHP - attackDamge);
            addLog(`${Monster.name} attacked ${cookieName} for ${attackDamge} damage!`);
        }
    }

    async function MonsterAI() {
        if(monsterStunned) {
            addLog(Monster.name + " has been stunned and couldnt move this turn");
            setMonsterStunned(false);
            return;
        }

        if(Monster.aggressionLvL === 101) {
            cacluateDamage("Monster");
            return;
        }
        
        const currentFlee = caclcuateUserFleeChance();
        const currentStun = caclcuateUserStunChance();
        
        let attackDamge = 0;
        Monster.attack <= user.defense ? attackDamge = 0 : attackDamge = Monster.attack - user.defense;

        //if a monster attack casues a kill it will always attempt to attack
        if(attackDamge >= tempUserHP) {
            cacluateDamage("Monster");
            return;
        }

        let monsterHPCalHalf = Monster.curhp / 2;
        let monsterHPCalQuarter = Monster.curhp / 4;
        let userDamage =  user.attack <= Monster.defense ? attackDamge = 0 : attackDamge = user.attack - Monster.defense;
        let doIDie = tempMonsterHP - userDamage <= 0;

        let actionChance = Math.floor(Math.random() * 100) + 1;

        let HalfHp = false;
        let QuarterHp = false;

        tempMonsterHP <= monsterHPCalHalf ? HalfHp = true : HalfHp = false;
        tempMonsterHP <= monsterHPCalQuarter ? QuarterHp = true : QuarterHp = false;
        monsterHPCalHalf && monsterHPCalQuarter ? HalfHp = false : null;
        let tempMonsterAgression = Monster.aggressionLvL;
        
        if(HalfHp) tempMonsterAgression / 2; 
        if(QuarterHp) tempMonsterAgression / 4;
        
        if(doIDie) {
            chooseMonsterAction(tempMonsterAgression);
            return;
        } else if(tempMonsterAgression >= actionChance) {
            cacluateDamage("Monster");
            return;
        } else if(currentFlee >= 75) {
            cacluateDamage("Monster");
            return;
        } else if(currentStun >= 75) {
            chooseMonsterAction(tempMonsterAgression);
            return;
        }
        else {
            chooseMonsterAction(tempMonsterAgression);
            return;
        }
    }

    function chooseMonsterAction(agressionLvL: number) {
        let actionChance = Math.floor(Math.random() * 100) + 1;

        if(agressionLvL >= actionChance) {
            let tauntChance = Math.floor(Math.random() * 100) + 1;
            let tauntChanceCheck = tauntChance >= agressionLvL;
            tauntChanceCheck ? setUserStunned(true) : null;
            tauntChanceCheck ? addLog(`${Monster.name} successfully tautned and stunned you. You cant move next turn!`) : 
                addLog(`${Monster.name} attempted to taunt you but failed!`);
        } else {
            let fleeChance = Math.floor(Math.random() * 100) + 1;
            let fleeBarrier = 100 - agressionLvL;
            
            if(fleeChance >= fleeBarrier) {
                addLog(`${Monster.name} has fled from the fight!. You win but with no rewardss whomp whomp. :)` )
                setShowWayWonStatus("Flee");
                setShowLocationButtons(true);
                setShowFightButtons(false);
            } else {
                addLog(`${Monster.name} attempted to flee but failed!`);
            }
        }
    }


    function caclcuateUserFleeChance() {
        let base = Math.floor(Math.random() * 26);
        let bonus = fleeAttemptCounter < 10 ? 5 : (fleeAttemptCounter < 25 ? 15 : 25);
        
        let finalChance = base + bonus;
        if (tempUserHP > tempMonsterHP) finalChance += 50;

        setFleeChance(finalChance); 
        return finalChance;        
    };

    function caclcuateUserStunChance() {
        let chance = Math.floor(Math.random() * 101);

        Monster.attack > user.attack ? chance -= 25 : chance;
        setUserStunChance(chance);
        return chance;              
    }

    const addLog = (message: string) => {
        setFightLogs(prev => [message, ...prev]);
    };

    const handleAction = async (actionType: string) => {
        setTypeSubmit(actionType); 

        let roleChance = Math.floor(Math.random() * 100) + 1;

        if(userStunned) {
            addLog(`You have been stunned and couldnt move this turn`);
            await sleep(500);
            await MonsterAI();
            setUserStunned(false);
            return;
        }

        switch(actionType) {
            case "Fight":
                await cacluateDamage("user");
                if(tempMonsterHP <= 0) {
                    setShowLocationButtons(true);
                    setShowFightButtons(false);
                    setShowWayWonStatus("Death");
                    break;
                }
                await sleep(500);
                await MonsterAI();
                
                if(tempUserHP <= 0) {
                    setShowDeathButton(true);
                    setShowFightButtons(false);
                }

                break;
            case "Taunt":
                const userPerStunChance = caclcuateUserStunChance();
                const isSuccesFull = roleChance >= userPerStunChance; 

                if(isSuccesFull) {
                    setMonsterStunned(true);
                    addLog(`You have succesfully taunted the ${Monster.name} and stunned it for the next turn!`)
                } else {
                    addLog(`Your taunt failed against ${Monster.name}`);
                    await sleep(600);
                    MonsterAI();
                }
                break;
            case "Seduce":
                const seduceChance = Math.floor(Math.random() * 100) + 1;

                if(seduceChance >= 75) {
                    setShowWayWonStatus("Seduce");
                    setTempMonsterHP(0);
                } else {
                    addLog(`Your attempt to seduce ${Monster.name} failed.. Thats really akwards.. As the preggo transgirl in this work/relationship.. 
                        Lets just retreat and forget this happend.. For your and my sake.. ${Monster.name} is too confused anyway with what you did so. `);
                    setShowFightButtons(false);
                    await sleep(5000);
                    window.location.href = "/location/" + last_location;
                }
                break;
            case "Flee":
                const userPerFleeChance = caclcuateUserFleeChance();
                let FleeRoleChance = 0;
                let userAttackPow = 0;
                let hpDifference = tempUserHP - tempMonsterHP;
                let increaseHPChance = 0; 

                user.attack > Monster.defense ? userAttackPow = user.attack - Monster.defense : userAttackPow = 0;
                hpDifference > 0 ? increaseHPChance = Math.floor(Math.random() * 25): null;
                let areaFleeChance = calculateAreaFleeChance();

                FleeRoleChance = userAttackPow > 0 ? FleeRoleChance += 25 + areaFleeChance + increaseHPChance : FleeRoleChance += areaFleeChance + increaseHPChance;
                const isFleeSuccesFull = FleeRoleChance >= userPerFleeChance;
                
                if(isFleeSuccesFull) {
                    addLog(`You have succesfully fled the ${Monster.name} In a bit you will retreat you to your last known location`);
                    await sleep(1500);
                    window.location.href = "/location/" + last_location
                } else {
                    addLog(`Your attempt to flee failed. Better luck next time!`);
                    setFleeAttemptCounter(fleeAttemptCounter + 1);
                    await sleep(600);
                    MonsterAI();
                }
                break;
            default:
                break;
        }

        function calculateAreaFleeChance() {
            switch(areaId) {
                case 1: 
                    if(fleeAttemptCounter < 5) return 0;
                    else if(fleeAttemptCounter < 15) return 15;
                    else if(fleeAttemptCounter < 30) return 25;
                    else return 50;
                default: 
                 return 0;
            }
        }
    };

    function handleAfterFight() {
        if(showDeathButton) {
            
        } else {

        }
    }

    return (
        <div className='locationBar'>
            <div className='locationDiv'>
                <img className="locationImage" src={Monster.image_url} alt="Location" />
                <div className='statsWrapper'>
                    <h1 className="locationTitle">You have encountered a {Monster.name}!</h1>
                    <div className='statsContainer'>
                    <ul id='monsterStats'>
                        <li className='monsterStatTitle'> {Monster.name} Stats:</li>
                        <li className='monsterInfo'> {Monster.name} attack: <b>{Monster.attack}</b></li>
                        <li className='monsterInfo'> {Monster.name} defence: <b>{Monster.defense}</b></li>
                        <li className='monsterInfo'> {Monster.name} Hp: <b>{tempMonsterHP}/{Monster.curhp}</b></li>
                    </ul>
                    <ul id="playerStats">
                        <li className='monsterStatTitle'> {cookieName} Stats:</li>
                        <li className='monsterInfo'> {cookieName} attack: <b>{user.attack}</b></li>
                        <li className='monsterInfo'> {cookieName} defence: <b>{user.defense}</b></li>
                        <li className='monsterInfo'> {cookieName} Hp: <b>{tempUserHP}/{user.maxhp}</b></li>
                    </ul>
                    </div>
                    <i> Actions are orderd by newsest first. So older ones are pushed to the bottom</i>
                    {/* Fight Log Box */}
                    <div className='fightLogs'>
                        {fightLog.map((fightLog, index) => (
                            <div key={index} style={{ marginBottom: '5px', borderBottom: index === 0 ? 'none' : '1px solid #222' }}>
                                {index === 0 ? "> " : "  "} {fightLog}
                            </div>
                        ))}
                    </div>
                    {userStunned && 
                        <>
                            <span className="badge bg-danger me-2">Stunned!</span> Cant move this turn! <br />
                            <Button variant="danger" onClick={() => handleAction("stunned")}> Stunned cant move</Button>
                        </>
                    }
                    {showFightButtons && !userStunned &&
                        <>                        
                            <Button onClick={handleShow} variant='dark'>Explain fight mechanics</Button>
                            <Button onClick={handleMonsterShow} variant='dark'>Small info about the monster</Button> <br />
                            <Button onClick={() => handleAction("Fight")} variant="danger">Fight the {Monster.name}</Button> <br />
                            <Button onClick={() => handleAction("Taunt")} variant="warning">Attempt to Taunt the {Monster.name}</Button> <br />
                            <Button onClick={() => handleAction("Seduce")} variant="warning">Attempt to Seduce the {Monster.name}</Button> <br />
                            <Button onClick={() => handleAction("Flee")} variant="success">Attempt to Flee the {Monster.name}</Button> <br />
                        </>
                    }
                    {showLocationButtons &&
                        <div className="post-fight-options">
                            {/* Add later the XP, Gold or if the monster fleed itself. Also if it dropped an item */}
                            <p id="outcomeFight">
                                You have defeated {Monster.name}! <br />
                                 <b>{victoryMessages[showWayWonStatus as keyof typeof victoryMessages]}</b> <br />
                                Where do you want to go? 
                            </p>

                            <Link href="/location/9">Go back to the city</Link> <br/>
                            <Link href="/location/5">Go to the docks</Link>
                        </div>
                    }
                    {showDeathButton && 
                        <>
                            <p> You have died to {Monster.name}. Stats and Inventory reseted and want an attempt to escape again?</p>         
                            <Link href="/location/1">Game over thanks to {Monster.name}</Link>
                        </>
                    }
                    <span className="text-danger small d-block">Flee attempt counter: {fleeAttemptCounter}</span>
                                           

                     <Modal size="lg" show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton className="bg-dark text-white">
                            <Modal.Title>Combat Guide</Modal.Title>
                        </Modal.Header>
                            <Modal.Body className="p-4" style={{ fontSize: '0.9rem', lineHeight: '1.5' }} >
                                <p className="text-muted italic border-bottom pb-2">
                                    Hello traveler. Stuck? Here is how to survive your encounters in the wild.
                                </p>

                                <div className="mt-3">
                                    <section className="mb-4">
                                        <h6 className="d-flex align-items-center fw-bold text-danger">
                                            <span className="badge bg-danger me-2">Fight</span> Physical Attack
                                        </h6>
                                        <p className="ms-4 mb-1">
                                            Turn-based combat. Damage = <strong>Attack - Defense</strong>. 
                                            If Attack is ≤= Defense, you deal 0 damage.
                                        </p>
                                        <small className="ms-4 text-muted">Items in your primary hand modify these stats.</small>
                                    </section>

                                    <section className="mb-4">
                                        <h6 className="d-flex align-items-center fw-bold text-warning">
                                            <span className="badge bg-warning text-dark me-2">Taunt / Seduce</span> Chance Actions
                                        </h6>
                                        <ul className="list-unstyled ms-4">
                                            <li className="mb-2">
                                                <strong>Taunt:</strong> Success stuns the monster + * 1,5 dmg increase. Failure gives them a free turn.
                                            </li>
                                            <li>
                                                <strong>Seduce:</strong> Chance to end the fight peacefully. 
                                                <span className="text-danger small d-block">No XP/Gold/Loot on success. Failure resets your location.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="mb-4">
                                    <h6 className="d-flex align-items-center fw-bold text-success">
                                        <span className="badge bg-success me-2">Flee</span> Escape Attempt
                                    </h6>
                                    <p className="ms-4 mb-0">Success chance increases if:</p>
                                    <ul className="ms-4 small text-muted">
                                        <li>Your HP is higher than the monster's.</li>
                                        <li>You have failed previous attempts in this fight.</li>
                                        <li>The Attack gap is in your favor.</li>
                                    </ul>
                                </section>

                                <section className="mb-4 opacity-75">
                                    <h6 className="d-flex align-items-center fw-bold text-primary">
                                        <span className="badge bg-primary me-2">Spell</span> Magic (Coming Soon)
                                    </h6>
                                    <p className="ms-4 mb-0 small">
                                        Requires <strong>MP</strong>. Uses <strong>Magical Attack vs Magical Defense</strong>. 
                                        Monster spells are themed by area (e.g., Sand = Blindness, Water = dot).
                                    </p>
                                </section>
                                
                                <div className="row mt-4 pt-3 border-top">
                                    <div className="col-md-6 mb-3">
                                        <h6 className="fw-bold text-dark text-uppercase small">
                                            <i className="bi bi-cpu-fill me-2"></i>Monster Behavior
                                        </h6>
                                        <div className="p-3 bg-light rounded shadow-sm" style={{ fontSize: '0.85rem' }}>
                                            <p className="mb-2"><strong>Tactics:</strong> Monsters don't just attack. They evaluate your stats every turn.</p>
                                            <ul className="ps-3 mb-0 text-muted">
                                                <li><strong>Taunt or Attack?</strong> Check possible outcomes of your next turn and act accordingly to that</li>
                                                <li><strong>Aggressive Level:</strong> High LVL = more likey to attack then taunt or flee (Range 1 - 100, bosses = 101)</li>
                                                <li><strong>Their HP:</strong> Hp gets low: Chance to flee or taunt gets bigger</li>
                                                <li><strong>Kill:</strong> Next attack = kill. Monsters always attempt to go for it.</li>
                                                <li><strong>Bosses:</strong> Bosses never flee a fight.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <h6 className="fw-bold text-dark text-uppercase small">
                                            <i className="bi bi-book-half me-2"></i>RPG Dictionary
                                        </h6>
                                        <div className="p-3 border rounded shadow-sm" style={{ fontSize: '0.85rem', backgroundColor: '#fdfdfd' }}>
                                            <table className="table table-sm table-borderless mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-bold text-primary">HP / MP</td>
                                                        <td>Health / Mana Points</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-bold text-primary">&le;=</td>
                                                        <td>Less than or equal to</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-bold text-primary">&ge;=</td>
                                                        <td>Greater than or equal to</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-bold text-primary">Stun</td>
                                                        <td>Skips the target's next turn</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-bold text-primary">*</td>
                                                        <td>Multiplys value by number behind it</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <hr />
                                    <div className="bg-light p-2 rounded small text-muted">
                                        <strong>Pro Tip:</strong> Monsters can also Taunt, Flee, or cast Spells. Watch their patterns! <br />
                                        <strong>Near future ideas:</strong> (Unsure) Let Npcs join you in fight
                                    </div>
                                </div>
                            </Modal.Body>
                        <Modal.Footer className="bg-dark text-white">
                            <Button variant="info" onClick={handleClose}>
                                Got it 
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal  size="lg" show={showMonsterInfo} onHide={handleMonsterClose}>
                        <Modal.Header closeButton className="bg-dark text-white">
                            <Modal.Title>Small info about {Monster.name}</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                               <p className='monsterInfoModal' 
                               dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(Monster.info)}}></p>
                            </Modal.Body>
                        <Modal.Footer className="bg-dark text-white">
                            <Button variant="info" onClick={handleMonsterClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MonsterFight;