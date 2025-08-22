import { useEffect, useState } from "react";
import styled from "styled-components";
import CheckImage from "../../assets/ic-check.svg";
import { OutlinedButton } from "../button/button";
import BUTTON_SIZE from "../button/button-size";
import BACKGROUND_COLOR from "../color/background-color";
import Colors from "../color/colors";

const BackgroundWrapper = styled.div`
  padding-top: 50px;
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const OptionItem = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ type, color }) => (type === "color" ? color : "none")};
  background-image: ${({ type, url }) =>
    type === "image" ? `url(${url})` : "none"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: ${({ selected }) => (selected ? 0.3 : 1)};
`;

const CircleButtonWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    border-radius: 50%;
  }
`;

function BackgroundSelect({ type, selected, onSelect }) {
  const [imageUrls, setImageUrls] = useState([]);

  const colorOptions = [
    { color: BACKGROUND_COLOR.beige },
    { color: BACKGROUND_COLOR.purple },
    { color: BACKGROUND_COLOR.blue },
    { color: BACKGROUND_COLOR.green },
  ];

  /* useEffect(() => {
    if (type !== "image") return;

    const BackgroundImageUrls = async () => {
      try {
        const response = await fetch(
          "https://rolling-api.vercel.app/background-images"
        );
        const data = await response.json();
        setImageUrls(data.imageUrls || []);
      } catch (error) {
        console.error(error);
        setImageUrls([]);
      }
    };
    BackgroundImageUrls();
  }, [type]); */

  // 이미지 옵션 테스트 코드
  useEffect(() => {
    if (type !== "image") return;

    const testImages = [
      "https://i.pinimg.com/280x280_RS/44/d2/b0/44d2b0b9e08cf1f05b7215356925a146.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPe2BEhk6RfeibdWPG-1Iac78Tk1bdO1Rtqg&s",
      "https://center.exm.co.kr/data/goodsimg/phob/l/0018/027/18027744/61709_1661145612.jpg",
      "https://i.pinimg.com/736x/35/4e/03/354e03cd79702063da7353ffea0c8f8b.jpg",
    ];
    setImageUrls(testImages || []);
  }, [type]);

  const options =
    type === "color"
      ? colorOptions
      : imageUrls.map((url, index) => ({ label: `${index}`, url }));

  return (
    <BackgroundWrapper>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          type={type}
          color={option.color}
          url={option.url}
          onClick={() => onSelect(index)}
          selected={selected === index}
        >
          {selected === index && (
            <CircleButtonWrapper>
              <OutlinedButton
                size={BUTTON_SIZE.extraSmall}
                icon={CheckImage}
                style={{ backgroundColor: Colors.gray(500), boxShadow: "none" }}
              />
            </CircleButtonWrapper>
          )}
        </OptionItem>
      ))}
    </BackgroundWrapper>
  );
}

export default BackgroundSelect;
