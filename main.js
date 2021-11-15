// array of objects with questions & answers.
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
{
    id: 2,
    q: "Yasiin Bey’s character in 'Bamboozled'?",
    a: [{ text: "Masta Ace", isCorrect: false },
    { text: "Leon", isCorrect: false },
    { text: "Craig", isCorrect: false },
    { text: "Big Black Africa", isCorrect: true }
    ]

},
{
    id: 3,
    q: "Pizzeria Mookie worked at in 'Do The Right Thing'?",
    a: [{ text: "Tino's Pizza", isCorrect: false },
    { text: "Sal's", isCorrect: true },
    { text: "Pizza Hut", isCorrect: false },
    { text: "Buger King", isCorrect: false }
    ]

},
{
    id: 4,
    q: "David Byrne's broadway hit that was filmed by Spike Lee as a movie?",
    a: [{ text: "Annie", isCorrect: false },
    { text: "West Side Story", isCorrect: false },
    { text: "American Utopia", isCorrect: true },
    { text: "Hair", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Actor that plays the main character in 'Clockers'?",
    a: [{ text: "Mekhi Phifer", isCorrect: true },
    { text: "Omar Epps", isCorrect: false },
    { text: "2 Pac", isCorrect: false },
    { text: "Treach", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Who plays 'West Indian Archie' in 'Malcolm X'?",
    a: [{ text: "Charles S. Dutton" },
    { text: "Spike Lee", isCorrect: false },
    { text: "Bill Duke", isCorrect: false },
    { text: "Delroy Lindo", isCorrect: true }
    ]

},
{
    id: 7,
    q: "Actress that plays 'Naturelle' in '25th hour'?",
    a: [{ text: "Ruby Dee", isCorrect: false },
    { text: "Chloe Sevigny", isCorrect: false },
    { text: "Rosario Dawson", isCorrect: true },
    { text: "Angelina Jolie", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Who plays 'Dean Big Brother Almighty' in 'School Daze'?",
    a: [{ text: "Chris Rock", isCorrect: false },
    { text: "Giancarlo Esposito", isCorrect: true },
    { text: "Sam Jackson", isCorrect: false },
    { text: "Eddie Murphy", isCorrect: false }
    ]

},
{
    id: 9,
    q: "Movie Spike Lee won Best Adapted Screenplay oscar for?",
    a: [{ text: "Girl 6", isCorrect: false },
    { text: "Driving Miss Daisy", isCorrect: false },
    { text: "Get On The Bus", isCorrect: false },
    { text: "BlacKkKlansman", isCorrect: true }
    ]

},
{
    id: 10,
    q: "What was Spike Lee's first feature?",
    a: [{ text: "She Hate Me", isCorrect: false },
    { text: "Kids", isCorrect: false },
    { text: "She's Gotta Have It", isCorrect: true },
    { text: "Drop Squad", isCorrect: false }
    ]

},
{
    id: 11,
    q: "Spike Lee is from ____ ?",
    a: [{ text: "Atlanta", isCorrect: true },
    { text: "Chicago", isCorrect: false },
    { text: "East Lansing", isCorrect: false },
    { text: "Brooklyn", isCorrect: false }
    ]

},
{
    id: 12,
    q: "Thanks for playing!  🙏🏾🙏🏾🙏🏾",
    a: [{ text: "🙏🏾", isCorrect: true },
    { text: "🙏🏾", isCorrect: true },
    { text: "🙏🏾", isCorrect: true },
    { text: "🙏🏾", isCorrect: true }
    ]

}];

// set start
let start = true;

// iterate
function iterate(id) {

    // getting the result display section
    const result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // getting the question
    const question = document.getElementById("question");

    // setting the question text
    question.innerText = gameData[id].q;

    // getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // providing option text
    op1.innerText = gameData[id].a[0].text;
    op2.innerText = gameData[id].a[1].text;
    op3.innerText = gameData[id].a[2].text;
    op4.innerText = gameData[id].a[3].text;

    // providing the true or false value to the options
    op1.value = gameData[id].a[0].isCorrect;
    op2.value = gameData[id].a[1].isCorrect;
    op3.value = gameData[id].a[2].isCorrect;
    op4.value = gameData[id].a[3].isCorrect;

    let selected = "";

    // show selection for op1
    op1.addEventListener("click", function (e) {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // show selection for op2
    op2.addEventListener("click", function (e) {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // show selection for op3
    op3.addEventListener("click", function (e) {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // show selection for op4
    op4.addEventListener("click", function (e) {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // grabbing the submit button
    const evaluate = document.getElementsByClassName("submit");

    // the submit method
    evaluate[0].addEventListener("click", function (e) {
        if (selected == "true") {
            result[0].innerHTML = "Yup!";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Nope";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// next question button and method
let nextQuestion = document.getElementsByClassName('next')[0];
let id = 0;

nextQuestion.addEventListener("click", function (e) {
    start = false;
    if (id < 12) {
        id++;
        iterate(id);
        console.log(id);
    }
})

// makes the results box black.
let resultElement = document.querySelector('.result');
resultElement.style.backgroundColor = 'black';

// makes gameData box green
let questionElement = document.querySelector('.question-container');
questionElement.style.backgroundColor = 'green';

// create points counter in the top right corner (in progress)
// let score = 0;
// let scoreArray = [];
// function scoreCount() {
//     if (selected == 'true') {
//         score++;
//     }
// }

// pull in imgs from imdb api & place them into .grid-container

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch('s://imdb-api.com/en/API/Images/k_12345678/tt1375666', requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// create results final page function