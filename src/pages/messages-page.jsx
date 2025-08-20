import { useEffect, useState } from "react";
import { getRecipient } from "../features/rolling-paper/api/recipients";
import RollingPaperHeader from "../features/rolling-paper/components/rolling-paper-header";
import { useMedia } from "../hooks/use-media";
import ContentLayout from "../layouts/content-layout";

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
          <main>
            <h1>Messages Page</h1>
          </main>
        </>
      )}
    </>
  );

  return isMobile ? content : <ContentLayout>{content}</ContentLayout>;
}

export default MessagesPage;
