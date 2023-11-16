import { RenderPlayerData } from "../player/player.model";

export const IsLocal = true;
export const Server = IsLocal ? 'localhost' : 'mmorpg-server-bun-production.up.railway.app:8080';
export const APIPort = '3000';
export const HttpProtocol = IsLocal ? 'http' : 'https';

class ServerServiceClass {
    constructor() {}

    /**
     * Returns minimum data required to render nearby players
     */
    getOnlineRenderPlayers(): Promise<RenderPlayerData[]> {
        return fetch(`${HttpProtocol}://${Server}:${APIPort}/get-online-players`)
        .then((response: Response) => {
            return response.json();
        })
        .then((data: RenderPlayerData[]) => {
            return data;
        });
    }
}

export const ServerService = new ServerServiceClass();