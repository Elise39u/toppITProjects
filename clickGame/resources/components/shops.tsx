import React from 'react';
import exampleLocationImg from "../img/shops/potionShop.jpg";
import Button from 'react-bootstrap/esm/Button';

const ShopView: React.FC = () => {
    return (
        <div className='locationBar'>
            <div className='locationDiv'>
                <img className="locationImage" src={exampleLocationImg} alt="Location" />
                <div>
                    <h1 className='locationName'>Welcome to the Potion Shops</h1>
                    <h3> Here to heal yourself or buy some potions!</h3>
                    <p>Current health: <b>100/100</b></p>
                    <input style={{outline: '1px solid black'}} type='number' min="0" max="100" defaultValue="100"></input>
                    <Button variant="primary">Heal yourself</Button> <br /><br />

                    <h3>Potions for sale:</h3>
                    <label> Red potion: 10 gold</label> <br /><input style={{outline: '1px solid black'}} type='number' min="0" defaultValue="0"></input> 
                    <Button variant="success">Buy Red Potion</Button> <br />
                    <label> Maroon potion: 20 gold</label> <br /> <input style={{outline: '1px solid black'}} type='number' min="0" defaultValue="0"></input>
                    <Button variant="success">Buy Maroon Potion</Button> <br />

                    <Button variant="secondary">Exit Shop</Button>
                </div>
            </div>
        </div>
    )
}

export default ShopView;