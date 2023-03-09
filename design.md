# Wordleologist

## Front End Functionality

### Entering Guesses

#### Single Character Text Boxes

 - Text boxes can only hold one character, which can only be a capital letter
 - Text boxes toggle between 4 states on click. A live mode, and 3 information entry modes.
    - Live Feedback mode. This sets the color based on wordleologist's evaluation engine
    - Gray. this sets the background to Gray, and tells the app this is gray in the real game
    - Yellow. same, but yellow
    - Green, same but green

#### Rows of Text Boxes
Rows consist of two elements, a group of 5 text boxes, and two control buttons.
 - There should be 6 of rows, just like in wordle
 - Only uppermost un-locked row should be live 
 - Only the live row should display its controls
 - Before they are live, the text boxes in a row are grayed-out and can't be used
 - Once live, the text boxes can be interacted with, and the controls show up for that row
 - Once locked, the next row down becomes live

 The control buttons are:

  - lock/unlock. Once information from wordle has been entered for a row, it can be locked, which will update the math and unlock the next row
  - release. If clicked, it will clear this row, lock it, and go back to the previous row. Should only be available in an unlocked state.

### Live Color Feedback
The feedback engine generates a background color based on the likelihood of different outcomes.
It varies along two axes:
 - Odds of appearing in the word. Blends between Gray and Color
 - Odds of appearing at this position. Sets the Color value by blending between Green and Yellow.

### Remaining Word List
Users should be able to choose to see the list of remaining possible words. It should be hidden by default.

### Getting Hints
Original Strength Wordleologist offered three types of hints, which calculated a score for every remaining word using different methods. These are not sophisticated, and can probably be improved upon, perhaps significantly.

 - Information: For each non-gray letter in the game's alphabet, count the number of remaining words that contain that letter. A word's score is the sum of this count for all its (unique) letters
 - Green Letters: Construct an object that has a count of letters by position using every remaining word. Words are scored by the number of remaining words that have letters and positions in common. 
 - Balanced: Do both scoring methods and add them together.

> As a bonus, if you really want to be impressive, we can rebuild the guess engine to use information theory.

### Other Stuff

 - Users should be able to turn on hard mode (in hard mode, you can only guess words on the remaining word list. This changes the list of words that can be suggested by the hint engine)
 - You need to be able to reset the game