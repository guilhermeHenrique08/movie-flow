import { FaRegSadTear } from "react-icons/fa";

import LinkButton from "../components/LinkButton";

function Error() {
  return (
    <div className="mx-auto h-screen flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col gap-4 p-5 max-w-lg dark:bg-zinc-950">
        <div className="flex items-center gap-5">
          <FaRegSadTear className="text-xl dark:text-white"/>
          <h1 className="text-xl font-bold dark:text-white">Pagina não encontrada</h1>
        </div>
        <p className="text-gray-500 dark:text-white">
          Ah, não conseguimos encontrar a página que você está procurando. Tente
          voltar à página anterior ou apenas clique no botão abaixo para voltar
          a pagina inicial
        </p>
        <LinkButton to="/" text="Voltar a pagina inicial" />
      </div>
    </div>
  );
}

export default Error;
