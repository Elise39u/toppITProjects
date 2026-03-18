import AreaBar from "@/../components/areaBar";
import LocationView from "@/../components/locationView";
import InventoryBar from "@/../components/inventoryBar";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";


type PageProps = {
    auth: {
        user: gameUser;
    };
    location: {
        data: LocationData;
    };
    errors: Record<string, string>;
};

export default function Location() {
    const { auth, location } = usePage<PageProps>().props;
    const user = auth.user;

    useEffect(() => {
        document.cookie = `username=${user.name}`;
    }, [user.name]);    

    return (
        <div>
            <AreaBar areaData={location.data.area} locationName={location.data.name}/>
            <LocationView location={location} />
            <InventoryBar />
        </div>
    );
}