const display = document.querySelector(".clock-display");
const progress = document.querySelector(".clock-progress-bar");
const face = document.querySelector(".clock-face");

const date = new Date();
const hours = date.getHours();

console.log(hours);
