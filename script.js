const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let gameBoard =['','','','','','','','',''];
let gameActive =true;

function checkWin() {
    const winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(const pattern of winPatterns){
        const [a,b,c]=pattern;
        
    }
}