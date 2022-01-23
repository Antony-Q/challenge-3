// Assignment code here
var upperCase = ["A", "B", "C"]
var lowerCase = ["a", "b", "c"]
var number = ["1", "2", "3"]
var specChar = ["!", "@", "#"]
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
  if (passLength > 20 || passLength < 1) {
    return null;
  }

  var passUpper = window.confirm('Do you want your password to include uppercase characters? Click "ok" if yes.');
  var passLower = window.confirm('Do you want your password to include lower case characters? Click "ok" if yes.');
  var passNum = window.confirm('Do you want your password to include numbers? Click "ok" if yes.');
  var passSpec = window.confirm('Do you want your password to be include special characters? Click "ok" if yes.');
  var possibleChar = [];

  var generatedPass = [];

  if (passUpper) {
    possibleChar = possibleChar.concat(upperCase);
  }
  if (passUpper) {
    possibleChar = possibleChar.concat(lowerCase);
  }
  if (passUpper) {
    possibleChar = possibleChar.concat(number);
  }
  if (passUpper) {
    possibleChar = possibleChar.concat(specChar);
  }
  for (var i = 0; i < passLength; i++) {
    var randomLetter = possibleChar[Math.floor(Math.
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      random() * (possibleChar.length))]
    generatedPass.push(randomLetter);
  }
  return generatedPass;
};