import { FiX, FiClipboard } from "react-icons/fi";

import "./link-item.css";

export function LinkItem({ closeModal, content }) {
  async function handleCopyLink() {
    await navigator.clipboard.writeText(content.link);
  }

  return (
    <div className="container-modal">
      <div className="header-modal">
        <h2>Shortened URL</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal-link" onClick={handleCopyLink}>
        {content.link}
        <FiClipboard size={20} color="#FFF" />
      </button>
    </div>
  );
}
