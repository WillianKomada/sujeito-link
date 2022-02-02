import { Link } from "react-router-dom";

import "./error.css";

export default function Error() {
  return (
    <div className="container-error">
      <img src="notfound.png" alt="Page Not Found" />
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
