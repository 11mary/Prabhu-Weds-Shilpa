function enterSite() {
    document.getElementById("entry").style.display = "none";
    document.getElementById("main").style.display = "block";

    let music = document.getElementById("bgMusic");
    music.play();

    slides = document.querySelectorAll(".slide");

    typeEffect();
    setupVideoControl();
}

/* MUSIC TOGGLE */
function toggleMusic() {
    let music = document.getElementById("bgMusic");
    let btn = document.getElementById("musicBtn");

    if (music.paused) {
        music.play();
        btn.innerHTML = "🔊";
    } else {
        music.pause();
        btn.innerHTML = "🔇";
    }
}

/* SLIDES */
let currentSlide = 0;
let slides;

function nextSlide() {

    // 👉 FIX: stop video if leaving journey slide
    let video = document.getElementById("weddingVideo");
    let music = document.getElementById("bgMusic");

    if (video && !video.paused) {
        video.pause();
        video.currentTime = 0; // reset video
        music.play(); // resume music
    }

    slides[currentSlide].classList.remove("active");
    currentSlide++;

    if (currentSlide < slides.length) {
        slides[currentSlide].classList.add("active");
    }
}

/* VIDEO CONTROL */
function setupVideoControl() {
    let video = document.getElementById("weddingVideo");
    let music = document.getElementById("bgMusic");

    if (!video) return;

    video.addEventListener("play", () => {
        music.pause();
    });

    video.addEventListener("pause", () => {
        music.play();
    });

    video.addEventListener("ended", () => {
        music.play();
    });
}

/* TYPING */
let text = "Prabhu Weds Shilpa — A Love Story 💍";
let i = 0;

function typeEffect() {
    i = 0;
    document.getElementById("typing").innerHTML = "";

    function type() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    type();
}

/* HEARTS */
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";

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