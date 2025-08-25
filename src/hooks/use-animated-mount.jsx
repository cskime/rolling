import { useState } from "react";

function useAnimatedMount() {
  const [isMount, setMount] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const setShows = (shows) => {
    if (shows) {
      setMount(true);
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const onAnimationEnd = () => {
    if (isOpen) return;
    setMount(false);
  };

  return { isMount, isOpen, setShows, onAnimationEnd };
}

export { useAnimatedMount };
