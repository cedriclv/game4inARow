// create the initial tab with postion (can be E (like Empty), or R (Red) or Y (Yellow))
let gameGrid = [
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'R', 'E', 'E', 'E', 'E'],
    ['E', 'Y', 'R', 'R', 'E', 'E', 'R'],
    ['E', 'Y', 'E', 'R', 'R', 'R', 'E'],
    ['E', 'Y', 'R', 'Y', 'R', 'R', 'R'],
    ['R', 'Y', 'Y', 'R', 'Y', 'E', 'R']
];

//console.log(gameGrid[5][1]);

// function to check in which cell space is available to store a pawn ==> FONCTION OK
function addPawn(color, pawnColumn) {
    let lookedColumn = pawnColumn;
    let indexLatestRowAvailable = null;
    let emptySpaceFound = false;
    for (let row = 0; row < gameGrid.length; row++) {
        //console.log("\n");
        for (let column = 0; column < gameGrid[row].length; column++) {
            //  console.log(gameGrid[row][column]);
            if (gameGrid[row][column] === "E" && column === lookedColumn) {
                indexLatestRowAvailable = row;
                emptySpaceFound = true;
            }
        }
    }
    // once the latest empty space is found, the pawn is place in it 
    if (emptySpaceFound) {
        //        console.log(`gameGrid[row][column] :, gameGrid[${indexLatestRowAvailable}][${lookedColumn}]`);
        //console.log("indexLatestRowAvailable : ", indexLatestRowAvailable)
        gameGrid[indexLatestRowAvailable][lookedColumn] = color;
        //        console.log(gameGrid[indexLatestRowAvailable][lookedColumn]);
        //check if 4 pawin a row after placing the pawn

    }
}

// function to check if a row contains 'YYYY' or 'RRRR'==> FONCTION OK
function checkRowsWinner() {
    let winnerFound = false;
    let winnerColor = 'Y';
    for (let row = 0; row < gameGrid.length; row++) {
        rollingPawnFound = 1;
        for (let column = 1; column < gameGrid[row].length; column++) {
            if (gameGrid[row][column] === gameGrid[row][column - 1] && gameGrid[row][column] !== 'E') {
                rollingPawnFound++;
                // once the latest empty space is found, the pawn is place inside 
                if (rollingPawnFound === 4) {
                    winnerFound = true;
                    winnerColor = gameGrid[row][column];
                    console.log('gagné dans checkRowsWinner pour ${winnerColor}');
                    return winnerColor;
                }
            }
            else {
                rollingPawnFound = 1;
            }
        }
    }

    return false;
}
//////////////////////////////////////////////////////////////////////////
// function to create to check if a column contains 'YYYY' or 'RRRR'  ==> FONCTION OK;
function checkColumnsWinner() {
    let winnerFound = false;
    let winnerColor = 'Y';
    for (let column = 0; column < gameGrid.length; column++) {
        rollingPawnFound = 1;
        for (let row = 1; row < (gameGrid[0].length - 1); row++) {
            if ((gameGrid[row][column] === gameGrid[row - 1][column]) && (gameGrid[row][column] !== 'E')) {
                rollingPawnFound++;
                // once the latest empty space is found, the pawn is place inside 
                if (rollingPawnFound === 4) {
                    //   console.log("passe par condition finale");
                    winnerFound = true;
                    winnerColor = gameGrid[row][column];
                    //   console.log('gagné dans checkColumnsWinner pour ${winnerColor}');
                    return winnerColor;
                }
            }
            else {
                rollingPawnFound = 1;
            }
        }
    }

    return false;
}
////////////////////////////////////////////////////////////////////////////////////////
// function  1 to create to check if a diagonal contains 'YYYY' or 'RRRR' ==> FONCTION OK
function checkDiagLeftRightLowWinner() {
    let winnerFound = false;
    let winnerColor = 'Y';
    // mettre l'algo de parcours ici:
    //parsing from right to left
    let rollingPawnFound = 1;
    let offsetColumnForParsing = (gameGrid[0].length - 1)
    //console.log("passe dans checkDiagLeftRightLowWinner");
    for (let i = 1; i < offsetColumnForParsing; i++) {
        let row = i;
        let column = 1;
        //console.log("passe dans checkDiagLeftRightLowWinner en b");
        //console.log(`gameGrid[row][column]: gameGrid[${row}][${column}]`);
        while (column < gameGrid[0].length && row < gameGrid.length) {
            //console.log("passe dans checkDiagLeftRightLowWinner en c");
            //console.log(`!!!!!!!!!!!!!!!gameGrid[row][column]: gameGrid[${row}][${column}]`);
            if ((gameGrid[row][column] === gameGrid[row - 1][column - 1]) && (gameGrid[row][column] !== 'E')) {
                rollingPawnFound++;
                // once the latest empty space is found, the pawn is place inside 
                //                console.log(' en sucess (rajoute un point) Dans checkDiagLeftRightLowWinner')
                //                console.log(`gameGrid[row][column]: gameGrid[${row}][${column}]`);
                //                console.log(`gameGrid[row - 1][column + 1]: gameGrid[${row - 1}][${column + 1}]`);
                //console.log(`rollingPawnFound : ${rollingPawnFound}`);
                if (rollingPawnFound === 4) {
                    //console.log("passe par condition finale");
                    winnerFound = true;
                    winnerColor = gameGrid[row][column];
                    return winnerColor;
                }
            }
            else {
                rollingPawnFound = 1;
            }
            row++;
            column++;
        }
        rollingPawnFound = 1; ///  CHANGEMENT
    }

    return false;
}
////////////////////////////////////////////////////////////////////////////////////////
// function 2 to create to check if a diagonal contains 'YYYY' or 'RRRR' ==> FONCTION OK
function checkDiagLeftRightHighWinner() {
    let winnerFound = false;
    let winnerColor = 'Y';
    // mettre l'algo de parcours ici:
    //parsing from right to left
    let rollingPawnFound = 1;
    let offsetColumnForParsing = (gameGrid[0].length - 1)
    //console.log("passe dans checkDiagLeftRightHighWinner");
    for (let i = 1; i < offsetColumnForParsing; i++) {
        let row = 1;
        let column = i;
        //console.log("passe dans checkDiagLeftRightHighWinner en b");
        //console.log(`gameGrid[row][column]: gameGrid[${row}][${column}]`);
        while (column < gameGrid[0].length && row < gameGrid.length) {
            //console.log("passe dans checkDiagLeftRightHighWinner en c");
            //console.log(`!!!!!!!!!!!!!!!gameGrid[row][column]: gameGrid[${row}][${column}]`);
            if ((gameGrid[row][column] === gameGrid[row - 1][column - 1]) && (gameGrid[row][column] !== 'E')) {
                rollingPawnFound++;
                // once the latest empty space is found, the pawn is place inside 
                //                console.log(' en sucess (rajoute un point) Dans checkDiagLeftRightHighWinner');
                //                console.log(`gameGrid[row][column]: gameGrid[${row}][${column}]`);
                //                console.log(`gameGrid[row - 1][column + 1]: gameGrid[${row - 1}][${column + 1}]`);
                //console.log(`rollingPawnFound : ${rollingPawnFound}`);
                if (rollingPawnFound === 4) {
                    //console.log("passe par condition finale");
                    winnerFound = true;
                    winnerColor = gameGrid[row][column];
                    return winnerColor;
                }
            }
            else {
                rollingPawnFound = 1;
            }
            row++;
            column++;
        }
        rollingPawnFound = 1; ///  CHANGEMENT
    }

    return false;
}

////////////////////////////////////////////////////////////////////////////////////////
// function 3 to create to check if a diagonal contains 'YYYY' or 'RRRR' ==> FONCTION OK
function checkDiagRightLeftLowWinner() {
    let winnerFound = false;
    let winnerColor = 'Y';
    // mettre l'algo de parcours ici:
    //parsing from right to left
    let rollingPawnFound = 1;
    let offsetColumnForParsing = (gameGrid[0].length - 2)

    for (let i = 1; i < offsetColumnForParsing; i++) {
        let row = i;
        let column = 5;
        while (column > 0 && row < gameGrid.length) {
            //console.log("passe dans checkDiagRightLeftLowWinner en c");
            //console.log(`!!!!!!!!!!!!!!!gameGrid[row][column]: gameGrid[${row}][${column}]`);
            if ((gameGrid[row][column] === gameGrid[row - 1][column + 1]) && (gameGrid[row][column] !== 'E')) {
                rollingPawnFound++;
                //                console.log(' Dans checkDiagRightLeftLowWinner')
                //                console.log(`gameGrid[row][column]: gameGrid[${row}][${column}]`);
                //                console.log(`gameGrid[row - 1][column + 1]: gameGrid[${row - 1}][${column + 1}]`);
                //                console.log(`rollingPawnFound : ${rollingPawnFound}`);
                // once the latest empty space is found, the pawn is place inside 
                if (rollingPawnFound === 4) {
                    winnerFound = true;
                    winnerColor = gameGrid[row][column];
                    console.log('gagné dans checkDiagRightLeftLowWinner pour  ${winnerColor}');
                    return winnerColor;
                }
            }
            else {
                rollingPawnFound = 1;
            }
            row++;
            column--;
        }
        rollingPawnFound = 1; ///  CHANGEMENT
    }

    return false;
}

////////////////////////////////////////////////////////////////////////////////////////
// function 4 to create to check if a diagonal contains 'YYYY' or 'RRRR' ==> FONCTION OK
function checkDiagRightLeftHighWinner() {
    let winnerFound = false;
    let winnerColor = 'Y';
    // mettre l'algo de parcours ici:
    //parsing from right to left
    let rollingPawnFound = 1;
    let offsetColumnForParsing = (gameGrid[0].length - 1)

    for (let i = 1; i < offsetColumnForParsing; i++) {
        let row = 1;
        let column = i;
        console.log(column > 0 && row < gameGrid.length);
        while (column >= 0 && row < gameGrid.length) {
            console.log("passe dans checkDiagRightLeftHighWinner en c");
            console.log(`!!!!!!!!!!!!!!!gameGrid[row][column]: gameGrid[${row}][${column}]`);
            if ((gameGrid[row][column] === gameGrid[row - 1][column + 1]) && (gameGrid[row][column] !== 'E')) {
                rollingPawnFound++;
                //                console.log(' Dans checkDiagRightLeftHighWinner')
                //                console.log(`gameGrid[row][column]: gameGrid[${row}][${column}]`);
                //                console.log(`gameGrid[row - 1][column + 1]: gameGrid[${row - 1}][${column + 1}]`);
                //                console.log(`rollingPawnFound : ${rollingPawnFound}`);
                // once the latest empty space is found, the pawn is place inside 
                if (rollingPawnFound === 4) {
                    winnerFound = true;
                    winnerColor = gameGrid[row][column];
                    console.log('gagné dans checkDiagRightLeftHighWinner pour  ${winnerColor}');
                    return winnerColor;
                }
            }
            else {
                rollingPawnFound = 1;
            }
            row++;
            column--;
        }
        rollingPawnFound = 1; ///  CHANGEMENT
    }

    return false;
}


function checkAllWinner() {
    let win = false;
    if (checkRowsWinner() ||
        checkColumnsWinner() ||
        checkDiagLeftRightLowWinner() ||
        checkDiagLeftRightHighWinner() ||
        checkDiagRightLeftLowWinner() ||
        checkDiagRightLeftHighWinner()
    ) {
        win = true;
    }
    return win;
}

console.log(checkAllWinner());