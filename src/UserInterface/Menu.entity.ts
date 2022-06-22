import { EventEmitter } from "stream";
import { GameStateInterface } from "../modules/Game/interfaces/GameState.interface";
import { GameStates } from "../modules/Game/types/GameStates.type";
import { KeysEnums } from "../utils/enums/Keys.enums";
import { RenderInterface } from "./interfaces/Render.interface";
import { Iterminal } from "../modules/terminal/interfaces/Iterminal"
import { terminal } from "../modules/terminal/terminal.entity";

type action = "game" | "quit" | null;

export class Menu implements GameStateInterface {
  public static readonly entityName = "Menu";
  public gameState: GameStates = "menu";
  private image: string;

  private action: action = null;

  constructor(
    private readonly render: RenderInterface,
    private readonly event: EventEmitter
  ) {
    this.image = `
╔════════════════════════════════════════════════════╗
║                  DUNGEON CRAWLER                   ║
║                                                    ║
║                                                    ║
║                                                    ║
║                                                    ║
║                                                    ║
║                    ⇝ START                         ║
║                                                    ║
║                      QUIT                          ║
║                                                    ║
║                                                    ║
║                                                    ║  
║                                                    ║
║                                                    ║
║                                                    ║ 
║                                                    ║ 
╚════════════════════════════════════════════════════╝
    `;
  }

  getState(): GameStates {
    return "menu";
  }

  interaction(key: string): void {
    switch (key) {
      case KeysEnums.ArrowUp:
        this.image = `
╔════════════════════════════════════════════════════╗
║                  DUNGEON CRAWLER                   ║
║                                                    ║
║                                                    ║
║                                                    ║
║                                                    ║
║                                                    ║
║                    ⇝ START                         ║
║                                                    ║
║                      QUIT                          ║
║                                                    ║
║                                                    ║
║                                                    ║  
║                                                    ║
║                                                    ║
║                                                    ║ 
║                                                    ║ 
╚════════════════════════════════════════════════════╝
        `;
        this.action = "game";
        break;
      case KeysEnums.ArrowDown:
        this.image = `
╔════════════════════════════════════════════════════╗
║                  DUNGEON CRAWLER                   ║
║                                                    ║
║                                                    ║
║                                                    ║
║                                                    ║
║                                                    ║
║                      START                         ║
║                                                    ║
║                    ⇝ QUIT                          ║
║                                                    ║
║                                                    ║
║                                                    ║  
║                                                    ║
║                                                    ║
║                                                    ║ 
║                                                    ║ 
╚════════════════════════════════════════════════════╝
        `;
        this.action = "quit";
        break;
      case KeysEnums.Enter:
        this.event.emit("changeGameState", this.action, 1, 1);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    this.render.draw(this.image);
    this.render.render();
  }

  execute(): void {
    terminal.SetCursor(0,0)
    this.render.draw(this.image);
    this.render.render();
  }
}
