import { ICell } from "../../Cell/interfaces/ICell";

export interface IMap {
  getMap(): ICell[][];
  newMap(): void;
  getCell(x: number, y: number): ICell;
}
