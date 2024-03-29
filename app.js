const buttons = document.querySelectorAll('button');
let currentFretPressed;

const playnote = event => {
    const button = event.target;
    const note = button.dataset.note;
    const audioId = currentFretPressed ? `audio${note}${currentFretPressed}` : `audio${note}` ;
    const audio = document.getElementById(audioId);
    if(audio.currentTime === 0 ){
        audio.play();
    }
    
    console.log(audio);
}

const shutup = event => {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button){ 
        const note = button.dataset.note;
        const audioId = currentFretPressed ? `audio${note}${currentFretPressed}` : `audio${note}`;
        const audio = document.getElementById(audioId);

        console.log(audioId);
        audio.currentTime = 0;
        audio.pause();
        console.log('stoped');
        currentFretPressed = null;
    }
}

const keyNoteDown = event => {
    console.log(event);
    const key = event.key;
    console.log(key);
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button) button.click();
} 

const fretPressed = event =>{
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button)
    {
        currentFretPressed = button.dataset.fret;
        if(currentFretPressed){ 
            console.log(`fret pressed: ${currentFretPressed}`);
        }
    }
}

buttons.forEach(button =>{ 
    button.addEventListener('click', playnote);
});

document.addEventListener('keydown', keyNoteDown);
document.addEventListener('keypress', fretPressed);
document.addEventListener('keyup', shutup);
