import AreaBar from "@/../components/areaBar";
import LocationView from "@/../components/locationView";
import InventoryBar from "@/../components/inventoryBar";

export default function Location(props: any) {
    return (
        <div>
            <AreaBar areaData={props.location.data.area[0]} />
            <LocationView location={props.location} />
            <InventoryBar />
        </div>
    );
}