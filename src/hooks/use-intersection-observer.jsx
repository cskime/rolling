import { useEffect } from "react";

function useIntersectionObserver(targetRef, callback) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(callback);
    });

    if (targetRef) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetRef, callback]);
}

export { useIntersectionObserver };
