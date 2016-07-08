
// Create the DOM structure and append the first 4 DIVs
$(setUp)

function setUp() {
  $('body').append($('<div id="topnav">'));
  $('#topnav').append($('<button>'))
     
  $('button').on('click', playGame);
}

function playGame() {
  $('body').append($('<div id="container">'));
  for (n=0; n<20; n++) {
    $('#container').append($('<div id="div' + n +'">')); // create divs with different //IDs style="background-color:red"
  }
  var $items = $("#container > div");
  var itemInterval = setInterval(randomItem, 1000);
  var playerScore = 0;
  var playerLife = 100;
  
  function randomItem() {
    var $randomItem = $items.eq(Math.floor(Math.random() * $items.length));
    if ($($items).hasClass("")) {
      $randomItem.toggleClass("active");
      setTimeout(function() {
        $randomItem.removeClass("active");
        playerLife -= 10;
        console.log("Life " + playerLife);
      }, 2000);
    } 
    clickedItem($randomItem);
  }

  function clickedItem($randomItem) {
    $($randomItem).on('click', function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        playerScore += 100;
        console.log("Score " + playerScore);
      };
    });  
  } 
  

}






