import React from 'react';
import Button from 'react-bootstrap/Button';
import exampleMonsterImage from "../img/monsters/sandRat.jpg";

//Add later the data gotten from location in the dataabase. This is current placeholder data
const MonsterFight: React.FC = () => {
    return (
        <div className='locationBar'>
            <div className='locationDiv'>
                <img className="locationImage" src={exampleMonsterImage} alt="Location" />
                <div className='statsWrapper'>
                    <h1 className="locationTitle">You have encountered a Mutated Sand Rat!</h1>
                    <div className='statsContainer'>
                    <ul id='monsterStats'>
                        <li className='monsterStatTitle'> Mutated Sand rats Stats:</li>
                        <li className='monsterInfo'> Mutated Sand rats attack: <b>5</b></li>
                        <li className='monsterInfo'> Mutated Sand rats defence: <b>5</b></li>
                        <li className='monsterInfo'> Mutated Sand rats Hp: <b>10/10</b></li>
                    </ul>
                    <ul id="playerStats">
                        <li className='monsterStatTitle'> Your Stats:</li>
                        <li className='monsterInfo'> Your attack: <b>5</b></li>
                        <li className='monsterInfo'> Your defence: <b>5</b></li>
                        <li className='monsterInfo'> Your Hp: <b>10/10</b></li>
                    </ul>
                    </div>
                    <Button variant="danger">Fight the Mutated Sand Rat</Button> <br />
                    <Button variant="warning">Attempt to Taunt the Mutant Sand Rat</Button> <br />
                    <Button variant="warning">Attempt to Seduce the Mutant Sand Rat</Button> <br />
                    <Button variant="warning">Attempt to Trick the Mutant Sand Rat by crying</Button> <br />
                    <Button variant="success">Attempt to Flee the Mutant Sand Rat</Button> <br />
                </div>
            </div>
        </div>
    )
}

export default MonsterFight;