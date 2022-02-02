import { useState } from "react";
import { FiLink } from "react-icons/fi";
import { Menu } from "../../components/Menu";
import { LinkItem } from "../../components/LinkItem";

import api from "../../services/api";

import "./home.css";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dataLinks, setDatalinks] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setDatalinks(response.data);
      setShowModal(true);
      setLink("");
    } catch {
      alert("Algo deu errado! Tente novamente!");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="URL Logo" />

        <h1>Short URL</h1>

        <span>Paste the URL to be shortened! 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            type="text"
            placeholder="Enter the URL here..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            autoFocus
          />
        </div>

        <button onClick={handleShortLink}>Shorten URL</button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={dataLinks} />
      )}
    </div>
  );
}
