import { Link } from "react-router-dom";

function LinkButton({ to, text }) {
  return <Link to={to} className="btn">{text}</Link>;
}

export default LinkButton;
