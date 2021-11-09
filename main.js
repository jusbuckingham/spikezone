// objects wiith id, questions & answers.

const questions = [{
    id: 0,
    q: "What's the character's name Denzel Washington plays in Mo Better Blues?",
    a: [{ text: "Moses", isCorrect: false },
    { text: "Shadow", isCorrect: false },
    { text: "Bleek", isCorrect: true },
    { text: "Mookie", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the name of Yasiin Bey’s character in Bamboozled?",
    a: [{ text: "Masta Ace", isCorrect: false },
    { text: "Leon", isCorrect: false },
    { text: "Craig", isCorrect: false },
    { text: "Big Black Africa", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the name of the pizzeria Mookie worked at in Do The Right Thing?",
    a: [{ text: "Tino's Pizza", isCorrect: false },
    { text: "Sal's Famous", isCorrect: true },
    { text: "Pizza Hut", isCorrect: false },
    { text: "Buger King", isCorrect: false }
    ]

},
{
    id: 3,
    q: "David Byrne and Spike Lee collaborated on what live filmed version of a broadway hit?",
    a: [{ text: "Annie", isCorrect: false },
    { text: "West Side Story", isCorrect: false },
    { text: "American Utopia", isCorrect: true },
    { text: "Bigger Than Life!", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Who is the actor that plays the main character in Clockers?",
    a: [{ text: "Mekhi Phifer", isCorrect: true },
    { text: "Omar Epps", isCorrect: false },
    { text: "2 Pac", isCorrect: false },
    { text: "Cormega", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Who plays West Indian Archie in Malcolm X?",
    a: [{ text: "Charles S. Dutton" },
    { text: "Spike Lee", isCorrect: false },
    { text: "Bill Duke", isCorrect: false },
    { text: "Delroy Lindo", isCorrect: true }
    ]

},
{
    id: 6,
    q: "Actress that playes “Natural” in 25th hour?",
    a: [{ text: "Ruby Dee", isCorrect: false },
    { text: "Chloe Sevigny", isCorrect: false },
    { text: "Rosario Dawson", isCorrect: true },
    { text: "Angelina Jolie", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Actor that plays Dean Big Brother Almighty in School Daze?",
    a: [{ text: "Chris Rock", isCorrect: false },
    { text: "Giancarlo Esposito", isCorrect: true },
    { text: "Samuel L. Jackson", isCorrect: false },
    { text: "Eddie Murphy", isCorrect: false }
    ]

},
{
    id: 8,
    q: "What movie did Spike Lee win an oscar for Best Adapted Screenplay?",
    a: [{ text: "Girl 6", isCorrect: false },
    { text: "Driving Miss Daisy", isCorrect: false },
    { text: "Get On The Bus", isCorrect: false },
    { text: "BlacKkKlansman", isCorrect: true }
    ]

},
{
    id: 9,
    q: "What was Spike Lee's first movie?",
    a: [{ text: "She Hate Me", isCorrect: false },
    { text: "Kids", isCorrect: false },
    { text: "She's Gotta Have It", isCorrect: true },
    { text: "Drop Squad", isCorrect: false }
    ]

},
{
    id: 10,
    q: "Spike Lee is from ____ ?",
    a: [{ text: "Jersey City", isCorrect: false },
    { text: "Chicago", isCorrect: false },
    { text: "East Lansing", isCorrect: false },
    { text: "Brooklyn", isCorrect: true }
    ]

}];

// Set start
let start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    const result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = questions[id].a[0].text;
    op2.innerText = questions[id].a[1].text;
    op3.innerText = questions[id].a[2].text;
    op4.innerText = questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = questions[id].a[0].isCorrect;
    op2.value = questions[id].a[1].isCorrect;
    op3.value = questions[id].a[2].isCorrect;
    op4.value = questions[id].a[3].isCorrect;

    let selected = "";

    // Show selection for op1
    op1.addEventListener("click", function (e) {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", function (e) {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", function (e) {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
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
            result[0].innerHTML = "Yup!  Click next question!";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Nope, try again!";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
let id = 0;

next.addEventListener("click", function (e) {
    start = false;
    if (id < 12) {
        id++;
        iterate(id);
        console.log(id);
    }
})


// makes a black box in the results box.

let resultElement = document.querySelector('.result');
resultElement.style.backgroundColor = 'black';

let questionElement = document.querySelector('.question-container');
questionElement.style.backgroundColor = 'green';


// create the start page with timer starting at 60 seconds.

// load the start page with timer set for 1 min & 21 seconds & counter

// when timer expires or all questions are answered show a final score page & play again button that starts the whole process over again.