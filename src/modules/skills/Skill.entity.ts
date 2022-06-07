import { NatureSkill } from "./types/NatureSkill.type";
import { SkillCreateDto } from "./dtos/SkillCreate.dto";
import { SkillRange } from "./types/SkillRage.type";
import { SkillInterface } from "./intefaces/Skills.interface";

export class Skill implements SkillInterface {
  protected readonly name: string;
  protected readonly range: SkillRange;
  protected readonly nature: NatureSkill;
  protected readonly luck: number;

  constructor({ luck, name, nature, type }: SkillCreateDto) {
    this.name = name;
    this.range = type;
    this.nature = nature;
    this.luck = luck;
  }
  useSkill() {
    throw new Error("Method not implemented.");
  }

  public getName(): string {
    return this.name;
  }

  public getRange(): SkillRange {
    return this.range;
  }

  public getNature(): NatureSkill {
    return this.nature;
  }

  public getLuck(): number {
    return this.luck;
  }
}
