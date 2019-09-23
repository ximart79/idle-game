// var score = 0;

// postToPage(score); // Print to the page

// createButton('Button', btnPress); // Make a button
// changeTitle('Clicker Game');

// setInterval(btnPress, 1000);

// function btnPress() {
//   score++;
//   postToPage(score);
// }

var score = 0; // Create a variable to store the score in
var coins = 0; // Create a variable to store the score in
var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('eyeballs', btnPress);         // Create a button element
var scr = new Text(score);        
var coins = new Text(score);              // Create a text element
var button1 = new Button('coins', btnPress2);


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}

function btnPress2() {
  score++;         // decrease the score  
  coins.edit(score); // Update the page with the new score
}

