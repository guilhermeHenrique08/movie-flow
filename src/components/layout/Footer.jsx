import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-white px-10 py-5 dark:bg-zinc-950">
      <div className="flex gap-8">
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
      <p className="mt-3 text-gray-500 text-center">
        &copy; 2023 MovieFlow by Guilherme Marques
      </p>
    </footer>
  );
}

export default Footer;
