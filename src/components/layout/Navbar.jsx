import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ darkMode, changeTheme }) {
  return (
    <nav className="px-10 py-5 flex justify-between bg-white items-center fixed top-0 left-0 right-0 dark:bg-zinc-950">
      <Link to="/" className="text-lg font-semibold dark:text-white">
        MovieFlow
      </Link>

      <button
        className="rounded-full p-4 bg-slate-100 dark:bg-zinc-800 dark:text-white"
        onClick={changeTheme}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Navbar;
