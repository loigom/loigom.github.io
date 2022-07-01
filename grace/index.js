let angry = document.getElementById("angry");
const colors = [
    "blue",
    "red",
    "green",
    "purple",
    "cyan"
]
let i = 0;

setInterval(function() {
    angry.style.color = colors[i];
    i = (i + 1) % colors.length;
}, 40);

let amogus = document.getElementById("amogus");
amogus.onclick = function() {
    let audio = new Audio("amogus.mp3");
    audio.play();
    amogus.textContent = "sus";
    document.body.style.backgroundImage = 'url("amogus.webp")';
}