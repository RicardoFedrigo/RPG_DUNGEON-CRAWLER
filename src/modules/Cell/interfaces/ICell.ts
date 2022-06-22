import { CellType } from "../types/CellType.type";

export interface ICell {
  getId(): string;
  getCellType(): CellType;
  setCellType(cellType: CellType): void;
  getInsideCell(): any[];
  addInsideCell(insideCell: any): void;
  removeInsideCell(insideCell: any): void;
  resetType(): void;
}
