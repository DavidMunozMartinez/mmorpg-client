import './overlay.styles.scss';

class OverlayModalClass {

    #ref: HTMLElement | null = document.getElementById('overlay')

    constructor() {
        console.log(this.#ref);
    }
}

export const OverlayModal = new OverlayModalClass();