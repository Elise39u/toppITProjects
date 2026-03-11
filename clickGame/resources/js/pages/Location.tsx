import AreaBar from "@/../components/areaBar";
import LocationView from "@/../components/locationView";
import InventoryBar from "@/../components/inventoryBar";

export default function Location(props: any) {
    return (
        <div>
            <AreaBar areaData={props.location.data.area} locationName={props.location.data.name}/>
            <LocationView location={props.location} />
            <InventoryBar />
        </div>
    );
}