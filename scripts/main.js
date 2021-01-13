const display = document.querySelector(".clock-display");
const progress = document.querySelector(".clock-progress-bar");
const face = document.querySelector(".clock-face");

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let time  = `${hours}:${minutes}:${seconds}`;

console.log(time);
