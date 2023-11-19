import { useState } from "react";

function Search({ changeMovies }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex flex-col">
      <label htmlFor="search">Pesquisar filme</label>
      <input
        type="search"
        id="search"
        placeholder="Digite o nome do filme"
        className="pl-3 pr-16 py-2 placeholder:text-sm"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          changeMovies(searchInput);
        }}
      />
    </div>
  );
}

export default Search;
