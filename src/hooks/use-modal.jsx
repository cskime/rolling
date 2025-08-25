import { useAnimatedPortal } from "./use-animated-portal";

function useModal({ key }) {
  const { isMount, isOpen, setShows, onAnimationEnd } = useAnimatedPortal({
    key,
  });

  return {
    showsModal: isMount,
    isModalOpen: isOpen,
    setShowsModal: setShows,
    onDismissModal: onAnimationEnd,
  };
}

export { useModal };
