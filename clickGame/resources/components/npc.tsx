import React, {useEffect, useState} from 'react';
import exampleLocationImg from "../img/npcs/PreggoElise2.jpg";
import Button from 'react-bootstrap/esm/Button';

//Add later the data gotten from location in the dataabase. This is current placeholder data
const NpcView: React.FC = () => {
    return (
        <div className='locationBar'>
            <div className='locationDiv'>
                <img className="locationImage" src={exampleLocationImg} alt="Location" />
                <div>
                    <h1 className='locationName'>Hello there Preggo Elise</h1>
                    <p className='locationStory'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant="secondary">Talk to Preggo Elise</Button>
                    <Button variant="primary">Return</Button>
                </div>
            </div>
        </div>
    )
}

export default NpcView;