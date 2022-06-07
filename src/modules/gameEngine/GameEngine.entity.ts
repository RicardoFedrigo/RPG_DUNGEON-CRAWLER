import { Menu } from "../../UserInterface/Menu.entity";
import { Render } from "../../UserInterface/Render/Render.entity";

class GameEngine {
  private gameOver: boolean = false;
  private menu: Menu = new Menu(new Render());

  constructor() {}

  gameMenu() {
    this.menu.renderMenu();
  }

  start() {
    console.log("GameEngine started");
  }

  gameLoop() {
    console.log("Game loop");
  }
}
