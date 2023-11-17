import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="px-10 py-5 flex justify-between bg-white items-center fixed top-0 left-0 right-0">
      <Link to="/" className="text-lg font-semibold">MovieFlow</Link>
      <div className="rounded-full p-4 bg-slate-100">
        <FaSun />
      </div>
    </nav>
  );
}

export default Navbar;
