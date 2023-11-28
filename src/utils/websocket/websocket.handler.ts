import { handlePlayerWSEvents } from '../../player/player.handler'
import { type WSEventData, WSEvents } from './websocket.model'

/**
 * Handles ALL incomming WebSocket events, eventually this might
 * become a Map if the number of events grows to much
 */
export function handleWSEvent (event: WSEventData) {
  switch (event.eventType) {
    case WSEvents.PLAYER:
      handlePlayerWSEvents(event)
      break
  }
}
