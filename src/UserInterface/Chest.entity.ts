import { EventEmitter } from "stream";
import { GameStateInterface } from "../modules/Game/interfaces/GameState.interface";
import { GameStates } from "../modules/Game/types/GameStates.type";
import { KeysEnums } from "../utils/enums/Keys.enums";
import { RenderInterface } from "./interfaces/Render.interface";
import { Iterminal } from "../modules/terminal/interfaces/Iterminal"
import { terminal } from "../modules/terminal/terminal.entity";

type action = "chest" | "quit" | null;


export class Chest implements GameStateInterface {
  public static readonly entityName = "chest";
  public gameState: GameStates = "chest";
  private image: string;
  private itens:string[] = ['+5 force', '+5 life']

  private action: action = null;

  constructor(
    private readonly render: RenderInterface,
    private readonly event: EventEmitter
  ) {
    this.image = `
        ╔════════════════════════════════════════════════════╗
        ║             ____...------------...____             ║
        ║       _.-" /o/__ ____ __ __  ____ |o|_"-._         ║
        ║     .'     / /  *CONGRATULATIONS*       | |        ║
        ║     |=====/o/======================|o|=====|       ║
        ║     |____/_/________..____..________|_|____|       ║
        ║     /   _/ |_     <_o#\__/#o_>     _/  _   |        ║
        ║     |_________|####/_________/                     ║
        ║       |   |=|          .---.         |=|   |       ║
        ║       |===|o|=========/     \========|o|===|        ║
        ║       |   | |         \() ()/        | |   |        ║
        ║       |===|o|======{'-.) A (.-'}=====|o|===|       ║
        ║       | __/ |__     '-.uuuu/.-'    __/ |__ |       ║  
        ║       |  _|o/   __  {.' __  '.} _   _|o/  _|       ║
        ║       "'""""-""""""""""""""""""""""""""-""""       ║
        ║                    choose an up                    ║
        ║          ╔═══════╗                                 ║
        ║           ${this.itens[1]}              ${this.itens[0]}            ║ 
        ║          ╚═══════╝                                 ║
        ╚════════════════════════════════════════════════════╝ 
    `;
  }

  getState(): GameStates {
    return "chest";
  }

  interaction(key: string): void {
    let teste =' teste';
    switch (key) {
      case KeysEnums.ArrowLeft:
        this.image = `
        ╔════════════════════════════════════════════════════╗
        ║             ____...------------...____             ║
        ║       _.-" /o/__ ____ __ __  ____ |o|_"-._         ║
        ║     .'     / /  *CONGRATULATIONS*       | |        ║
        ║     |=====/o/======================|o|=====|       ║
        ║     |____/_/________..____..________|_|____|       ║
        ║     /   _/ |_     <_o#\__/#o_>     _/  _   |        ║
        ║     |_________|####/_________/                     ║
        ║       |   |=|          .---.         |=|   |       ║
        ║       |===|o|=========/     \========|o|===|        ║
        ║       |   | |         \() ()/        | |   |        ║
        ║       |===|o|======{'-.) A (.-'}=====|o|===|       ║
        ║       | __/ |__     '-.uuuu/.-'    __/ |__ |       ║  
        ║       |  _|o/   __  {.' __  '.} _   _|o/  _|       ║
        ║       "'""""-""""""""""""""""""""""""""-""""       ║
        ║                    choose an up                    ║
        ║          ╔═══════╗                                 ║
        ║           ${this.itens[1]}              ${this.itens[0]}            ║ 
        ║          ╚═══════╝                                 ║
        ╚════════════════════════════════════════════════════╝ 
   `;
        this.action = "chest";
        break;
      case KeysEnums.ArrowRight:
        this.image = `
        ╔════════════════════════════════════════════════════╗
        ║             ____...------------...____             ║
        ║       _.-" /o/__ ____ __ __  ____ |o|_"-._         ║
        ║     .'     / /  *CONGRATULATIONS*       | |        ║
        ║     |=====/o/======================|o|=====|       ║
        ║     |____/_/________..____..________|_|____|       ║
        ║     /   _/ |_     <_o#\__/#o_>     _/  _   |        ║
        ║     |_________|####/_________/                     ║
        ║       |   |=|          .---.         |=|   |       ║
        ║       |===|o|=========/     \========|o|===|        ║
        ║       |   | |         \() ()/        | |   |        ║
        ║       |===|o|======{'-.) A (.-'}=====|o|===|       ║
        ║       | __/ |__     '-.uuuu/.-'    __/ |__ |       ║  
        ║       |  _|o/   __  {.' __  '.} _   _|o/  _|       ║
        ║       "'""""-""""""""""""""""""""""""""-""""       ║
        ║                    choose an up                    ║
        ║                                ╔═══════╗           ║
        ║           ${this.itens[1]}              ${this.itens[0]}            ║ 
        ║                                ╚═══════╝           ║
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
