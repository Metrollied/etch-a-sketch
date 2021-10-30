let audio = new Audio('./sounds/shakesound.wav');

function restart() {
    audio.play();
    const etchArea = document.querySelector('#etchArea')
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(etchArea)
    start()
}

function start() {
    let num = prompt("What would you like the width/height to be?")
    num = parseInt(num);
    if (num > 0 && Number.isInteger(num)) {
        let i = (num * num - 1);
        const etchArea = document.querySelector('#etchArea');

        document.getElementById("etchArea").style["grid-template-columns"] = "repeat(" + num + ", 1fr)";
        document.getElementById("etchArea").style["grid-template-rows"] = "repeat(" + num + ", 1fr)";

        for (i; i > -1; i--) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute("id", "square" + i);
            etchArea.appendChild(square);
            square.addEventListener('mouseenter', (e) => {
                if (square.classList.contains("mouseover")) {
                    square.classList.remove("mouseover");
                    square.classList.add("mouseoff")
                }
                else {
                    square.classList.remove("mouseoff")
                    square.setAttribute("class", "mouseover");
                }
            })
        }
    }
    else {
        alert('You need to enter a whole number above 0. Press \'shake\' to restart.');
    }
}
start();

const shake = document.getElementById('shake').onclick = restart;


