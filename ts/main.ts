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
    //TODO: Display video game below the form
}

// ADD VALIDATION CODE**************************
function isAllDataValid(){
    return true;
}