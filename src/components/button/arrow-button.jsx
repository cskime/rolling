import styled from "styled-components";
import arrowLeftImg from "../../assets/ic-chevron-left.svg";
import arrowRightImg from "../../assets/ic-chevron-right.svg";
import ARROW_BUTTON_DIRECTION from "./arrow-button-direction";

const arrowImg = {
  [ARROW_BUTTON_DIRECTION.left]: arrowLeftImg,
  [ARROW_BUTTON_DIRECTION.right]: arrowRightImg,
};

const StyledArrowButton = styled.button`
  background: none;
  border: 1px solid var(--color-gray-300);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

function ArrowButton({ direction }) {
  return (
    <StyledArrowButton>
      <img src={arrowImg[direction]} alt="화살표" />
    </StyledArrowButton>
  );
}

export default ArrowButton;
