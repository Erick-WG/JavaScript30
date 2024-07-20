

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio)
    if(!audio) return; // ignore if no key match to audio element
    audio.currentTime = 0; // Rewind audio to start.
    audio.play()
    key.classList.add('playing')
}


const removePlaying = (e) => {
    if(e.propertyName !== 'transform') return; // only run if transform property is changed
    // console.log(e.propertyName)
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
// console.log(keys)
keys.forEach(key => key.addEventListener('transitionend',removePlaying))

window.addEventListener('keydown', playSound);