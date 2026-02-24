import React, {useEffect, useState} from 'react';
import exampleLocationImg from "../img/locations/dejavu.jpg";

//Add later the data gotten from location in the dataabase. This is current placeholder data
const LocationView: React.FC = () => {
    return (
        <div className='locationBar'>
            <div className='locationDiv'>
                <img className="locationImage" src={exampleLocationImg} alt="Location" />
                <div>
                    <h1 className="locationTitle">Deja vu? In new york?</h1>
                    <p className="locationStory"> You wake up after a nap what feels like for ever <br />
                    Memorys flood your brain of a wild New years eve. Only one look on your phone confirms your worst fear. <br />
                    Its currently the 31st of January 2059. As you scratch head from the sereve headache and your phones dies and runs out of battery. You hear the following on the radio <br /><br />
                    <i>Radio broadcaster:</i> in the past 24 hours New york has been hit with a unknown virus. Causing the city to go into lockdown. <br />
                    <i>Radio broadcaster:</i> People are adviced to keep watch and those seeking out rescue can meet the miltary at the Brooklyn Bridge. <br />
                    <i>Radio broadcaster:</i> The miltary will ask for idenitfycation and guns but in exchange wille evucate the population if you're not infected. <br />
                    <i>Radio broadcaster:</i> For those hearing this message. We wish you the best of luck and hope you're journey stays safe. This is jack from channel 9 signing off<br /><br />

                    <b>username:</b> Great you think to yourself. With vauge memories of waht happend on New years eve you are left no choice. <br />
                    <b>username:</b> You vaguley recall a pregnant transgirl and thier pregnant coach. Talking about a hidden subbase seieng this coming <br />
                    <b>username:</b> I did have their number i did ask it after that awesome night. But my phone is dead and there is no more power <br />
                    <b>username:</b> With no idea what happend to the duo. You decided to pack and head for the only option you have. Brooklyn bridge <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LocationView;