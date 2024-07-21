// getting the hands.
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')



function setTime(){
    // Initializing the date object.
    const now = new Date()
    
    // getting realtime data for the min, sec and hrs.
    //Todo: get time > get deg > transform style

    const hrs = now.getHours()
    const hourDegrees = ((hrs/60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const min = now.getMinutes();
    const minuteDegrees = ((min/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const sec = now.getSeconds()
    const secondDegrees = ((sec/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

}

setInterval(setTime, 1000)