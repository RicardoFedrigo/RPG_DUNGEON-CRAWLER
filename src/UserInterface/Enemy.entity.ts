import { EventEmitter } from "stream";
import { GameStateInterface } from "../modules/Game/interfaces/GameState.interface";
import { GameStates } from "../modules/Game/types/GameStates.type";
import { KeysEnums } from "../utils/enums/Keys.enums";
import { RenderInterface } from "./interfaces/Render.interface";
import { Iterminal } from "../modules/terminal/interfaces/Iterminal"
import { terminal } from "../modules/terminal/terminal.entity";

type action = "chest" | "quit" | null;

export class Enemy implements GameStateInterface {
  public static readonly entityName = "chest";
  public gameState: GameStates = "chest";
  private image: string;

  private action: action = null;

  constructor(
    private readonly render: RenderInterface,
    private readonly event: EventEmitter
  ) {
    this.image = `
        ╔════════════════════════════════════════════════════╗
        ║                       ____                         ║
        ║                      /....)                        ║
        ║                      <^   ^ >                      ║
        ║                      |^    ^||_-_                  ║
        ║                      i^     ^ |^/|                 ║
        ║                      +' (@)  _|  7                 ║
        ║                     / ..   _ -'  |                 ║
        ║                     / ..  _~  _'  |                ║
        ║                   i    _~_.-     |                 ║
        ║                   I--~~_~  .|    |                 ║  
        ║                    ~~'| ''' |  _ |                 ║
        ║                      /|-___-| | ||                 ║
        ║                      Nome monstro                  ║
        ║                       ❤ ❤ ❤ ❤ ❤                    ║
        ║                                                    ║
        ║          ╔═══════╗                                 ║
        ║            Lutar                  Fugir            ║ 
        ║          ╚═══════╝                                 ║
        ╚════════════════════════════════════════════════════╝ 
    `;
  }

  getState(): GameStates {
    return "chest";
  }

  interaction(key: string): void {
    let nome =' teste';
    switch (key) {
      case KeysEnums.ArrowLeft:
        this.image = `
        ╔════════════════════════════════════════════════════╗
        ║                       ____                         ║
        ║                      /....)                        ║
        ║                      <^   ^ >                      ║
        ║                      |^    ^||_-_                  ║
        ║                      i^     ^ |^/|                 ║
        ║                      +' (@)  _|  7                 ║
        ║                     / ..   _ -'  |                 ║
        ║                    / ..  _~  _'  |                 ║
        ║                   i    _~_.-     |                 ║
        ║                   I--~~_~  .|    |                 ║  
        ║                    ~~'| ''' |  _ |                 ║
        ║                      /|-___-| | ||                 ║
        ║                      Nome monstro                  ║
        ║                       ❤ ❤ ❤ ❤ ❤                    ║
        ║                                                    ║
        ║          ╔═══════╗                                 ║
        ║            Lutar                  Fugir            ║ 
        ║          ╚═══════╝                                 ║
        ╚════════════════════════════════════════════════════╝ 
   `;
        this.action = "chest";
        break;
      case KeysEnums.ArrowRight:
        this.image = `
        ╔════════════════════════════════════════════════════╗
        ║                       ____                         ║
        ║                      /....)                        ║
        ║                      <^   ^ >                      ║
        ║                      |^    ^||_-_                  ║
        ║                      i^     ^ |^/|                 ║
        ║                      +' (@)  _|  7                 ║
        ║                     / ..   _ -'  |                 ║
        ║                    / ..  _~  _'  |                 ║
        ║                   i    _~_.-     |                 ║
        ║                   I--~~_~  .|    |                 ║  
        ║                    ~~'| ''' |  _ |                 ║
        ║                      /|-___-| | ||                 ║
        ║                      Nome monstro                  ║
        ║                       ❤ ❤ ❤ ❤ ❤                    ║
        ║                                                    ║
        ║                                 ╔═══════╗          ║
        ║            Lutar                  Fugir            ║ 
        ║                                 ╚═══════╝          ║
        ╚════════════════════════════════════════════════════╝ 
   `;
        this.action = "chest";
        break;
      case KeysEnums.Enter:
        this.event.emit("changeGameState", 'game');
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    this.render.draw(this.image);
    this.render.render();
  }

  execute(): void {
    this.render.draw(this.image);
    this.render.render();
  }
}
