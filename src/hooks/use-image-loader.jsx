import { useState, useEffect } from "react";

function useImageLodeChecker(imageURL, noNeedToLoad = false) {
  const [isLode, setIsLode] = useState(!imageURL || noNeedToLoad);

  useEffect(() => {
    if (noNeedToLoad || !imageURL) return;
    const img = new Image();

    const handleLoad = () => setIsLode(true);
    const handleError = () => setIsLode(false);

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    img.src = imageURL;
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

    let cancelled = false;

    setImageLoadStates((prev) => {
      const nextStates = { ...prev };
      imageList.forEach(({ id }) => {
        if (nextStates[id] === undefined) nextStates[id] = false;
      });
      return nextStates;
    });

    const imageMap = {};

    imageList.forEach(({ id, backgroundImageURL }) => {
      setImageLoadStates((prev) => {
        if (prev[id] === true) return prev;

        if (!backgroundImageURL) return { ...prev, [id]: false };

        const img = new Image();
        imageMap[id] = img;

        img.onload = () => {
          if (!cancelled) {
            setImageLoadStates((p) => ({ ...p, [id]: true }));
          }
        };

        img.onerror = () => {
          if (!cancelled) {
            setImageLoadStates((p) => ({ ...p, [id]: false }));
          }
        };

        img.src = backgroundImageURL;
        return prev;
      });
    });

    return () => {
      cancelled = true;
      Object.values(imageMap).forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageList]);

  return imageLoadStates;
}

export { useImageLodeChecker, useImageListLodeChecker };
