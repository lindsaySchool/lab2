import Island from "./classes/Island.js";
import World from "./classes/World.js";
export default class App {
    constructor(){
        //console.log("constructor");
        this.Event();
        this.world = new World();
        console.log(this.world);
    }

    Event() {
        //console.log("event");
        document.querySelector("#btnAddIsland").addEventListener("click", () => this.addIsland());
    }

    addIsland() {
        console.log("new island created");
        //get random name for island
        const name = Island.prototype.getRandomName();
        const island = new Island(name);
        this.world.addIsland(island);
    }
    
}