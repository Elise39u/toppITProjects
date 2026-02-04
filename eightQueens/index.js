let tryalSolvedPostion = [ [1,2], [2,4], [3,6], [4,8], [5,3], [6,1], [7,7], [8,5] ]
const board = document.getElementById("board1");

function generateChessBoard() {
    Chessboard(board, 'start');
    Chessboard(board, {
        draggable: true,
        dropOffBoard: 'trash',
        sparePieces: true
    })
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

function changeFirstPosToLetter(queenPostionNum) {
    const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letterArray[queenPostionNum - 1]
}

function generateRandomPostion(minNumber, maxNumber) {
    return Math.floor(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber)
}

function generatePostions() {
    let randomChoiceArray = []
    for(let i = 0; i <= 7; i++) {
        randomChoiceArray.push([generateRandomPostion(0, 7), generateRandomPostion(1, 7)])
    }
    doQueensSeeEachOtherHorVer(randomChoiceArray);
}

function doQueensSeeEachOtherHorVer(queenPostionArray) {
    let illegalPostion = false; 
    for (let i = 0; i < queenPostionArray.length; i++) {
        for(let j = 0; j < queenPostionArray.length; j++) {
            if(i === j) { break; }
            if(queenPostionArray[i][0] === queenPostionArray[j][0]) { 
                illegalPostion = true;
                break;
            }
           if(queenPostionArray[i][1] === queenPostionArray[j][1]) { 
                illegalPostion = true;
                break;
            }
        }

        if(illegalPostion === true) {
            console.log("Illegal Position Found - Regenerating")
            generatePostions();
            //generateQueensOnBoard(queenPostionArray)
            break;
        }
    }

    if(illegalPostion === false) { 
        const topRightCheck = reformedQueensSeeDiagonal(queenPostionArray, "topRight");
        const bottomLeftCheck = reformedQueensSeeDiagonal(queenPostionArray, "bottomLeft");
        const topLeftCheck = reformedQueensSeeDiagonal(queenPostionArray, "topLeft");
        const bottomRightCheck = reformedQueensSeeDiagonal(queenPostionArray, "bottomRight");

        if(!topRightCheck && !bottomLeftCheck && !topLeftCheck && !bottomRightCheck) {
            console.log("Checking Complete - No Illegal Positions Found")
            generateQueensOnBoard(queenPostionArray)
        } else {
            console.log("Illegal Diagonal Position Found - Regenerating thanks to: TopRight:" 
                + topRightCheck + " BottomLeft:" + bottomLeftCheck + " TopLeft:" 
                + topLeftCheck + " BottomRight:" + bottomRightCheck)
            generatePostions();
        }
    }
}

function CalculatePostionDifference(posLeft, posRight, direction) {
    switch(direction) { 
        case "topRight":
            return posLeft - posRight;
        case "bottomLeft":
            return posRight - posLeft;
        case "topLeft":
            return posLeft + posRight;
        case "bottomRight":
            return posRight + posLeft;
        default:
            console.log("Direction not found: " + direction)
    }

}

function reformedQueensSeeDiagonal(queenPostionArray, direction) {
    let illegalPostion = false;
    let resultArray = [];

    /*
    Top right goes a - b EX: (1 - 2 = -1), (2 - 3 = -1), (3 - 4 = -1) = Illegal
    Bottom left goes b - a for same result but then postive (2 - 1 = 1), (3 - 2 = 1), (4 - 3 = 1) = Illegal

    Top left goes a + b EX: (1 + 8 = 9), (2 + 7 = 9), (3 + 6 = 9) = Illegal
    Bottom right goes a + b for same result EX: (8 + 1 = 9), (7 + 2 = 9), (6 + 3 = 9) = Illegal
    */

    for (let i = 0; i < queenPostionArray.length; i++) {
        resultArray.push(CalculatePostionDifference(queenPostionArray[i][0], queenPostionArray[i][1], direction));
    }

    const duplicates = resultArray.filter((item, index) => resultArray.indexOf(item) !== index);

    if(duplicates.length > 0) {
        illegalPostion = true;
    }

    return illegalPostion
}

generateChessBoard();
generatePostions();