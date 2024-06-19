export type championData = ({
    tags: string[];
    info: {
        difficulty: number;
    };
    stats: {
        hp: number;
        attackrange: number;
        mp: number;
        movespeed: number;
        armor: number;
        attackspeed: number;
    };
    name: string;
    id: string;
    partype: string;
} | undefined);

export type champion = {
    tags: string[];
    info: {
        difficulty: number;
    };
    stats: {
        hp: number;
        attack_range: number;
        mp: number;
        move_speed: number;
        armor: number;
        attack_speed: number;
    };
    name: string;
    id: string;
    partype: string;
} | undefined

export type restriction = {
    name: string;
    display_name: string;
    champion_list: string[];
    hash: string;
}
