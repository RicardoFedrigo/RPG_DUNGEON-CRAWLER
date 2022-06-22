import { readFileSync } from "node:fs";
import { Cell } from "../Cell/Cell.entity";
import { ICell } from "../Cell/interfaces/ICell";
import { IMap } from "./interfaces/IMap.interface";
import { mapSize } from "./types/mapSize.type";
import { StringToCellType } from "../Cell/StringToCellType";

export class Maze implements IMap {
  private map: ICell[][] = [];

  getMap(): ICell[][] {
    return this.map;
  }
  newMap(): void {
    this.createMaze();
  }
  getMapSize(): mapSize {
    return {
      length: this.map.length,
      height: this.map[0].length,
    };
  }
  getCell(length: number, height: number): ICell {
    return this.map[length][height];
  }

  private generateMap(stringMap: string, index:number): ICell[] {
    const cellMap: ICell[] = [];
    for (let i = 0; i < stringMap.length; i += 2) {
      const subString = stringMap.substring(i, i + 2) as string;
      const cellType = StringToCellType(subString)
      cellMap.push(new Cell(cellType,`${cellType}-${index}${i}`));
    }
    return cellMap
  }

  private createMaze(): void {
    const stringMap = readFileSync(
      `${__dirname}/../Map/maze.txt`,
      "utf8"
    ).split("\n");
    this.map = stringMap.map((line,index) => this.generateMap(line,index));
  }
}
