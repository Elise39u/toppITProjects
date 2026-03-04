import React, {useEffect, useState} from 'react';

interface AreaComponetDataProps {
    areaData: AreaData;
}

interface AreaData {
    id: number
    name: string
}

//Add later the data gotten from location in the dataabase. This is current placeholder data
const AreaBar: React.FC<AreaComponetDataProps> = ( { areaData } ) => {
    const AreaTime = new Date().toLocaleTimeString('en-US', {timeZone: "America/New_York"});

    return (
        <div className='areaBar'> 
             <div id="locationName">
                <h1 className='locationTitle'>You're hotel room. (Keep location title or put area name here) </h1>
            </div>
            <p className='areaText'> You're currently in: {areaData.name} </p>
            <p className='areaTime'> Current time is: {AreaTime} </p>
        </div>
    )
}

export default AreaBar;