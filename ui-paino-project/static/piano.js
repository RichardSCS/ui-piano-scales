document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('mousedown', () => playNote(key.getAttribute('data-note')));
    });
});

function playNote(note) {
    const audio = new Audio(`/static/media/sounds/${note}.mp3`); // Ensure you have .wav files named as notes (C.wav, C#.wav, etc.)
    audio.play();
}

function playDemo(noteList){
    const buttonElement = document.querySelector('#demoButton');
    buttonElement.disabled = true;
    let notes = noteList.split(',');

    function playSequentially(index) {
        if (index < notes.length) {
            const note = notes[index].trim();
            const keyElement = document.querySelector(`[data-note="${note}"]`);
            console.log(keyElement);
            keyElement.classList.add('active');
            playNoteWithDelay(note, 500).then(() => {
                keyElement.classList.remove('active');
                playSequentially(index + 1);
                if (index === notes.length - 1) {
                    buttonElement.disabled = false;
                }
            });
        }
    }
    playSequentially(0);
}

function playNoteWithDelay(note, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            playNote(note);
            resolve();
        }, delay);
    });
}




