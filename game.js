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

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);         // Create a button element
var scr = new Text(score);                     // Create a text element
var button1 = new Button('hello', btnPress2);


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}

function btnPress2() {
  score--;         // decrease the score
  scr.edit(score); // Update the page with the new score
}