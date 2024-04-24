// document.querySelectorAll(".piano .key").forEach(key => {
//     console.log(key);
//     key.addEventListener('mousedown', () => playNote(key.getAttribute('data-note')));
// });

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.key').forEach(key => {
        console.log(key);
        key.addEventListener('mousedown', () => playNote(key.getAttribute('data-note')));
    });
});
function playNote(note) {
    console.log("Playing note:", note);
    const audio = new Audio(`/static/media/sounds/${note}.mp3`); // Ensure you have .wav files named as notes (C.wav, C#.wav, etc.)
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
                    answerAlert.style.color="green";
                } else {
                    answerAlert.textContent = "Try again!";
                }
                 console.log(key.getAttribute('data-node'))
                 returnAnswerTheory(key.getAttribute('data-note'))
            });
        });

    }
});

function returnAnswerTheory(answer){
     fetch('/submit-your-answer-theory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'scales=' + encodeURIComponent(answer)
    })
    .then(response => response.text())
    .then(data => {
        // Handle any response from the server here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
};

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button-scales');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevents form submission and page reload
        checkAnswer();
        console.log("I got clicked here ")
    });
});

function returnAnswer(answer){
     fetch('/submit-your-answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'scales=' + encodeURIComponent(answer)
    })
    .then(response => response.text())
    .then(data => {
        // Handle any response from the server here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
};


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
    returnAnswer(selectedOption.value)

}


document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button-major');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevents form submission and page reload
        checkAnswer2();
    });
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
    returnAnswer2(selectedOption.value)
}

function returnAnswer2(answer){
     fetch('/submit-your-answer-2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'scales=' + encodeURIComponent(answer)
    })
    .then(response => response.text())
    .then(data => {
        // Handle any response from the server here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
};


document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button-id2');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevents form submission and page reload
        checkAnswer3();
    });
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
    returnAnswer3(selectedOption.value)
}

function returnAnswer3(answer){
     fetch('/submit-your-answer-3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'scales3=' + encodeURIComponent(answer)
    })
    .then(response => response.text())
    .then(data => {
        // Handle any response from the server here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
};




document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-4');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevents form submission and page reload
        checkAnswer4();
    });
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
    returnAnswer4(selectedOption.value)
}

function returnAnswer4(answer){
     fetch('/submit-your-answer-4', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'scales4=' + encodeURIComponent(answer)
    })
    .then(response => response.text())
    .then(data => {
        // Handle any response from the server here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
};










