import React from 'react';

//Add later the data gotten from location in the dataabase. This is current placeholder data
const InventoryBar: React.FC = () => {

    return (
        <div className='inventoryBar'> 
             <div id="inventoryName">
                <h1 className='inventoryTitle'>You're inventory</h1>
            </div>
            <ul className='inventoryList'> 
                <li className='inventoryItem'><i> Milk x3</i></li>
                <li className='inventoryItem'><i> Bacon x5</i></li>
                <li className='inventoryItem'><i id="potions"> Gold potion x15</i></li>
                <li className='inventoryItem'><i id="potions"> Rainbow potion x15</i></li>
                <li className='inventoryItem'><i id="weapons"> RPG</i></li>
                <li className='inventoryItem'><i id="weapons"> Stick x15</i></li>
                <li className='inventoryItem'><i id="storyItem"> Paddle</i></li>
                <li className='inventoryItem'><i id="storyItem"> Ship Key</i></li>
            </ul>
        </div>
    )
}

export default InventoryBar;