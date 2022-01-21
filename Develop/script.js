// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Variable for "would you like your password to be"
var askPass = "Would you like your password to be: ");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var promptCriteria = window.prompt('Which creteria would you like to use? Respond either "y" or "n" to make your decision. Continue? y/n');
  alert (promptCriteria)
    while (promptCriteria = y) {
      window.alert("How many characters in your password?");
      if (promptCriteria = y) {
        window.alert("How many characters in your password?");
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');


    )
};
