import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./links.css";

export default function Links() {
  return (
    <div className="container-links">
      <div className="header-links">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
        </Link>
        <h1>My Links</h1>
      </div>

      <div className="item-links">
        <button className="link">
          <FiLink size={18} color="#FFF" />
          https://sujeitoprogramador.com
        </button>

        <button className="link-delete">
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>
    </div>
  );
}
