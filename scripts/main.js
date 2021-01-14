const display = document.querySelector(".clock-display");
const progress = document.querySelector(".clock-progress-bar");
const face = document.querySelector(".clock-face");

const checkTime = timeInterval => (timeInterval < 10) ? ("0" + timeInterval) : timeInterval;

let date;
let hours;
let minutes;
let seconds;

let time;
let hexCode;

function getCurrentTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    // I played around with numbers till I got something close.
    let count = seconds * .22;

    time = `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}`;
    // Turns hours minutes and seconds all into one big hex code.
    hexCode = `#${(hours).toString(16)}${minutes.toString(16)}${seconds.toString(16)}`;

    display.innerHTML = time;
    face.style.backgroundColor = hexCode;

    // Increments count.
    count++;
    progress.style.width = `${count}rem`;
}

display.addEventListener("mouseover", (e) => {
    display.innerHTML = hexCode;
});

getCurrentTime();

setInterval(getCurrentTime, 1000);
