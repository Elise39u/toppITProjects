import { generateChessBoard, generatePostions, checkRulesWithWinPostion} from "./js/chessboard.mjs";
let tryalSolvedPostion = [ [0,1], [1,3], [2,5], [3,7], [4,2], [5,0], [6,7], [7,4] ]
const board = document.getElementById("board1");

document.getElementById("btn-generate").addEventListener("click", function() { generatePostions(board) });
document.getElementById("btn-win").addEventListener("click", function() { checkRulesWithWinPostion(tryalSolvedPostion, board) });

generateChessBoard(board);
