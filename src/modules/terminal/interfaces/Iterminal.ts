export interface Iterminal {
    CursorHide(): void;
    CursorShow(): void
    SetCursor(row:number, colum:number, ): void;
    SetColor(color:number, ): void ;
    ResetColor(): void ;
    ClearScreen(): void ;
  }