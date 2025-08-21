import styled from "styled-components";
import Colors from "../color/colors";
import CheckImage from "../../assets/ic-check.svg";
import { useEffect, useState } from "react";
import { OutlinedButton } from "../button/button";
import BUTTON_SIZE from "../button/button-size";

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
  const [imageUrls, setImageUrls] = useState([]);

  const colorOptions = [
    { color: Colors.beige(200) },
    { color: Colors.purple(200) },
    { color: Colors.blue(200) },
    { color: Colors.green(200) },
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
