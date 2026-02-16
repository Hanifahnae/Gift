const pages = document.querySelectorAll(".page");
const bookWrapper = document.querySelector(".book-wrapper");
let currentPage = 0;

pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;

    page.addEventListener("click", () => {

    // Flip maju
    if (index === currentPage) {
        page.classList.add("flipped");
        currentPage++;

        if (currentPage > 0) {
        bookWrapper.classList.add("opened");
        }
    }

    // Flip balik
    else if (index === currentPage - 1) {
        page.classList.remove("flipped");
        currentPage--;

        if (currentPage === 0) {
        bookWrapper.classList.remove("opened");
        }
    }

    });

    window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

  // posisi random
  heart.style.left = Math.random() * window.innerWidth + "px";

  // ukuran random
  const size = 10 + Math.random() * 30;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

  // durasi jatuh random
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  // opacity random
  heart.style.opacity = 0.4 + Math.random() * 0.6;

  // blur random
  heart.style.filter = `blur(${Math.random() * 2}px)`;

  // glow random
  heart.style.boxShadow = `0 0 ${5 + Math.random() * 15}px rgba(138, 105, 255, 0.5)`;

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
    heart.remove();
    }, 7000);
}

setInterval(createHeart, 300); 
});


window.addEventListener("load", function() {

  const duration = 0.5 * 1000; // 3 detik pesta
    const end = Date.now() + duration;

    (function frame() {

    confetti({
        particleCount: 5,
        angle: 60,
        spread: 100,
        origin: { x: 0, y: 1 }
    });

    confetti({
        particleCount: 5,
        angle: 120,
        spread: 100,
        origin: { x: 1, y: 1 }
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }

    })();

});

const music = document.getElementById("background-music");

document.addEventListener("click", () => {
    music.play();
}, { once: true });

