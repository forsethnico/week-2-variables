/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.

// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");

// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.

var feelings = "like drinking water from a fire hose.";
document.getElementById('q2').innerHTML = "How I feel about this class: " + feelings;

// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name = "Nicole.";
var message = "Hi, my name is ";
document.getElementById('q3').innerHTML = message + name;

// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var quarter = 25;
var nickel = 5;

var addNumbers = quarter + nickel;
var subNumbers = quarter - nickel;
var multiNumbers = quarter * nickel;
var divNumbers = quarter / nickel;

document.getElementById('q4a').innerHTML = addNumbers;
document.getElementById('q4b').innerHTML = subNumbers;
document.getElementById('q4c').innerHTML = multiNumbers;
document.getElementById('q4d').innerHTML = divNumbers;

// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var joke1 = "Sally sells";
var joke2 = "down by the seashore."
var wholejoke = joke1 + " seashells " + joke2

document.getElementById('q5').innerHTML = wholejoke

// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.

var string1 = "5";
var string2 = "3";

var addNumbers = string1 + string2;
var subNumbers = string1 - string2;
var multiNumbers = string1 * string2;
var divNumbers = string1 / string2;

document.getElementById('q6a').innerHTML = ("Add: " + addNumbers);
document.getElementById('q6b').innerHTML = ("Subtract: " + subNumbers);
document.getElementById('q6c').innerHTML = ("Multiply: " + multiNumbers);
document.getElementById('q6d').innerHTML = ("Divide: " + divNumbers);
document.getElementById('q6note').innerHTML = ("You can only add the two strings through concatenation. For ex. the numbers in the strings above will not return an additive mathematical result (8) and instead you get 5 and 3 placed side by side.")

// 7. When a button is clicked, add content into the ID "q7".

document.getElementById('callAlert').addEventListener("click", function(){
  document.getElementById('q7').innerHTML = "Psych! Get back to work.";
});

// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.

document.getElementById('callDoubleNum').addEventListener("click", function(){
  var doubleNumValue = document.getElementById("doubleNum").value;
  document.getElementById('q8').innerHTML = doubleNumValue * 2;
});

// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5;
var num2 = 10;

if (num1 > num2){
  document.getElementById('q9').innerHTML = ("Yes, the value of " + num1 + " is greater than " + num2 + ".");
} else {
  document.getElementById('q9').innerHTML = ("No, the value of " + num1 + " is not greater than " + num2 + ".")
}

// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.

var score = 45;
if (score >= 90){
  document.getElementById('q10').innerHTML = "Great job!";
} else if (score >= 60){
  document.getElementById('q10').innerHTML = "Nice work, keep practicing.";
} else{
  document.getElementById('q10').innerHTML = "Very bad: study more and retake the test.";
}

// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."

document.getElementById("collectuserinfo").addEventListener("click", function() {
  var username = document.getElementById("name").value;
  var userage = document.getElementById("age").value;
  var usercity = document.getElementById("city").value;
  var results = "My name is " + username + " and I'm " + userage + " years old. I live in " + usercity + ".";
document.getElementById('qa').innerHTML = results;
});

// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var rectwidth = 3;
var rectlength = 2;
var area = rectlength * rectwidth;
document.getElementById('qb').innerHTML = "Area of the rectangle: " + area + " sq. inches.";

// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.

document.getElementById("collectrectinfo").addEventListener("click", function() {
  var rectlength = document.getElementById("length").value;
  var rectwidth = document.getElementById("width").value;
  var area = rectlength * rectwidth;
  document.getElementById('qc').innerHTML = ("The area of your rectangle is: " + area + " sq. inches.");
});

// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.

document.getElementById("findnamelength").addEventListener("click", function() {
  var username = document.getElementById("findname").value;
  var usernamelength = username.length;
  document.getElementById('qd').innerHTML = usernamelength;
});

// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad

document.getElementById("graderesult").addEventListener("click", function () {
    document.getElementById('qe').classList.remove("status-good");
    document.getElementById('qe').classList.remove("status-ok");
    document.getElementById('qe').classList.remove("status-bad");

  var userscore = document.getElementById("scorevalue").value;
  if (userscore >= 90){
    document.getElementById('qe').innerHTML = "Great job!";
    document.getElementById('qe').classList.add("status-good");
  } else if (userscore >= 60){
    document.getElementById('qe').innerHTML = "Nice work, keep practicing";
    document.getElementById('qe').classList.add("status-ok");
  } else{
    document.getElementById('qe').innerHTML = "Very bad, you literally fail at life.";
    document.getElementById('qe').classList.add("status-bad");
    }
  });

/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
