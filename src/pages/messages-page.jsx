import { useEffect, useState } from "react";
import { getRecipient } from "../features/rolling-paper/api/recipients";
import RollingPaperHeader from "../features/rolling-paper/components/rolling-paper-header";

function MessagesPage() {
  const [recipient, setRecipient] = useState();

  useEffect(() => {
    getRecipient().then(setRecipient);
  }, []);

  return (
    <>
      {recipient && (
        <>
          <RollingPaperHeader
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
}

export default MessagesPage;
