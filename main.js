
$(function(){

var $items = $("#gameScreen > div");
var audio = {};
audio["walk"] = new Audio();
audio["walk"].src = "sounds/theme.wav"
audio["walk"].play();
// pressing on the start button will remove the splashscreen, create the navigation bar and the game board removing the "hidden" class and start the game.
$('#splashText').text("Player 1, your turn!");
$('#play').on('click', function() {

  $('#splashScreen').removeClass("hidden");
  $('#topNav').addClass("hidden");
  $('#gameScreen').addClass("hidden");

  playGame();
});

// clicking in one of the figures, will make it disappearing and add 100 points at the player score.

$items.on('click', function() {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).fadeOut("slow");
    player.score += 100;
    var audio = {};
    audio["walk"] = new Audio();
    audio["walk"].src = "sounds/gun.wav"
    audio["walk"].play();
    $('#DisplayPlayerScore').text("Score: " + player.score);
    console.log("Score " + player.score);
  };
});

// players' score and life. 

var playerIndex = 0;
var players = [{
  score: 0,
  life: 100
},{
  score: 0,
  life: 100
}];

//times

var timerId = 0;
var enemyTimers = [];
var player = players[playerIndex];

// at the end of the player turn, if the player 2 has not played, will start his turn. Otherwise the two scored will be compared.

function gameOver() {
  stopTimers();
  playerIndex++;
  enemyTimers = [];
  player = players[playerIndex];
  if(player) {
    $('#splashScreen').removeClass("hidden");
    $('#topNav').addClass("hidden");
    $('#gameScreen').addClass("hidden");
  } else {
    console.log("checkForWinner");
    checkForWinner();
  }
}

function stopTimers() {
  clearInterval(timerId);
  enemyTimers.forEach(function(timer) {
    clearTimeout(timer);
  });
  enemyTimers = [];
}

// when a turn starts, the board is created and a timer of 60 seconds is starting. 

function playGame() {
  console.log("playGame");
  $('#splashScreen').addClass("hidden");
  $('#topNav').removeClass("hidden");
  $('#gameScreen').removeClass("hidden");
  timerId = setInterval(createRandomItem, 1000);

  $('#DisplayPlayerScore').text("Score: " + player.score);
  $('#DisplayPlayerLife').text("Life:" + player.life);
  $('#splashText').text("Player 2, your turn!");
  setTimeout(function() {
    gameOver();
  }, 5*1000);
  
// the system will activate randomly a div and it will became the the target of the click. If the target is not clicked in time, the player will lose 10 points of life. 
//The turn ends when the time runs out or when the player life is 0. 

  function createRandomItem() {                                                   // check for the bug
    var $randomItem = $items.eq(Math.floor(Math.random() * $items.length));
    if ($randomItem.hasClass("")) {
      $randomItem.toggleClass("active");
      $randomItem.fadeIn("fast");
      enemyTimers.push(setTimeout(function() {
        if($randomItem.hasClass("active")) {
          $randomItem.removeClass("active");
          // $randomItem.fadeOut("slow");
          player.life -= 10;
          $('#DisplayPlayerLife').text("Life:" + player.life);
          if(player.life === 0) {
            gameOver();
          }
        }
      }, 3000));
      console.log(enemyTimers);
    } 
  }
}

// at the end of the game the game board is removed, and in the splash screen will appear the winner. 

function checkForWinner() {
  stopTimers();
  $('#play').addClass("hidden");
  $('#gameScreen').addClass("hidden");
  $('#topNav').addClass("hidden");
  $('#splashScreen').removeClass("hidden");
  $('#restart').removeClass("hidden");
  if (players[0].score > players[1].score) {
    $('#splashText').text("Player 1 Wins!");
    console.log("Player1 Wins!");
  } else if (players[0].score < players[1].score) {
    $('#splashText').text("Player 2 Wins!");
    console.log("Player2 Wins!");
  } else {
    $('#splashText').text("Draw! Beer time!");
  }
}
$('#restart').on('click', function() {

  $('#restart').addClass("hidden");
  $('#play').removeClass("hidden");
  playGame();
});
});