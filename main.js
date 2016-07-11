
$(function(){

// variables in order to not keep accessing the DOME
var $items = $("#gameScreen > div");
var $splashText = $('#splashText');
var $splashscreen = $('#splashScreen');
var $gameScreen = $('#gameScreen');
var $topNav = $('#topNav');
var audio = new Audio();
var currentAudioIdx = 0;

// audio loop

var audioFiles = ["sounds/theme.wav"];

audio.src = audioFiles[currentAudioIdx];
audio.play();

audio.onended = function() {
  currentAudioIdx++;

  if(currentAudioIdx > audioFiles.length-1) {
    currentAudioIdx = 0;
  }

  this.src = audioFiles[currentAudioIdx];
  this.play();
}

// players' score and life. 

var playerIndex = 0;
var players = [{
  score: 0,
  life: 100,
},{
  score: 0,
  life: 100,
}];
var player1Wins = 0;
var player2Wins = 0;

//timers

var timerId = 0;
var enemyTimers = [];
var player = players[playerIndex];

// pressing on the start button will remove the splashscreen, create the navigation bar and the game board removing the "hidden" class and start the game.

$splashText.text("Player 1, your turn!");
$('#play').on('click', function() {

  $splashscreen.removeClass("hidden");
  $topNav.addClass("hidden");
  $gameScreen.addClass("hidden");

  playGame();
});

// clicking in one of the figures, will make it disappearing and add 100 points at the player score.

$items.on('click', function() {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).addClass("hidden");
    $(this).addClass("magictime spaceOutUp");
    // $(this).fadeOut(500);
    players[playerIndex].score += 100;
    var audio = {};
    audio["gun"] = new Audio();
    audio["gun"].src = "sounds/gun.wav"
    audio["gun"].play();
    $('#DisplayPlayerScore').text("Score: " + players[playerIndex].score);
    console.log("Score " + players[playerIndex].score);
  };
});

// at the end of the player turn, if the player 2 has not played, will start his turn. Otherwise the two scored will be compared.

function gameOver() {
  stopTimers();
  playerIndex++;
  enemyTimers = [];
  if(playerIndex < 2) {
    console.log(playerIndex, " is the playerIndex")
    $splashscreen.removeClass("hidden");
    $topNav.addClass("hidden");
    $gameScreen.addClass("hidden");
  } else {
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
  $items.removeClass("active");
  $items.addClass("hidden");
  $splashscreen.addClass("hidden");
  $topNav.removeClass("hidden");
  $gameScreen.removeClass("hidden");
  timerId = setInterval(createRandomItem, 1300);

  $('#DisplayPlayerScore').text("Score: " + players[playerIndex].score);
  $('#DisplayPlayerLife').text("Life:" + players[playerIndex].life);
  $splashText.text("Player 2, your turn!");
  // setTimeout(function() {
  //   gameOver();
  // }, 15*1000);
  
// the system will activate randomly a div and it will became the the target of the click. If the target is not clicked in time, the player will lose 10 points of life. 
//The turn ends when the time runs out or when the player life is 0. 

  function createRandomItem() {                                                   // check for the bug
    var $randomItem = $items.eq(Math.floor(Math.random() * $items.length));
    if ($randomItem.hasClass("hidden")) {
      $randomItem.removeClass("hidden");
      $randomItem.addClass("active");
      $randomItem.fadeIn("fast");
      var audio = {};
      audio["enemyvoice"] = new Audio();
      audio["enemyvoice"].src = "sounds/enemyvoice.wav"
      audio["enemyvoice"].play();
      enemyTimers.push(setTimeout(function() {
        if($randomItem.hasClass("active")) {
          $randomItem.removeClass("active");
          $randomItem.addClass("hidden");
          $randomItem.fadeOut("slow");
          audio["enemygun"] = new Audio();
          audio["enemygun"].src = "sounds/enemygun.wav"
          audio["enemygun"].play();
          players[playerIndex].life -= 10;
          $('#DisplayPlayerLife').text("Life:" + players[playerIndex].life);
          console.log(players[playerIndex]);
          if(players[playerIndex].life === 0) {
            gameOver();
          }
        }
      }, 1000));
      console.log(enemyTimers);
    } 
  }
}

// at the end of the game the game board is removed, and in the splash screen will appear the winner. 

function checkForWinner() {
  stopTimers();
  $('#play').addClass("hidden");
  $gameScreen.addClass("hidden");
  $topNav.addClass("hidden");
  $splashscreen.removeClass("hidden");
  $('#restart').removeClass("hidden");
  if (players[0].score > players[1].score) {
    $splashText.text("Player 1 Wins!");
    player1Wins += 1;
    console.log("Player1 Wins!");
  } else if (players[0].score < players[1].score) {
    $splashText.text("Player 2 Wins!");
    player2Wins += 1;
    console.log("Player2 Wins!");
  } else if (players[0].score === players[1].score) {
    $splashText.text("Draw! Beer time!");
  } 
  playerIndex = 0;
  players[0].score = 0;
  players[0].life = 100;
  players[1].score = 0;
  players[1].life = 100;
  $('#player1Victories').text("Wins: " + player1Wins);
  $('#player2Victories').text("Wins:" + player2Wins);

}
$('#restart').on('click', function() {

  $('#restart').addClass("hidden");
  $('#play').removeClass("hidden");
  playGame();
});
});