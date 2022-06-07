import { NatureSkill } from "../types/NatureSkill.type";
import { SkillRange } from "../types/SkillRage.type";

export interface SkillInterface {
  getName(): string;
  getRange(): SkillRange;
  getNature(): NatureSkill;
  getLuck(): number;
  useSkill(): any;
}
