import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import Colors from "../components/color/colors";
import {
  createMessages,
  createReactions,
  createRecipients,
  deleteAllMessages,
  deleteAllRecipients,
  getAllMessages,
  getAllReactions,
  getAllRecipients,
} from "./test-api";

const Page = styled.div`
  margin: 24px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
`;

const TableHeader = styled.thead`
  font-weight: 700;
  background-color: ${Colors.gray(100)};
`;

const TableRow = styled.tr``;

const TableBody = styled.tbody`
  & > tr:hover {
    cursor: pointer;
    background-color: ${Colors.gray(100)};
  }
`;

const TableData = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 4px 12px;
`;

function RecipientsTable({ recipients, onClick }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableData>id</TableData>
          <TableData>name</TableData>
          <TableData>backgroundColor</TableData>
          <TableData>backgroundImageURL</TableData>
          <TableData>messageCount</TableData>
          <TableData>reactionCount</TableData>
          <TableData>createdAt</TableData>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recipients.map((recipient) => (
          <TableRow
            key={recipient.id}
            onClick={onClick ? () => onClick(recipient) : undefined}
          >
            <TableData>{recipient.id}</TableData>
            <TableData>{recipient.name}</TableData>
            <TableData>{recipient.backgroundColor}</TableData>
            <TableData>{recipient.backgroundImageURL}</TableData>
            <TableData>{recipient.messageCount}</TableData>
            <TableData>{recipient.reactionCount}</TableData>
            <TableData>{recipient.createdAt}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function MessagesTable({ messages }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableData>id</TableData>
          <TableData>recipientId</TableData>
          <TableData>sender</TableData>
          <TableData>profileImageURL</TableData>
          <TableData>relationship</TableData>
          <TableData>content</TableData>
          <TableData>font</TableData>
          <TableData>createdAt</TableData>
        </TableRow>
      </TableHeader>
      <TableBody>
        {messages.map((message) => (
          <TableRow key={message.id}>
            <TableData>{message.id}</TableData>
            <TableData>{message.recipientId}</TableData>
            <TableData>{message.sender}</TableData>
            <TableData>{message.profileImageURL}</TableData>
            <TableData>{message.relationship}</TableData>
            <TableData>{message.content}</TableData>
            <TableData>{message.font}</TableData>
            <TableData>{message.createdAt}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ReactionsTable({ reactions }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableData>id</TableData>
          <TableData>emoji</TableData>
          <TableData>count</TableData>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reactions.map((reaction) => (
          <TableRow key={reaction.id}>
            <TableData>{reaction.id}</TableData>
            <TableData>{reaction.emoji}</TableData>
            <TableData>{reaction.count}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TestApiPage() {
  const [recipients, setRecipients] = useState([]);
  const [messages, setMessages] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  const buttonSize = BUTTON_SIZE.medium;

  const updateRecipients = useCallback(async () => {
    const recipients = await getAllRecipients();
    setRecipients(recipients);
  }, []);

  /* Recipients */

  const handleCreateRecipientsClick = async () => {
    await createRecipients();
    updateRecipients();
  };

  const handleDeleteRecipientsClick = async () => {
    await deleteAllRecipients(recipients);
    setRecipients([]);
    setMessages([]);
    setReactions([]);
    setSelectedRecipient(null);
  };

  const handleRecipientClick = async (recipient) => {
    setSelectedRecipient(recipient);

    const messages = await getAllMessages({ recipientId: recipient.id });
    setMessages(messages);

    const reactions = await getAllReactions({ recipientId: recipient.id });
    setReactions(reactions);
  };

  /* Messages */

  const handleCreateMessagesClick = async () => {
    const recipientId = prompt("추가할 recipient id", "");
    await createMessages({ recipientId });
    updateRecipients();
  };

  const handleDeleteMessagesClick = async () => {
    if (messages.length > 0) {
      await deleteAllMessages(messages);
      setMessages([]);
    } else {
      const recipientId = prompt("삭제할 recipient id", "");
      const messages = await getAllMessages({ recipientId });
      await deleteAllMessages(messages);
      setMessages([]);
    }

    updateRecipients();
  };

  /* Reactions */

  const handleCreateReactionsClick = async () => {
    const recipientId = prompt("추가할 recipient id", "");
    await createReactions({ recipientId });

    const reactions = await getAllReactions({ recipientId });
    setReactions(reactions);

    updateRecipients();
  };

  useEffect(() => {
    updateRecipients();
  }, [updateRecipients]);

  return (
    <Page>
      <Column>
        <Row>
          <PrimaryButton
            size={buttonSize}
            title="테스트 롤링페이퍼 생성"
            onClick={handleCreateRecipientsClick}
          />
          <PrimaryButton
            size={buttonSize}
            title="테스트 메시지 생성"
            onClick={handleCreateMessagesClick}
            disabled={recipients.length === 0}
          />
          <PrimaryButton
            size={buttonSize}
            title="테스트 리액션 생성"
            onClick={handleCreateReactionsClick}
            disabled={recipients.length === 0}
          />
        </Row>
        <Row>
          <PrimaryButton
            style={
              recipients.length === 0
                ? undefined
                : { backgroundColor: Colors.error }
            }
            size={buttonSize}
            title="롤링페이퍼 삭제"
            onClick={handleDeleteRecipientsClick}
            disabled={recipients.length === 0}
          />
          <PrimaryButton
            style={
              recipients.length === 0
                ? undefined
                : { backgroundColor: Colors.error }
            }
            size={buttonSize}
            title="메시지 삭제"
            onClick={handleDeleteMessagesClick}
            disabled={recipients.length === 0}
          />
        </Row>
        <h2>{`현재 생성된 롤링페이퍼 (${recipients.length}개)`}</h2>
        {recipients.length > 0 && (
          <RecipientsTable
            recipients={recipients}
            onClick={handleRecipientClick}
          />
        )}
        {selectedRecipient && (
          <h2>{`${selectedRecipient.name} 에게 달린 메시지 (${
            messages.length ?? 0
          }개)`}</h2>
        )}
        {messages.length > 0 && <MessagesTable messages={messages} />}
        {selectedRecipient && (
          <h2>{`${selectedRecipient.name} 에게 달린 리액션 (${
            reactions.length ?? 0
          }개)`}</h2>
        )}
        {reactions.length > 0 && <ReactionsTable reactions={reactions} />}
      </Column>
    </Page>
  );
}

export default TestApiPage;
