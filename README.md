# README [1.0.0] 01-16-2022

## Challenge-03-javascript

# Password Generator

This is a web app, written in javascript, that will prompt the user for specific criteria to create a randomized password.

## Website

Use [this](https://antony-q.github.io/challenge-3/) link to visit the hosted site.

URL: https://antony-q.github.io/challenge-3/

## Requested Tasks

The tasks that were required to be met were as follows:

- GIVEN I need a new, secure password
  - WHEN I click the button to generate a password
    - THEN I am presented with a series of prompts for password criteria
  - WHEN prompted for password criteria
    - THEN I select which criteria to include in the password
  - WHEN prompted for the length of the password
    - THEN I choose a length of at least 8 characters and no more than 128 characters
  - WHEN asked for character types to include in the password
    - THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  - WHEN I answer each prompt
    - THEN my input should be validated and at least one character type should be selected
  - WHEN all prompts are answered
    - THEN a password is generated that matches the selected criteria
  - WHEN the password is generated
    - THEN the password is either displayed in an alert or written to the page

## Usage

The program works through the use of an event listener that will initiate when the button labeled, "Generate Password," is clicked.

The program will initiate a series of confirmation prompts requiring user input. The input will determine whether the generated password will include 4 different criteria.

- Uppercase letters
- Lowercase letters
- Numerals
- Special characters

Once the user has completed all of their selections, the **generatePassword()** function will pick values from 4 different arrays, randomly, and will randomly assort them into the final value which will be displayed within the card body, replacing the text, "Your Secure Password."

The program will be ready for use again, immediately, upon returning the final value.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

You are free to use this code as you wish, except for personal and/or monetary gain. I only request that you give credit for the source code to myself, antonyq1992.

## README Update Log:

- antonyq1992 01/24/2022 (last updated)
-
