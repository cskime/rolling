import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRecipient } from "../features/rolling-paper/api/recipients";
import RollingPaperHeader from "../features/rolling-paper/components/header/rolling-paper-header";
import RollingPaperMessagesGrid from "../features/rolling-paper/components/messages/rolling-paper-messages-grid";
import { useMedia } from "../hooks/use-media";
import ContentLayout from "../layouts/content-layout";

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
`;

function MessagesPage() {
  const { isMobile } = useMedia();
  const [recipient, setRecipient] = useState();

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
            <RollingPaperMessagesGrid messages={recipient.recentMessages} />
          </Content>
        </>
      )}
    </>
  );

  return isMobile ? content : <ContentLayout>{content}</ContentLayout>;
}

export default MessagesPage;
