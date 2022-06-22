import { actionType } from "../types/action.type";
import { ItemType } from "../types/ItemType.type";
import { itensAttributes } from "../types/itensAttributes.type";

export interface ItemInterface {
  getName(): string;
  getDescription(): string;
  getPrice(): number;
  getWeight(): number;
  getType(): ItemType;
  getAttributes(): itensAttributes;
  use(): actionType;
}
