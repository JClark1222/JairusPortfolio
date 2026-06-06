// Creating a object
const game = {
    title: "Valorant",
    genre: "FPS",
    studio: "PC",  
}

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
