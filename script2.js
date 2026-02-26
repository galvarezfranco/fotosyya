const fondos = [
  "assets/fondos/fondo2.jpg",
  "assets/fondos/fondo3.jpg"
];

let indice = 0;

document.addEventListener("click", function() {
  indice++;
  
  if (indice >= fondos.length) {
    indice = 0;
  }

  document.body.style.backgroundImage = `url(${fondos[indice]})`;
});