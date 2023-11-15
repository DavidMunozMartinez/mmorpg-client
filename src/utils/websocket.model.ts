export type WSEventData = {
  eventType: number;
  subEventType: number;
  data: any;
}

export enum WSEvents {
  PLAYER
}

