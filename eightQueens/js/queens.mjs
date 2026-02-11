export function doQueensSeeEachOther(queenPostionArray) {
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
            return true;
            break;
        }
    }

    if(illegalPostion === false) { 
        const topRightCheck = queensDiagnoalCheck(queenPostionArray, "topRight");
        const bottomLeftCheck = queensDiagnoalCheck(queenPostionArray, "bottomLeft");
        const topLeftCheck = queensDiagnoalCheck(queenPostionArray, "topLeft");
        const bottomRightCheck = queensDiagnoalCheck(queenPostionArray, "bottomRight");

        if(!topRightCheck && !bottomLeftCheck && !topLeftCheck && !bottomRightCheck) {
            return false;
        } else { 
            return true;
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

function queensDiagnoalCheck(queenPostionArray, direction) {
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