import { useState, useEffect } from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LinkItem } from "../../components/LinkItem";

import { getLinksSave, removeLink } from "../../services/storeLinks";

import "./links.css";

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [dataLinks, setDataLinks] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@URLShortener");

      if (result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenShortenedURL(myLink) {
    setDataLinks(myLink);
    setShowModal(true);
  }

  async function handleDeleteURL(id) {
    const result = await removeLink(myLinks, id);

    if (result.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <div className="container-links">
      <div className="header-links">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
        </Link>
        <h1>My URLs</h1>
      </div>

      {emptyList && (
        <div className="item-links">
          <h2 className="empty-list">Sua lista está vazia... 😢</h2>
        </div>
      )}

      {myLinks.map((myLink) => (
        <div className="item-links" key={myLink.id}>
          <button
            className="link"
            onClick={() => handleOpenShortenedURL(myLink)}
          >
            <FiLink size={18} color="#FFF" />
            {myLink.long_url}
          </button>

          <button
            className="link-delete"
            onClick={() => handleDeleteURL(myLink.id)}
          >
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={dataLinks} />
      )}
    </div>
  );
}
