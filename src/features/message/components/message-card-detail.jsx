import styled from "styled-components";
import Colors from "../../../components/color/colors";
import { formatDate } from "../../../utils/formatter";
import MessageSender from "./message-sender";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 19px;
  border-bottom: 1px solid ${Colors.gray(200)};
`;

const Content = styled.div`
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

const CreatedDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${Colors.gray(400)};
`;

const StyledMessageCardDetail = styled.div``;

function MessageCardDetail({ message }) {
  return (
    <StyledMessageCardDetail>
      <Header>
        <MessageSender
          profileImage={message.profileImage}
          name={message.sender}
        />
        <CreatedDate>{formatDate(message.createdAt, ".")}</CreatedDate>
      </Header>
      <Content>{message.content}</Content>
    </StyledMessageCardDetail>
  );
}

export default MessageCardDetail;
