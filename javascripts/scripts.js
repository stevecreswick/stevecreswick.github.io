console.log('... script loaded');  // Manual verify that script is loaded


function generateRandomColor(){  // Create a random color rgb string
  var red = Math.floor(Math.random()*256);  // Random integer between 0-255
  var green = Math.floor(Math.random()*256); // Random integer between 0-255
  var blue = Math.floor(Math.random()*256); // Random integer between 0-255
  return "rgb(" + red + "," + green + "," + blue + ")";  // combine to rgb string
}

function generateRandomPercentage(){  // create random percentage string
  return (Math.floor(Math.random()*200)-50) + "%";  // random percent -50 150
}

function generateHeart(){  // Create a heart h1 node
  var heart = $('<h1>').html("&hearts;").addClass('heart');
  heart.css({color: generateRandomColor()}); // set color to random color
  return heart;
}

function letThereBeAHeart(){
  var heart = generateHeart();  // Create a heart h1
  $('body').append(  heart  );  // Place on the DOM
  heart.animate({
    left: generateRandomPercentage(),  // Animating the left and right position
    top: generateRandomPercentage()
  }, 1000, 'swing', function(){  // duration, easing, completeFunction
    heart.fadeOut();  // After animation is complete... fade it out
  });
}

$(document).ready(function(){  // jquery document ready  (when DOM is ready)

  setInterval(letThereBeAHeart, 50);  // create a heart every 50 miliseconds

  // setInterval(function(){
  //   letThereBeAHeart()
  // }, 50);  // create a heart every 50 miliseconds

});






//
// // var heart = $('<h1>').html("&hearts;").addClass('heart');
//
// var heart = document.createElement('h1');
// heart.innerHTML = "&hearts;";
// heart.className = "heart";
//
