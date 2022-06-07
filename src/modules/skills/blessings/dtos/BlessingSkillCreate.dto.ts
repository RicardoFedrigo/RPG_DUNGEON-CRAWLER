import { SkillCreateDto } from "../../dtos/SkillCreate.dto";

export class BlessingSkillCreate extends SkillCreateDto {
  public damage: number;
  constructor({ damage, ...superProps }: BlessingSkillCreate) {
    super(superProps);
    this.damage = damage;
  }
}
