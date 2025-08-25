import { useState } from "react";
import { usePortal } from "./use-portal";

function useAnimatedPortal({ key }) {
  const { isOpen: isPortalOpen, setIsOpen: setIsPortalOpen } = usePortal({
    key,
  });
  const [isOpen, setOpen] = useState(false);

  const setShows = (shows) => {
    if (shows) {
      setIsPortalOpen(true);
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const onAnimationEnd = () => {
    if (isOpen) return;
    setIsPortalOpen(false);
  };

  return { isMount: isPortalOpen, isOpen, setShows, onAnimationEnd };
}

export { useAnimatedPortal };
