import { CellType } from "./types/CellType.type";

export function StringToCellType(value: string): CellType {
  if ("# " === value) {
    return "wall";
  } else if ("  " === value) {
    return "ground";
  } else if ("cc" === value) {
    return "chest";
  } else if ("tt" === value) {
    return "trap";
  } else if ("bb" === value) {
    return "begin";
  } else if ("ee" === value) {
    return "end";
  } else if ("pp" === value) {
    return "player";
  }
  return null;
}
