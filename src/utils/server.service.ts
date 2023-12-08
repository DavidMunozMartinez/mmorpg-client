import { type RenderPlayerData } from '../player/player.model'

export const IsLocal = true

export const Server = IsLocal ? 'localhost' : 'mmorpg-server-bun-production.up.railway.app:8080'
export const APIPort = '3000'
export const HttpProtocol = IsLocal ? 'http' : 'https'

class ServerServiceClass {
  /**
  * Returns minimum data required to render nearby players
  */
  async getOnlineRenderPlayers (): Promise<RenderPlayerData[]> {
    return await fetch(`${HttpProtocol}://${Server}:${APIPort}/get-online-players`)
      .then(async (response: Response) => {
        return await response.json()
      })
      .then((data: RenderPlayerData[]) => {
        return data
      })
  }

  async registerAccount (email: string, password: string): Promise<{ success: boolean }> {
    try {
      const url = `${HttpProtocol}://${Server}:${APIPort}/register`
      const fetchResponse = await fetch(url, {
        body: JSON.stringify({
          email,
          password
        }),
        method: 'POST'
      })
      await fetchResponse.json()
      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false }
    }
  }

  async authenticateAccount (email: string, password: string): Promise<{ success: boolean, msg?: string }> {
    try {
      const url = `${HttpProtocol}://${Server}:${APIPort}/authenticate`
      const fetchResponse = await fetch(url, {
        body: JSON.stringify({
          email,
          password
        }),
        method: 'POST'
      })
      await fetchResponse.json()
      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false }
    }
  }
}

export const ServerService = new ServerServiceClass()
