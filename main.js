// objects with id, questions & answers.
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
    question.innerText = questions[id].q;

    // getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // providing option text
    op1.innerText = questions[id].a[0].text;
    op2.innerText = questions[id].a[1].text;
    op3.innerText = questions[id].a[2].text;
    op4.innerText = questions[id].a[3].text;

    // providing the true or false value to the options
    op1.value = questions[id].a[0].isCorrect;
    op2.value = questions[id].a[1].isCorrect;
    op3.value = questions[id].a[2].isCorrect;
    op4.value = questions[id].a[3].isCorrect;

    let selected = " ";

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

// next button and method
const next = document.getElementsByClassName('next')[0];
let id = 0;

next.addEventListener("click", function (e) {
    start = false;
    if (id < 10) {
        id++;
        iterate(id);
        console.log(id);
    }
})

// makes a black box in the results box.
let resultElement = document.querySelector('.result');
resultElement.style.backgroundColor = 'black';

// makes questions box green
let questionElement = document.querySelector('.question-container');
questionElement.style.backgroundColor = 'green';

// create points counter in the top right corner (in progress)
let score = 0;
function scoreCount () {
    if (selected == 'true'){
        score++;
    }
}

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