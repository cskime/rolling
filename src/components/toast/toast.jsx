import styled from "styled-components";
import checkImg from "../../assets/ic-check-circle-green.svg";
import closeImg from "../../assets/ic-xmark.svg";

const StyledToast = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  min-width: 524px;
  height: 64px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: white;
  white-space: nowrap;
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);

  p {
    margin: 0;
    flex-grow: 1;
  }

  @media (max-width: 1199px) {
    bottom: 50px;
  }

  @media (max-width: 767px) {
    min-width: 0;
    transform: none;
    left: 20px;
    right: 20px;
    bottom: 88px;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const IconButton = styled(Icon)`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

function Toast({ message, onDismiss }) {
  return (
    <StyledToast>
      <Icon>
        <img src={checkImg} alt="확인" />
      </Icon>
      <p>{message}</p>
      <IconButton as="button" onClick={onDismiss}>
        <img src={closeImg} alt="닫기" />
      </IconButton>
    </StyledToast>
  );
}

export default Toast;
