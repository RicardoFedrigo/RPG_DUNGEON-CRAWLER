import { Skill } from "../Skill.entity";

import { AttackSkillCreateDto } from "./dtos/AttackSkillCreate.dto";

export class AttackSkill extends Skill {
  private readonly damage: number;

  constructor({ luck, name, nature, type, damage }: AttackSkillCreateDto) {
    super({ luck, name, nature, type });
    this.damage = damage;
  }

  public attack(): number {
    return this.damage;
  }
}
