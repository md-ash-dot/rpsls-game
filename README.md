# ROCK PAPER SCISSORS LIZARD SPOCK

A digital playground where anyone, from kids to adults, can induldge in a quick and entertaining game, that is the goal of the Rock Paper Scissors Lizard Spock game website.

This online platform is designed to provide an effortless user experience, ensuring that visitors of all ages can easily grasp it's features and navigate through the website.Even for someone who might not be familiar with game, the website's user friendly layout is designed to guide them through the rules and make their experience playing the game, enjoyable and accessible.

![Responsive mockup](/assets/images/responsive.png)

## USER EXPERIENCE

### USER GOALS

- The user should easily understand the game upon landing on the website.
- The user should understand the game play rules visually through an image and by reading text.
- The user should view the player and computer choices at every round.
- The user should have easy access to all game play buttons.
- The user should identify each button of the game choices visually through an icon and by reading text.
- The user should have an option to restart the game at all times.
- The user should view the score from the start to end of the game.
- The user should see the player and computer score incrementing after each victory.
- The user should play against random computer choices and experience a fair game play.
- The user should view a message at the end of the game, showing the winner of the game.
- The user should play the game until the winning point is reached either by the player or the computer.
- The user should view the rules of the game if required.

### DESIGN

The design of the Rock Paper Scissors Lizard Spock game website offers a engaging experience for users of all ages. A very user centric approach has been taken to make the experience enjoyable. The design uses a very simple and intuitive layout with lively colours, guiding users seemlessly through the game. Accessibility is acknowledged with colours showing vibrancy and inclusivity. The user experience allows users of various degrees of familiarity to the game to understand the choices through the clear buttons holding icons and texts. Responsive design ensures a consistent experience across devices.

#### TYPOGRAPHY

The fomt families used are Nanum Gothic Coding, monospace. It aims to strike a balance between playful and clear communication, contributing to a user friendly interface that aligns with the website's goal of making the game accessible to users of all ages.

#### COLOUR SCHEME

### WIREFRAMES

Wireframes were designed using Lucidcharts's online wireframe tool.
![Wire frames](/assets/images/lucid-wireframes-concept.jpeg)
 
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

- Seperate section displaying messages generated during each round of play.
- Option to chose the number of rounds in a total game.
- Feedback in the form of sound or animation to make the experience more enjoyable.
- Background music, with the option to mute.

### RESPONSIVE DESIGN

The game uses responsive design or users to enjoy it across devices. The website maintains a well layed out structure without changing the way the  game looks when played on different devices like mobiles, tablets and desktops.

- DESKTOP
![Responsive desktop](/assets/images/responsive-desktop.png)

- TABLET
![Responsive tablet](/assets/images/responsive-ipadmini.png)

- MOBILE
  
![Responsive mobile](/assets/images/responsive-galaxyS8%2B.png)

## TESTING

- This website has been tested to check if it works on different browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, Safari and Samsung internet.
- The website has been tested using the dev tools device toolbar on the browser to check if it functions and looks good on all standard screen sizes, showing it uses reponsive design.
- All text on the website has been checked to see if it is readable and is easy to understand.
- All the buttons in the website, used to play the game has been tested and is in good working order.
- The score counter has been tested to see if it is incrementing properly.

### VALIDATOR TESTING

- HTML

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)
![HTML Validator](/assets/images/HTML%20Validator.png)

- css

  - No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)
![css Validator](/assets/images/css%20Validator.png)

- JSHint

  - No major errors were found except for " " is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz), when passing through the official [JSHint code quality tool](https://jshint.com/)

- ACCESSIBILITY
  
  - The colours and fonts used are easy to read and checked using lighthouse in devtools for mobile and desktop.
  - Lighthouse desktop.
![Accessibility score](/assets/images/Lighthouse-desktop.png)
  - Lighthouse mobile.
![Accessibility score](/assets/images/Lighthouse-mobile.png)

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
