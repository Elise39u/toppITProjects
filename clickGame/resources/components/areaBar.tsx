import React from 'react';

interface AreaComponetDataProps {
    areaData: AreaData;
    locationName: String;
}

interface AreaData {
    id: number
    name: string
}

//Add later the data gotten from location in the dataabase. This is current placeholder data
const AreaBar: React.FC<AreaComponetDataProps> = ( { areaData, locationName } ) => {
    const AreaTime = new Date().toLocaleTimeString('en-US', {timeZone: "America/New_York"});
    return (
        <div className='areaBar'> 
             <div id="locationName">
                <h1 className='locationTitle'>{locationName}</h1>
            </div>
            <p className='areaText'> You're currently in: {areaData.name} </p>
            <p className='areaTime'> Current time is: {AreaTime} </p>
        </div>
    )
}

export default AreaBar;