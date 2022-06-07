import { actionType } from "../types/action.type";
import { ItemType } from "../types/ItemType.type";

export interface ItemInterface {
    getName(): string;
    getDescription(): string;
    getPrice(): number;
    getWeight(): number;
    getType(): ItemType; 
    use(): actionType;
}