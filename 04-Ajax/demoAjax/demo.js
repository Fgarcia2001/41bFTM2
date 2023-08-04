/* https://jsonplaceholder.typicode.com/users */

const responseHandler = (response) => {
  /* const usersList = document.querySelector("#usersList"); */
  /*const usersList = $("#usersList")[0];  */
  const [usersList] = $("#usersList");
  response.forEach((user) => {
    const newLi = document.createElement("li");
    newLi.innerText = user.name;
    usersList.appendChild(newLi);
  });
};

const [load] = $("#load");

let cant = true;
const agregaUsers = () => {
  if (cant) {
    cant = false;
    $.get("https://jsonplaceholder.typicode.com/users", responseHandler);
  }
};

/* $.get("https://jsonplaceholder.typicode.com/users", responseHandler);
 */

load.addEventListener("click", agregaUsers);
// agregamos evento al boton
