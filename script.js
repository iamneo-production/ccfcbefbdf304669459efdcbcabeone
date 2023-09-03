const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            highlightWinningCells(pattern);
            setTimeout(() => {
                message.innerText = `${currentPlayer} wins!`;
            }, 500);
            break;
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        setTimeout(() => {
            message.innerText = "It's a draw!";
        }, 500);
    }
}

function highlightWinningCells(pattern) {
    for (const index of pattern) {
        cells[index].style.backgroundColor = '#4caf50';
        cells[index].style.color = '#fff';
    }
}

function handleClick(event) {
    const cell = event.target;
    const cellIndex = [...cells].indexOf(cell);

    if (gameBoard[cellIndex] === '' && gameActive) {
        cell.innerText = currentPlayer;
        cell.style.transform = 'scale(1.1)';
        gameBoard[cellIndex] = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.innerText = `Player ${currentPlayer}'s Turn`;
    }
}

function restartGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    message.innerText = `Player ${currentPlayer}'s Turn`;

    cells.forEach((cell) => {
        cell.innerText = '';
        cell.style.backgroundColor = '#ddd';
        cell.style.color = '#000';
        cell.style.transform = 'scale(1)';
    });
}

cells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
});

restartButton.addEventListener('click', restartGame);
