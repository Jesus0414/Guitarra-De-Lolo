const buttons = document.querySelectorAll('button');

const playnote =() => {
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;

    console.log(audioId);
    const audio = document.getElementById(audioId);
    console.log(audio);

    audio.pause();
    audio.currentTime = 0;
    audio.play();
    
}

const shutup =() => {
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;

    console.log(audioId);
    const audio = document.getElementById(audioId);
    console.log(audio);

    audio.pause();
    audio.currentTime = 0;
}


buttons.forEach(button => button.addEventListener('click', playnote));
buttons.forEach(button => button.addEventListener('keyup', shutup));

     const keyNoteDown = event => {
         console.log(event);
         const key = event.key;
         console.log(key);
         const button = document.querySelector(`button[data-key="${key}"]`);
         if(button) button.click();
     } 

    document.addEventListener('keypress', keyNoteDown);
    document.addEventListener('Keyup', keyNoteDown);
 




    

