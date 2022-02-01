import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./menu.css";

export function Menu() {
  return (
    <div className="container-menu">
      <a className="social" href="https://github.com/williankomada">
        <BsGithub size={24} color="#FFF" />
      </a>

      <a
        className="social"
        href="https://www.linkedin.com/in/willian-komada-aa705a172/"
      >
        <BsLinkedin size={24} color="#FFF" />
      </a>

      <Link className="item-menu" to="/links">
        My Links
      </Link>
    </div>
  );
}
