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
        this.islands.push({
          name: island.innerHTML,
          color: island.style.backgroundColor
        });
      });
      localStorage.setItem("islands", JSON.stringify(this.islands));
    }
  
    load() {
      // get the islands from localstorage
      const islandcollection = JSON.parse(localStorage.getItem("islands"));
      // loop over the array and addIslands()
      islandcollection.forEach(island => {
        //obj to add function
        this.addIsland(island);
      });
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      };
    }
  
    addIsland(island) {
        // add the islands to the DOM
        const islandDiv = document.createElement("div");
        islandDiv.classList.add("island");
        islandDiv.style.position = "absolute";
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
      this.createAnimation(island, startCoordinates, endCoordinates); 
    }
    
    createAnimation(island, startCoordinates, endCoordinates) {
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
      island.animate(keyframes, animationProperties);
    }
  }