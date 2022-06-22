import EventEmitter from "node:events";
import { RenderInterface } from "../../UserInterface/interfaces/Render.interface";
import { KeysEnums } from "../../utils/enums/Keys.enums";
import { ICell } from "../Cell/interfaces/ICell";
import { CellType } from "../Cell/types/CellType.type";
import { Items } from "../entities/items/Item.entity";
import { ItemType } from "../entities/items/types/ItemType.type";
import { itensAttributes } from "../entities/items/types/itensAttributes.type";
import { Player } from "../entities/player/Player.entity";
import { GameStateInterface } from "../Game/interfaces/GameState.interface";
import { GameStates } from "../Game/types/GameStates.type";
import { IMap } from "../Map/interfaces/IMap.interface";
import { Maze } from "../Map/Maze.entity";
import { positionType } from "../Map/types/position.type";

export class GameEngine implements GameStateInterface {
  private gameOver: boolean = false;
  private map: ICell[][];
  private mapGenerator: IMap;
  private gameState: GameStates = "game";
  private player: Player;

  constructor(
    private readonly render: RenderInterface,
    private readonly event: EventEmitter
  ) {
    this.player = new Player({
      life: 10,
      mana: 10,
      name: "Teste",
      attack: 10,
      defend: 10,
      position: {
        x: 1,
        y: 1,
      },
    });

    this.player.addItem(
      new Items({
        attr: { atk: 1, def: 0 },
        name: "Espada quebrada",
        type: "weapon",
        weight: 1,
        description: "",
        image: "",
        price: 0,
        use: 0,
      })
    );

    this.player.addItem(
      new Items({
        attr: { atk: 0, def: 1 },
        name: "Espada quebrada",
        type: "armor",
        weight: 2,
        description: "",
        image: "",
        price: 0,
        use: 0,
      })
    );

    this.mapGenerator = new Maze();
    this.mapGenerator.newMap();
    this.map = this.mapGenerator.getMap();

    const position = this.player.getPositionOnMaze();
    this.map[position.x][position.y].setCellType("player");
  }

  private converCellTypeToString(cellType: CellType): string {
    if ("wall" === cellType) {
      return "⬛";
    } else if ("ground" === cellType) {
      return "  ";
    } else if ("chest" === cellType) {
      return "🏣";
    } else if ("trap" === cellType) {
      return "tt";
    } else if ("player" === cellType) {
      return "😠";
    } else if ("end" === cellType) {
      return "🚪🚪";
    }
    return "  ";
  }

  private convertLineCellToString(cells: ICell[]): string[] {
    const convertedCells = cells.map((line) =>
      this.converCellTypeToString(line.getCellType())
    );
    convertedCells.push("\n");
    return convertedCells;
  }

  execute(): void {
    const mapArrString = this.map.map((cellLines) =>
      this.convertLineCellToString(cellLines).join("")
    );

    mapArrString.push(this.playerStatuString());
    this.render.draw(mapArrString.join(""));
    this.render.render();
  }
  private isWall({ x, y }: positionType): boolean {
    return this.map[x][y].getCellType() === "wall";
  }

  private isChest({ x, y }: positionType): boolean {
    return this.map[x][y].getCellType() === "chest";
  }

  private move({ x, y }: positionType): void {
    const playerPosition = this.player.getPositionOnMaze();
    const nextPosition: positionType = {
      x: playerPosition.x + x,
      y: playerPosition.y + y,
    };

    if (!this.isWall(nextPosition) && !this.isBorder(nextPosition)) {
      this.player.setPositionOnMaze(nextPosition);
      this.map[playerPosition.x][playerPosition.y].resetType();
      this.map[nextPosition.x][nextPosition.y].setCellType("player");
    }
  }

  private playerStatuString(): string {
    const mana = this.player.getMana();
    const life = this.player.getLife();

    const maxLife = new Array(this.player.getMaxLife()).fill(" ");
    const maxMana = new Array(this.player.getMaxMana()).fill(" ");
    const lifeBar = maxLife.fill("❤", 0, life);
    const manaBar = maxMana.fill("❄", 0, mana);
    const statusString = `LIFE: [${lifeBar}] ATK: ${this.calculateAtk()}\nMANA: [${manaBar}] DEF: ${this.calculateDefense()}\n`;
    return statusString;
  }

  private calculateItens(): itensAttributes {
    const itens = this.player.getItems();

    const attrTotal = { atk: 0, def: 0 };

    itens.forEach((item) => {
      attrTotal.atk += item.getAttributes().atk;
      attrTotal.def += item.getAttributes().def;
    });
    return attrTotal;
  }

  private calculateAtk(): number {
    const itens = this.calculateItens();
    return itens.atk;
  }

  private calculateDefense(): number {
    const itens = this.calculateItens();
    return itens.def;
  }

  private isBorder({ x, y }: positionType): boolean {
    return this.map.length < y || y < 0 || this.map[0].length < x || x < 0;
  }

  private interact(): any {
    const { x, y } = this.player.getPositionOnMaze();
    this.map[x][y].getInsideCell();
  }
  interaction(key: string): void {
    switch (key) {
      case KeysEnums.ArrowUp:
        this.move({ x: -1, y: 0 });
        break;
      case KeysEnums.ArrowLeft:
        this.move({ x: 0, y: -1 });
        break;
      case KeysEnums.ArrowRight:
        this.move({ x: 0, y: 1 });
        break;
      case KeysEnums.ArrowDown:
        this.move({ x: 1, y: 0 });
        break;
      case KeysEnums.interact:
        this.map;
        break;
      default:
        break;
    }
  }
  getState(): GameStates {
    return this.gameState;
  }
}
