# SpikeZone
SEI 1025 Project 1: SpikeZone | A trivia game based on film director Spike Lee.

# Technologies Used
HTML, CSS & Javascript.

# Goals 
To make a fun educational trivia app about director Spike Lee using what we've learned thus far in unit 1.

# Approach Taken
Uses game data stored as an array of objects.  Answers are hard coded as true or false and it lets you cycle through each of the 11 questions and tells you if you are right or wrong.

Code Snippet:
``` 
const gameData = [{
    id: 0,
    q: "Ready for the SpikeZone!?",
    a: [{ text: "Yeah!", isCorrect: true },
    { text: "Maybe", isCorrect: false },
    { text: "No!", isCorrect: false },
    { text: "Wait", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Character Denzel Washington plays in 'Mo Better Blues'?",
    a: [{ text: "Moses", isCorrect: false },
    { text: "Shadow", isCorrect: false },
    { text: "Bleek", isCorrect: true },
    { text: "Mookie", isCorrect: false }
    ]

}, 
```
# Technical Requirements
- Displays a game in the browser.
- Includes separate HTML / CSS / JavaScript files.
- Sticks with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles.
- Uses Javascriptd for DOM manipulation.
- Deployed online, where the rest of the world can access it.
- Uses semantic markup for HTML and CSS.

# Where To Play
https://jusbuckingham.github.io/spikezone/ 

# How It Works
Answer each question one by one until you get to the end.  Learn a little along the way and show your stuff!
   
# Future Features
- Sign up & log in feature.
- Animated questions.
- Mobile app.
- Social sharing Option.
- Timer & score card.
- "Three strikes and you're out!" rule in gameplay.
- Bring in fresh images at the top via imdb api.
- "Next Question" button that appears only once the correct answer is selected.

# Unsolved Problems
- Had trouble adding images via imdb api.
- Making all question and answers look good on mobile.

# Initial Wireframe
![Getting Started](./wireframe-spikezone.png)