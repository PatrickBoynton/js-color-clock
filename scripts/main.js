const display = document.querySelector(".clock-display");
const progress = document.querySelector(".clock-progress-bar");
const face = document.querySelector(".clock-face");

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// Found this nifty method on SO.
function checkTime(n) {
    if (n < 10) {
        n = "0" + 1;
    }
    return n;
}

hours = checkTime(hours);
minutes = checkTime(minutes);
seconds = checkTime(seconds);

console.log(`${hours}:${minutes}:${seconds}`);