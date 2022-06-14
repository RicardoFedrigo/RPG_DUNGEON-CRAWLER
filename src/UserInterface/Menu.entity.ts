import { EventEmitter } from "stream";
import { GameStateInterface } from "../modules/Game/interfaces/GameState.interface";
import { GameStates } from "../modules/Game/types/GameStates.type";
import { RenderInterface } from "./interfaces/Render.interface";

type action = "game" | "quit" | null;

export class Menu implements GameStateInterface {
  public static readonly gameState: GameStates = "menu";
  public static readonly entityName = "Menu";
  private image = "";

  private action: action = null;

  constructor(private readonly render: RenderInterface, private readonly event:EventEmitter) {
    
  }

  getState(): GameStates {
    return Menu.gameState;
  }

  interaction(key: string): void {
    switch (key) {
      case "\x1B[A":
        this.image = `
        ╔══════════════════════════════════════════╗
        ║              DUNGEON CRAWLER             ║
        ║                                          ║
        ║                                          ║
        ║             ⇝ START                      ║
        ║               QUIT                       ║
        ║                                          ║
        ║                                          ║
        ╚══════════════════════════════════════════╝
        `;
        this.action = "game";
        break;
      case "\x1B[B":
        this.image = `
        ╔══════════════════════════════════════════╗
        ║              DUNGEON CRAWLER             ║
        ║                                          ║
        ║                                          ║
        ║               START                      ║
        ║             ⇝ QUIT                       ║
        ║                                          ║
        ║                                          ║
        ╚══════════════════════════════════════════╝
        `;
        this.action = "quit";
        break;
      case "\r":
        this.event.emit("changeGameState", this.action);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    this.render.draw(this.image);
    this.render.render();
  }

  execute(): void {
    this.image = `
        ╔══════════════════════════════════════════╗
        ║              DUNGEON CRAWLER             ║
        ║                                          ║
        ║                                          ║
        ║               START                      ║
        ║             ⇝ QUIT                       ║
        ║                                          ║
        ║                                          ║
        ╚══════════════════════════════════════════╝
    `;
    this.render.draw(this.image);
    this.render.render();
  }
}
