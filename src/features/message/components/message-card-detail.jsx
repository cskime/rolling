import styled from "styled-components";
import { PrimaryButton } from "../../../components/button/button";
import BUTTON_SIZE from "../../../components/button/button-size";
import Colors from "../../../components/color/colors";
import { formatDate } from "../../../utils/formatter";
import MessageSender from "./message-sender";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 19px;
  border-bottom: 1px solid ${Colors.gray(200)};
`;

const Content = styled.div`
  width: 100%;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #5a5a5a;
  max-height: 240px;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.gray(300)};
    border-radius: 2px;

    &:hover {
      background-color: ${Colors.gray(400)};
    }
  }
`;

const Action = styled.div`
  padding-top: 24px;
`;

const CreatedDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${Colors.gray(400)};
`;

const StyledMessageCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MessageCardDetail({ message, onConfirm }) {
  return (
    <StyledMessageCardDetail>
      <Header>
        <MessageSender
          profileImageUrl={message.profileImageURL}
          relationship={message.relationship}
          name={message.sender}
        />
        <CreatedDate>{formatDate(message.createdAt, ".")}</CreatedDate>
      </Header>
      <Content>{message.content}</Content>
      <Action>
        <PrimaryButton
          size={BUTTON_SIZE.medium}
          title="확인"
          onClick={onConfirm}
        />
      </Action>
    </StyledMessageCardDetail>
  );
}

export default MessageCardDetail;
