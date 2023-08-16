export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_CHARACTERS, payload: data }));
  };
};
