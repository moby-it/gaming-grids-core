import { champion, restriction } from "./types.d.ts";
import { getChampionResources, getChampiontags, hashList } from "./utils.ts";

export async function parseTagRestrictions(champions: champion[]): Promise<restriction[]> {
    const tagsArray = getChampiontags(champions);
    const restrictions = tagsArray.map(tag => {
        const champion_list: string[] = [];
        return { name: tag.name, display_name: tag.display_name, champion_list, hash: '' };
    })
    if (champions) {
        for (const restriction of restrictions) {
            champions.map(champion => {
                if (champion?.tags.includes(restriction.name)) {
                    restriction.champion_list.push(champion.name);
                }
            });
            if (restriction.champion_list.length) await hashList(restriction);

        }
    }
    return restrictions;
}
export async function parseDifficultyRestrictions(champions: champion[]): Promise<restriction[]> {
    const difficultiesArray = [
        { name: 'low', display_name: 'Low difficulty', numbers: [0, 1, 2, 3] },
        { name: 'medium', display_name: 'Medium difficulty', numbers: [4, 5, 6, 7] },
        { name: 'high', display_name: 'High difficulty', numbers: [8, 9, 10] }
    ];
    const difficultyRestrictions = difficultiesArray.map(difficulty => {
        const champion_list: string[] = [];
        return {
            name: difficulty.name, display_name: difficulty.display_name,
            numbers: difficulty.numbers, champion_list, hash: ''
        }
    });
    if (champions) {
        for (const restriction of difficultyRestrictions) {
            champions.map(champion => {
                if (champion?.info?.difficulty && restriction.numbers.includes(champion?.info?.difficulty)) {
                    restriction.champion_list.push(champion.name);
                }
            });
            if (restriction.champion_list.length) await hashList(restriction);


        }
    }
    const restrictions = difficultyRestrictions.map(restriction => {
        return {
            name: restriction.name, display_name: restriction.display_name,
            champion_list: restriction.champion_list, hash: restriction.hash
        }
    })
    return restrictions;
}
export async function parsePowerSourceRestrictions(champions: champion[]): Promise<restriction[]> {
    const resoursesArray = getChampionResources(champions);
    const restrictions = resoursesArray.map(resource => {
        const champion_list: string[] = [];
        return { ...resource, champion_list, hash: '' };
    })
    if (champions) {
        for (const restriction of restrictions) {
            champions.map(champion => {
                if (champion?.partype === restriction.name) {
                    restriction.champion_list.push(champion.name);
                }
            });
            if (restriction.champion_list.length) await hashList(restriction);
        }
    }
    return restrictions;
}

export async function parseHpRestrictions(champions: champion[]): Promise<restriction> {
    const restriction: restriction = {
        name: 'hp<550',
        display_name: 'Base Hp < 550',
        champion_list: [],
        hash: ''
    }
    champions.map(champion => {
        if (champion?.stats?.hp) {
            if (champion?.stats?.hp < 550) {
                restriction.champion_list.push(champion.name);
            }
        }
    })
    if (restriction.champion_list.length) await hashList(restriction);
    return restriction;
}

export async function parseRangeRestrictions(champions: champion[]): Promise<restriction> {
    const restriction: restriction = {
        name: 'AttackRange>575',
        display_name: 'AttackRange > 575',
        champion_list: [],
        hash: ''
    }
    champions.map(champion => {
        if (champion?.stats?.attack_range) {
            if (champion?.stats?.attack_range > 575) {
                restriction.champion_list.push(champion.name);
            }
        }
    });
    if (restriction.champion_list.length) await hashList(restriction);
    return restriction;
}
export async function parseMpRestrictions(champions: champion[]): Promise<restriction> {
    const restriction: restriction = {
        name: 'Mp>=480',
        display_name: ' Base Mp >= 480',
        champion_list: [],
        hash: ''
    }
    champions.map(champion => {
        if (champion?.stats?.mp) {
            if (champion?.stats?.mp >= 480) {
                restriction.champion_list.push(champion.name);
            }
        }
    });
    if (restriction.champion_list.length) await hashList(restriction);
    return restriction;
}
export async function parseMoveSpeedRestrictions(champions: champion[]): Promise<restriction> {
    const restriction: restriction = {
        name: 'MoveSpeed>=480',
        display_name: ' Base Move Speed >= 480',
        champion_list: [],
        hash: ''
    }
    champions.map(champion => {
        if (champion?.stats?.move_speed) {
            if (champion?.stats?.move_speed >= 350) {
                restriction.champion_list.push(champion.name);
            }
        }
    });
    if (restriction.champion_list.length) await hashList(restriction);
    return restriction;
}
export async function parseArmorRestrictions(champions: champion[]): Promise<restriction> {
    const restriction: restriction = {
        name: 'Armor>=29',
        display_name: ' Armor <= 29',
        champion_list: [],
        hash: ''
    }
    champions.map(champion => {
        if (champion?.stats?.armor) {
            if (champion?.stats?.armor <= 29) {
                restriction.champion_list.push(champion.name);
            }
        }
    });
    if (restriction.champion_list.length) await hashList(restriction);
    return restriction;
}
export async function parseAttackSpeedRestrictions(champions: champion[]): Promise<restriction> {
    const restriction: restriction = {
        name: 'AttackSpeed>=0.700',
        display_name: ' Attack speed >= 0.700',
        champion_list: [],
        hash: ''
    }
    champions.map(champion => {
        if (champion?.stats?.attack_speed) {
            if (champion?.stats?.attack_speed >= 0.700) {
                restriction.champion_list.push(champion.name);
            }
        }
    });
    if (restriction.champion_list.length) await hashList(restriction);
    return restriction;
}