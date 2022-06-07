import { ItemInterface } from "../items/interface/Item.interface";
import { SkillInterface } from "../skills/intefaces/Skills.interface";
import { EntityType } from "./types/entity.type";

export abstract class EntityAbstract {
  protected life: number;
  protected mana: number;
  protected name: string;
  protected skills: SkillInterface[];
  protected items: ItemInterface[];

  constructor({ life, mana, name }: EntityType) {
    this.life = life;
    this.mana = mana;
    this.name = name;
    this.skills = [];
    this.items = [];
  }

  public getLife(): number {
    return this.life;
  }

  public setLife(life: number): void {
    this.life = life;
  }

  public getMana(): number {
    return this.mana;
  }

  public setMana(mana: number): void {
    this.mana = mana;
  }

  public getName(): string {
    return this.name;
  }

  public getSkills(): SkillInterface[] {
    return this.skills;
  }

  public getItems(): ItemInterface[] {
    return this.items;
  }

  public addItem(item: ItemInterface): void {
    this.items.push(item);
  }

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

  public addSkill(skill: SkillInterface): void {
    this.skills.push(skill);
  }
}
