import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
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

const StyledEditButton = styled(PrimaryButton)`
  align-self: flex-end;
`;

function EditButton({ isEditing }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(isEditing ? -1 : "edit");
  };

  return (
    <StyledEditButton
      size={BUTTON_SIZE.medium}
      title={isEditing ? "삭제하기" : "수정하기"}
      onClick={handleEditClick}
    />
  );
}

function MessagesPage() {
  const { isMobile } = useMedia();
  const [recipient, setRecipient] = useState();
  const location = useLocation();

  useEffect(() => {
    getRecipient().then(setRecipient);
  }, []);

  const content = (
    <>
      {recipient && (
        <>
          <RollingPaperHeader
            recipientId={recipient.id}
            recipientName={recipient.name}
            messages={recipient.recentMessages}
            reactions={recipient.topReactions}
          />
          <Content
            $backgroundImageUrl={recipient.backgroundImageURL}
            $backgroundColor={recipient.backgroundColor}
          >
            <div>
              <EditButton isEditing={location.pathname.includes("edit")} />
              <RollingPaperMessagesGrid messages={recipient.recentMessages} />
            </div>
          </Content>
        </>
      )}
    </>
  );

  return isMobile ? content : <ContentLayout>{content}</ContentLayout>;
}

export default MessagesPage;
