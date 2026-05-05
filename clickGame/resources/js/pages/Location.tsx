import AreaBar from "@/../components/areaBar";
import LocationView from "@/../components/locationView";
import InventoryBar from "@/../components/inventoryBar";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import type { PageProps } from "@/types";

export default function Location() {
    const { auth, location } = usePage<PageProps>().props;
    const user = auth.user;

    useEffect(() => {
        document.cookie = `username=${user.name}`;
    }, [user.name]);   

    return (
        <div>
            <AreaBar areaData={location.data.area} locationName={location.data.name} userHP={"" + user.curhp + "/" + user.maxhp}
                magicalPoints={"" + user.curmp + "/" + user.maxmp}/>
            <LocationView location={location}/>
            <InventoryBar />
        </div>
    );
}