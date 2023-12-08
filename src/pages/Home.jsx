import { useEffect, useState } from "react";

import { useQuery } from "react-query";

import Search from "../components/Search";
import CardMovie from "../components/CardMovie";
import Loading from "../components/layout/Loading";

function Home() {
  const url_key =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=0c9e0791b3d75d434122c718a5f88d13";

  const { data: movies, isFetching } = useQuery(
    "movies",
    async () => {
      const response = await fetch(url_key);
      const data = await response.json();

      return data;
    },
    {
      staleTime: 10000 * 6,
    }
  );

  console.log(movies);

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (movies && movies.results) {
      setFilteredMovies(movies.results);
    }
  }, [movies]);

  return (
    <div className="p-10 pt-28">
      {isFetching && <Loading />}

      {movies && movies.results && (
        <>
          <div className="flex justify-between flex-wrap mb-7">
            <h2 className="my-7 font-bold text-3xl dark:text-white">
              Filmes mais assistidos
            </h2>

            <Search movies={movies} setFilteredMovies={setFilteredMovies} />
          </div>

          {filteredMovies && filteredMovies.length > 0 ? (
            <div className="flex justify-between flex-wrap">
              {filteredMovies.map((movie) => (
                <CardMovie dataMovie={movie} key={movie.id} />
              ))}
            </div>
          ) : (
            <div className="mb-80 text-lg dark:text-white">
              <p>Não ha resultados para a pesquisa</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
