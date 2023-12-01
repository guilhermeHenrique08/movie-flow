import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { useParams } from "react-router";

import useFetch from "../hooks/useFetch";

import Loading from "../components/layout/Loading";
import Error from "./Error";

function Details() {
  const { id } = useParams();
  const url_key = `https://api.themoviedb.org/3/movie/${id}?api_key=0c9e0791b3d75d434122c718a5f88d13`;

  const { data: movie, loading } = useFetch(url_key);

  return (
    <div className="lg:h-screen lg:flex lg:justify-center">
      <div className="mx-auto flex flex-col justify-center pt-28 p-10 max-w-3xl lg:max-w-7xl lg:flex-row lg:gap-6 lg:items-center lg:justify-center lg:h-screen">
        {loading && <Loading />}

        {!loading &&
          (movie.id ? (
            <>
              <div className="flex flex-col items-center w-full lg:w-2/5">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="rounded w-full"
                />

                <a
                  href={movie.homepage}
                  target="_blank"
                  className="btn my-3 w-full dark:bg-white dark:text-black"
                >
                  Acessar pagina
                </a>

                <div className="flex gap-8 my-5">
                  <a href="https://github.com/guilhermeHenrique08">
                    <FaGithub className="text-xl transition-all hover:scale-110 dark:text-white" />
                  </a>

                  <a href="https://www.linkedin.com/in/dev-guilherme-marques/">
                    <FaLinkedin className="text-xl transition-all hover:scale-110 dark:text-white" />
                  </a>

                  <a href="#">
                    <FaInstagram className="text-xl transition-all hover:scale-110 dark:text-white" />
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center gap-5 border-white pb-5 lg:w-3/5 lg:border-b-2 dark:border-zinc-900">
                <h2 className="font-bold text-lg lg:text-3xl dark:text-white">
                  {movie.title}
                </h2>
                <div className="my-5">
                  <h3 className="font-semibold lg:text-lg dark:text-white">
                    Resumo
                  </h3>
                  <p className="text-lg lg:text-base dark:text-white">
                    {movie.overview}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 font-lg">
                    Nota:{" "}
                    <span className="text-black dark:text-white">
                      {movie.vote_average}
                    </span>
                  </p>
                  <p className="text-gray-500 font-lg">
                    Data:{" "}
                    <span className="text-black dark:text-white">
                      {movie.release_date}
                    </span>
                  </p>
                  <p className="text-gray-500 font-lg">
                    Generos:{" "}
                    <span className="text-black dark:text-white">
                      {movie.genres.map((gender) => gender.name).join(", ")}
                    </span>
                  </p>
                  <p className="text-gray-500 font-lg">
                    Tempo:{" "}
                    <span className="text-black dark:text-white">
                      {movie.runtime} Minutos
                    </span>{" "}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <Error />
          ))}
      </div>
    </div>
  );
}

export default Details;
