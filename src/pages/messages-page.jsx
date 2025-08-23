import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import {
  DangerousButton,
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import BACKGROUND_COLOR from "../components/color/background-color";
import Modal from "../components/modal/modal";
import ModalDialog from "../components/modal/modal-dialog";
import {
  deleteMessage,
  getMessages,
  getNextPageMessages,
} from "../features/message/api/messages";
import MessagesGrid from "../features/message/components/messages-grid";
import {
  deleteRecipient,
  getRecipient,
} from "../features/rolling-paper/api/recipients";
import RollingPaperHeader from "../features/rolling-paper/components/header/rolling-paper-header";
import { useMedia } from "../hooks/use-media";
import { useModalDialog } from "../hooks/use-modal-dialog";
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

function EditingButtons({ onDelete, onDone }) {
  return (
    <ButtonContainer>
      <DangerousButton
        size={BUTTON_SIZE.medium}
        title="삭제하기"
        onClick={onDelete}
      />
      <OutlinedButton size={BUTTON_SIZE.medium} title="완료" onClick={onDone} />
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
  const {
    showsDialog,
    dialogTitle,
    dialogContent,
    openDialog,
    closeDialog,
    onPrimaryAction,
  } = useModalDialog();

  const isEditing = useMemo(
    () => location.pathname.includes("edit"),
    [location]
  );

  const handleEditClick = () => {
    navigate("edit");
  };

  const handleRollingPaperDelete = () => {
    openDialog({
      title: `${recipient.name} 님의 롤링 페이퍼를 삭제할까요?`,
      content: "삭제한 롤링 페이퍼는 복원할 수 없어요.",
      primaryAction: async () => {
        try {
          await deleteRecipient({ id: recipient.id });
          navigate(`/list`);
        } catch (error) {
          // TODO: Error 처리
          console.log(error);
        }
      },
    });
  };

  const handleEditDone = () => {
    navigate(-1);
  };

  const handleMessageDelete = (message) => {
    openDialog({
      title: `${message.sender} 님의 메시지를 삭제할까요?`,
      content: "삭제한 메시지는 복원할 수 없어요.",
      primaryAction: async () => {
        try {
          await deleteMessage({ id: message.id });
          setMessages((prev) =>
            prev.filter((prevMessage) => prevMessage.id !== message.id)
          );
        } catch (error) {
          // TODO: Error 처리
          console.log(error);
        }
      },
    });
  };

  const handleDelete = () => {
    onPrimaryAction();
  };

  const handleDeleteCancel = () => {
    closeDialog();
  };

  const handleInfiniteScroll = async () => {
    const messages = await getNextPageMessages();
    if (!messages) return;

    setMessages((prev) => {
      const newMessages = [...prev];

      for (const message of messages) {
        if (newMessages.find((value) => value.id === message.id)) continue;
        newMessages.push(message);
      }

      return newMessages;
    });
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
          />
          <Content
            $backgroundImageUrl={recipient.backgroundImageURL}
            $backgroundColor={BACKGROUND_COLOR[recipient.backgroundColor]}
          >
            <div>
              {isEditing ? (
                <EditingButtons
                  onDelete={handleRollingPaperDelete}
                  onDone={handleEditDone}
                />
              ) : (
                <ViewerButtons onEdit={handleEditClick} />
              )}
              <MessagesGrid
                isEditing={isEditing}
                messages={messages}
                onDelete={handleMessageDelete}
                onInfiniteScroll={handleInfiniteScroll}
              />
            </div>
          </Content>
        </>
      )}
    </>
  );

  return isMobile ? (
    content
  ) : (
    <ContentLayout>
      {content}
      <Modal shows={showsDialog}>
        <ModalDialog
          title={dialogTitle}
          content={dialogContent}
          action={
            <>
              <PrimaryButton
                size={BUTTON_SIZE.medium}
                title="삭제"
                onClick={handleDelete}
              />
              <SecondaryButton
                size={BUTTON_SIZE.medium}
                title="취소"
                onClick={handleDeleteCancel}
              />
            </>
          }
        />
      </Modal>
    </ContentLayout>
  );
}

export default MessagesPage;
