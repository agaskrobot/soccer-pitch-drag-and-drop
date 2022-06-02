type ForwardPositions = "ST" | "CF" | "RW" | "LW";
type MidFieldPositions = "LM" | "RM" | "CM" | "AM" | "DM";
type DefensivePositions = "CB" | "LB" | "RB" | "WB";
type GoalKeeperPositions = "GK";

export type PlayerPositions =
  | ForwardPositions
  | MidFieldPositions
  | DefensivePositions
  | GoalKeeperPositions;

export interface PlayerPositionStat {
  position: PlayerPositions;
  rating: number;
}

export interface Player {
  name: { firstName: string; surname: string };
  playerPosition: PlayerPositionStat;
  jerseyNumber: number;
  id: string;
  isGk?: boolean;
  isSub?: boolean;
}

export interface Team {
  firstEleven: Player[];
  subs: Player[];
}
