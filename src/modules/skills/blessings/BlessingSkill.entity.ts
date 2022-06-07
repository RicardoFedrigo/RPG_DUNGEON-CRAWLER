import { Skill } from "../Skill.entity";

import { BlessingSkillCreate } from "./dtos/BlessingSkillCreate.dto";
import { SkillInterface } from "../intefaces/Skills.interface";

export class AttackSkill extends Skill {
  private readonly damage: number;

  constructor({ luck, name, nature, type, damage }: BlessingSkillCreate) {
    super({ luck, name, nature, type });
    this.damage = damage;
  }
  
  useSkill() {
    return this.damage;
  }
}
