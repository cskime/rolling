import { useEffect, useRef, useState } from "react";

const mediaQueryString = {
  desktop: "(min-width: 1200px)",
  tablet: "(min-width: 768px) and (max-width: 1199px)",
  mobile: "(max-width: 767px)",
};

function useMedia() {
  const desktop = useRef(matchMedia(mediaQueryString.desktop)).current;
  const tablet = useRef(matchMedia(mediaQueryString.tablet)).current;
  const mobile = useRef(matchMedia(mediaQueryString.mobile)).current;

  const [matches, setMatches] = useState({
    isDesktop: desktop.matches,
    isTablet: tablet.matches,
    isMobile: mobile.matches,
  });

  useEffect(() => {
    const handleDesktopMatch = (event) => {
      const matches = event.matches;
      if (!matches) return;
      setMatches({
        isDesktop: matches,
        isTablet: false,
        isMobile: false,
      });
    };

    const handleTabletMatch = (event) => {
      const matches = event.matches;
      if (!matches) return;
      setMatches({
        isDesktop: false,
        isTablet: matches,
        isMobile: false,
      });
    };

    const handleMobileMatch = (event) => {
      const matches = event.matches;
      if (!matches) return;
      setMatches({
        isDesktop: false,
        isTablet: false,
        isMobile: matches,
      });
    };

    desktop.addEventListener("change", handleDesktopMatch);
    tablet.addEventListener("change", handleTabletMatch);
    mobile.addEventListener("change", handleMobileMatch);

    return () => {
      desktop.removeEventListener("change", handleDesktopMatch);
      tablet.removeEventListener("change", handleTabletMatch);
      mobile.removeEventListener("change", handleMobileMatch);
    };
  }, [desktop, tablet, mobile]);

  return matches;
}

export { useMedia };
