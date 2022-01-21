// Assignment code here

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
  var passLength = parseInt(window.prompt("How many characters in your password? Pick from 1 to 20."));
  if (passLength < 20 || passLength > 1) {
    return null;
  }
  var upperCase = window.confirm('Do you want your password to include uppercase characters? Click "ok" if yes.');
  var lowerCase = window.confirm('Do you want your password to include lower case characters? Click "ok" if yes.');
  var passNum = window.confirm('Do you want your password to include numbers? Click "ok" if yes.');
  var passSpec = window.confirm('Do you want your password to be include special characters? Click "ok" if yes.');
};