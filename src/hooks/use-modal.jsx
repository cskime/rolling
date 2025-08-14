import { useContext } from "react";
import ModalContext from "../components/modal/modal-context";

function useModal() {
  const { showsModal, setShowsModal } = useContext(ModalContext);
  return { showsModal, setShowsModal };
}

export { useModal };
