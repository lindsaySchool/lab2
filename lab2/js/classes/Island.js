export default class Island {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }

    add() {
        const island = document.createElement("div");
        island.classList.add("island");
        island.style.backgroundColor = "#FFB8A2";
        island.innerHTML = this.name;
        document.querySelector("#app").appendChild(island);
    }
  
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  
    remove() {
      // JS animations api, fade out
      // remove the element when the animation ended
    }
  
    getRandomName() {
      // array with 10 random island names
      const names = [
        "Palmtree beach",
        "Sandy beach",
        "Tropical beach",
        "Palm beach",
        "Sunny beach",
        "Paradise beach",
        "Sunny island",
        "Tropical island",
        "Palm island",
        "Paradise island"
      ];
  
      // return a random name from the array
    }
  }
  