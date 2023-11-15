import { WSEvents } from "../utils/websocket/websocket.model";
import { WebSocketService } from "../utils/websocket/websocket.service";
import { PlayerClass } from "./player.class";
import { PLAYER_EVENTS, DIRECTIONS } from "./player.model";

/**
 * Main Player reffers to the current player in the client
 */
export class MainPlayerClass extends PlayerClass {

  #map: HTMLElement | null = document.getElementById('map');

  constructor(id: string) {
      super(id);
      if (this.playerRef) {
          this.playerRef.classList.add('main-player');
          this.playerRef.innerText = 'You';
      }
      this.notifyPlayerEvent(PLAYER_EVENTS.CONNECTED, { applyTo: id });
  }

  /**
   * Initialized map keyboard listener to notify the server of player movement
   */
  initMoveEvents() {
      this.#map?.addEventListener('keydown', (event: KeyboardEvent) => {
          const data = { direction: -1, applyTo: this.id };
          switch (event.key) {
              case 'ArrowUp':
                  data.direction = DIRECTIONS.UP;
                  break;
              case 'ArrowDown':
                  data.direction = DIRECTIONS.DOWN
                  break;
              case 'ArrowLeft':
                  data.direction = DIRECTIONS.LEFT;
                  break;
              case 'ArrowRight':
                  data.direction = DIRECTIONS.RIGHT;
                  break;
          }
          if (data.direction > -1) {
              this.notifyPlayerEvent(PLAYER_EVENTS.MOVED, data);
          }
      });
  }

  /**
   * Sends a WS event that should echo with the server
   */
  notifyPlayerEvent(subEventType: PLAYER_EVENTS, data: any) {
      WebSocketService.send({
          eventType: WSEvents.PLAYER,
          subEventType,
          data,
      });
  }
}
