import "./App.css";
import ListaPersonas from "./components/ListaPersonas/ListaPersonas";
/* import ListaPersonasClase from "./components/ListaPersonas/ListaPersonasClase"; */

const listaPersonas = [
  { name: "Franco Garcia", age: 22 },
  { name: "Franco", age: 32 },
  { name: "Mariela", age: 60 },
  { name: "Sergio", age: 40 },
];

function App() {
  return (
    <div className="App">
      <ListaPersonas lista={listaPersonas} />
    </div>
  );
}

export default App;
