import { DrawTypes } from "../types/DrawTypes.types";

export interface RenderInterface {
  render(): void;
  draw(imageToDraw: DrawTypes): void;
}
