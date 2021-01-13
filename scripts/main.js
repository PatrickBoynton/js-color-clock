const display = document.querySelector(".clock-display");
const progress = document.querySelector(".clock-progress-bar");
const face = document.querySelector(".clock-face");

const checkTime = timeInterval => (timeInterval < 10) ? ("0" + timeInterval) : timeInterval;

function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}`
    let hexCode = `#${checkTime(hours)}${checkTime(minutes)}${checkTime(seconds)}`;

    display.innerHTML = time;
    face.style.backgroundColor = hexCode;

    console.log(time);
    console.log(hexCode);
}

getCurrentTime();

setInterval(getCurrentTime, 1000);
