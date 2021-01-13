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

    time = `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}`;
    hexCode = `#${checkTime(hours)}${checkTime(minutes)}${checkTime(seconds)}`;

    display.innerHTML = time;
    face.style.backgroundColor = hexCode;
}

display.addEventListener("mouseover", () => {
    display.innerHTML = hexCode;
});

getCurrentTime();

setInterval(getCurrentTime, 1000);
