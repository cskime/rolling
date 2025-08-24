import { useEffect, useState } from "react";
import styled from "styled-components";
import CheckImage from "../../assets/ic-check.svg";
import { OutlinedButton } from "../button/button";
import BUTTON_SIZE from "../button/button-size";
import { media } from "../../utils/media";
import BACKGROUND_COLOR from "../color/background-color";
import Colors from "../color/colors";

const BackgroundWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  max-width: 720px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  ${media.mobile} {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OptionItem = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  position: relative;
`;

const CheckedIcon = styled.img`
  background-color: ${Colors.gray(500)};
  box-shadow: none;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  }
`;

const BackgroundOverlay = styled.div`
  height: 100%;
  border-radius: 8px;
  background-color: ${({ type, color }) =>
    type === "color" ? color : "transparent"};
  background-image: ${({ type, url }) =>
    type === "image" ? `url(${url})` : "none"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: ${({ selected }) => (selected ? 0.3 : 1)};
`;

function BackgroundSelect({ type, selected, onSelect }) {
  const [backgroundUrls, setBackgroundUrls] = useState([]);

  const colorOptions = [
    { color: BACKGROUND_COLOR.beige },
    { color: BACKGROUND_COLOR.purple },
    { color: BACKGROUND_COLOR.blue },
    { color: BACKGROUND_COLOR.green },
  ];

  useEffect(() => {
    if (type !== "image") return;

    const imageUrls = [
      "https://picsum.photos/id/683/3840/2160",
      "https://picsum.photos/id/24/3840/2160",
      "https://picsum.photos/id/599/3840/2160",
      "https://picsum.photos/id/1058/3840/2160",
    ];
    setBackgroundUrls(imageUrls || []);
  }, [type]);

  const options =
    type === "color"
      ? colorOptions
      : backgroundUrls.map((url, index) => ({ label: `${index}`, url }));

  return (
    <BackgroundWrapper>
      {options.map((option, index) => (
        <OptionItem key={index} onClick={() => onSelect(index)}>
          <BackgroundOverlay
            type={type}
            color={option.color}
            url={option.url}
            selected={selected === index}
          />
          {selected === index && <CheckedIcon src={CheckImage} />}
        </OptionItem>
      ))}
    </BackgroundWrapper>
  );
}

export default BackgroundSelect;
