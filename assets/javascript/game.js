var targetNumber = Math.floor(Math.random() * 120 + 19);


$("#gems").on("click", gems);
$("#pick").on("click", pick);
$("#cart").on("click", cart);
$("#shaft").on("click", shaft);

var win = 0;
var loss = 0;

var tvalue = 0;

var gemround = 0;
var pickround = 0;
var cartround = 0;
var shaftround = 0;

var gemValue = Math.floor(Math.random() * 12 + 1);
var pickValue = Math.floor(Math.random() * 12 + 1);
var cartValue = Math.floor(Math.random() * 12 + 1);
var shaftValue = Math.floor(Math.random() * 12 + 1);

function gems() {
  if (gemround === 0) {
    gemround = 1;
    gemValue = Math.floor(Math.random() * 12 + 1);
    tvalue += gemValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }

  else if (tvalue === targetNumber) {
    alert("You found a Fortune!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    win++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  
  else if (tvalue >= targetNumber) {
    alert("You dug to deep!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    loss++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  else {
    tvalue += gemValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }

}

function pick() {
  if (pickround === 0) {
    pickround  = 1;
    pickValue = Math.floor(Math.random() * 12 + 1);
    tvalue += pickValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  else if (tvalue === targetNumber) {
    alert("You found a Fortune!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    win++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  
  else if (tvalue >= targetNumber) {
    alert("You dug to deep!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    loss++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  else {
    tvalue += pickValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
}

function cart() {
  if (cartround === 0) {
    cartround = 1;
    cartValue = Math.floor(Math.random() * 12 + 1);
    tvalue += cartValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  else if (tvalue === targetNumber) {
    alert("You found a Fortune!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    win++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  
  else if (tvalue >= targetNumber) {
    alert("You dug to deep!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    loss++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  else {
    tvalue += cartValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
}

function shaft() {
  if (shaftround === 0) {
    shaftround = 1;
    shaftValue = Math.floor(Math.random() * 12 + 1);
    tvalue += shaftValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  else if (tvalue === targetNumber) {
    alert("You found a Fortune!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    win++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  
  else if (tvalue >= targetNumber) {
    alert("You dug to deep!");
    targetNumber = Math.floor(Math.random() * 120 + 19);
    loss++;
    gemround = 0;
    pickround = 0;
    cartround = 0;
    shaftround = 0;
    tvalue = 0;
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }
  else {
    tvalue += shaftValue;
    console.log(tvalue);
    $("#number-to-guess").text(targetNumber);
    $("#tvalue").text(tvalue);
    $("#wins").text(win);
    $("#losses").text(loss);
  }

}
$("#number-to-guess").text(targetNumber);
$("#tvalue").text(tvalue);
$("#wins").text(win);
$("#losses").text(loss);



