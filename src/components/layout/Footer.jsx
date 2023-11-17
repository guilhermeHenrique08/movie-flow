import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-white px-10 py-5">
      <div className="flex gap-8">
        <FaGithub className="text-xl"/>
        <FaLinkedin className="text-xl"/>
        <FaInstagram className="text-xl"/>
      </div>
      <p className="mt-3 text-gray-500 text-center">&copy; 2023 MovieFlow by Guilherme Henrique</p>
    </footer>
  );
}

export default Footer;
