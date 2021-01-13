const display = document.querySelector(".clock-display");
const progress = document.querySelector(".clock-progress-bar");
const face = document.querySelector(".clock-face");


// Found this nifty method on SO.
function checkTime(n) {
    if (n < 10) {
        n = "0" + 1;
    }
    return n;
}

function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    display.innerHTML = `${hours}:${minutes}:${seconds}`;

    console.log(`#${hours}${minutes}${seconds}`);
    // console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(getCurrentTime, 1000);
