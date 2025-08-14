import { useState } from "react";
import ModalContext from "./modal-context";

function ModalProvider({ children }) {
  const [showsModal, setShowsModal] = useState(false);
  const value = { showsModal, setShowsModal };
  return <ModalContext value={value}>{children}</ModalContext>;
}

export default ModalProvider;
