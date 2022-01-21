// Assignment code here

var passLength = window.prompt("How many characters in your password? Pick from 1 to 20.");
var passCase = window.prompt("Do you want your password to be case sensitive? y/n");
var passNum = window.prompt("Do you want your password to include numbers? y/n");
var passSpec = window.prompt("Do you want your password to be include special characters? y/n");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = window.prompt("How many characters in your password? Pick from 1 to 20.");
  var passCase = window.prompt("Do you want your password to be case sensitive? y/n");
  var passNum = window.prompt("Do you want your password to include numbers? y/n");
  var passSpec = window.prompt("Do you want your password to be include special characters? y/n");
};