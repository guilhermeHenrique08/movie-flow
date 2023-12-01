import { useState } from "react";

function Search({ movies, setFilteredMovies }) {
  const [searchInput, setSearchInput] = useState("");

  function changeMovies(searchInput) {
    const newMovies = movies.results.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredMovies(newMovies);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="search" className="dark:text-white">
        Pesquisar filme
      </label>
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
