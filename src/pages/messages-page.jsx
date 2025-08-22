import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { OutlinedButton, PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import BACKGROUND_COLOR from "../components/color/background-color";
import { getMessages } from "../features/message/api/messages";
import { getRecipient } from "../features/rolling-paper/api/recipients";
import RollingPaperHeader from "../features/rolling-paper/components/header/rolling-paper-header";
import RollingPaperMessagesGrid from "../features/rolling-paper/components/messages/rolling-paper-messages-grid";
import { useMedia } from "../hooks/use-media";
import ContentLayout from "../layouts/content-layout";
import { media } from "../utils/media";

const backgroundStyle = ({ $backgroundImageUrl, $backgroundColor }) => {
  if (!$backgroundImageUrl) {
    return `background-color: ${$backgroundColor}`;
  }

  return `
    background: url('${$backgroundImageUrl}');
    background-size: contain;
  `;
};

const Content = styled.div`
  ${backgroundStyle};
  height: calc(100% - 68px);

  & > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 1200px;
    margin: 0 auto;
    padding: 112px 0 246px;

    @media (max-width: 1248px) {
      width: 100%;
      padding: 93px 24px 91px;
    }

    ${media.mobile} {
      padding: 24px 20px 38px;
    }
  }
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 16px;
`;

function ViewerButtons({ onEdit }) {
  return (
    <ButtonContainer>
      <PrimaryButton
        size={BUTTON_SIZE.medium}
        title="수정하기"
        onClick={onEdit}
      />
    </ButtonContainer>
  );
}

function EditingButtons({ onDelete, onCancel }) {
  return (
    <ButtonContainer>
      <PrimaryButton
        size={BUTTON_SIZE.medium}
        title="삭제하기"
        onClick={onDelete}
      />
      <OutlinedButton
        size={BUTTON_SIZE.medium}
        title="취소하기"
        onClick={onCancel}
      />
    </ButtonContainer>
  );
}

function MessagesPage() {
  const { isMobile } = useMedia();
  const [recipient, setRecipient] = useState();
  const [messages, setMessages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditing = useMemo(
    () => location.pathname.includes("edit"),
    [location]
  );

  const handleEditClick = () => {
    navigate("edit");
  };

  const handleRollingPaperDelete = () => {
    // TODO: Rolling Paper 삭제
    console.log(`Delete Rolling Paper ${recipient.id}`);
    navigate(-1);
  };

  const handleEditCancel = () => {
    navigate(-1);
  };

  const handleMessageDelete = (messageId) => {
    // TODO: Message 삭제
    console.log(`Delete Message ${messageId}`);
  };

  useEffect(() => {
    async function fetchRollingPaper() {
      try {
        const [recipient, messages] = await Promise.all([
          getRecipient({ id }),
          getMessages({ recipientId: id }),
        ]);
        setRecipient(recipient);
        setMessages(messages);
      } catch (error) {
        // TODO: Error 처리 필요
        console.error(error);
      }
    }

    fetchRollingPaper();
  }, [id]);

  const content = (
    <>
      {recipient && (
        <>
          <RollingPaperHeader
            isEditing={isEditing}
            recipientId={recipient.id}
            recipientName={recipient.name}
            messages={messages}
            reactions={recipient.topReactions}
          />
          <Content
            $backgroundImageUrl={recipient.backgroundImageURL}
            $backgroundColor={BACKGROUND_COLOR[recipient.backgroundColor]}
          >
            <div>
              {isEditing ? (
                <EditingButtons
                  onDelete={handleRollingPaperDelete}
                  onCancel={handleEditCancel}
                />
              ) : (
                <ViewerButtons onEdit={handleEditClick} />
              )}
              <RollingPaperMessagesGrid
                isEditing={isEditing}
                messages={messages}
                onDelete={handleMessageDelete}
              />
            </div>
          </Content>
        </>
      )}
    </>
  );

  return isMobile ? content : <ContentLayout>{content}</ContentLayout>;
}

export default MessagesPage;
