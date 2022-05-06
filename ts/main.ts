class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;

}

function addVideoGame(){
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}
/**
 * Gets all game data from the form
 * 
 * @returns VideoGame object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();

    // populate with data from the form
    game.title = (<HTMLInputElement>document.getElementById("title")).value;// grabbing the title info through the form

    game.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);// parseFloat because the input needs to be converted from a string to a number

    let ratingInput = <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = (<HTMLInputElement>document.getElementById("online"));
    game.isDigitalOnly = digitalOnly.checked;

    // Return Game
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void{
    
    let displayDiv = document.getElementById("display");

    //Create h2 with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerHTML = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "This is a digital only game.";
    }
    else{
        gameMediumDisplay = "You can come buy a physical copy!";
    }

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. ` + 
    `It costs $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`;

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // add <p> game info
    displayDiv.appendChild(gameInfo);
}

// ADD VALIDATION CODE**************************
function isAllDataValid(){
    return true;
}