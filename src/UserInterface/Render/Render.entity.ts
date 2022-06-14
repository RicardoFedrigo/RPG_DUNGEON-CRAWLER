import { RenderInterface } from "../interfaces/Render.interface";

export class Render implements RenderInterface {
  private image: string;

  constructor() {
    this.image = "";
  }

  render(): void {
    console.clear();
    this.image.split("\n").forEach((image) => {
      console.log(image);
    });
  }
  draw(imageToDraw: string): void {
    this.image = imageToDraw;
  }
}
