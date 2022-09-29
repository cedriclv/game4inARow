// parsing of the DOM 

const gameStageInit = document.querySelectorAll(".gameStage :first-child");

const gameStage = [
    Array.from(gameStageInit).slice(0, 7),
    Array.from(gameStageInit).slice(7, 14),
    Array.from(gameStageInit).slice(14, 21),
    Array.from(gameStageInit).slice(21, 28),
    Array.from(gameStageInit).slice(28, 35),
    Array.from(gameStageInit).slice(35, 42)
];

const lineAboveStageInit = document.querySelectorAll(".enterGame :first-child");

const lineAboveStage = [
    Array.from(lineAboveStageInit).slice(0, 7)
];


let gameGrid = [
    ['Y', 'Y', 'Y', 'Y', 'Y', 'E', 'E'],
    ['E', 'E', 'R', 'E', 'E', 'E', 'E'],
    ['E', 'Y', 'R', 'R', 'E', 'E', 'R'],
    ['E', 'Y', 'E', 'R', 'R', 'R', 'E'],
    ['E', 'Y', 'R', 'Y', 'R', 'R', 'R'],
    ['R', 'Y', 'Y', 'R', 'Y', 'E', 'R']
];

// function to check if a column can receive a pawn and to color 
//in green when we over or red if not available
function greenRedFlagColumn(gridInput, lineAboveDomOutput, colorInGame) {
    for (let column = 0; column < 7; column++) {
        //        console.log(gridInput[0][column]);
        //        console.log(`gridInput[0][${column}]`);
        if (gridInput[0][column] === 'Y' || gridInput[0][column] === 'R') {
            //            console.log("pass en b");
            //            lineAboveDomOutput[0][column].classList.add("redLight");
        }
        if (gridInput[0][column] === "E") {
            //            console.log("pass en c");
            lineAboveDomOutput[0][column].classList.add("okToPlay");
            lineAboveDomOutput[0][column].textContent = '=>';
            if (colorInGame === 'R') {
                lineAboveDomOutput[0][column].classList.add("circleOKRed");
            } else {
                lineAboveDomOutput[0][column].classList.add("circleOKYellow");
            }
        } else {
            lineAboveDomOutput[0][column].style.display = "none";
        }
    }
}
// mettre la couleur en jeu clignotant au dessus des colonnes ou on peut jouersi on peut jouer;


// function to feed the DOM according to the gameGrid array
function feedTheGrid(gridInput, gridDomOutput) {
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 7; column++) {
            //        console.log(gridInput[row][column]);
            //        console.log(`gridInput[${row}][${column}]`);
            if (gridInput[row][column] === 'Y') {
                //            console.log("pass en b");
                gridDomOutput[row][column].classList.add("circleYellow");
            }
            if (gridInput[row][column] === "R") {
                //            console.log("pass en c");
                gridDomOutput[row][column].classList.add("circleRed");
            }
        }
    }
}


feedTheGrid(gameGrid, gameStage);
greenRedFlagColumn(gameGrid, lineAboveStage, 'Y');