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


## Modeling Wordle
The state of a Wordle game can be modeled with the following things:

 - A group of five sets, each containing the letters that could be present at each position in the target word
 - A set of letters that must be present in the target word

 - **Gray Letters**: gray letters cannot appear in the target word. Gray letters should be removed from all 5 position sets
 - **Yellow Letters**: yellow letters must appear in the target word, but not at that position. These should be added to the set of required letters, but removed from the position set at the position where it was guessed
 - **Green Letters**: green letters are present in the target word, at the position where they were guessed. These should replace the corresponding position set with a set containing only the guessed letter.


### Special Conditions
Wordle has some subtle behavior when a guessed word has multiple instances of the same letter.
If, for instance, the guessed word has two Ts, and there is one T in the target word, Wordle will show one of the guessed Ts as yellow (or green), but the other will be gray.
This needs to be handled specifically in the code, because marking the same letter as Gray and Yellow according to the above rules will result in a game state that is impossible to complete. 

I didn't actually do this in original strength wordleologist, so I don't have a solution ready to go, but there are a few things we can do.
Option 1: Ignore Gray letters that are already yellow letters. If a gray letter appears in the set of required letters, take no action. This will require us to always process Yellow letters before gray letters.
Option 2: detect guessed words with repeated letters, and do something fancy with the information they generate.
Option 3: (option 2+) Add something to state that keeps track of the number of instances in each letter in the target word. And then also do something special with double letter guessed words to update the counters.



## Colors
These are the colors used on the wordle website

 - **Green:** 6AAA64
 - **Gray:** 787C7E
 - **Yellow:** C9B458

