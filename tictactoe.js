

var player;

$("#pickX").click(function(){

  $("#pickX, #pickO, #notice").hide();
  $("#pickSideText").html("You Picked X");
  player = 1;
  newGame();
  
});


$("#pickO").click(function() {

  $("#pickX, #pickO, #notice").hide();
  $("#pickSideText").html("You Picked O");
  player = 2;
  newGame();
  aiMove();
  
});


var movesMade = 0;
  
    
$("#button1").click(function() {
  var p1 = document.getElementById("button1").innerHTML;
  if (p1 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p1 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button1").html("X");
    $("#button1").css("color", "white");
  }
  
  if (player == 2) {
    $("#button1").html("O");
    $("#button1").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
    
  } // end of player 2 if statement
  
}); // end of click function


$("#button2").click(function() {
  var p2 = document.getElementById("button2").innerHTML;
  if (p2 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p2 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button2").html("X");
    $("#button2").css("color", "white");
  }
  
  if (player == 2) {
    $("#button2").html("O");
    $("#button2").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
     
    
  } // end of player 2 if statement
  
}); // end of click function


$("#button3").click(function() {
  var p3 = document.getElementById("button3").innerHTML;
  if (p3 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p3 == "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button3").html("X");
    $("#button3").css("color", "white");
  }
    
  if (player == 2) {
    $("#button3").html("O");
    $("#button3").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
    
  } // end of player 2 if statement
  
}); // end of click function


$("#button4").click(function() {
  var p4 = document.getElementById("button4").innerHTML;
  if (p4 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p4 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button4").html("X");
    $("#button4").css("color", "white");
  }
  
  if (player == 2) {
    $("#button4").html("O");
    $("#button4").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
         
  } // end of player 2 if statement
  
}); // end of click function



$("#button5").click(function() {
  var p5 = document.getElementById("button5").innerHTML;
  if (p5 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p5 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button5").html("X");
    $("#button5").css("color", "white");
  }
  
  if (player == 2) {
    $("#button5").html("O");
    $("#button5").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
     
    
  } // end of player 2 if statement
  
}); // end of click function


$("#button6").click(function() {
  var p6 = document.getElementById("button6").innerHTML;
  if (p6 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p6 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button6").html("X");
    $("#button6").css("color", "white");
  }
  
  if (player == 2) {
    $("#button6").html("O");
    $("#button6").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
         
  } // end of player 2 if statement
  
}); // end of click function


$("#button7").click(function() {
  var p7 = document.getElementById("button7").innerHTML;
  if (p7 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p7 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button7").html("X");
    $("#button7").css("color", "white");
  }
  
  if (player == 2) {
    $("#button7").html("O");
    $("#button7").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
    
  } // end of player 2 if statement
  
}); // end of click function



$("#button8").click(function() {
  var p8 = document.getElementById("button8").innerHTML;
  if (p8 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p8 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button8").html("X");
    $("#button8").css("color", "white");
  }
  
  if (player == 2) {
    $("#button8").html("O");
    $("#button8").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
         
  } // end of player 2 if statement
  
}); // end of click function



$("#button9").click(function() {
  var p9 = document.getElementById("button9").innerHTML;
  if (p9 !== "P") {
    $("#invalidClick").html("Invalid move: please click empty square!");
  }
  
  if (p9 === "P") {
    $("#invalidClick").html("");
    
  if (player == 1) {
    $("#button9").html("X");
    $("#button9").css("color", "white");
  }
  
  if (player == 2) {
    $("#button9").html("O");
    $("#button9").css("color", "white");
  }
  
  movesMade++;
  gameOverTest1();
   
//  aiMove();
//  gameOver();
         
  } // end of player 2 if statement
  
}); // end of click function






function newGame() {
  
  movesMade = 0;
  
  $("#button9, #button8, #button7, #button6, #button5, #button4, #button3, #button2, #button1").css("color", "#333333");
  
  $("#button9, #button8, #button7, #button6, #button5, #button4, #button3, #button2, #button1").html("P");
  
  $("#button9, #button8, #button7, #button6, #button5, #button4, #button3, #button2, #button1").css("background-color", "#333333");

}


function gameOverTest1() {
  
  var g1 = document.getElementById("button1").innerHTML;
  var g2 = document.getElementById("button2").innerHTML;
  var g3 = document.getElementById("button3").innerHTML;
  var g4 = document.getElementById("button4").innerHTML;
  var g5 = document.getElementById("button5").innerHTML;
  var g6 = document.getElementById("button6").innerHTML;
  var g7 = document.getElementById("button7").innerHTML;
  var g8 = document.getElementById("button8").innerHTML;
  var g9 = document.getElementById("button9").innerHTML;
  
  if (g1 == "X" && g2 == "X" && g3 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button2, #button3").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();

  }
  
  else if (g4 == "X" && g5 == "X" && g6 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button4, #button5, #button6").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g7 == "X" && g8 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#button7, #button8, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g1 == "X" && g4 == "X" && g7 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#button1, #button4, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g2 == "X" && g5 == "X" && g8 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#button2, #button5, #button8").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g3 == "X" && g6 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button6, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g1 == "X" && g5 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button5, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g3 == "X" && g5 == "X" && g7 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button5, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  
  
  else if (g1 == "O" && g2 == "O" && g3 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button2, #button3").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g4 == "O" && g5 == "O" && g6 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button4, #button5, #button6").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g7 == "O" && g8 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button7, #button8, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g1 == "O" && g4 == "O" && g7 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button4, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g2 == "O" && g5 == "O" && g8 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button2, #button5, #button8").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g3 == "O" && g6 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button6, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g1 == "O" && g5 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button5, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g3 == "O" && g5 == "O" && g7 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button5, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  
  else if (movesMade === 9) {
    $("#pickSideText").append("<p>Game Over. It's a draw! </p> <p> Pick a side to start a new game!</p>");
    $("#pickX, #pickO, #notice").show();
  }
  
  else {
    aiMove();
    gameOverTest2();
  }
}


function gameOverTest2() {
  
  var g1 = document.getElementById("button1").innerHTML;
  var g2 = document.getElementById("button2").innerHTML;
  var g3 = document.getElementById("button3").innerHTML;
  var g4 = document.getElementById("button4").innerHTML;
  var g5 = document.getElementById("button5").innerHTML;
  var g6 = document.getElementById("button6").innerHTML;
  var g7 = document.getElementById("button7").innerHTML;
  var g8 = document.getElementById("button8").innerHTML;
  var g9 = document.getElementById("button9").innerHTML;
  
  if (g1 == "X" && g2 == "X" && g3 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button2, #button3").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();

  }
  
  if (g4 == "X" && g5 == "X" && g6 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button4, #button5, #button6").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g7 == "X" && g8 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#button7, #button8, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g1 == "X" && g4 == "X" && g7 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#button1, #button4, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g2 == "X" && g5 == "X" && g8 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#button2, #button5, #button8").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g3 == "X" && g6 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button6, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g1 == "X" && g5 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button5, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g3 == "X" && g5 == "X" && g7 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button5, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  
  
  if (g1 == "O" && g2 == "O" && g3 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button2, #button3").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g4 == "O" && g5 == "O" && g6 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button4, #button5, #button6").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g7 == "O" && g8 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button7, #button8, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g1 == "O" && g4 == "O" && g7 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button4, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g2 == "O" && g5 == "O" && g8 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button2, #button5, #button8").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g3 == "O" && g6 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button6, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g1 == "O" && g5 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button1, #button5, #button9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  if (g3 == "O" && g5 == "O" && g7 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#button3, #button5, #button7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  
  if (movesMade === 9) {
    $("#pickSideText").append("<p>Game Over. It's a draw! </p> <p> Pick a side to start a new game!</p>");
    $("#pickX, #pickO, #notice").show();
  }
 
}


 function aiMove() { 
    
  var x1 = document.getElementById("button1").innerHTML;
  var x2 = document.getElementById("button2").innerHTML;
  var x3 = document.getElementById("button3").innerHTML;
  var x4 = document.getElementById("button4").innerHTML;
  var x5 = document.getElementById("button5").innerHTML;
  var x6 = document.getElementById("button6").innerHTML;
  var x7 = document.getElementById("button7").innerHTML;
  var x8 = document.getElementById("button8").innerHTML;
  var x9 = document.getElementById("button9").innerHTML;
  
  movesMade++;
     
  if (player === 1) {
    if ( x5 === "P" ) {
      $("#button5").html("O");
      $("#button5").css("color", "white");
  }
    
    //offensive moves shall go below here and above the next note
    
    else if ( x5 === "O" && x1 === "O" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
    
    else if ( x5 === "O" && x3 === "O" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
    
    else if ( x5 === "O" && x7 === "O" && x3 === "P" ) {
      $("#button3").html("O");
      $("#button3").css("color", "white");
    }
    
    else if ( x5 === "O" && x9 === "O" && x1 === "P" ) {
      $("#button1").html("O");
      $("#button1").css("color", "white");
    }
    
    else if ( x5 === "O" && x2 === "O" && x8 === "P" ) {
      $("#button8").html("O");
      $("#button8").css("color", "white");
    }
    
    else if ( x5 === "O" && x4 === "O" && x6 === "P" ) {
      $("#button6").html("O");
      $("#button6").css("color", "white");
    }
    
    else if ( x5 === "O" && x6 === "O" && x4 === "P" ) {
      $("#button4").html("O");
      $("#button4").css("color", "white");
    }
    
    else if ( x5 === "O" && x8 === "O" && x2 === "P" ) {
      $("#button2").html("O");
      $("#button2").css("color", "white");
    }
    
    // below are offensive moves NOT involving x5 
    
    else if ( x1 === "O" && x2 === "O" && x3 === "P" ) {
      $("#button3").html("O");
      $("#button3").css("color", "white");
    }
    
    else if ( x1 === "O" && x3 === "O" && x2 === "P" ) {
      $("#button2").html("O");
      $("#button2").css("color", "white");
    }
    
    else if ( x2 === "O" && x3 === "O" && x1 === "P" ) {
      $("#button1").html("O");
      $("#button1").css("color", "white");
    }
    
    else if ( x1 === "O" && x4 === "O" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
    
    else if ( x1 === "O" && x7 === "O" && x4 === "P" ) {
      $("#button4").html("O");
      $("#button4").css("color", "white");
    }
    
    else if ( x4 === "O" && x7 === "O" && x1 === "P" ) {
      $("#button1").html("O");
      $("#button1").css("color", "white");
    }
    
    else if ( x3 === "O" && x6 === "O" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
    
    else if ( x3 === "O" && x9 === "O" && x6 === "P" ) {
      $("#button6").html("O");
      $("#button6").css("color", "white");
    }
    
    else if ( x6 === "O" && x9 === "O" && x3 === "P" ) {
      $("#button3").html("O");
      $("#button3").css("color", "white");
    }
    
    else if ( x7 === "O" && x8 === "O" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
    
    else if ( x7 === "O" && x9 === "O" && x8 === "P" ) {
      $("#button8").html("O");
      $("#button8").css("color", "white");
    }
    
    else if ( x8 === "O" && x9 === "O" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
    
    
    
    //defensive moves involving x5 below
    
    else if ( x5 === "X" && x1 === "X" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
    
    else if ( x5 === "X" && x3 === "X" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
    
    else if ( x5 === "X" && x7 === "X" && x3 === "P" ) {
      $("#button3").html("O");
      $("#button3").css("color", "white");
    }
    
    else if ( x5 === "X" && x9 === "X" && x1 === "P" ) {
      $("#button1").html("O");
      $("#button1").css("color", "white");
    }
    
    else if ( x5 === "X" && x2 === "X" && x8 === "P" ) {
      $("#button8").html("O");
      $("#button8").css("color", "white");
    }
    
    else if ( x5 === "X" && x4 === "X" && x6 === "P" ) {
      $("#button6").html("O");
      $("#button6").css("color", "white");
    }
    
    else if ( x5 === "X" && x6 === "X" && x4 === "P" ) {
      $("#button4").html("O");
      $("#button4").css("color", "white");
    }
    
    else if ( x5 === "X" && x8 === "X" && x2 === "P" ) {
      $("#button2").html("O");
      $("#button2").css("color", "white");
    }
    
    // below are defensive moves NOT involving x5 
    
    else if ( x1 === "X" && x2 === "X" && x3 === "P" ) {
      $("#button3").html("O");
      $("#button3").css("color", "white");
    }
    
    else if ( x1 === "X" && x3 === "X" && x2 === "P" ) {
      $("#button2").html("O");
      $("#button2").css("color", "white");
    }
    
    else if ( x2 === "X" && x3 === "X" && x1 === "P" ) {
      $("#button1").html("O");
      $("#button1").css("color", "white");
    }
    
    else if ( x1 === "X" && x4 === "X" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
    
    else if ( x1 === "X" && x7 === "X" && x4 === "P" ) {
      $("#button4").html("O");
      $("#button4").css("color", "white");
    }
    
    else if ( x4 === "X" && x7 === "X" && x1 === "P" ) {
      $("#button1").html("O");
      $("#button1").css("color", "white");
    }
    
    else if ( x3 === "X" && x6 === "X" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
    
    else if ( x3 === "X" && x9 === "X" && x6 === "P" ) {
      $("#button6").html("O");
      $("#button6").css("color", "white");
    }
    
    else if ( x6 === "X" && x9 === "X" && x3 === "P" ) {
      $("#button3").html("O");
      $("#button3").css("color", "white");
    }
    
    else if ( x7 === "X" && x8 === "X" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
    
    else if ( x7 === "X" && x9 === "X" && x8 === "P" ) {
      $("#button8").html("O");
      $("#button8").css("color", "white");
    }
    
    else if ( x8 === "X" && x9 === "X" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
    
     // below are defenses to fancy moves
     
     else if ( x1 === "X" && x8 === "X" && x5 === "O" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
     
     else if ( x3 === "X" && x8 === "X" && x5 === "O" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
    
     else if ( x7 === "X" && x6 === "X" && x5 === "O" && x9 === "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
    }
     
     else if ( x4 === "X" && x9 === "X" && x5 === "O" && x7 === "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
    }
    
    
    
    else if ( x1 === "X" && x9 === "X" && x5 === "O" && x2 === "P" ) {
      $("#button2").html("O");
      $("#button2").css("color", "white");
    }
     
     else if ( x3 === "X" && x7 === "X" && x5 === "O" && x2 === "P" ) {
      $("#button2").html("O");
      $("#button2").css("color", "white");
    }
    
    
    // below this are back up moves, in this order: (5) 1, 3, 7, 9, 2, 4, 6, 8. 
    
    else if ( x1 == "P" ) {
      $("#button1").html("O");
      $("#button1").css("color", "white");
  }
    
    else if ( x3 == "P" ) {
      $("#button3").html("O");
      $("#button3").css("color", "white");
  }
    
    else if ( x7 == "P" ) {
      $("#button7").html("O");
      $("#button7").css("color", "white");
  }
    
    else if ( x9 == "P" ) {
      $("#button9").html("O");
      $("#button9").css("color", "white");
  }
        
    else if ( x2 == "P" ) {
      $("#button2").html("O");
      $("#button2").css("color", "white");
  }
    
    else if ( x4 == "P" ) {
      $("#button4").html("O");
      $("#button4").css("color", "white");
  }
    
    else if ( x6 == "P" ) {
      $("#button6").html("O");
      $("#button6").css("color", "white");
  }
    
    else if ( x8 == "P" ) {
      $("#button8").html("O");
      $("#button8").css("color", "white");
  }
   
  
  } //end of if player == 1
   
   
   if (player == 2) {
   
     if ( x5 === "P" ) {
      $("#button5").html("X");
      $("#button5").css("color", "white");
  }     
     
  // below are the player 2 offensive moves
     
     else if ( x5 === "X" && x1 === "X" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
    
    else if ( x5 === "X" && x3 === "X" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
    
    else if ( x5 === "X" && x7 === "X" && x3 === "P" ) {
      $("#button3").html("X");
      $("#button3").css("color", "white");
    }
    
    else if ( x5 === "X" && x9 === "X" && x1 === "P" ) {
      $("#button1").html("X");
      $("#button1").css("color", "white");
    }
    
    else if ( x5 === "X" && x2 === "X" && x8 === "P" ) {
      $("#button8").html("X");
      $("#button8").css("color", "white");
    }
    
    else if ( x5 === "X" && x4 === "X" && x6 === "P" ) {
      $("#button6").html("X");
      $("#button6").css("color", "white");
    }
    
    else if ( x5 === "X" && x6 === "X" && x4 === "P" ) {
      $("#button4").html("X");
      $("#button4").css("color", "white");
    }
    
    else if ( x5 === "X" && x8 === "X" && x2 === "P" ) {
      $("#button2").html("X");
      $("#button2").css("color", "white");
    }
    
    // below are offensive moves NOT involving x5 
    
    else if ( x1 === "X" && x2 === "X" && x3 === "P" ) {
      $("#button3").html("X");
      $("#button3").css("color", "white");
    }
    
    else if ( x1 === "X" && x3 === "X" && x2 === "P" ) {
      $("#button2").html("X");
      $("#button2").css("color", "white");
    }
    
    else if ( x2 === "X" && x3 === "X" && x1 === "P" ) {
      $("#button1").html("X");
      $("#button1").css("color", "white");
    }
    
    else if ( x1 === "X" && x4 === "X" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
    
    else if ( x1 === "X" && x7 === "X" && x4 === "P" ) {
      $("#button4").html("X");
      $("#button4").css("color", "white");
    }
    
    else if ( x4 === "X" && x7 === "X" && x1 === "P" ) {
      $("#button1").html("X");
      $("#button1").css("color", "white");
    }
    
    else if ( x3 === "X" && x6 === "X" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
    
    else if ( x3 === "X" && x9 === "X" && x6 === "P" ) {
      $("#button6").html("X");
      $("#button6").css("color", "white");
    }
    
    else if ( x6 === "X" && x9 === "X" && x3 === "P" ) {
      $("#button3").html("X");
      $("#button3").css("color", "white");
    }
    
    else if ( x7 === "X" && x8 === "X" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
    
    else if ( x7 === "X" && x9 === "X" && x8 === "P" ) {
      $("#button8").html("X");
      $("#button8").css("color", "white");
    }
    
    else if ( x8 === "X" && x9 === "X" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
     
     //below are the player 2 defensive moves
     
     else if ( x5 === "O" && x1 === "O" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
    
    else if ( x5 === "O" && x3 === "O" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
    
    else if ( x5 === "O" && x7 === "O" && x3 === "P" ) {
      $("#button3").html("X");
      $("#button3").css("color", "white");
    }
    
    else if ( x5 === "O" && x9 === "O" && x1 === "P" ) {
      $("#button1").html("X");
      $("#button1").css("color", "white");
    }
    
    else if ( x5 === "O" && x2 === "O" && x8 === "P" ) {
      $("#button8").html("X");
      $("#button8").css("color", "white");
    }
    
    else if ( x5 === "O" && x4 === "O" && x6 === "P" ) {
      $("#button6").html("X");
      $("#button6").css("color", "white");
    }
    
    else if ( x5 === "O" && x6 === "O" && x4 === "P" ) {
      $("#button4").html("X");
      $("#button4").css("color", "white");
    }
    
    else if ( x5 === "O" && x8 === "O" && x2 === "P" ) {
      $("#button2").html("X");
      $("#button2").css("color", "white");
    }
    
    // below are offensive moves NOT involving x5 
    
    else if ( x1 === "O" && x2 === "O" && x3 === "P" ) {
      $("#button3").html("X");
      $("#button3").css("color", "white");
    }
    
    else if ( x1 === "O" && x3 === "O" && x2 === "P" ) {
      $("#button2").html("X");
      $("#button2").css("color", "white");
    }
    
    else if ( x2 === "O" && x3 === "O" && x1 === "P" ) {
      $("#button1").html("X");
      $("#button1").css("color", "white");
    }
    
    else if ( x1 === "O" && x4 === "O" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
    
    else if ( x1 === "O" && x7 === "O" && x4 === "P" ) {
      $("#button4").html("X");
      $("#button4").css("color", "white");
    }
    
    else if ( x4 === "O" && x7 === "O" && x1 === "P" ) {
      $("#button1").html("X");
      $("#button1").css("color", "white");
    }
    
    else if ( x3 === "O" && x6 === "O" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
    
    else if ( x3 === "O" && x9 === "O" && x6 === "P" ) {
      $("#button6").html("X");
      $("#button6").css("color", "white");
    }
    
    else if ( x6 === "O" && x9 === "O" && x3 === "P" ) {
      $("#button3").html("X");
      $("#button3").css("color", "white");
    }
    
    else if ( x7 === "O" && x8 === "O" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
    
    else if ( x7 === "O" && x9 === "O" && x8 === "P" ) {
      $("#button8").html("X");
      $("#button8").css("color", "white");
    }
    
    else if ( x8 === "O" && x9 === "O" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
     
     // below are defenses to fancy starting moves
     
     else if ( x1 === "O" && x8 === "O" && x5 === "X" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
     
     else if ( x3 === "O" && x8 === "O" && x5 === "X" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
     
     else if ( x7 === "O" && x6 === "O" && x5 === "X" && x9 === "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
    }
     
     else if ( x4 === "O" && x9 === "O" && x5 === "X" && x7 === "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
    }
     
     else if ( x1 === "O" && x9 === "O" && x5 === "X" && x2 === "P" ) {
      $("#button2").html("X");
      $("#button2").css("color", "white");
    }
     
     else if ( x3 === "O" && x7 === "O" && x5 === "X" && x2 === "P" ) {
      $("#button2").html("X");
      $("#button2").css("color", "white");
    }
     
  // below this are back up moves, in this order: (5) 1, 3, 7, 9, 2, 4, 6, 8. 
    
    else if ( x1 == "P" ) {
      $("#button1").html("X");
      $("#button1").css("color", "white");
  }
    
    else if ( x3 == "P" ) {
      $("#button3").html("X");
      $("#button3").css("color", "white");
  }
    
    else if ( x7 == "P" ) {
      $("#button7").html("X");
      $("#button7").css("color", "white");
  }
    
    else if ( x9 == "P" ) {
      $("#button9").html("X");
      $("#button9").css("color", "white");
  }
        
    else if ( x2 == "P" ) {
      $("#button2").html("X");
      $("#button2").css("color", "white");
  }
    
    else if ( x4 == "P" ) {
      $("#button4").html("X");
      $("#button4").css("color", "white");
  }
    
    else if ( x6 == "P" ) {
      $("#button6").html("X");
      $("#button6").css("color", "white");
  }
    
    else if ( x8 == "P" ) {
      $("#button8").html("X");
      $("#button8").css("color", "white");
  }
  
   } // end of if player == 2
} //end of AI move 

