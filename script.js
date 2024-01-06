let timer = 0;
function celebrate() {
    const fireworkContainer = document.querySelector('.firework-container');

    const firework = document.createElement('div');
    firework.className = 'firework';

    fireworkContainer.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 10000);
}

function celebrate2() {
  timer = 7000
    const button = document.getElementById('partyButton');
    const divTitle = document.getElementById('divTitle');
    const divFork1 = document.getElementById('divFork1');
    const divFork2 = document.getElementById('divFork2');
    const divFork4 = document.getElementById('divFork4');
    const divFork5 = document.getElementById('divFork5');
    button.style.display = 'none';
    divFork1.style.display = 'block'
   
   setTimeout(() => {
    divFork1.style.display = 'none';
    divFork2.style.display = 'block';
    }, timer);

    setTimeout(() => {
      divFork2.style.display = 'none';
      divFork4.style.display = 'block';
      
    }, timer * 2 );

    setTimeout(() => {
      divFork4.style.display = 'none';
      divFork5.style.display = 'block';
    }, timer *3 );

    setTimeout(() => {
      divFork5.style.display = 'none';
      divTitle.style.display = 'block';
      for (let index = 0; index < 10; index++) {
        celebrate();
        celebrate();
        celebrate();
    }
    }, timer * 4 );
}
// Obtén el elemento h1
// Palabra a mostrar
var palabra = "Feliz Cumpleaños \n Alejandra";

// Obtén el elemento h1
var h1Element = document.getElementById("miTitulo");

// Genera colores aleatorios
function generarColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Crea spans para cada letra y aplica colores y animación
for (var i = 0; i < palabra.length; i++) {
    var caracter = palabra[i];
    if (caracter === ' ') {
      var espacio = document.createElement("span");
      espacio.textContent = '\u00A0'; // Espacio en blanco no rompible
      h1Element.appendChild(espacio);
    } else {
      var span = document.createElement("span");
      span.textContent = caracter;
      span.style.color = generarColor();
      span.style.animationDelay = i * 0.1 + 's'; // Ajusta el retraso según tus necesidades
      h1Element.appendChild(span);
    }
  }
