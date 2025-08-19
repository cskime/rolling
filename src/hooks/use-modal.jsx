import { usePortal } from "./use-portal";

function useModal({ id, type }) {
  const key = `${type}_${id}`;
  const { isOpen, setIsOpen } = usePortal({ key });
  return { showsModal: isOpen, setShowsModal: setIsOpen };
}

export { useModal };
