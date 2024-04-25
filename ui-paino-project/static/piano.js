document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.key').forEach(key => {
        console.log(key);
        key.addEventListener('mousedown', () => playNote(key.getAttribute('data-note')));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Import the template
    const template = document.getElementById('piano-template').content.cloneNode(true);

    // Append the template to the piano-container div
    document.getElementById('piano-container').appendChild(template);

    // Attach event listeners to keys
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('mousedown', () => playNote(key.id));
    });
});

function playNote(note) {
    console.log("Playing note:", note);
    const audio = new Audio(`static/media/sounds/${note}.mp3`); // Ensure you have .wav files named as notes (C.wav, C#.wav, etc.)
    audio.play();
}






