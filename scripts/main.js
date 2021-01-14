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
let isHovering = false;

function getCurrentTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    // I played around with numbers till I got something close.
    let count = seconds * .22;

    // In class refactor.
    if (isHovering) {
        // Turns hours minutes and seconds all into one big hex code.
        time = `#${(hours).toString(16)}${minutes.toString(16)}${seconds.toString(16)}`;
    } else {
        time = `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}`;
    }


    display.innerHTML = time;
    face.style.backgroundColor = hexCode;

    // Increments count.
    count++;
    progress.style.width = `${count}rem`;
}
//refactored in class, changes isHovering based on position.
display.addEventListener("mouseover", () => {
    isHovering = true;

});
//refactored in class, changes isHovering based on position.
display.addEventListener("mouseout", () => {
   isHovering = false;
});

getCurrentTime();

setInterval(getCurrentTime, 1000);
