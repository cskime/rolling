import { usePortal } from "./use-portal";

function useModal({ key }) {
  const { isOpen, setIsOpen } = usePortal({ key });
  return { showsModal: isOpen, setShowsModal: setIsOpen };
}

export { useModal };
