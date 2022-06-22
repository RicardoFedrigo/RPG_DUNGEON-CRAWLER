import { Render } from "../../UserInterface/Render/Render.entity";
import { GameStateInterface } from "./interfaces/GameState.interface";
import { GameStates } from "./types/GameStates.type";
import { Menu } from "../../UserInterface/Menu.entity";
import { EventEmitter } from "stream";
import { ICell } from "../Cell/interfaces/ICell";
import { GameEngine } from "../gameEngine/GameEngine.entity";
import { terminal } from "../terminal/terminal.entity";
import { Chest } from "../../UserInterface/Chest.entity";
import { Enemy } from "../../UserInterface/Enemy.entity";




export class Game {
  private gameState: GameStates = "menu";
  private gameInstance: GameStateInterface;
  private eventEmmiterGameState: EventEmitter;
  private render: Render;

  constructor(render: Render) {
    this.render = render;
    this.eventEmmiterGameState = new EventEmitter();
    this.eventEmmiterGameState.on(
      "changeGameState",
      (gameState: GameStates) => {
        this.actionState(gameState);
      }
    );

    this.gameInstance = new Menu(this.render, this.eventEmmiterGameState);
    this.gameInstance.execute();
  }

  private actionState(gameState: GameStates) {
    switch (gameState) {
      case "quit":
        this.quitGame();
        break;
      case "gameOver":
        this.gameOver();
        break;
      case "game":
        this.startGame();
        break;
      case "menu":
        this.getMenu();
        break;
      case "chest":
        this.getChest();
        break;
        case "enemy":
        this.getEnemy();
        break;
      default:
        throw new Error("Unknown game state");
    }
  }

  private startGame(): void {
    this.gameState = "game";
    this.gameInstance = new GameEngine(this.render, this.eventEmmiterGameState);
  }

  private quitGame(): void {
    process.exit();
  }

  private getMenu(): void {
    this.gameState = "menu";
    this.gameInstance = new Menu(this.render, this.eventEmmiterGameState);
  }

  private getChest(): void {
    this.gameState = "chest";
    this.gameInstance = new Chest(this.render, this.eventEmmiterGameState);
  }
  private getEnemy(): void {
    this.gameState = "enemy";
    this.gameInstance = new Enemy(this.render, this.eventEmmiterGameState);
  }


  private gameOver(): void {
    this.gameState = "gameOver";
    process.exit();
  }

  public interaction(key: string): void {
    this.gameInstance.interaction(key);
  }

  public run(): void {
    this.gameInstance.execute();
  }

  public changeGameState(): void {}
}
