# ROCK PAPER SCISSORS LIZARD SPOCK

A digital playground where anyone, from kids to adults, can induldge in a quick and entertaining game, that is the goal of the Rock Paper Scissors Lizard Spock game website.

This online platform is designed to provide an effortless user experience, ensuring that visitors of all ages can easily grasp it's features and navigate through the website.Even for someone who might not be familiar with game, the website's user friendly layout is designed to guide them through the rules and make their experience playing the game, enjoyable and accessible.

![Responsive mockup](/assets/images/responsive.JPG)

## FEATURES

### EXISTING FEATURES

- **NAVIGATION**

  - The navigation is very simple and easy.
  - The entire content of the website is presented in a single page.
  - The page can be scrolled down to reveal more content, providing further information. 

- **LANDING PAGE**

  - The landing page displays the name of the website, which takes the center stage.
  - Below which the users are introduced to the different combinations of play using images.
  - The game buttons are conveniently located on the same page for users to start playing.
  - The game rules are presented clearly right below for users to learn and reference.
    ![Landing page](/assets/images/landing.JPG)

- **GAME CHOICE DISPLAY AREA**

  - The game area displays two images at the start which serves as a visual rules reminder.
  - The player display shows the image of the user's choice.
  - The computer side reveals a randomly generated choice through an image on it's display.
  - The score is displayed below the images through the game.
    ![Game area](/assets/images/game-display.JPG)

- **SCORE COUNTER**

  - The game score can be seen under each of the player's choice displayed.
  - The game score can incremently grows after each victory of the player or computer.
  - The score counter will remain unaffected in the case of a draw.
    ![Score counter](/assets/images/score.JPG)

- **THE GAME CHOICE BUTTONS**
  - The game choice buttons are displayed right below the game choice display area.
  - The game buttons are easily accessible with the text and icons representing the choice. 
    ![Rules section](/assets/images/footer.JPG)

- **THE RESTART BUTTON**
  - The restart button is displayed along with the game choice buttons for easy access.
  - The restart button resets the scores and resets the game choice display area.
    ![Rules section](/assets/images/footer.JPG)

- **WINNER MESSAGE**
  - A message is displayed when the game is won.
  - The message showss the user who won the game.
  - The game choice buttons are also removed upon reaching this stage of the game.
  - The restart game will still be available for users to play the game again.
    ![Rules section](/assets/images/footer.JPG)

- **THE RULES SECTION**
  - The rules of the game is located in the bottom of the website.
  - Users can easily access it by scrolling down, to comprehend the simple instructions.
    ![Rules section](/assets/images/footer.JPG)



### FEATURES LEFT TO IMPLEMENT

- Seperate section displaying messages generated during each rounf of play.
- Option to chose the number of rounds in a total game.
- Feedback in the form of sound or animation to make the experience more enjoyable.
- Background music, with the option to mute.

## TESTING

- This website has been tested to check if it works on different browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, Safari and Samsung internet.
- The website has been tested using the dev tools device toolbar on the browser to check if it functions and looks good on all standard screen sizes, showing it uses reponsive design.
- All text on the website has been checked to see if it is readable and is easy to understand.
- All the buttons in the website, used to play the game has been tested and is in good working order.
- The score counter has been tested to see if it is incrementing properly.

### VALIDATOR TESTING

- HTML

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

- CSS

  - No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)

- JSHint

  - No major errors were found except for " " is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz), when passing through the official [JSHint code quality tool](https://jshint.com/)

- ACCESSIBILITY
  
  - The colours and fonts used are easy to read and checked using lighthouse in devtools.
    ![Accessibility score](/assets/images/lighthouse.JPG)

## BUGS

### SOLVED BUGS

- The scores were not updating.

  - Fix: There were unassigned functions, which were interupting the code flow, which were later removed until using it again.

- The buttons were not registering on the game.

  - Fix: There were errors breaking the codeflow, which was later corrected.

- Font-awesome icons were not appearing.

  - Fix: The initial font awesome code used was incorrect and had to be corrected and the icons started working.

- All my font-awesome icons were not visible.

  - Fix: Changed the link for the fontawesome website.

## DEPLOYMENT

- This site was deployed using GitHub pages. The steps used to deploy are:
  - In the GitHub repository go to the setting section.
  - Select the main branch as default branch
  - Go to the pages section and set branch to main and save.
  - Once done, the page provided link to the completed website.

The live link can be found here - [ROCK PAPER SCISSORS LIZARD SPOCK](https://md-ash-dot.github.io/rpsls-game/)

## CREDITS

### CONTENT

- The Love Math project done by Code Institute has been the code which was used to learn how to build this website. - [Love Math Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/234519d86b76411aa181e76a55dabe70/)
- All fonts used on the website. - [Link](https://fonts.google.com/)
- Icons used for the game choice buttons. - [Link](https://icon-library.com/)
