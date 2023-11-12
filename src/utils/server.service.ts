type WebSocketEvent = {
    playerId: string;
    action: number
}

class ServerServiceClass {
    #wsServer: string = 'localhost:8080';

    constructor(){}

    initWSConnection() {
        let WS: WebSocket = new WebSocket(`ws://${this.#wsServer}/ws`);
        WS.addEventListener('message', (data: MessageEvent<WebSocketEvent>) => {
            console.log(data)
        });
    }
}

export const ServerService = new ServerServiceClass() 