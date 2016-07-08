
// Create the DOM structure and append the first 4 DIVs
var outlaws = $(".outlaw");

$(function() {

  $('body').append($('<div id="topnav">'));
  $('body').append($('<div id="container">'));
  
  for (n=0; n<5; n++) {
    $('#container').append($('<div class="outlaw">'));
  }

// make the system to choose one of the DIVs random and change the color
//   Math.floor(Math.random() * (.outlaw).length) // this.value
});




