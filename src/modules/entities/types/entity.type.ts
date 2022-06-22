import { positionType } from "../../Map/types/position.type";

export type EntityType = {
    life: number;
    mana: number;
    name: string;
    attack: number;
    defend:number;
    position: positionType
}