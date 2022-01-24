// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"]

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

// Prompt for length of password
function generatePassword() {
  var passLength = parseInt(window.prompt("How many characters in your password? Pick from 8 to 128."));
  if (passLength > 128 || passLength < 8) {
    return null;
  }

// Password criteria prompts
  var passUpper = window.confirm('Do you want your password to include uppercase characters? Click "ok" if yes.');
  var passLower = window.confirm('Do you want your password to include lower case characters? Click "ok" if yes.');
  var passNum = window.confirm('Do you want your password to include numbers? Click "ok" if yes.');
  var passSpec = window.confirm('Do you want your password to be include special characters? Click "ok" if yes.');
  
  var possibleChar = [];

  var generatedPass = [];

  if (passUpper) {
    possibleChar = possibleChar.concat(upperCase);
  }
  if (passLower) {
    possibleChar = possibleChar.concat(lowerCase);
  }
  if (passNum) {
    possibleChar = possibleChar.concat(number);
  }
  if (passSpec) {
    possibleChar = possibleChar.concat(specChar);
  }


  for (var i = 0; i < passLength; i++) {
    var randomLetter = possibleChar[Math.floor(Math.random() * (possibleChar.length))]
    generatedPass.push(randomLetter);
  }


  return generatedPass.join("");
};