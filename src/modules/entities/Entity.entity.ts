import { ItemInterface } from "./items/interface/Item.interface";
import { positionType } from "../Map/types/position.type";
import { SkillInterface } from "../skills/intefaces/Skills.interface";
import { EntityType } from "./types/entity.type";

export abstract class EntityAbstract {
  protected life: number;
  protected mana: number;
  protected maxLife: number;
  protected maxMana: number;
  protected name: string;
  protected skills: SkillInterface[];
  protected items: ItemInterface[];
  protected position: positionType;

  constructor({ life, mana, name, position }: EntityType) {
    this.life = life;
    this.mana = mana;
    this.name = name;
    this.maxLife = mana;
    this.maxMana = mana;
    this.position = position;
    this.skills = [];
    this.items = [];
  }

  public getMaxLife(): number {
    return this.maxLife;
  }

  public setMaxLife(life: number): void {
    this.maxLife = life;
  }

  public getMaxMana(): number {
    return this.maxMana;
  }

  public setMaxMana(mana: number): void {
    this.maxMana = mana;
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

  public addSkill(skill: SkillInterface): void {
    this.skills.push(skill);
  }

  public setPositionOnMaze(position: positionType): void {
    this.position = position;
  }

  public getPositionOnMaze(): positionType {
    return this.position;
  }

  public abstract attack(): number;
  public abstract defend(): number;
  public abstract reciveDamage(): number;
  public abstract useItem(item: ItemInterface): void;
}
