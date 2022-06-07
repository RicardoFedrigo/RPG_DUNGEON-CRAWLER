import { NatureSkill } from "../types/NatureSkill.type";
import { SkillRange } from "../types/SkillRage.type";

export class SkillCreateDto {
  public name: string;
  public type: SkillRange;
  public nature: NatureSkill;
  public luck: number;

  constructor(params?: SkillCreateDto) {
    this.luck = params?.luck || 0;
    this.name = params?.name || "";
    this.type = params?.type || "melee";
    this.nature = params?.nature || "Neutral";
  }
}
