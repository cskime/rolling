import { apiClient } from "../api/client";
import messageBody from "./test-message-body.json";
import reactionBody from "./test-reaction-body.json";
import recipientBody from "./test-recipient-body.json";

/* Recipients */

export async function createRecipients() {
  let promises = [];
  for (const body of recipientBody) {
    const promise = apiClient.post("recipients/", body);
    promises.push(promise);
  }
  await Promise.all(promises);
}

export async function getAllRecipients() {
  const response = await apiClient.get("/recipients/?limit=20");
  return response.data.results;
}

export async function deleteAllRecipients(recipients) {
  let promises = [];
  for (const recipient of recipients) {
    const promise = apiClient.delete(`recipients/${recipient.id}/`);
    promises.push(promise);
  }
  await Promise.all(promises);
}

/* Messages */

export async function createMessages({ recipientId }) {
  let promises = [];
  for (const body of messageBody) {
    const promise = apiClient.post(`recipients/${recipientId}/messages/`, body);
    promises.push(promise);
  }
  await Promise.all(promises);
}

export async function getAllMessages({ recipientId }) {
  const response = await apiClient.get(
    `/recipients/${recipientId}/messages/?limit=20`
  );
  return response.data.results;
}

export async function deleteAllMessages(messages) {
  let promises = [];
  for (const message of messages) {
    const promise = apiClient.delete(`messages/${message.id}/`);
    promises.push(promise);
  }
  await Promise.all(promises);
}

/* Reactions */

export async function createReactions({ recipientId }) {
  let promises = [];
  for (const body of reactionBody) {
    const randomCount = Math.ceil(Math.random() * 10);
    Array.from({ length: randomCount }).forEach(() => {
      const promise = apiClient.post(
        `recipients/${recipientId}/reactions/`,
        body
      );
      promises.push(promise);
    });
  }
  await Promise.all(promises);
}

export async function getAllReactions({ recipientId }) {
  const response = await apiClient.get(
    `/recipients/${recipientId}/reactions/?limit=10`
  );
  return response.data.results;
}
