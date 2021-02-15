document.addEventListener ("DOMcontentloaded", function(e){
    
const parrafos = document.querySelectorAll('.descripcion');

let alturas = [];
let alturaMaxima = 0;

const aplicarAlturas = (function aplicarAlturas () {
    
    parrafos.forEach(parrafo =>{

        if (alturaMaxima == 0) {
            alturas.push(parrafo.clientHeight);
        } else {
            parrafo.style.height = alturaMaxima + "px";
        }
    });
    return aplicarAlturas;
})();
alturaMaxima = Math.max.apply(Math, alturas);
aplicarAlturas();
});