import { EntityAbstract } from "../Entity.abstration";

export class Player extends EntityAbstract {
    getLife(): number {
        return this.life;
    }
    getMana(): number {
        throw new Error("Method not implemented.");
    }
    setLife(life: number): void {
        throw new Error("Method not implemented.");
    }
    setMana(mana: number): void {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
    attack(): number {
        throw new Error("Method not implemented.");
    }
    defend(): number {
        throw new Error("Method not implemented.");
    }
    getDamage(): number {
        throw new Error("Method not implemented.");
    }
    getSkill(): number {
        throw new Error("Method not implemented.");
    }
    getLuck(): number {
        throw new Error("Method not implemented.");
    }
}