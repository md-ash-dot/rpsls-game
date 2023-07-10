# ROCK PAPER SCISSORS LIZARD SPOCK

The Rock Paper Scissors lizard spock game website is a landing page for members of the public looking to have some fun playing a quick game.

Users of this webiste will be able to very easily understand, navigate and use the website. They will also be able to easily learn how the game works, if they aren't familiar with it.

![Responsive mockup](/assets/images/responsive.JPG)

## FEATURES

### EXISTING FEATURES

- **NAVIGATION**

  - The navigation is very simple.
  - The website is only a single page.
  - The page can be scrolled down to reveal more content.

- **LANDING PAGE**

  - The landing page displays the name of the website.
  - Below which the users are introduced to the different combinations of play using images.
  - The users can also find the buttons used to play the game on the landing page.
  - They can also see the rules of the game below.
    ![Landing page](/assets/images/landing.JPG)

- **GAME AREA**

  - The game area displays two images at the start also representing the rules.
  - The player display shows the image of the user's choice.
  - The computer side of the display generated a random choice of the computer and shows it's image.
  - The score is display below.
    ![Game area](/assets/images/game-display.JPG)

- **SCORE COUNTER**

  - The game score can be seen under each of the player's choice displayed.
  - The game score can be seen increasing each the player or computer wins.
  - The score counter will also not give a score when the outcome is a draw.
    ![Score counter](/assets/images/score.JPG)

- **THE RULES SECTION**
  - The rules of the game can be found at the bottom of the page.
  - Users can scroll down to read the very simple instructions of the game.
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

## VALIDATOR TESTING

- HTML

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

- CSS

  - No errors were found when passing through the official official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)

- ACCESSIBILITY
  - The colours and fonts used are easy to read and checked using lighthouse in devtools.
    ![Accessibility score](/assets/images/lighthouse.JPG)

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
