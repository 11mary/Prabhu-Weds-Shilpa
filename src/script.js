function enterSite() {
document.getElementById("entry").style.display = "none";
document.getElementById("main").style.display = "block";
typeEffect();
}

/* Typing */
let text = "Prabhu ❤️ Shilpa";
let i = 0;

function typeEffect() {
document.getElementById("typing").innerHTML = "";
i = 0;

function type() {
if (i < text.length) {
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type, 100);
}
}
type();
}

/* Countdown */
let weddingDate = new Date("April 9, 2026 09:00:00").getTime();

setInterval(() => {
let now = new Date().getTime();
let diff = weddingDate - now;

let d = Math.floor(diff / (1000*60*60*24));
let h = Math.floor((diff / (1000*60*60)) % 24);
let m = Math.floor((diff / (1000*60)) % 60);

document.getElementById("timer").innerHTML =
`${d} Days 💕 ${h}h ${m}m`;
}, 1000);

/* HEARTS */
setInterval(() => {
let heart = document.createElement("div");
heart.innerHTML = "💖";
heart.style.position = "fixed";
heart.style.left = Math.random() * 100 + "vw";
heart.style.bottom = "-20px";
heart.style.fontSize = Math.random() * 20 + 20 + "px";

document.body.appendChild(heart);

let pos = 0;
let move = setInterval(() => {
pos += 2;
heart.style.bottom = pos + "px";
}, 20);

setTimeout(() => {
clearInterval(move);
heart.remove();
}, 4000);
}, 500);
