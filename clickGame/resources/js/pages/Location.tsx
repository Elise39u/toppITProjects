import AreaBar from "@/../components/areaBar";
import LocationView from "@/../components/locationView";
import InventoryBar from "@/../components/inventoryBar";
import { usePage } from "@inertiajs/react";

export default function Location(props: any) {
    const { auth } = usePage().props as any;
    const user = auth.user;

    document.cookie = "username=" + user.name;

    return (
        <div>
            <AreaBar areaData={props.location.data.area} locationName={props.location.data.name}/>
            <LocationView location={props.location} />
            <InventoryBar />
        </div>
    );
}