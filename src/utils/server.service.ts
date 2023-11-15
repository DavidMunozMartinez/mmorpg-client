export const IsLocal = true;
export const Server = IsLocal ? 'localhost:8080' : 'mmorpg-server-bun-production.up.railway.app:8080';

class ServerServiceClass {
    constructor() {}
}

export const ServerService = new ServerServiceClass();