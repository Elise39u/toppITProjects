import React from 'react';
import DOMPurify from "dompurify";

interface ApiResponse<T> {
    data: T;
}

interface LocationComponentProps {
    location: ApiResponse<LocationData>;
}

interface Choice {
    id: number;
    name: string;
    from_location_id: number;
    to_location_id: number;
}

interface LocationData {
    id: number;
    name: string;
    area_id: number;
    title: string;
    foto_url: string;
    story: string;
    choices: Choice[];
}

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

console.log(getCookie('username'))
const LocationView: React.FC<LocationComponentProps> = ({ location }) => {
    const locationData = location.data;
    return (
        <div className='locationBar'>
            <div className='locationDiv'>
                <img className="locationImage" src={locationData.foto_url} alt="Location" />
                <div>
                    <h1 className="locationTitle">{locationData.title}</h1>
                    <p className="locationStory" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(locationData.story)}}></p> <br />

                    <p className='locationTitle'> Where do you go?</p>
                    <ul>
                          {locationData.choices.map(choice => (
                            <li key={choice.id} className='choiceOption'>
                                <a href={`../location/${choice.to_location_id}`}>
                                    {choice.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LocationView;