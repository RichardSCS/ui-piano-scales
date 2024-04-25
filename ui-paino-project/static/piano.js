document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('mousedown', () => playNote(key.getAttribute('data-note')));
    });
});

function playNote(note) {
    console.log("Playing note:", note);
    const audio = new Audio(`/static/media/sounds/${note}.mp3`); // Ensure you have .wav files named as notes (C.wav, C#.wav, etc.)
    audio.play();
}






