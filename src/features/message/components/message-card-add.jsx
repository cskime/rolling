import styled from "styled-components";
import plusImage from "../../../assets/ic-plus.svg";
import Colors from "../../../components/color/colors";
import { media } from "../../../utils/media";
import MessageCardBase from "./message-card-base";

const AddCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${Colors.gray(500)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMessageCardAdd = styled.button`
  width: 100%;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;

  ${media.tablet} {
    min-height: 284px;
  }

  ${media.mobile} {
    min-height: 230px;
  }
`;

function MessageCardAdd({ onClick }) {
  return (
    <MessageCardBase>
      <StyledMessageCardAdd onClick={onClick}>
        <AddCircle>
          <img src={plusImage} alt="Message 추가" />
        </AddCircle>
      </StyledMessageCardAdd>
    </MessageCardBase>
  );
}

export default MessageCardAdd;
