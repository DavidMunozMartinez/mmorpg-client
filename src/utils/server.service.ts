type InputWSEvent = {
    playerId: string;
    action: number
}

type OutputWSEvent = {
    eventType: number;
    data: any;
}

class ServerServiceClass {
    #wsServer: string = 'localhost:8080';

    constructor(){}

    initWSConnection() {
        let WS: WebSocket = new WebSocket(`ws://${this.#wsServer}/ws`);
        WS.addEventListener('message', (data: MessageEvent<InputWSEvent>) => {
            console.log(data)
        });
    }

    sendEvent(event: OutputWSEvent) {

    }
}

export const ServerService = new ServerServiceClass() 