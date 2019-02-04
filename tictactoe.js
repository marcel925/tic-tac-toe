let playerSide;
let computerSide;
let gameStatus = "unfinished";
let winningIndices;
let level;
const winningVariations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//pick side
Array.from(document.getElementsByClassName("pickSideButtons")).forEach(function(x){
    x.onclick = function(){
      playerSide = this.innerHTML;
      playerSide == "x" ? computerSide = "o" : computerSide = "x";
      Array.from(document.getElementsByClassName("pickSideButtons")).forEach(function(x){
        x.style.backgroundColor = "#333333";
      });
      this.style.backgroundColor = "olive";
    }
});
      
//pick level
Array.from(document.getElementsByClassName("pickLevelButtons")).forEach(function(x){
    x.onclick = function(){
      level = this.id;
      Array.from(document.getElementsByClassName("pickLevelButtons")).forEach(function(x){
        x.style.backgroundColor = "#333333";
      });
      this.style.backgroundColor = "olive";
    }
});

//hide pickSideScreen and show gamePlayScreen
document.getElementById("startButton").onclick = function(){
  if (playerSide && level) {
    document.getElementById("introMessage").innerHTML = "";     
    document.getElementById("pickSideScreen").style.display = "none";
    document.getElementById("gamePlayScreen").style.display = "block";
    document.getElementById("pickedMessage").innerHTML = "You picked " + playerSide;
    if (playerSide == "o"){
        computerMove(playerSide, computerSide);
    }
  } else {
    document.getElementById("introMessage").innerHTML = "Pick your level and side first!";
  }
}

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//if button is empty -> update html -> update board -> check if winner -> run computerMove -> check if winner
Array.from(document.getElementsByClassName("ticTacToeButtons")).forEach(function(x){
  x.onclick = function(){
    if (gameStatus == "unfinished"){
      if (this.innerHTML == "") {
        this.innerHTML = playerSide;
        board[parseInt(this.id)] = playerSide;
        gameStatus = checkWinner(board);
        
        if (gameStatus == "unfinished"){
          computerMove(playerSide, computerSide);
          gameStatus = checkWinner(board);
        }
        
        if (gameStatus != "unfinished") {
          document.getElementById("playAgainButton").style.display = "block";
          if (gameStatus == "draw"){
            document.getElementById("endGameMessage").innerHTML = "It's a draw!";
          } else {
            //this for loop changes colors of winningIndices to olive
            for (var i = 0; i < winningIndices.length; i++){
              document.getElementById(winningIndices[i].toString()).style.backgroundColor = "olive";
            }
            gameStatus == "x" ? document.getElementById("endGameMessage").innerHTML = "x wins!" : document.getElementById("endGameMessage").innerHTML = "o wins!";
          }
        }
      }
    }
  }
});

//when player clicks playAgainButton - reset the logic and html
document.getElementById("playAgainButton").onclick = function(){
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  gameStatus = "unfinished";
  document.getElementById("pickSideScreen").style.display = "block";
  document.getElementById("gamePlayScreen").style.display = "none";
  document.getElementById("playAgainButton").style.display = "none";
  document.getElementById("pickedMessage").innerHTML = "";
  document.getElementById("endGameMessage").innerHTML = "";
  Array.from(document.getElementsByClassName("ticTacToeButtons")).forEach(function(x){
    x.innerHTML = "";
    x.style.backgroundColor = "#333333";
  });
}

//function checkBoard(board) returns "x", "o", "draw" or "unfinished". 
function checkWinner(board) {

  const winX = "xxx";
  const winO = "ooo";
  
  for (let i = 0; i < winningVariations.length; i++){
    let line = [board[winningVariations[i][0]], board[winningVariations[i][1]], board[winningVariations[i][2]]].join("");
    if (line == winX || line == winO){
      winningIndices = winningVariations[i];
      return line[0];
    }
  }
    
  //no winner so far, so check if unfinished
  if (board.filter((val) => val == 0).length > 0){
    return "unfinished"; 
  }
  
  //board is finished and no winnner, so it must be a draw
  return "draw";
}

function computerMove(playerSide, computerSide){
  let index;
  
  if (level == "easy"){
    index = easyMove();
  } else if (level == "hard"){
    index = hardMove(playerSide, computerSide);
  } else {
    index = perfectMove(playerSide, computerSide);
  }
  
  document.getElementById(index.toString()).innerHTML = computerSide; 
  board[index] = computerSide;
  
  //easyMove() returns a random empty index with no other tic tac toe logic
  function easyMove(){
    var randomNumber;
    
    function randomMove1to9(){
      randomNumber = Math.floor(Math.random() * 9);
      if (board[randomNumber] != 0){
        randomMove1to9();
      } 
    }
    
    randomMove1to9();
    return randomNumber;
  }  
  
  //hard move returns a good move, but can be beaten using advanced tactics
  function hardMove(playerSide, computerSide){
    
    //default move is center, if available
    if (board[4] == 0){
      return 4;
    }
    
    //if offensive winning move is available, take it!
    let move = findTwoInARowWithEmptyThird(computerSide);

    //if no offensive move, take defensive move, if one is necesary
    if (move == "none") {
      move = findTwoInARowWithEmptyThird(playerSide);
    }

    //no major defenisve or offensive moves available, so take the first index available from set moves (can be beaten using advancced tactics)
    if (move == "none") {
      var movesArray = [0, 2, 6, 8, 1, 3, 5, 7]
      for (var m = 0; m < board.length; m++){
        if (board[m] == 0){
          return m;
        }
      }
    }

    return move;
  }
  
  //perfectMove() return a move with unbeatable logic
  function perfectMove(playerSide, computerSide){
    
    //default move is center, if available
    if (board[4] == 0){
      return 4;
    }
    
    //if offensive winning move is available, take it!
    let move = findTwoInARowWithEmptyThird(computerSide);

    //if no offensive move, take defensive move, if one is necesary
    if (move == "none") {
      move = findTwoInARowWithEmptyThird(playerSide);
    }

    //defensive moves to advanced attacks / edge cases
    if (move == "none"){
      move = defensiveMovesToAdvancedAttacks(playerSide, computerSide);
    }

    //no major defenisve or offensive moves available, so take the first index available
    if (move == "none") {
      for (var y = 0; y < board.length; y++){
        if (board[y] == 0){
          return y;
        }
      }
    }

    return move;
  }
 
  //this function looks for situations where there is a line with 2 of the same symbol with one empty slot. 
  //These are crucial for attacking and defending
  function findTwoInARowWithEmptyThird(side){
    let moveX = "0xx";
    let moveO = "0oo";
    
    for (let i = 0; i < winningVariations.length; i++){
      let line = [board[winningVariations[i][0]], board[winningVariations[i][1]], board[winningVariations[i][2]]].sort().join("");
      if (line == moveX || line == moveO){
        if (board[winningVariations[i][0]] == 0){
          return winningVariations[i][0];
        } else if (board[winningVariations[i][1]] == 0) {
          return winningVariations[i][1];
        } else {
          return winningVariations[i][2];
        }
      }
    }

    return "none";    
  }
  
  //this function defends against specific advanced attacks & edge cases
  function defensiveMovesToAdvancedAttacks(playerSide, computerSide){
    if (board.join("") == [computerSide, 0, 0, 0, playerSide, 0, 0, 0, playerSide].join("")){  
        return 2;
    } else if (
      board.join("") == [0, playerSide, 0, computerSide, computerSide, playerSide, playerSide, 0, 0].join("") ||
      board.join("") == [0, computerSide, playerSide, playerSide, computerSide, 0, 0, playerSide, 0].join("") ||
      board.join("") == [0, 0, 0, 0, computerSide, playerSide, 0, playerSide, 0].join("")) {
        return 8;       
    } else if (
      board.join("") == [playerSide, 0, 0, 0, computerSide, 0, 0, playerSide, 0].join("") || 
      board.join("") == [0, playerSide, 0, 0, computerSide, 0, playerSide, 0, 0].join("") || 
      board.join("") == [computerSide, playerSide, 0, 0, computerSide, 0, 0, 0, playerSide].join("") || 
      board.join("") == [playerSide, 0, 0, 0, computerSide, 0, 0, 0, playerSide].join("") || 
      board.join("") == [0, 0, playerSide, 0, computerSide, 0, playerSide, 0, 0].join("")){
        return 3;
    } else if (
      board.join("") == [playerSide, 0, 0, 0, computerSide, playerSide, 0, 0, 0].join("") || 
      board.join("") == [0, 0, playerSide, playerSide, computerSide, 0, 0, 0, 0].join("")){
        return 1;
    } else if (
      board.join("") == [0, playerSide, 0, 0, computerSide, 0, 0, 0, playerSide].join("") || 
      board.join("") == [0, 0, playerSide, 0, computerSide, 0, 0, playerSide, 0].join("")){
        return 5;
    } else if (
      board.join("") == [0, 0, playerSide, 0, computerSide, 0, 0, 0, playerSide].join("") || 
      board.join("") == [0, 0, 0, 0, computerSide, playerSide, playerSide, 0, 0].join("")){
        return 7;
    } else {
        return "none";
    }
  }
}