import { useState, useEffect } from "react";

function useImageLodeChecker(imageURL, noNeedToLoad = false) {
  const [isLode, setIsLode] = useState(!imageURL || noNeedToLoad);

  useEffect(() => {
    if (noNeedToLoad || !imageURL) return;
    const img = new Image();
    img.src = imageURL;

    const handleLoad = () => setIsLode(true);
    const handleError = () => setIsLode(false);

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [imageURL, noNeedToLoad]);

  return isLode;
}

function useImageListLodeChecker(imageList = []) {
  const [imageLoadStates, setImageLoadStates] = useState({});

  useEffect(() => {
    if (!imageList.length) return;

    setImageLoadStates((prev) => {
      const nextStates = { ...prev };
      imageList.forEach(({ id }) => {
        if (nextStates[id] === undefined) {
          nextStates[id] = false;
        }
      });
      return nextStates;
    });

    imageList.forEach(({ id, backgroundImageURL }) => {
      setImageLoadStates((prev) => {
        if (prev[id]) return prev;

        if (!backgroundImageURL) {
          return { ...prev, [id]: false };
        }

        const img = new Image();
        img.src = backgroundImageURL;
        img.onload = () => {
          setImageLoadStates((p) => ({ ...p, [id]: true }));
        };
        img.onerror = () => {
          setImageLoadStates((p) => ({ ...p, [id]: false }));
        };

        return prev;
      });
    });
  }, [imageList]);

  return imageLoadStates;
}

export { useImageLodeChecker, useImageListLodeChecker };
