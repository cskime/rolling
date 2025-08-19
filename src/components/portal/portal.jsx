import { createPortal } from "react-dom";

function Portal({ children, id }) {
  return createPortal(children, document.getElementById(id));
}

export default Portal;
