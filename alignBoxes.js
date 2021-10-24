const HEIGHT_FROM_TOP_MULTIPLIER = 0.1

let boxes = document.getElementsByClassName("back");

let uppermost_box = document.getElementsByClassName("back")[0]
uppermost_box.style.left = window.innerWidth / 2 - uppermost_box.offsetWidth / 2 + "px";
uppermost_box.style.top = window.innerHeight * HEIGHT_FROM_TOP_MULTIPLIER + "px";

for (let i = 1; i < boxes.length; i++) {
    boxes[i].style.left = window.innerWidth / 2 - boxes[i].offsetWidth / 2 + "px";
    boxes[i].style.top = parseFloat(uppermost_box.style.top.substr(0, uppermost_box.style.top.length - 2)) + uppermost_box.offsetHeight + "px";
}
