// Type to use in the game which contains the userdata nesscary for the game.
type gameUser = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    current_location_id: number;
    inventory_id: number | null;
    attack: number;
    magical_attack: number;
    defense: number;
    magical_defense: number;
    gold: number;
    inbank: number;
    curhp: number;
    maxhp: number;
    curmp: number;
    maxmp: number;
    current_exp: number;
    exp_to_next_level: number;
    level: number;
    primary_hand: string;
    secondary_hand: string;
};

//Location related Types 
type Choice = {
    id: number;
    name: string;
    from_location_id: number;
    to_location_id: number;
};

type Area = {
    id: number;
    name: string;
};

type LocationData = {
    id: number;
    name: string;
    area_id: number;
    title: string;
    foto_url: string;
    story: string;
    condition: string | null;
    condition_value: string | null;
    choices: Choice[];
    area: Area;
};
