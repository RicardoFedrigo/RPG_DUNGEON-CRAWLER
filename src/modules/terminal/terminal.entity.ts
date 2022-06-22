import { stdin } from "process"


export class terminal{
    static out:any;

    public static CursorHide(): void {
        console.log("\x1b[?25l")
    }

    public static CursorShow(): void {
        console.log("\x1b[?25h")
    }

    public static SetCursor(row:number, colum:number): void {
        console.log("\x1b["+ row + ";" + colum + "H")
                
    }

    public static SetColor(color:number,): void {
        console.log("\x1b["+ color + "m")
    }

    public static ResetColor(): void {
        this.SetColor(0)
    }

    public static ClearScreen(): void {
        console.log("\x1b[2J")
    }
}