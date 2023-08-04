//VARIABLES
const url = "http://localhost:5000/amigos";
const [buttonAmigos] = $("#boton");
const [botonSearch] = $("#search");
const [inputBuscar] = $("#input");
const [del] = $("#delete");

//Agregar Lista de amigos...

const agregaAmigos = (amigos) => {
  const [lista] = $("#lista");
  lista.innerText = "";
  amigos.forEach((amigo) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${amigo.name} ${amigo.id}`;
    lista.appendChild(newLi);
  });
};

//Buscar amigo por id...

const showFriend = (response) => {
  const [amigo] = $("#amigo");
  amigo.innerText = response.name;
};

//Deletear Amigo por id

const elimina = () => {
  const [inputDelete] = $("#inputDelete"); // input
  const id = inputDelete.value;
  inputDelete.value = "";
  if (id.length) {
    $.ajax({
      type: "DELETE",
      url: `${url}/${id}`,
      success: (response) => {
        agregaAmigos(response);
        const [success] = $("#success");
        success.innerText = "Fue borrado exitosamente";
      },
    });
  }
};

//METHODS
const get = () => {
  $.get(url, agregaAmigos);
};

const searchFriend = () => {
  const id = inputBuscar.value;
  inputBuscar.value = "";
  if (id.length) {
    $.get(`${url}/${id}`, showFriend);
  }
};

//EVENTOS
buttonAmigos.addEventListener("click", get);
botonSearch.addEventListener("click", searchFriend);
del.addEventListener("click", elimina);
