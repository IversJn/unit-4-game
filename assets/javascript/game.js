var targetNumber=Math.floor(Math.random()*120+19);
$("#number-to-guess").text(targetNumber);
$("#your-number").text(tvalue);
$("#wins").text(win);
$("#losses").text(loss);
var mineTools = [1, 1, 1, 1];
var imageTs = ["assets/images/amora-gem-round.png", "ssets/images/pickaxe-hi.png", "assets/images/mining-car-hi.png", "assets/images/mineshafts.jpg"];
var win = 0;
var loss = 0;
// for(i=0; i<mineTools.length; i++){
//     mineTools[i] = Math.floor(Math.random()*12+1);
// }

var counter = 0;

for (var i = 0; i < mineTools.length; i++) {

    var imageTools = $("<img>");

    imageTools.addClass("tools");

    var subimage = imageTs[i];

    imageTools.attr("src", subimage);

    imageTools.attr("tool-value", mineTools[i]);

    $("#tools").append(imageTools);
  }

  $(".tool-value").on("click", function() {


    var tvalue = ($(this).attr("tool-value"));
    tvalue = parseInt(tvalue);

    counter += tvalue;


    if (counter === targetNumber) {
        alert("You found a Fortune!");
        targetNumber=Math.floor(Math.random()*120+19);
        win++;
    }

    else if (counter >= targetNumber) {
        alert("You dug to deep!");
        targetNumber=Math.floor(Math.random()*120+19);
        loss++;
    }

  });

//  I had trouble getting the images to stack up right on width wise. I originally had buttons next to 
// images but decided to switch it after thinking I coulduse an array easier by genarating the image. I failed however 
// To get the images formated correctly during this method and I ran out of time trying to swtich it back to buttons. I know I can switch the values 
// of the buttons using the array to assign random values.