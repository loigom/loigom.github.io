function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function load() {
    await sleep(500);
    let texts = document.getElementById("introductionContainer").getElementsByTagName("p");
    console.log(texts);
    for (let i = 0; i < texts.length; i++) {
        unfade(texts[i]);
        await sleep(1500);
    }
}

load();