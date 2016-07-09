
// Create the DOM structure and append the first 4 DIVs
$(setUp)

function setUp() {
  $('body').append($('<button>'));
  $('body').append($('<div id="topnav">'));

  $('button').on('click', playGame);
}

var player1 = {
  Score: 0,
  Life: 100
}

var player2 = {
  Score: 0,
  Life: 100
}

function player1Turn(player1) {
  playGame(player1);
  console.log("Player 1 Score: " + player1.playerScore);
}

function playGame() {
  $('<button>').remove();
  $('body').append($('<div id="screen">'));
  $('#topnav').append($('<form class="scoreBoard" id="DisplayPlayerScore">'));
  $('#topnav').append($('<form class="scoreBoard" id="DisplayPlayerLife">'));
  $('<button>').toggleClass("hidden");

  for (n=0; n<20; n++) {
    $('#screen').append($('<div id="div' + n +'">')); // create divs with different //IDs style="background-color:red"
  }
  var $items = $("#screen > div");
  var timerId = setInterval(createRandomItem, 1000);
  setTimeout(function() {
    clearInterval(timerId);

    // if (playGame(player1)) {
    //   playGame(player2);
    // } else {
    // checkForWinner();
    // console.log(timerId)
    // };

  }, 60*1000); // 60sec
  var playerScore = 0;
  var playerLife = 100;
  
  function createRandomItem() {
    var $randomItem = $items.eq(Math.floor(Math.random() * $items.length));
    if ($($items).hasClass("")) {
      $randomItem.toggleClass("active");
      setTimeout(function() {
        if($randomItem.hasClass("active")) {
          $randomItem.removeClass("active");
          playerLife -= 10;
          $('#DisplayPlayerLife').text("Life:" + playerLife);
          console.log("Life " + playerLife);
          // check for dead ---> if life = 0, start player 2!
            if (player1.Life === 0) {
              //start player2;
            } else {
              //checkForWinner
            }
        }
      }, 2000);
    } 
    clickedItem($randomItem);
  }

  function clickedItem($randomItem) {
    $($randomItem).on('click', function() {
      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          playerScore += 100;
          $('#DisplayPlayerScore').text("Score: " + playerScore);
          console.log("Score " + playerScore);
      };
    });  
  }
}

function checkForWinner() {
  if (player1Score > player2Score) {
    alert("Player 1 Wins!");
  } else {
    alert("Player 2 Wins");
  }
}