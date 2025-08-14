import { useEffect, useState } from "react";

function useToast(timeout = 2500) {
  const [showsToast, setShowsToast] = useState(false);

  useEffect(() => {
    if (!showsToast) return;

    const id = setTimeout(() => {
      setShowsToast(false);
    }, timeout);

    return () => {
      clearTimeout(id);
    };
  }, [showsToast, setShowsToast, timeout]);

  return { showsToast, setShowsToast };
}

export { useToast };
