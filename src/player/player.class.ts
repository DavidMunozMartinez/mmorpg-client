import { addPlayerToMap } from "./player.handler";
import { DIRECTIONS } from "./player.model";

/**
 * Player refers to any other player that can be in the map
 */
export class PlayerClass {
    id: string;
    playerRef: HTMLElement | null = null;
    x = 0;
    y = 0;
    health: number = -1;
    stepSize: number = 20;

    constructor(id: string) {
        addPlayerToMap(id);
        this.id = id;
        this.playerRef = document.getElementById(id);
    }

    /**
     * Updates the UI on this players position
     */
    move(direction: DIRECTIONS) {
        switch (direction) {
            case DIRECTIONS.UP:
                this.y = this.y - this.stepSize;
                break;
            case DIRECTIONS.DOWN:
                this.y = this.y + this.stepSize;
                break;
            case DIRECTIONS.LEFT:
                this.x = this.x - this.stepSize;
                break;
            case DIRECTIONS.RIGHT:
                this.x = this.x + this.stepSize;
        }
        if (this.playerRef) {
            this.playerRef.style.transform = `translate(${this.x}px, ${this.y}px)`
        }
    }
}