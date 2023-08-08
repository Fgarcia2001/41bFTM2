export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input id="ide" type="search" />
      <button onClick={() => onSearch("ID: ...")}>Agregar</button>
    </div>
  );
}
