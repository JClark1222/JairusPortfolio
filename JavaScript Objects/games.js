// Creating a object
const game = {
    title: "Valorant",
    genre: "FPS",
    system: "PC",
    fullDescription: function() {
        console.log(`${this.title} is the best game in the world. It is a ${this.genre} that you can play on ${this.system}`)
    } 
}
console.log(game.fullDescription());

// displaying information from the object
document.getElementById("details").textContent = `The game you are playing is ${game.title}`;

// Create a function that grabs the user's info and adds it to an object
// then returns the object
function getGameInfo(title, score, developer) {

    const userChoice = {}

    userChoice.title = document.getElementById("gtitle")
    userChoice.score = document.getElementById("gscore")
    userChoice.developer = document.getElementById("gdeveloper")

    document.getElementById("results").textContent = `Here is your game title ${userChoice.title.value}`
}
