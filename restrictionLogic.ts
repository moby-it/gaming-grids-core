import { champion } from "./types.d.ts";
import { getChampionResources, getChampiontags } from "./utils.ts";

export function parseTagRestrictions(champions: champion[]) {
    const tagsArray = getChampiontags(champions);
    const restrictions = tagsArray.map(tag => {
        const championList: string[] = [];
        return { tag, championList };
    })
    if (champions) {
        for (const restriction of restrictions) {
            champions.map(champion => {
                if (champion?.tags.includes(restriction.tag.name)) {
                    restriction.championList.push(champion.name);
                }
            })
        }
    }
    return restrictions.map(restriction => {
        return {
            name: restriction.tag.name,
            displayName: restriction.tag.displayName,
            championList: restriction.championList
        }
    })
}
export function parseDifficultyRestrictions(champions: champion[]) {
    const difficultiesArray = [
        { difficulty: 'low', displayName: 'Low difficulty', numbers: [0, 1, 2, 3] },
        { difficulty: 'medium', displayName: 'Medium difficulty', numbers: [4, 5, 6, 7] },
        { difficulty: 'high', displayName: 'High difficulty', numbers: [8, 9, 10] }
    ];
    const restrictions = difficultiesArray.map(difficulty => {
        const championList: string[] = [];
        return { ...difficulty, championList }
    });
    if (champions) {
        for (const restriction of restrictions) {
            champions.map(champion => {
                if (champion?.info?.difficulty && restriction.numbers.includes(champion?.info?.difficulty)) {
                    restriction.championList.push(champion.name);
                }
            })
        }
    }
    return restrictions.map(restriction => {
        return {
            name: restriction.difficulty,
            displayName: restriction.displayName,
            championList: restriction.championList
        }
    })
}
export function parsePowerSourceRestrictions(champions: champion[]) {
    const resoursesArray = getChampionResources(champions);
    const restrictions = resoursesArray.map(resource => {
        const championList: string[] = [];
        return { ...resource, championList };
    })
    if (champions) {
        for (const restriction of restrictions) {
            champions.map(champion => {
                if (champion?.partype === restriction.name) {
                    restriction.championList.push(champion.name);
                }
            })
        }
    }
    return restrictions;
}

export function parseHpRestrictions(champions: champion[]) {
    const restrictions: {
        name: string,
        displayName: string,
        championList: string[]
    } = {
        name: 'hp<550',
        displayName: 'Base Hp < 550',
        championList: []
    }
    champions.map(champion => {
        if (champion?.stats?.hp) {
            if (champion?.stats?.hp < 550) {
                restrictions.championList.push(champion.name);
            }
        }
    })
    return restrictions;
}

export function parseRangeRestrictions(champions: champion[]) {
    const restrictions: {
        name: string,
        displayName: string,
        championList: string[]
    } = {
        name: 'AttackRange>575',
        displayName: 'AttackRange > 575',
        championList: []
    }
    champions.map(champion => {
        if (champion?.stats?.attack_range) {
            if (champion?.stats?.attack_range > 575) {
                restrictions.championList.push(champion.name);
            }
        }
    })
    return restrictions;
}
export function parseMpRestrictions(champions: champion[]) {
    const restrictions: {
        name: string,
        displayName: string,
        championList: string[]
    } = {
        name: 'Mp>=480',
        displayName: ' Base Mp >= 480',
        championList: []
    }
    champions.map(champion => {
        if (champion?.stats?.mp) {
            if (champion?.stats?.mp >= 480) {
                restrictions.championList.push(champion.name);
            }
        }
    })
    return restrictions;
}
export function parseMoveSpeedRestrictions(champions: champion[]) {
    const restrictions: {
        name: string,
        displayName: string,
        championList: string[]
    } = {
        name: 'MoveSpeed>=480',
        displayName: ' Base Move Speed >= 480',
        championList: []
    }
    champions.map(champion => {
        if (champion?.stats?.move_speed) {
            if (champion?.stats?.move_speed >= 350) {
                restrictions.championList.push(champion.name);
            }
        }
    })
    return restrictions;
}
export function parseArmorRestrictions(champions: champion[]) {
    const restrictions: {
        name: string,
        displayName: string,
        championList: string[]
    } = {
        name: 'Armor>=29',
        displayName: ' Armor <= 29',
        championList: []
    }
    champions.map(champion => {
        if (champion?.stats?.armor) {
            if (champion?.stats?.armor <= 29) {
                restrictions.championList.push(champion.name);
            }
        }
    })
    return restrictions;
}
export function parseAttackSpeedRestrictions(champions: champion[]) {
    const restrictions: {
        name: string,
        displayName: string,
        championList: string[]
    } = {
        name: 'AttackSpeed>=0.700',
        displayName: ' Attack speed >= 0.700',
        championList: []
    }
    champions.map(champion => {
        if (champion?.stats?.attack_speed) {
            if (champion?.stats?.attack_speed >= 0.700) {
                restrictions.championList.push(champion.name);
            }
        }
    })
    return restrictions;
}