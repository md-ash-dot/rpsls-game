# ROCK PAPER SCISSORS LIZARD SPOCK

A digital playground where anyone, from kids to adults, can indulge in a quick and entertaining game, is the goal of the Rock Paper Scissors Lizard Spock game website.

This online platform is designed to provide an effortless user experience, ensuring that visitors of all ages can easily grasp its features and navigate through the website. Even for someone who might not be familiar with the game, the website's user-friendly layout is designed to guide them through the rules and make their experience playing the game, enjoyable and accessible.

![Responsive mockup](/assets/images/responsive.png)

## USER EXPERIENCE

### USER GOALS

- The user should easily understand the game upon landing on the website.
- The user should understand the gameplay rules visually through an image and by reading text.
- The user should view the player and computer choices at every round.
- The user should have easy access to all gameplay buttons.
- The user should identify each button of the game choices visually through an icon and by reading text.
- The user should have an option to restart the game at all times.
- The user should view the score from the start to the end of the game.
- The user should see the player and computer score incrementing after each victory.
- The user should play against random computer choices and experience fair gameplay.
- The user should view a message at the end of the game, showing the winner of the game.
- The user should play the game until the winning point is reached either by the player or the computer.
- The user should view the rules of the game if required.

### DESIGN

The design of the Rock Paper Scissors Lizard Spock game website offers an engaging experience for users of all ages. A very user-centric approach has been taken to make the experience enjoyable. The design uses a very simple and intuitive layout with lively colours, guiding users seamlessly through the game. Accessibility is acknowledged with colours showing vibrancy and inclusivity. The user experience allows users of various degrees of familiarity with the game to understand the choices through the clear buttons holding icons and texts. Responsive design ensures a consistent experience across devices.

#### TYPOGRAPHY

The font families used are Nanum Gothic Coding, monospace. It aims to strike a balance between playful and clear communication, contributing to a user-friendly interface that aligns with the website's goal of making the game accessible to users of all ages.
 
### WIREFRAMES

Wireframes were designed using Lucidcharts's online wireframe tool.
![Wire frames](/assets/images/lucid-wireframes-concept.jpeg)
 
## FEATURES

### EXISTING FEATURES

- **NAVIGATION**

  - The navigation is very simple and easy.
  - The entire content of the website is presented on a single page.
  - The page can be scrolled down to reveal more content, providing further information.

- **LANDING PAGE**

  - The landing page displays the name of the website, which takes center stage.
  - Below the users are introduced to the different combinations of play using images.
  - The game buttons are conveniently located on the same page for users to start playing.
  - The game rules are presented right below for users to learn and reference.
  
![Landing page](/assets/images/landing.png)

- **GAME CHOICE DISPLAY AREA**

  - The game area displays two images at the start which serves as a visual rules reminder.
  - The player display shows the image of the user's choice.
  - The computer side reveals a randomly generated choice through an image on its display.
  - The score is displayed below the images through the game.

![Game choice display area](/assets/images/game%20display%20.png)

- **SCORE COUNTER**

  - The game score can be seen under each of the player's choices displayed.
  - The game score can incrementally grow after each victory of the player or computer.
  - The score counter will remain unaffected in the case of a draw.

![Computer score counter](/assets/images/computer%20score.png)
![Player score counter](/assets/images/player%20score.png)

- **THE GAME CHOICE BUTTONS**
  - The game choice buttons are displayed right below the game choice display area.
  - The game buttons are easily accessible with the text and icons representing the choice.
  
![Game choice buttons](/assets/images/game%20choice%20buttons.png)

- **THE RESTART BUTTON**
  - The restart button is displayed along with the game choice buttons for easy access.
  - The restart button resets the scores and resets the game choice display area.

![Restart button](/assets/images/restart%20button.png)

- **WINNER MESSAGE**
  - A message is displayed when the game is won.
  - The message shows the user who won the game.
  - The game choice buttons are also removed upon reaching this stage of the game.
  - The restart game will still be available for users to play the game again.

![Computer wins message](/assets/images/computer%20wins.png)
![Player wins message](/assets/images/player%20wins.png)

- **THE RULES SECTION**
  - The rules of the game are located at the bottom of the website.
  - Users can easily access it by scrolling down, to comprehend the simple instructions.

![Rules section](/assets/images/rules.png)

### FEATURES LEFT TO IMPLEMENT

- Separate section displaying messages generated during each round of play.
- Option to choose the number of rounds in a total game.
- Feedback in the form of sound or animation to make the experience more enjoyable.
- Background music, with the option to mute.

### RESPONSIVE DESIGN

The game uses a responsive design for users to enjoy it across devices. The website maintains a well-laid-out structure without changing the way the game looks when played on different devices like mobiles, tablets, and desktops.

- DESKTOP (Macbook)
  
![Responsive desktop](/assets/images/responsive-desktop.png)

- TABLET (iPad mini)
  
![Responsive tablet](/assets/images/responsive-ipadmini.png)

- MOBILE (Galaxy S8+)
  
![Responsive mobile](/assets/images/responsive-galaxyS8%2B.png)

## TESTING

- This website has been tested to check if it works on different browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, and Samsung Internet.
- The website has been tested using the dev tools device toolbar on the browser to check if it functions and looks good on all standard screen sizes, showing it uses a responsive design.
- All text on the website has been checked to see if it is readable and easy to understand.
- All the game choice buttons on the website, used to play the game have been tested and is in good working order.
- The restart button in the website has been tested to see if it resets the score, the player, and computer images, clears the winner message, and repopulates the game choice buttons.
- The score counter has been tested to see if it is incrementing properly on each victory.
- The score counter has been tested to see if scores are not incremented in the event of a draw.
- The game has been tested to see if the player and computer have random chances of winning.

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
  
  - The colours and fonts used are easy to read and checked using lighthouse in dev tools for mobile and desktop.
  - Lighthouse desktop.

![Accessibility score](/assets/images/Lighthouse-desktop.png)

 - Lighthouse mobile.

![Accessibility score](/assets/images/Lighthouse-mobile.png)

## BUGS

### SOLVED BUGS

- The scores were not updated.

  - Fix: There were unassigned functions, that were interrupting the code flow, which were later removed until using it again.

- The buttons were not registering on the game.

  - Fix: Errors were breaking the codeflow, which was later corrected.

- Font-awesome icons were not appearing.

  - Fix: The initial font awesome code used was incorrect and had to be corrected and the icons started working.

- All my font-awesome icons were not visible.

  - Fix: Changed the link for the fontawesome website.

- JSHint error: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (runGame).

  - Fix: Moved event listeners into separate functions and moved the loop to iterate through the buttons outside.
  
- JSHint error: unused variables.

  - Fix: Removed all unused variables.

- Unresponsive website elements.
  
  - Fix: Remove all height, width and, float css properties.

- Restarting the game did not populate the game choice buttons which are removed at the end of the game.

  - Fix: Iterate through the buttons and apply the style that was removed at the end of the game, back again in the restart game function.

## DEPLOYMENT

- This site was deployed using GitHub pages. The steps used to deploy are:
  - In the GitHub repository go to the settings section.
  - Select the main branch as the default branch.
  - Go to the pages section and set the branch to main and save.
  - Once done, the page provided a link to the completed website.

The live link can be found here - [ROCK PAPER SCISSORS LIZARD SPOCK](https://md-ash-dot.github.io/rpsls-game/)

## CREDITS

### CODE

- The Love Math project done by Code Institute has been the code that was used to learn how to build this website. - [Love Math Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/234519d86b76411aa181e76a55dabe70/)
- The Portfolio Project 2 intro video by Code Institute. [Portfolio Project 2 intro](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/)
- w3schools was used for general code concept searches. [w3schools](https://www.w3schools.com/)
- mdn web docs_ was used for general code concept searches. [mdn web docs_](https://developer.mozilla.org/en-US/)

### MEDIA
- All fonts used on the website. - [google fonts](https://fonts.google.com/)
- Icons used for the game choice buttons. - [icon library](https://icon-library.com/)
- Wireframes were created using Lucidchart's online wireframe maker. -[lucid chart](https://www.lucidchart.com/pages/landing/wireframe-software?utm_source=google&utm_medium=cpc&utm_campaign=_chart_en_tier1_mixed_search_brand_bmm_&km_CPC_CampaignId=1490375424&km_CPC_AdGroupID=55688906577&km_CPC_Keyword=%2Blucid%20chart%20%2Bwireframe&km_CPC_MatchType=b&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=475760219039&km_CPC_TargetID=kwd-467383918265&km_CPC_Country=9044957&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=CjwKCAjwxaanBhBQEiwA84TVXCOZ25eNUeSYYoYKF_NLT8P31RTGKZoFXjLCmZri5FDf4GIh3FxJAhoCB_QQAvD_BwE)

### PROJECT SUPPORT
- I would like to thank my mentor Akshat Garg from Code Institute for his support, guidance, and help in planning and building this project.
- I would like to thank all the Code Institute tutors for their support, guidance, and help in solving code issues, debugging, and solving all technical issues faced in building this project.
- I would like to thank Code Institute for providing me with the necessary lessons and resources to help me build my skills to build this project.
