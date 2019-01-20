let playerSide;
let computerSide;
let gameStatus = "unfinished";
let winningIndices;

//pick side and hide pickSideScreen and show gamePlayScreen
Array.from(document.getElementsByClassName("pickSideButtons")).forEach(function(x){
    x.onclick = function(){
            
      document.getElementById("pickSideScreen").style.display = "none";
      document.getElementById("gamePlayScreen").style.display = "block";
      playerSide = this.innerHTML;
      playerSide == "x" ? computerSide = "o" : computerSide = "x";
      document.getElementById("pickedMessage").innerHTML = "You picked " + playerSide;
      
      // if player chooses o, then computer is x and goes first
      if (playerSide == "o"){
        computerMove(playerSide, computerSide);
      }
    }
});

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//click on buttons. if button is empty -> update html -> update board -> check if winner -> run computerMove -> check if winner
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
          playerSide = undefined;
          document.getElementById("playAgainButton").style.display = "block";
          if (gameStatus == "draw"){
            document.getElementById("endGameMessage").innerHTML = "It's a draw!";
          } else {
            //this for loop changes colors of winningIndices to olive
            for (let i = 0; i < winningIndices.length; i++){
              document.getElementById(winningIndices[i].toString()).style.backgroundColor = "olive";
            }
            gameStatus == "x" ? document.getElementById("endGameMessage").innerHTML = "x wins!" : document.getElementById("endGameMessage").innerHTML = "o wins!";
          }

        }
      }
    }
  }
});

//when player clicks playAgainButton - reset all the logic and html
document.getElementById("playAgainButton").onclick = function(){
  //resets logic
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  playerSide = undefined;
  computerSide = undefined;
  gameStatus = "unfinished";
  //reset html & css
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
//also, if there is a winner, then the winningIndices are recorded, and I'm changing their color for improved visuals
function checkWinner(board) {

  const winX = "xxx";
  const winO = "ooo";
  let arr = [];

  //check horizontal lines
  for (let i = 0; i < board.length; i = i + 3){
    arr = [];
    winningIndices = [];
    for (let j = 0; j < Math.sqrt(board.length); j++){
      arr.push(board[i + j]);
      winningIndices.push([i + j]);
    }
    if (arr.join("") == winX || arr.join("") == winO){ 
      return arr[0]; 
    }
  }
  
  //check vertical lines
  for (let a = 0; a < Math.sqrt(board.length); a++){a
    arr = [];
    winningIndices = [];                                                
    for (let b = 0; b < board.length; b = b + 3){
      arr.push(board[a + b]);
      winningIndices.push([a + b]);
    }
    if (arr.join("") == winX || arr.join("") == winO){ 
      return arr[0]; 
    }                                                    
  }
  
  //check crossed lines
  let crossOne = [board[0], board[4], board[8]];
  if (crossOne.join("") == winX || crossOne.join("") == winO) { 
    winningIndices = [[0], [4], [8]];
    return crossOne[0]; 
  }
  
  let crossTwo = [board[2], board[4], board[6]];
  if (crossTwo.join("") == winX || crossTwo.join("") == winO) { 
    winningIndices = [[2], [4], [6]];
    return crossTwo[0]; 
  }
    
  //no winner so far, so check if unfinished
  if (board.filter((val) => val == 0).length > 0){
    winningIndices = [];
    return "unfinished"; 
  }
  
  //board is finished and no winnner, so it must be a draw
  winningIndices = [];
  return "draw";
}

function computerMove(playerSide, computerSide){
  
  let index = bestMove(playerSide, computerSide);
  
  document.getElementById(index.toString()).innerHTML = computerSide; 
  board[index] = computerSide;
  
  
  function bestMove(playerSide, computerSide){
    
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
      for (let y = 0; y < board.length; y++){
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
    let arr = [];
    let indices = [];
    
    //check horizontal lines
    for (let i = 0; i < board.length; i = i + 3){
      arr = [];
      indices = [];
      for (let j = 0; j < Math.sqrt(board.length); j++){
        arr.push(board[i + j]);
        indices.push([i + j]);
      }
      if (arr.filter((val) => val == side).length == 2 && arr.filter((val) => val == 0).length == 1){ 
        return indices[arr.indexOf(0)]; 
      }
    }
    
    //check vertical lines
    for (let a = 0; a < Math.sqrt(board.length); a++){
      arr = [];
      indices = [];                                                
      for (let b = 0; b < board.length; b = b + 3){
        arr.push(board[a + b]);
        indices.push([a + b]);
      }
      if (arr.filter((val) => val == side).length == 2 && arr.filter((val) => val == 0).length == 1){ 
        return indices[arr.indexOf(0)]; 
      }                                                   
    }
    
    //check crossed lines
    arr = [board[0], board[4], board[8]];
    if (arr.filter((val) => val == side).length == 2 && arr.filter((val) => val == 0).length == 1){ 
      indices = [[0], [4], [8]];
      return indices[arr.indexOf(0)];
    }

    arr = [board[2], board[4], board[6]];
    if (arr.filter((val) => val == side).length == 2 && arr.filter((val) => val == 0).length == 1){ 
      indices = [[2], [4], [6]];
      return indices[arr.indexOf(0)]; 
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
