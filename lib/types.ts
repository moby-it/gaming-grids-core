import * as v from "valibot";

export const Champion = v.pipe(
  v.object({
    name: v.string(),
    tags: v.array(v.string()),
    id: v.string(),
    info: v.object({ difficulty: v.number() }),
    partype: v.string(),
    stats: v.object({
      hp: v.number(),
      attackrange: v.number(),
      mp: v.number(),
      movespeed: v.number(),
      armor: v.number(),
      attackspeed: v.number(),
    }),
  }),
  v.transform((c) => ({
    name: c.name,
    tags: c.tags,
    id: c.id,
    difficulty: c.info.difficulty,
    partype: c.partype,
    stats: {
      hp: c.stats.hp,
      attack_range: c.stats.attackrange,
      mp: c.stats.mp,
      move_speed: c.stats.movespeed,
      armor: c.stats.armor,
      attack_speed: c.stats.attackspeed,
    },
  })),
);
export type Champion = v.InferOutput<typeof Champion>;

export type Restriction = {
  name: string;
  champion_list: string[];
  hash: string;
  operation: (champion: Champion) => boolean;
};
export type DbRestriction = Omit<Restriction, "operation">;
