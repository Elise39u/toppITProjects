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
    };

    return colors[type] || 'primary'; // Default to Blue
};

const LocationView: React.FC<LocationComponentProps> = ({ location }) => {
    const [showFogModal, setShowFogModal] = useState(false);
    const handleShowFogModalShow = () => setShowFogModal(true);
    const handleShowFogModalClose = () => setShowFogModal(false);


    const updateCurrentLocation = (newLocationId: string) => {
        //Locations like 15/1 or 22/1 for shops, locations and npcs will cause an error. 
        router.post('/user/update-location', {
            location_id: newLocationId
        }, {
            preserveScroll: true, 
            onSuccess: () => {
                router.get(`/location/${newLocationId}`);
            },
            onError: (errors) => {
                errors.location_id.includes("integer") ? router.get(`/location/${newLocationId}`) : handleShowFogModalShow();
            }
        });
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
                                    onClick={() => updateCurrentLocation(choice.to_location_id)}
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
                            <Modal.Body>
                               <p> Dear Adventurer. As your voice from above in this fansty world. This location is shrouded in a heavy fog. 
                                   Until the fog is lifed, you wont be able to get to this location. Gray choices have this warning adventurer. Success further
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