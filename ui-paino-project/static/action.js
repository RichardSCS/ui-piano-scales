document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', () => playNote(key.getAttribute('data-note')));
});

function playNote(note) {
    console.log("playing note " + note)
    const audio = new Audio(`/static/mp3_Notes/${note}.mp3`); // Ensure you have .wav files named as notes (C.wav, C#.wav, etc.)
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var url = window.location.pathname;
    console.log("YELLO")
    console.log(url)

    // Check if it is the quiz-theory.html page
    if (url.endsWith("quiz/theory")) {
        console.log("I'm in the file ")
        // Code specific to quiz-theory.html
        var keys = document.querySelectorAll("#piano .key");
        var answerAlert = document.getElementById("answer-alert");

        keys.forEach(function(key) {
            key.addEventListener("click", function() {
                 console.log("i got clicked")
                 if (key.getAttribute('data-note') === "C4") {
                    answerAlert.textContent = "Middle C was clicked!";
                } else {
                    answerAlert.textContent = "Try again!";
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button-scales');
    //submitButton.addEventListener('click', function(event) {
    //    event.preventDefault();  // Prevents form submission and page reload
    //    checkAnswer();
    //});
});

function checkAnswer() {
    const form = document.getElementById('answer-form');
    const resultDiv = document.getElementById('result-scales');
    const selectedOption = form.querySelector('input[name="scales"]:checked');

    if (!selectedOption) {
        resultDiv.textContent = 'Please select an option.';
        resultDiv.style.color = 'red';
        return;
    }

    if (selectedOption.value === 'A major') {
        resultDiv.textContent = 'Correct! Well done.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Incorrect, please try again.';
        resultDiv.style.color = 'red';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button-major');
    //submitButton.addEventListener('click', function(event) {
    //    event.preventDefault();  // Prevents form submission and page reload
    //    checkAnswer2();
    //});
});

function checkAnswer2() {
    const form = document.getElementById('answer-form-major');
    const resultDiv = document.getElementById('result-major');
    const selectedOption = form.querySelector('input[name="scales"]:checked');

    if (!selectedOption) {
        resultDiv.textContent = 'Please select an option.';
        resultDiv.style.color = 'red';
        return;
    }

    if (selectedOption.value === 'B major') {
        resultDiv.textContent = 'Correct! Well done.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Incorrect, please try again.';
        resultDiv.style.color = 'red';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button-id2');
    //submitButton.addEventListener('click', function(event) {
    //    event.preventDefault();  // Prevents form submission and page reload
    //    checkAnswer3();
    //});
});

function checkAnswer3() {
    console.log("in 1")
    const form = document.getElementById('answer-form-id');
     console.log("in 2")
    const resultDiv = document.getElementById('result-id');
      console.log(form)
    const selectedOption = form.querySelector('input[name="scales3"]:checked');
 console.log("in 4")
    if (!selectedOption) {
        resultDiv.textContent = 'Please select an option.';
        resultDiv.style.color = 'red';
        return;
    }

    if (selectedOption.value === 'D flat major') {
        resultDiv.textContent = 'Correct! Well done.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Incorrect, please try again.';
        resultDiv.style.color = 'red';
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-4');
    //submitButton.addEventListener('click', function(event) {
    //    event.preventDefault();  // Prevents form submission and page reload
    //    checkAnswer4();
    //});
});

function checkAnswer4() {
    console.log("in 1")
    const form = document.getElementById('answer-4');
     console.log("in 2")
    const resultDiv = document.getElementById('result-4');
      console.log(form)
    const selectedOption = form.querySelector('input[name="scales4"]:checked');
 console.log("in 4")
    if (!selectedOption) {
        resultDiv.textContent = 'Please select an option.';
        resultDiv.style.color = 'red';
        return;
    }

    if (selectedOption.value === 'G') {
        resultDiv.textContent = 'Correct! Well done.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Incorrect, please try again.';
        resultDiv.style.color = 'red';
    }
}

let notes = [
    "a0",
    "a-0",
    "a1",
    "a-1",
    "a2",
    "a-2",
    "a3",
    "a-3",
    "a4",
    "a-4",
    "a5",
    "a-5",
    "a6",
    "a-6",
    "a7",
    "a-7",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "c1",
    "c-1",
    "c2",
    "c-2",
    "c3",
    "c-3",
    "c4",
    "c-4",
    "c5",
    "c-5",
    "c6",
    "c-6",
    "c7",
    "c-7",
    "c8",
    "d1",
    "d-1",
    "d2",
    "d-2",
    "d3",
    "d-3",
    "d4",
    "d-4",
    "d5",
    "d-5",
    "d6",
    "d-6",
    "d7",
    "d-7",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "f1",
    "f-1",
    "f2",
    "f-2",
    "f3",
    "f-3",
    "f4",
    "f-4",
    "f5",
    "f-5",
    "f6",
    "f-6",
    "f7",
    "f-7",
    "g1",
    "g-1",
    "g2",
    "g-2",
    "g3",
    "g-3",
    "g4",
    "g-4",
    "g5",
    "g-5",
    "g6",
    "g-6",
    "g7",
    "g-7"
]

$(document).ready(function() {
    notes.forEach((note) => $('#'+note).click( function() {
        playNote(note);
    }));
})