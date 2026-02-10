import { generateChessBoard, generatePostions, checkRulesWithWinPostion} from "./js/chessboard.mjs";
let tryalSolvedPostion = [ [1,2], [2,4], [3,6], [4,8], [5,3], [6,1], [7,7], [8,5] ]
const board = document.getElementById("board1");

document.getElementById("btn-generate").addEventListener("click", generatePostions);
document.getElementById("btn-win").addEventListener("click", function() { checkRulesWithWinPostion(tryalSolvedPostion) });

generateChessBoard(board);
