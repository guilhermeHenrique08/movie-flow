import { FaStar } from "react-icons/fa";

import LinkButton from "./LinkButton";

function CardMovies({ dataMovie }) {
  const img_url = `https://image.tmdb.org/t/p/w500/${dataMovie.backdrop_path}`;

  return (
    <div
      id={dataMovie.id}
      className="flex flex-col justify-center text-left w-72 gap-3 bg-white p-5 mb-6 rounded lg:w-80 lg:gap-4 dark:bg-zinc-950"
    >
      <img src={img_url} alt={dataMovie.title} className="rounded" />
      <h3 className="text-base font-semibold dark:text-white">{dataMovie.title}</h3>

      <div className="flex justify-between">
        <h4 className="dark:text-white">{dataMovie.release_date}</h4>
        <div className="flex items-center gap-1">
          <FaStar className="text-amber-300" />
          <p className="dark:text-white">{dataMovie.vote_average}</p>
        </div>
      </div>

      <LinkButton to={`/details/${dataMovie.id}`} text="Ver Mais" />
    </div>
  );
}

export default CardMovies;
