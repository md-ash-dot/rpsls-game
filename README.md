# ROCK PAPER SCISSORS LIZARD SPOCK

The Rock Paper Scissors lizard spock game website is a landing page for members of the public looking to have some fun playing a quick game.

Users of this webiste will be able to very easily understand, navigate and use the website. They will also be able to easily learn how the game works, if they aren't familiar with it.

![Responsive mockup](/assets/images/screens.JPG)

## FEATURES

### EXISTING FEATURES

- **NAVIGATION**

  - The navigation is very simple.
  - The website is only a single page.
  - The page can be scrolled down to reveal more content.
    ![Navigation screenshot](/assets/images/Navigation.JPG)

- **LANDING PAGE**

  - The landing page displays the name of the website.
  - Below which the users are introduced to the different combinations of play using images.
  - The users can also find the buttons used to play the game on the landing page.
  - They can also see the rules of the game below.
    ![Landing page hero image](/assets/images/Landing-hero.JPG)

- **GAME AREA**

  - The game area displays two images at the start also representing the rules.
  - The player display shows the image of the user's choice.
  - The computer side of the display generated a random choice of the computer and shows it's coressponding image.
  - The score is display below.
    ![Animal photos](/assets/images/animal-photos.JPG)

- **SCORE COUNTER **

  - The game score can be seen under each of the player's choice displayed.
  - The game score can be seen increasing each the player or computer wins.
  - The score counter will also not give a score when the outcome is a draw.
    ![Conatct form](/assets/images/contact-form.JPG)

- **THE RULES SECTION**
  - The rules of the game can be found at the bottom of the page.
  - Users can scroll down to read the very simple instructions of the game.
    ![Find us at](/assets/images/find-us-at.JPG)

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

- The hero image disappeared after adding no-repeat center center after the url.
  - Fix: Changed the background-image property to background.
- The hero-outer properties were not getting applied.

  - Fix: Id of hero-outer had a space in the name instead of (-), so used the right format.

- The hero-image animation was not working.
  - Fix: Animation rules were placed outside the curly brackets. Moved the rules inside the brackets.
- Font-awesome icons were not appearing.

  - Fix: The initial font awesome code used was incorrect and had to be corrected and the icons started working.

- Cover text position was not relative to the image.

  - Fix: Add position of relative to the parent element, so child elements can set it's postion absolute to it.

- All my font-awesome icons were not visible.
  - Added cdn link to the head to get the icons to load.

## VALIDATOR TESTING

- HTML

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

- CSS

  - No errors were found when passing through the official official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)

- ACCESSIBILITY
  - The colours and fonts used are easy to read and checked using lighthouse in devtools.
    ![Accessibility score](/assets/images/score.JPG)

## DEPLOYMENT

- This site was deployed using GitHub pages. The steps used to deploy are:
  - In the GitHub repository go to the setting section.
  - Select the main branch as default branch
  - Go to the pages section and set branch to main and save.
  - Once done, the page provided link to the completed website.

The live link can be found here - [Peak District Animal Shelter](https://md-ash-dot.github.io/peak-district-animal-shelter/)

## CREDITS

### CONTENT

- The Love Running project done by Code Institute has been the code which was used to learn how to build this website. - [Love Running Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/f2db5fd401004fccb43b01a6066a5333/)
- Floating navigation elements with the direction inverted was with the help of this [Link](https://codepen.io/ConStambo/pen/WxRQVq)
- Animation fill mode for hero-image was with the help of this [Link](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)
