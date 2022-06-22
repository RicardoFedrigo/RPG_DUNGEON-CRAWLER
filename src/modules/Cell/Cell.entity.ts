import { ICell } from "./interfaces/ICell";
import { CellType } from "./types/CellType.type";

export class Cell implements ICell {
  private id: string;
  private cellType: CellType;
  private insideCell: any[];
  
  private lastCellType: CellType;

  constructor(cellType: CellType, id: string) {
    this.cellType = cellType;
    this.lastCellType = cellType;
    this.insideCell = [];
    this.id = id;
  }
  resetType(): void {
    this.cellType = this.lastCellType;
  }

  getId(): string {
    return this.id;
  }

  public getCellType(): CellType {
    return this.cellType;
  }
  public setCellType(cellType: CellType): void {
    this.cellType = cellType;
  }

  public getInsideCell(): any[] {
    return this.insideCell;
  }

  public addInsideCell(insideCell: any): void {
    this.insideCell.push(insideCell);
  }

  public removeInsideCell(insideCell: any): void {
    this.insideCell.splice(this.insideCell.indexOf(insideCell), 1);
  }
}
