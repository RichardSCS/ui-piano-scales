document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', () => playNote(key.getAttribute('data-note')));
});

function playNote(note) {
    const audio = new Audio(`sounds/${note}.wav`); // Ensure you have .wav files named as notes (C.wav, C#.wav, etc.)
    audio.play();
}