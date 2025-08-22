import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Modal from "../../../components/modal/modal.jsx";
import { useIntersectionObserver } from "../../../hooks/use-intersection-observer.jsx";
import { media } from "../../../utils/media.js";
import MessageCardAdd from "./message-card-add.jsx";
import MessageCardDetail from "./message-card-detail.jsx";
import MessageCard from "./message-card.jsx";

const StyledRollingPaperMessagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 28px;

  @media (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function MessagesGrid({ isEditing, messages, onDelete, onInfiniteScroll }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const infiniteScrollTargetRef = useRef();

  const observerCallback = (entry) => {
    if (!entry.isIntersecting) return;
    onInfiniteScroll();
  };
  useIntersectionObserver(infiniteScrollTargetRef, observerCallback);

  const handleAddClick = () => {
    navigate(`/post/${id}/message`);
  };

  const handleDeleteClick = (messageId) => {
    onDelete(messageId);
  };

  const messageCard = (message) => (
    <MessageCard
      key={message.id}
      isEditing={isEditing}
      message={message}
      onDelete={(event) => handleDeleteClick(event, message.id)}
    />
  );

  return (
    <StyledRollingPaperMessagesGrid>
      <MessageCardAdd onClick={handleAddClick} />
      {messages.map((message) =>
        isEditing ? (
          messageCard(message)
        ) : (
          <Modal key={message.id} id={message.id} action={messageCard(message)}>
            <MessageCardDetail message={message} />
          </Modal>
        )
      )}
      <div ref={infiniteScrollTargetRef}></div>
    </StyledRollingPaperMessagesGrid>
  );
}

export default MessagesGrid;
