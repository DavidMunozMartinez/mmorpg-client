export enum PLAYER_EVENTS {
  CONNECTED,
  DISCONNECTED,
  MOVED,
  UNALIVED,
}

export enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

/**
 * Represents the player data necessary to render the player
 */
export type RenderPlayerData = {
  id: string;
  position: [number, number];
  name: string;
  health: number;
}