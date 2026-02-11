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

export function checkRulesWithWinPostion(winPostion) {
    const illegalPostion = doQueensSeeEachOther(winPostion);
    const DuplicateCheck = checkForDuplicateColums(winPostion);

    if(illegalPostion || DuplicateCheck) {
        illegalPostionCheck(illegalPostion, "Illegal Position Found - Regenerating", winPostion);
    } else {
        illegalPostionCheck(illegalPostion, "Checking Complete - No Illegal Positions Found", winPostion);
    }
}

function checkForDuplicateColums(queenPostionArray) {
   const hasDuplicateSecond = new Set(queenPostionArray.map(([First, Second]) => Second)).size !== queenPostionArray.length;

   if(hasDuplicateSecond) {
        return false;
   } else {
        return true;
   }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function generatePostions() {
    const randomChoiceArray = [];
    const columns = [0,1,2,3,4,5,6,7];

    shuffle(columns);

    for (let i = 0; i < 8; i++) {
        randomChoiceArray.push([i, columns[i]]);
    }

    //Postion checker seems to fail even when its says its succeeds?
    const illegalPostion = doQueensSeeEachOther(randomChoiceArray);

    console.log(randomChoiceArray)
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