import { SkillCreateDto } from "../../dtos/SkillCreate.dto";

export class AttackSkillCreateDto extends SkillCreateDto {
  public damage: number;
  constructor({ damage, ...superProps }: AttackSkillCreateDto) {
    super(superProps);
    this.damage = damage;
  }
}
