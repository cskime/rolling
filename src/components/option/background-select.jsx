import Colors from "../color/colors";
import { ReactComponent as ArchesImage } from "../../assets/image-option-arches.svg";
import { ReactComponent as CarImage } from "../../assets/image-option-car.svg";
import styled from "styled-components";
import { ReactComponent as CheckImage } from "../../assets/ic-check.svg";

const BackgroundWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;

const CheckWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

function BackgroundSelect({ type = "color", selected, onSelect }) {
  const colorOptions = [
    { label: "orange", color: Colors.beige(200) },
    { label: "purple", color: Colors.purple(200) },
    { label: "blue", color: Colors.blue(200) },
    { label: "green", color: Colors.green(200) },
  ];

  const imageOptions = [
    { label: "arches", image: <ArchesImage /> },
    { label: "car", image: <CarImage /> },
  ];

  const options = type === "color" ? colorOptions : imageOptions;

  return (
    <BackgroundWrapper>
      {options.map((option) => (
        <OptionBox
          key={option.label}
          style={type === "color" ? { backgroundColor: option.color } : {}}
          onClick={() =>
            onSelect(type === "color" ? option.color : option.label)
          }
        >
          {type === "image" && option.image}
          {selected === (type === "color" ? option.color : option.label) && (
            <CheckWrapper>
              <CheckImage />
            </CheckWrapper>
          )}
        </OptionBox>
      ))}
    </BackgroundWrapper>
  );
}

export default BackgroundSelect;
