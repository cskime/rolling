import styled from "styled-components";
import Colors from "../../../components/color/colors";
import { formatDate } from "../../../utils/formatter";
import { media } from "../../../utils/media";
import MessageSender from "./message-sender";

const Header = styled.header`
  padding-bottom: 16px;
  border-bottom: 1px solid ${Colors.gray(200)};
`;

const Content = styled.div`
  margin: 16px 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${Colors.gray(600)};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  min-height: 112px; /* line-height x 4 */

  ${media.mobile} {
    font-size: 15px;
    line-height: 22px;
    -webkit-line-clamp: 3;
    min-height: 66px; /* line-height x 3 */
  }
`;

const CreatedDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${Colors.gray(400)};
`;

const StyledMessageCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
`;

function MessageCard({ message }) {
  return (
    <StyledMessageCard>
      <Header>
        <MessageSender
          profileImage={message.profileImage}
          name={message.sender}
        />
      </Header>
      <Content>{message.content}</Content>
      <CreatedDate>{formatDate(message.createdAt, ".")}</CreatedDate>
    </StyledMessageCard>
  );
}

export default MessageCard;
