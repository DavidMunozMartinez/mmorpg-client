import { IsLocal, Server } from "../server.service";
import { handleWSEvent } from "./websocket.handler";
import { WSEventData } from "./websocket.model";

export const WSProtocol = IsLocal ? 'ws' : 'wss';

export class WebSocketServiceClass {
  constructor() {}

  webSocket: WebSocket | null = null;

  /**
   * Initializes WebSocket connection for real time updates in the game
   */
  init(playerId: string): Promise<boolean> {
    return new Promise((resolve) => {
      let webSocket: WebSocket = new WebSocket(`${WSProtocol}://${Server}/ws?userId=${playerId}`);

      webSocket.addEventListener('open', () => {
        this.onConnectionOpen();
        resolve(true);
      });

      webSocket.addEventListener('message', (event: MessageEvent) => {
        this.onMessage(event);
      });

      webSocket.addEventListener('error', () => {
        this.onError();
        resolve(false);
      });

      this.webSocket = webSocket;
    });
  }

  /**
   * Broadcasts a WebSocket event to the server
   */
  send(event: WSEventData) {
    this.webSocket?.send(JSON.stringify(event));
  }

  private onConnectionOpen() {
    console.log('Connection to WebSocket successful');
  }

  /**
   * Handles and parses incomming real time server events
   */
  private onMessage(event: MessageEvent) {
    const webSocketEvent: WSEventData = JSON.parse(event.data);
    handleWSEvent(webSocketEvent)
  }

  private onError() {
    // Should show something in the UI
    console.log('Error, server is down');
  }
}

export const WebSocketService = new WebSocketServiceClass();