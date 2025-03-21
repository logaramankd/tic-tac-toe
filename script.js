let count = 1;
let itemContainer = document.getElementsByClassName('items');
let result = document.getElementById('result');
let restartBtn = document.getElementById('restart');
let arr = ["⭕", "❌"];
let board = ["", "", "", "", "", "", "", "", ""]; 
let gameOver = false;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
];

// Function to check for a winner
function checkWinner() {
    for (let combo of winningCombinations) {
        let [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            result.innerText = `${board[a]} Wins! 🥂🍻`;
            return;
        }
    }
    if (!board.includes("")) {
        gameOver = true;
        result.innerText = "It's a Draw! 🥂🍻";
    }
}

// Handle user clicks
for (let i = 0; i < itemContainer.length; i++) {
    itemContainer[i].addEventListener('click', (e) => {
        if (!gameOver && board[i] === "") {
            board[i] = arr[count % 2];
            e.target.innerText = board[i];
            count++;
            result.innerText = `${arr[count % 2]} Turns!`;
            checkWinner();
        }
    });
}

// Restart game
restartBtn.addEventListener('click', () => {
    board.fill(""); 
    gameOver = false;
    count = 1;
    result.innerText = ""; 

    for (let i = 0; i < itemContainer.length; i++) {
        itemContainer[i].innerText = "";
    }
});
