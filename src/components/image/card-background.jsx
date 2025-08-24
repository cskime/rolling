import React from "react";
import styled from "styled-components";
import SpinnerOverlay from "../loading/loading";
import { useImageLodeChecker } from "../../hooks/use-image-loader";

const backgroundColors = {
  beige: "#FFE2AD",
  purple: "#ECD9FF",
  green: "#D0F5C3",
  blue: "#B1E4FF",
};

const getBackground = ($imageURL, $color, $overlayOn) => {
  return $imageURL
    ? `${
        $overlayOn ? "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), " : ""
      }url(${$imageURL}) center/cover no-repeat`
    : backgroundColors[$color] || "white";
};

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CardImage = styled.div`
  background: ${({ $imageURL, $color, $overlayOn }) =>
    getBackground($imageURL, $color, $overlayOn)};
  z-index: 0;
`;

const CardBackground = ({
  backgroundImageURL,
  backgroundColor,
  overlayOn = false,
  ...props
}) => {
  const noNeedToLoad = !backgroundImageURL ? true : false;
  const isImageLoaded = useImageLodeChecker(backgroundImageURL, noNeedToLoad);

  return (
    <CardContainer>
      {!isImageLoaded && <SpinnerOverlay thickness="4px" />}
      <CardImage
        $imageURL={backgroundImageURL}
        $color={backgroundColor}
        $overlayOn={overlayOn}
        {...props}
      />
    </CardContainer>
  );
};

export default CardBackground;
