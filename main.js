var h2 = document.getElementsByTagName('h2')[0];
var Iniciar = document.getElementById('Srt');
var Parar = document.getElementById('Dtn');
var Reiniciar = document.getElementById('rei');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h2.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
Iniciar.onclick = timer;
Parar.onclick = function() {
    clearTimeout(t);
}
Reiniciar.onclick = function() {
    h2.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
}
