import { doQueensSeeEachOther } from "./queens.mjs";
const board = document.getElementById("board1");

function illegalPostionCheck(illegalPostion, message, queensPostionArray) {
    if(illegalPostion) {
        console.log(message)
        generatePostions();
    } else {
        console.log("Checking Complete - No Illegal Positions Found")
        generateQueensOnBoard(queensPostionArray);
    }
}

export function generateChessBoard(board) {
    Chessboard(board, 'start');
    Chessboard(board, {
        draggable: true,
        dropOffBoard: 'trash',
        sparePieces: true
    })
}

function generateRandomPostion(minNumber, maxNumber) {
    return Math.floor(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber)
}

export function checkRulesWithWinPostion(winPostion) {
    const illegalPostion = doQueensSeeEachOther(winPostion);

    if(illegalPostion) {
        illegalPostionCheck(illegalPostion, "Illegal Position Found - Regenerating", winPostion);
    } else {
        illegalPostionCheck(illegalPostion, "Checking Complete - No Illegal Positions Found", winPostion);
    }
}

export function generatePostions() {
    let randomChoiceArray = []
    let oldNumber = [];
    let newNumber = [];
    for(let i = 0; i <= 7; i++) {
        oldNumber = newNumber;
        newNumber = [generateRandomPostion(0, 7), generateRandomPostion(1, 7)];

    if(oldNumber.length !== 0 && oldNumber === newNumber) {
        newNumber = [generateRandomPostion(0, 7), generateRandomPostion(1, 7)] 
    }
        randomChoiceArray.push(newNumber)
    }
    const illegalPostion = doQueensSeeEachOther(randomChoiceArray);

    if(illegalPostion) {
        illegalPostionCheck(illegalPostion, "Illegal Position Found - Regenerating", randomChoiceArray);
    } else {
        illegalPostionCheck(illegalPostion, "Checking Complete - No Illegal Positions Found", randomChoiceArray);
    }
}

function changeFirstPosToLetter(queenPostionNum) {
    const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letterArray[queenPostionNum - 1]
}

function generateQueensOnBoard(queenPostionArray) {
    const chessPieceBoardArray = [];
    for(let i = 0; i < queenPostionArray.length; i++) {
        chessPieceBoardArray.push([changeFirstPosToLetter(queenPostionArray[i][0]) + queenPostionArray[i][1], 'wQ' ])
    }

    const chessBoardPosObject = {};

    for(let j = 0; j < chessPieceBoardArray.length; j++) {
        chessBoardPosObject[chessPieceBoardArray[j][0]] = chessPieceBoardArray[j][1];
    }

    Chessboard(board, {
        position: chessBoardPosObject
    });
}