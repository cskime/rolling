import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRecipient } from "../features/rolling-paper/api/recipients";
import RollingPaperHeader from "../features/rolling-paper/components/rolling-paper-header";
import { useMedia } from "../hooks/use-media";
import ContentLayout from "../layouts/content-layout";

const Content = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
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
          <Content $backgroundColor={recipient.backgroundColor}></Content>
        </>
      )}
    </>
  );

  return isMobile ? content : <ContentLayout>{content}</ContentLayout>;
}

export default MessagesPage;
