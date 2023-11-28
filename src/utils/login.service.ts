import { HttpProtocol, Server, APIPort } from './server.service'

export class LoginServiceClass {
  async authenticate (userName: string, password: string): Promise<{ playerData: any }> {
    return await fetch(`${HttpProtocol}://${Server}:${APIPort}/authenticate`)
      .then(async (response: Response) => {
        return await response.json()
      })
      .then((data) => {
        console.log(data)
        return data
      })
  }

  // Checks if current players token is still valid
  async isAuth (): Promise<{ playerId: string | null }> {
    const playerId = (Math.random() + 1).toString(36).substring(7)
    return await Promise.resolve({ playerId })
  }

  register () {}

  login () {}

  logout () {}
}

export const LoginService = new LoginServiceClass()
