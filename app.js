const buttons = document.querySelectorAll('button');

const playnote = event => {
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    const sexta = 'audioS6';
    if (audioId != sexta){
        audioId + 'S6';
        
    } else;
    const audio = document.getElementById(audioId);

    if(audio.currentTime == 0){
        audio.play();
    }
    
}

const shutup = event => {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button){ 
        const note = button.dataset.note;
        const audioId = `audio${note}`;
        const sexta = 'audioS6';
        if (audioId != sexta){
            audioId + 'S6';
        }
        const audio = document.getElementById(audioId);
        audio.pause();
        audio.currentTime = 0;
        console.log('stoped');
    }
}


const keyNoteDown = event => {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button) button.click();
} 

const fretPressed = event =>{
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button){ 
        console.log('pressing guitar fret');
    }
}

buttons.forEach(button =>{ 
    button.addEventListener('click', playnote);
});

document.addEventListener('keydown', keyNoteDown);
document.addEventListener('keyup', shutup);
document.addEventListener('keypress', fretPressed);
 