<<<<<<< HEAD
setTimeout(function() {
  
const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;

for (let contador = 0; contador < 3; contador++) {
    intento = prompt("Adivina el numero (entre 0 y 10):");
    if (intento == numeroAdivinacion) {
        alert(`¡Brujo! ¡Acertaste el numero es ${numeroAdivinacion}.`);
        acerto = true;
        break;
    }
    if (intento > numeroAdivinacion) {
        alert("¡Frio!. El numero es menor.");
    } else {
        alert("¡Frio! El número es mayor.");
    }
    
}
if (!acerto) {
    alert(`Desafortunadamente, no acertaste.¡El número era ${numeroAdivinacion}!`);
}

=======
setTimeout(function() {
  
const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;

for (let contador = 0; contador < 3; contador++) {
    intento = prompt("Adivina el numero (entre 0 y 10):");
    if (intento == numeroAdivinacion) {
        alert(`¡Brujo! ¡Acertaste el numero es ${numeroAdivinacion}.`);
        acerto = true;
        break;
    }
    if (intento > numeroAdivinacion) {
        alert("¡Frio!. El numero es menor.");
    } else {
        alert("¡Frio! El número es mayor.");
    }
    
}
if (!acerto) {
    alert(`Desafortunadamente, no acertaste.¡El número era ${numeroAdivinacion}!`);
}

>>>>>>> d8774724cf6046e8dd4c8212fe96c178ba0743b3
}, 5000);