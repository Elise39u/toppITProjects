let tryalSolvedPostion = [ [1,2], [2,4], [3,6], [4,8], [5,3], [6,1], [7,7], [8,5] ]
let randomChoiceArray = []

function generateRandomPostion(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1)
}

function generatePostions() {
    for(let i = 0; i <= 7; i++) {
        randomChoiceArray.push([generateRandomPostion(7), generateRandomPostion(7)])
    }
    doQueensSeeEachOtherHorVer(tryalSolvedPostion)
}

function betterErrorMessage(queenPostionArrayNumber) {
    switch(queenPostionArrayNumber) {
        case 0: 
            console.log("Illegal postion found on row A")
            break;
        case 1: 
            console.log("Illegal postion found on row B")
            break;
        case 2: 
            console.log("Illegal postion found on row C")
            break;
        case 3: 
            console.log("Illegal postion found on row D")
            break;
        case 4: 
            console.log("Illegal postion found on row E")
            break;
        case 5: 
            console.log("Illegal postion found on row F")
            break;
        case 6: 
            console.log("Illegal postion found on row H")
            break;
        case 7: 
            console.log("Illegal postion found on row G")
            break;
        case 8: 
            console.log("Illegal postion found on row G")
            break;
        default:
            console.log("Letter not found on chessbord. Got number: " + queenPostionArrayNumber)
    }
}

function doQueensSeeEachOtherHorVer(queenPostionArray) {
    let illegalPostion = false; 
    for (let i = 0; i < queenPostionArray.length; i++) {
        for(let j = 0; j < queenPostionArray.length; j++) {
            if(i === j) { break; }
            if(queenPostionArray[i][0] === queenPostionArray[j][0]) { 
                betterErrorMessage(queenPostionArray[i][0])
                illegalPostion = true;
                break;
            }
           if(queenPostionArray[i][1] === queenPostionArray[j][1]) { 
                console.log("Illegal postion found on the row of: "  + queenPostionArray[i][1])
                illegalPostion = true;
                break;
            }
        }

        if(illegalPostion === true) {
            console.log(randomChoiceArray)
            break;
        }
    }

    doQueensSeeTopRight(queenPostionArray);
}

function doQueensSeeTopRight(queenPostionArray) {
    //TODO: Check for + X number perhaps like 2,4 -> 4,6 +2 and 3,2 -> 6,5 + 3
    let illegalPostion = false; 
    for (let i = 0; i < queenPostionArray.length; i++) {
        let letterRowQueen = queenPostionArray[i][0];
        let numberRowQueen = queenPostionArray[i][1];

        if(letterRowQueen === 8 || numberRowQueen === 8) {
            console.log("Edge of the Play Area found with " + queenPostionArray[i])
        }
    }
    console.log(tryalSolvedPostion),
    console.log(randomChoiceArray)
}

generatePostions();