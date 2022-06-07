import { actionType } from "../types/action.type";
import { ItemType } from "../types/ItemType.type";

export class ItemCreateDto {
  public name: string;
  public description: string;
  public price: number;
  public image: string;
  public weight: number;
  public type: ItemType;
  public use: actionType;

  constructor(params?: ItemCreateDto) {
    this.name = params?.name || "";
    this.description = params?.description || "";
    this.price = params?.price || 0;
    this.image = params?.image || "";
    this.weight = params?.weight || 0;
    this.type = params?.type || null;
    this.use = params?.use || "This item doing nothing  ";
  }
}
