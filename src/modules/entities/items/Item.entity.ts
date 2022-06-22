import { ItemCreateDto } from "./dtos/ItemCreate.dto";
import { ItemInterface } from "./interface/Item.interface";
import { actionType } from "./types/action.type";
import { ItemType } from "./types/ItemType.type";
import { itensAttributes } from "./types/itensAttributes.type";

export class Items implements ItemInterface {
  protected readonly name: string;
  protected readonly description: string;
  protected readonly price: number;
  protected readonly image: string;
  protected readonly weight: number;
  protected readonly type: ItemType;
  protected readonly attr: itensAttributes 

  constructor({
    description,
    image,
    name,
    price,
    weight,
    type,
    attr
  }: ItemCreateDto) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.weight = weight;
    this.type = type;
    this.attr = attr
  }
  getAttributes(): itensAttributes {
    return this.attr 
  }

  use(): actionType {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    return this.name;
  }
  getDescription(): string {
    return this.description;
  }
  getPrice(): number {
    return this.price;
  }
  getWeight(): number {
    return this.weight;
  }
  getType(): ItemType {
    return this.type;
  }
}
