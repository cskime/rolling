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

  p {
    margin: 0;
    flex-grow: 1;
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

function Toast({ message }) {
  return (
    <StyledToast>
      <Icon>
        <img src={checkImg} alt="확인" />
      </Icon>
      <p>{message}</p>
      <Icon>
        <img src={closeImg} alt="닫기" />
      </Icon>
    </StyledToast>
  );
}

export default Toast;
