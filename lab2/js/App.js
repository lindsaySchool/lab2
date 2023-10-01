import Island from "./classes/Island.js";
export default class App {
    constructor(){
        //console.log("constructor");
        this.Event();
    }

    Event() {
        //console.log("event");
        document.querySelector("#btnAddIsland").addEventListener("click", this.addIsland);
    }

    addIsland() {
        console.log("new island created");
        //get random name for island
        const name = Island.prototype.getRandomName();
        const island = new Island(name);
        island.add();
    }
    
}