import React, { useState } from 'react';
import DOMPurify from "dompurify";
import { router } from '@inertiajs/react';
import { Button, Modal } from 'react-bootstrap';

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
    to_location_id: string;
    type: string;
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

const cookieName = getCookie("username") ?? "";

const getLocationColor = (type: string) => {
    const colors: Record<string, string> = {
        'hostile': 'danger',    // Red waring of possible dangers
        'safe': 'success',      // Green safe ones
        'quest': 'warning',     // Yellow for those having a quest or npcs. 
        'locked': 'secondary',  // Grey for paths you can't take
        'item_needed': 'info', // Temp soloution to show users that they require an item until inventory and choice_Condtions is thought off. 
    };

    return colors[type] || 'primary'; // Default to Blue
};

const LocationView: React.FC<LocationComponentProps> = ({ location }) => {
    const [showFogModal, setShowFogModal] = useState(false);
    const handleShowFogModalShow = () => setShowFogModal(true);
    const handleShowFogModalClose = () => setShowFogModal(false);


    const updateCurrentLocation = (newLocationId: string, choiceType: string) => {
        if(choiceType === "locked" || choiceType === "item_needed") {
            handleShowFogModalShow();
        } else {
            router.get(`/location/${newLocationId}`);
        }
    };


    const locationData = location.data;
    return (
        <div className='locationBar'>
            <div className='locationDiv'>
                <img className="locationImage" src={locationData.foto_url} alt="Location" />
                <div>
                    <h1 className="locationTitle">{locationData.title}</h1>
                    <p className="locationStory" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(locationData.story.replaceAll("username", cookieName))}}></p> <br />

                    <div className="d-grid gap-2 col-mx-auto">
                    <p className="text-muted small text-uppercase fw-bold mb-1">Available Paths</p>
                        {locationData.choices.map(choice => {
                            const buttonColor = getLocationColor(choice.type); // e.g., 'danger', 'success', 'primary'
                            return (
                                <Button 
                                    key={choice.id}
                                    onClick={() => updateCurrentLocation(choice.to_location_id, choice.type)}
                                    className={`btn btn-${buttonColor} d-flex justify-content-between align-items-center shadow-sm py-2 px-3 border-2`}
                                >
                                    <span className="fw-semibold">
                                        <i className="bi bi-signpost-split me-2"></i>
                                        {choice.name}
                                    </span>
                                    <i className="bi bi-chevron-right small opacity-50"></i>
                                </Button>
                            );
                        })}
                    </div>

                     <Modal  size="lg" show={showFogModal} onHide={handleShowFogModalClose}>
                        <Modal.Header closeButton className="bg-info">
                            <Modal.Title>Locked Choice</Modal.Title>
                        </Modal.Header>
                            <Modal.Body className="LocationModal">
                               <p> Dear Adventurer. As your internal guide you either pressed as on this moment a gray button or light blue one. 
                                    <li> Dark Gray ones are shrouded in heavy fog. Preventing us from adventuring furter. Until the fog is cleared 
                                        You wont be able to get to these mentioned locations.
                                    </li>
                                    <li> The Light blue ones are choices with conditions. For example the first ending as requirs the paddle. 
                                        So unless you find the required item like the paddle you wont be able to progress on this choice.
                                        Further updates will make sure that these are hidden until the right item is found. For now not due to one problem
                                        The condition system is not yet implemented. Because of that the choices are visable. 
                                    </li>
                               </p>
                            </Modal.Body>
                        <Modal.Footer className="bg-info">
                            <Button variant="success" onClick={handleShowFogModalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default LocationView;