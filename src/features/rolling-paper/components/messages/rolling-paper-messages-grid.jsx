import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Modal from "../../../../components/modal/modal.jsx";
import { media } from "../../../../utils/media.js";
import MessageCardAdd from "../../../message/components/message-card-add.jsx";
import MessageCardDetail from "../../../message/components/message-card-detail.jsx";
import MessageCard from "../../../message/components/message-card.jsx";

const StyledRollingPaperMessagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 28px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 112px 0 246px;

  @media (max-width: 1248px) {
    padding: 93px 24px 91px;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  ${media.mobile} {
    padding: 24px 20px 38px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

function RollingPaperMessagesGrid({ messages }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAddClick = () => {
    navigate(`/post/${id}/message`);
  };

  return (
    <StyledRollingPaperMessagesGrid>
      <MessageCardAdd onClick={handleAddClick} />
      {messages.map((message) => (
        <Modal
          key={message.id}
          id={message.id}
          action={<MessageCard key={message.id} message={message} />}
        >
          <MessageCardDetail message={message} />
        </Modal>
      ))}
    </StyledRollingPaperMessagesGrid>
  );
}

export default RollingPaperMessagesGrid;
