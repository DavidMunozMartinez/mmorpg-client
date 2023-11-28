import { PlayerClass } from "../player/player.class";
import { HttpProtocol, Server, APIPort } from "./server.service";

export class LoginServiceClass {
    constructor() {}

    authenticate(userName: string, password: string): Promise<{ playerData: any }> {
        return fetch(`${HttpProtocol}://${Server}:${APIPort}/authenticate`)
            .then((response: Response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                return data;
            });
    }

    // Checks if current players token is still valid
    isAuth(): Promise<{ playerId: string | null }> {
        const playerId = (Math.random() + 1).toString(36).substring(7);
        return Promise.resolve({ playerId: null });
    }

    register() {}

    login() {}

    logout() {}
}

export const LoginService = new LoginServiceClass();