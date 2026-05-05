import AreaBar from "@/../components/areaBar";
import MonsterFight from "@/../components/monsterFight";
import InventoryBar from "@/../components/inventoryBar";
import { usePage } from "@inertiajs/react";
import { MonsterPageProps } from "@/types";

export default function Monster() {
    const { auth, Monster } = usePage<MonsterPageProps>().props;
    const user = auth.user;
    const monsterName = Monster.data.monster.name;
    const area = Monster.data.area;

    return (
        <div> 
            <AreaBar areaData={Monster.data.area} locationName={"You have encounterd: " + monsterName} userHP={"" + user.curhp + "/" + user.maxhp}
                magicalPoints={"" + user.curmp + "/" + user.maxmp}/>
            <MonsterFight Monster={Monster.data.monster} user={user} Area={area}/>
            <InventoryBar />
        </div>
    );
}
