const buttonAgregar = document.querySelector("#agregar");
const cambiarColor = function (event) {
  const elemento = event.target;
  if (elemento.className === "recuadro") {
    elemento.className = "recuadroVerde";
  } else {
    elemento.className = "recuadro";
  }
};
const clickHandler = function () {
  const contenedor = document.querySelector("#contenedor");

  const newDiv = document.createElement("div");
  newDiv.className = "recuadro";

  newDiv.innerHTML = "Hola FT41b!";
  newDiv.addEventListener("click", cambiarColor);

  contenedor.appendChild(newDiv);
};

buttonAgregar.addEventListener("click", clickHandler);
