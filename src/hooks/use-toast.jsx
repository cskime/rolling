import { useEffect } from "react";
import { useAnimatedMount } from "./use-animated-mount";

function useToast({ timeout = 1000 } = {}) {
  const { isMount, isOpen, setShows, onAnimationEnd } = useAnimatedMount();

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setShows(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, isOpen, setShows]);

  return {
    showsToast: isMount,
    isOpen,
    setShowsToast: setShows,
    onDismiss: onAnimationEnd,
  };
}

export { useToast };
