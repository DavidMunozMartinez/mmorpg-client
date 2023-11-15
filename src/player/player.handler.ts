import { WSEventData } from "../utils/websocket/websocket.model";
import { MainPlayerClass } from "./main-player.class";
import { PlayerClass } from "./player.class";
import { PLAYER_EVENTS } from "./player.model";
import { PlayerService } from "./player.service";

import './player.styles.scss';

/**
 * Initialized the main player adds it to the players list to start listening to 
 * WebSocket events
 * @param playerId Main player id
 */
export function initializeMainPlayer(playerId: string) {
  const MainPlayer = new MainPlayerClass(playerId);
  PlayerService.mainPlayerId = playerId;
  PlayerService.add(MainPlayer);
  MainPlayer.initMoveEvents();
}

/**
 * Handles all websocket events related to players, eventually this might become a Map
 * if the number of player events grows to much
 */
export function handlePlayerWSEvents(event: WSEventData) {
  let player: PlayerClass | undefined;
  switch (event.subEventType) {
    case PLAYER_EVENTS.MOVED:
      player = PlayerService.get(event.data.applyTo);
      player?.move(event.data.direction);
      break;
    case PLAYER_EVENTS.CONNECTED:
      player = new PlayerClass(event.data.applyTo);
      PlayerService.add(player);
      break;
    case PLAYER_EVENTS.DISCONNECTED:
      PlayerService.remove(event.data.applyTo);
  }
}

/**
 * Created a new DOM Node that will be appended to the map using the playerId
 * as an element id
 */
export function addPlayerToMap(playerId: string) {
  const playerRef = document.createElement('div');
  playerRef.classList.add('player');
  playerRef.id = playerId;
  const map = document.getElementById('map') as HTMLElement;
  map.append(playerRef);
}

/**
 * Removes player DOM Element from the map searching by playerId
 */
export function removePlayerFromMap(playerId: string) {
  const playerRef = document.getElementById(playerId);
  playerRef?.parentNode?.removeChild(playerRef);
}