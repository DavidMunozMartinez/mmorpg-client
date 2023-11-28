import { type PlayerClass } from './player.class'
import { removePlayerFromMap } from './player.handler'

export class PlayerServiceClass {
  players: Map<string, PlayerClass> = new Map<string, PlayerClass>()
  mainPlayerId: string | null = null

  /**
   * Adds player to the current players list
   */
  add (player: PlayerClass) {
    this.players.set(player.id, player)
  }

  /**
   * Removes players from the current players list
   */
  remove (playerId: string): boolean {
    removePlayerFromMap(playerId)
    return this.players.delete(playerId)
  }

  /**
   * Returns player by id if exists
   */
  get (playerId: string) {
    return this.players.get(playerId)
  }
}

export const PlayerService = new PlayerServiceClass()
