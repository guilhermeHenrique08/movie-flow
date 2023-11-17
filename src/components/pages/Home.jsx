import { useState, useEffect } from "react";

import Search from "../Search";
import CardMovie from "../CardMovie";
import Loading from "../layout/Loading";

function Home() {
  const [movies, setMovies] = useState([]);

  async function ApiMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;

    setMovies(results);
    console.log(results);
  }

  useEffect(() => {
    const url_key =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0c9e0791b3d75d434122c718a5f88d13";

    ApiMovies(url_key);
  }, []);

  return (
    <div className="p-10 pt-28">
      {movies.length > 0 ? (
        <>
          <div className="flex justify-between flex-wrap mb-7">
            <h2 className="my-7 font-bold text-2xl">Filmes mais assistidos</h2>
            <Search />
          </div>

          <div className="flex justify-between flex-wrap">
            {movies.map((movie) => (
              <CardMovie dataMovie={movie} key={movie.id} />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default Home;
