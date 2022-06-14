import { Menu } from "../../UserInterface/Menu.entity";
import { Render } from "../../UserInterface/Render/Render.entity";
import { GameStateInterface } from "../Game/interfaces/GameState.interface";
import { GameStates } from "../Game/types/GameStates.type";
export class GameEngine implements GameStateInterface{
  private gameOver: boolean = false;

  constructor() {}
  execute(): void {
    throw new Error("Method not implemented.");
  }
  interaction(key: string): void {
    throw new Error("Method not implemented.");
  }
  getState(): GameStates {
    throw new Error("Method not implemented.");
  }

  gameMenu() {

  }

}
