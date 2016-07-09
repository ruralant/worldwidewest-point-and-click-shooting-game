
// Create the DOM structure and append the first 4 DIVs
$(function(){

var $items = $("#gameScreen > div");

$('button').on('click', function() {

  $('#splashScreen').removeClass("hidden");
  $('#topNav').addClass("hidden");
  $('#gameScreen').addClass("hidden");

  playGame();
});

$items.on('click', function() {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    player.score += 100;
    $('#DisplayPlayerScore').text("Score: " + player.score);
    console.log("Score " + player.score);
  };
});

var playerIndex = 0;

var players = [{
  score: 0,
  life: 100
},{
  score: 0,
  life: 100
}];
var timerId = 0;
var player = players[playerIndex];

function gameOver() {
  clearInterval(timerId);
  playerIndex++;
  player = players[playerIndex];

  if(player) {
    $('#splashScreen').removeClass("hidden");
    $('#topNav').addClass("hidden");
    $('#gameScreen').addClass("hidden");
  } else {
    checkForWinner();
  }
}


function playGame() {

  $('#splashScreen').addClass("hidden");
  $('#topNav').removeClass("hidden");
  $('#gameScreen').removeClass("hidden");
  timerId = setInterval(createRandomItem, 1000);

  $('#DisplayPlayerScore').text("Score: " + player.score);
  $('#DisplayPlayerLife').text("Life:" + player.life);

  setTimeout(function() {
    gameOver();
  }, 30*1000); // 10sec
  
  function createRandomItem() {                                                   // check for the bug
    var $randomItem = $items.eq(Math.floor(Math.random() * $items.length));
    if ($randomItem.hasClass("")) {
      $randomItem.toggleClass("active");
      setTimeout(function() {
        if($randomItem.hasClass("active")) {
          $randomItem.removeClass("active");
          player.life -= 10;
          $('#DisplayPlayerLife').text("Life:" + player.life);
          if(player.life === 0) {
            // stop(createRandomItem);
            gameOver();
          }
        }
      }, 1000);
    } 
    setTimeout(function() {
    }, 28*1000); // 10sec
  }
}

function checkForWinner() {
  $('#splashScreen').addClass("hidden");
  $('#winner').removeClass("hidden");
  $('button').addClass("hidden");
  $('#topNav').removeClass("hidden");
  $('#gameScreen').removeClass("hidden");
  if (players[0].score > players[1].score) {
    $('#winner').text("Player 1 Wins!");
    //alert("Player 1 Wins!");
  } else {
    $('#winner').text("Player 1 Wins!");
  }
  // $(start)
}

});