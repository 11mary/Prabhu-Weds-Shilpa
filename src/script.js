function enterSite() {
document.getElementById("entry").style.display="none";
document.getElementById("main").style.display="block";

let music=document.getElementById("bgMusic");
music.play().catch(()=>{});

slides=document.querySelectorAll(".slide");

typeEffect();
}

/* MUSIC */
function toggleMusic(){
let music=document.getElementById("bgMusic");
music.paused?music.play():music.pause();
}

/* SLIDES */
let currentSlide=0;
let slides;

function nextSlide(){

slides[currentSlide].classList.remove("active");
currentSlide++;

if(currentSlide<slides.length){
slides[currentSlide].classList.add("active");
}

if(currentSlide===slides.length-1){
startFinalTyping();
}
}

/* HERO TYPE */
let text="Prabhu Weds Shilpa — A Love Story 💍";
let i=0;

function typeEffect(){
let el=document.getElementById("typing");
el.innerHTML="";

function type(){
if(i<text.length){
el.innerHTML+=text.charAt(i);
i++;
setTimeout(type,80);
}
}
type();
}

/* FINAL TYPE */
function startFinalTyping() {
  let el = document.getElementById("finalText");

  let text = el.innerHTML;   // ✅ keep HTML (br, spaces)
  el.innerHTML = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);  // ✅ use innerHTML
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}
/* FLOATING HEARTS 💖 */
setInterval(()=>{
let heart=document.createElement("div");
heart.innerHTML="💖";
heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-20px";
heart.style.fontSize="20px";

document.body.appendChild(heart);

let pos=0;
let move=setInterval(()=>{
pos+=2;
heart.style.bottom=pos+"px";
},20);

setTimeout(()=>{
clearInterval(move);
heart.remove();
},4000);

},500);