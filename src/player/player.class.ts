/**
 * This can be any player foreign to current client
 */
class PlayerClass {
    id: string
    constructor(id: string) {
        this.id = id;
    }
}

/**
 * This is the player in the current client
 */
class MainPlayerClass extends PlayerClass {

    #map: HTMLElement | null = document.getElementById('map');

    constructor(id: string) {
        super(id);
    }

    initEvents() {
        this.#map?.addEventListener('keydown', (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
            }
        });
    }
}

export const MainPlayer = new MainPlayerClass('Test')