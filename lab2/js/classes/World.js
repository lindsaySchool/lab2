import Island from "./Island.js";
export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
    }
  
    save() {
      // save array islands to localstorage as string
      document.querySelectorAll(".island").forEach(island => {
        // loop over all this.islands and save the names and colors
        const islandObj = {
          name: island.innerHTML,
          color: island.style.backgroundColor
        };
        this.islands.push(islandObj);

      });
      localStorage.setItem("islands", JSON.stringify(this.islands));
      console.log(this.islands);
    }
  
    load() {
      // load islands from localstorage into array
      console.log("load");
      // get the islands from localstorage
      const islandcollection = JSON.parse(localStorage.getItem("islands"));
      //console.log(islandcollection);
      // loop over the array and addIslands()
      islandcollection.forEach(island => {
        //obj to add function
        this.addIsland(island);
      });
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }
  
    addIsland(island) {
        // add the islands to the DOM
        const islandDiv = document.createElement("div");
        islandDiv.classList.add("island");
        
        // coordinates for the island
        const coordinates = this.getCoordinates();
        islandDiv.style.position = "absolute";
        islandDiv.style.left = `${coordinates.x}px`;
        islandDiv.style.top = `${coordinates.y}px`; 

        //get random color for background
        islandDiv.style.backgroundColor = island.color;
        islandDiv.innerHTML = island.name;
        document.querySelector("#app").appendChild(islandDiv);

        //move the island to the coordinates
        this.moveIsland(islandDiv);
    }
  
    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
      const startCoordinates = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const endCoordinates = this.getCoordinates();
      const keyframes = [
        { left: `${startCoordinates.x}px`, top: `${startCoordinates.y}px` },
        { left: `${endCoordinates.x}px`, top: `${endCoordinates.y}px` }
      ];
      const animationProperties = {
        duration: 2000,
        //ease-out
        easing: "cubic-bezier(0.0, 0, 0.58, 1)",
        fill: "forwards"
      };
      const animation = island.animate(keyframes, animationProperties);
 
    }
  }