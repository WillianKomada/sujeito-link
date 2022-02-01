import { FiLink } from "react-icons/fi";
import { Menu } from "../../components/Menu";

import "./home.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />

        <h1>Shortcut Links</h1>

        <span>Paste your link to shortcut! 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input type="text" placeholder="Paste your link here..." />
        </div>

        <button>Shortcut Link</button>
      </div>

      <Menu />
    </div>
  );
}
