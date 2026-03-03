import AreaBar from "@/../components/areaBar";
import NpcBar from "@/../components/npc";
import InventoryBar from "@/../components/inventoryBar";

export default function Location() {
    return (
        <div>
            <AreaBar />
            <NpcBar />
            <InventoryBar />
        </div>
    );
}