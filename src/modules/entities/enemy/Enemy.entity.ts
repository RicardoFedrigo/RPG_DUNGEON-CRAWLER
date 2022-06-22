import { ItemInterface } from "../items/interface/Item.interface";
import { EntityAbstract } from "../Entity.entity";

export class Enemy extends EntityAbstract {
    public attack(): number {
        throw new Error("Method not implemented.");
    }
    public defend(): number {
        throw new Error("Method not implemented.");
    }
    public reciveDamage(): number {
        throw new Error("Method not implemented.");
    }
    public useItem(item: ItemInterface): void {
        throw new Error("Method not implemented.");
    }

}