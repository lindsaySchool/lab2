import Island from "./classes/Island";
export default class App {
    constructor(){
        console.log("constructor");
        this.Event();
    }

    Event() {
        console.log("event");
        document.querySelector("#btnAddIsland").addEventListener("click", this.addIsland);
    }

    addIsland() {
        console.log("new island created");
        const name = "Islandname";
        const island = new Island(name);
        island.add();
    }
    
}