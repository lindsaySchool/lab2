import Island from "./classes/Island.js";
import World from "./classes/World.js";
export default class App {
    constructor(){
        this.Event();
        this.world = new World();
        console.log(this.world);
    }

    Event() {
        //Listen to the click event on the button
        document.querySelector("#btnAddIsland").addEventListener("click", () => this.addIsland());
        document.querySelector("#btnSave").addEventListener("click", () => this.world.save());
        document.querySelector("#btnLoad").addEventListener("click", () => this.world.load());
    }

    addIsland() {
        //get random name for island
        const name = Island.prototype.getRandomName();
        const newIsland = new Island(name);
        this.world.addIsland(newIsland);
    }
    
}