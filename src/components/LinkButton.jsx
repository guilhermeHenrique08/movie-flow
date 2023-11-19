import { Link } from "react-router-dom";

function LinkButton({ to, text }) {
  return <Link to={to} className="btn dark:text-black dark:bg-white">{text}</Link>;
}

export default LinkButton;
