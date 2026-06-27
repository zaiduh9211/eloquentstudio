var data = 
[
    {
    "name": "flappybird",
    "link": "https://esflappybird.netlify.app",
    "ratings": 0
    },
    {
    "name": "numbermerging",
    "link": "https://numbermerging.netlify.app",
    "ratings": 0
    },
    {
    "name": "blockcrunch",
    "link": "https://blockcrunch.netlify.app",
    "ratings": 0
    },
    {
    "name": "Ballrun",
    "link": "https://esballrun.netlify.app",
    "ratings": 0
    },
    {
    "name": "ballventure",
    "link": "https://ballventure.netlify.app",
    "ratings": 0
    },
    {
    "name": "sudoku",
    "link": "https://sudoku.com",
    "ratings": 0
    },
    {
    "name": "gravizone",
    "link": "https://gravizone.netlify.app",
    "ratings": 0
    }
];
function ongameclick(name) {
    data.forEach(game => {
        if (game.name === name) {
            // Convert the object to a string before storing it
            localStorage.setItem("data", JSON.stringify(game));
        }
    });
}

window.onload = function() {
    let gameElement = document.getElementById("game");
    
    // Retrieve the string and parse it back into an object
    let savedGameData = localStorage.getItem("data");
    
    if (savedGameData) {
        let gameObj = JSON.parse(savedGameData);
        gameElement.src = gameObj.link;
    } else {
        console.log("No game data found in localStorage.");
    }
}