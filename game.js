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
var coinButton = new Text(coins);              // Create a text element
var button1 = new Button('coins', btnPress2);
var text1 = new Text('I will go in column 1');  // Create some text to go in the columns
var text2 = new Text('I will go in column 2');
var rowSection = new Section('row'); // Create the row to store the columns in
var column1 = new Section('col');    // Create the first column
var column2 = new Section('col');    // Create the second column

rowSection.add(column1);
rowSection.add(column2);

column1.add(text1);
column2.add(text2);

function btnPress() {
  score++;
  scr.edit(score);
}

function btnPress2() {
  coins++;         // decrease the score  
  coinButton.edit(coins); // Update the page with the new score
}

