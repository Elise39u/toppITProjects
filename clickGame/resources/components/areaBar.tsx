import React from 'react';

interface AreaComponetDataProps {
    areaData: AreaData;
    locationName: String;
    userHP: String;
    magicalPoints: String;
}

interface AreaData {
    id: number
    name: string
}

//Add later the data gotten from location in the dataabase. This is current placeholder data
const AreaBar: React.FC<AreaComponetDataProps> = ( { areaData, locationName, userHP, magicalPoints } ) => {
    const AreaTime = new Date().toLocaleTimeString('en-US', {timeZone: "America/New_York"});
    return (
        <div className='areaBar'> 
             <div id="locationName">
                <h1 className='locationTitle'>{locationName}</h1>
            </div>
            <div className='parentAreaDivInfo'>
                <div className='playerStatAreaDiv'>
                    <p className='playerHealth'> Current heatlh: <b>{userHP}</b> </p>
                    <p className='playerHealth'> Current Mana: <b>{magicalPoints}</b> </p>
                </div>
                <div className='areaInfoDiv'>
                    <p className='areaText'> You're currently in: {areaData.name} </p>
                    <p className='areaTime'> Current time is: {AreaTime} </p>
                </div>
            </div>
        </div>
    )
}

export default AreaBar;