import Card from "./Card";

export default function Cards({ characters }) {
  // props => { characters [{},{},{}]} , debo recorrer el arreglo, lo mapeo y con cada uno de los objetos se los paso a Card y lo muestro por pantalla
  return (
    <div>
      {characters.map(
        ({ id, name, status, origin, species, gender, image, onClose }) => (
          <Card
            id={id}
            name={name}
            status={status}
            origin={origin?.name}
            species={species}
            gender={gender}
            image={image}
            onClose={(id) =>
              window.alert(`Emulamos que se cierra la card con id: ${id}`)
            }
          />
        )
      )}
    </div>
  );
}
