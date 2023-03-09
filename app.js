const boxes = document.querySelectorAll(".box");
const btn = document.getElementById("start-over");
const maxTurnCount = 9;
let turnCount = 1;
let playerXCount = document.getElementById("player-x-count");
let playerOCount = document.getElementById("player-o-count");
//mock gameboard as an array to keep track of moves
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
//checks for a winning move
function checkForWin(board, player) {
  let win = false;
  //checking for rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == player &&
      board[i][1] == player &&
      board[i][2] == player
    ) {
        
      win = true;
      if (player == "O") {
        playerOCount.innerText = parseInt(playerOCount.innerText) + 1;
      } else {
        playerXCount.innerText = parseInt(playerXCount.innerText) + 1;
      }
      return win;
    }
  }
  //checking for columns
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] == player &&
      board[1][j] == player &&
      board[2][j] == player
    ) {
      win = true;
      if (player == "O") {
        playerOCount.innerText = parseInt(playerOCount.innerText) + 1;
      } else {
        playerXCount.innerText = parseInt(playerXCount.innerText) + 1;
      }
      return win;
    }
  }
  //checking for diagonals
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    win = true;
    if (player == "O") {
      playerOCount.innerText = parseInt(playerOCount.innerText) + 1;
    } else {
      playerXCount.innerText = parseInt(playerXCount.innerText) + 1;
    }
    return win;
  }
  if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
    win = true;
    if (player == "O") {
      playerOCount.innerText = parseInt(playerOCount.innerText) + 1;
    } else {
      playerXCount.innerText = parseInt(playerXCount.innerText) + 1;
    }
    return win;
  }

  return false;
}
//tracking each move based on the box id and player turn
function trackMoves(clickedBox, letter) {
  if (clickedBox == 1 && letter == "o") {
    gameBoard[0][0] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 1 && letter == "x") {
    gameBoard[0][0] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 2 && letter == "o") {
    gameBoard[0][1] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 2 && letter == "x") {
    gameBoard[0][1] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 3 && letter == "o") {
    gameBoard[0][2] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 3 && letter == "x") {
    gameBoard[0][2] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 4 && letter == "o") {
    gameBoard[1][0] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 4 && letter == "x") {
    gameBoard[1][0] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 5 && letter == "o") {
    gameBoard[1][1] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 5 && letter == "x") {
    gameBoard[1][1] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 6 && letter == "o") {
    gameBoard[1][2] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 6 && letter == "x") {
    gameBoard[1][2] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 7 && letter == "o") {
    gameBoard[2][0] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 7 && letter == "x") {
    gameBoard[2][0] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 8 && letter == "o") {
    gameBoard[2][1] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 8 && letter == "x") {
    gameBoard[2][1] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 9 && letter == "o") {
    gameBoard[2][2] = "O";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  } else if (clickedBox == 9 && letter == "x") {
    gameBoard[2][2] = "X";
    if (checkForWin(gameBoard, letter.toUpperCase())) {
      window.alert("Winner!");
    }
  }
  console.log("Box ID:", clickedBox, "Player:", letter);
  console.log(gameBoard);
}
//click listener 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let idInt = parseInt(box.id.charAt(box.id.length - 1));
    //alerts user if a move is tried after the end of a gam
    if (turnCount > maxTurnCount || checkForWin == true) {
      window.alert("Please start a new game!");
    }
    let o = box.querySelector(".o");
    let x = box.querySelector(".x");
    //getting player turn based on turn count - O = odd, X = even
    if (turnCount % 2 != 0 && o.getAttribute("visibility", "false")) {
      trackMoves(idInt, o.className);
      turnCount++;
      o.setAttribute("visibility", "true");
    } else {
      trackMoves(idInt, x.className);
      x.setAttribute("visibility", "true");
      turnCount++;
    }
  });
});
//start over button resets the board
btn.addEventListener("click", startOver);
function startOver() {
  const letterOs = document.querySelectorAll(".o");
  const letterXs = document.querySelectorAll(".x");
  letterOs.forEach((o) => {
    o.setAttribute("visibility", "false");
  });
  letterXs.forEach((x) => {
    x.setAttribute("visibility", "false");
  });
  boxes.forEach((box) => {
    box.setAttribute("win", "false");
  });
  turnCount = 1;
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

function win(boxList) {
  boxList.forEach((box) => {
    box.setAttribute("win", "true");
  });
}
