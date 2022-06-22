import { GameStates } from "../types/GameStates.type";

export interface GameStateInterface {
  execute(): void;
  interaction(key: string): void;
  getState(): GameStates;
}
