import { useState, useEffect } from "react";

import Search from "../Search";
import CardMovie from "../CardMovie";
import Loading from "../layout/Loading";

function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const url_key =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0c9e0791b3d75d434122c718a5f88d13";

    async function ApiMovies(url) {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;

      setMovies(results);
      setFilteredMovies(results);
    }

    ApiMovies(url_key);
  }, []);

  function changeMovies(searchInput) {
    const newMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredMovies(newMovies);
  }

  return (
    <div className="p-10 pt-28">
      {movies.length > 0 ? (
        <>
          <div className="flex justify-between flex-wrap mb-7">
            <h2 className="my-7 font-bold text-3xl">Filmes mais assistidos</h2>

            <Search
              movies={movies}
              setFilteredMovies={setFilteredMovies}
              changeMovies={changeMovies}
            />
          </div>

          {filteredMovies.length > 0 ? (
            <div className="flex justify-between flex-wrap">
              {filteredMovies.map((movie) => (
                <CardMovie dataMovie={movie} key={movie.id} />
              ))}
            </div>
          ) : (
            <div className="mb-80 text-lg">
              <p>Não ha filme com esse nome</p>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default Home;
