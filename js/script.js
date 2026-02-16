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

function GoPage2() {
    document.body.classList.add("fade-out");
    setTimeout(() => {  
        window.location.href = "page2.html";
    }, 600); }

    const button = document.querySelector(".Buttons");

button.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";

    button.appendChild(ripple);

    setTimeout(() => {
    ripple.remove();
    }, 600);
});

// Ambil elemen audio
const clickSound = document.getElementById("click-sound");

// Tambahkan event ke semua tombol
document.querySelectorAll("button").forEach(button => {
button.addEventListener("click", () => {
    clickSound.currentTime = 0; // reset supaya bisa spam klik
    clickSound.play();
});
});
