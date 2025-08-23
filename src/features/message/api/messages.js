import axios from "axios";
import { apiClient } from "../../../api/client";

let nextPage;

async function getMessages({ recipientId, limit, page = 1 }) {
  const searchParams = new URLSearchParams();
  searchParams.append("page", page);
  if (limit) {
    searchParams.append("limit", limit);
  }

  const response = await apiClient.get(
    `recipients/${recipientId}/messages/?${searchParams.toString()}`
  );
  if (response.status !== 200) {
    throw new Error("Message data를 가져오는데 실패했습니다.");
  }

  const data = response.data;
  nextPage = data.next;

  return data.results;
}

async function getNextPageMessages() {
  if (!nextPage) return;

  const response = await axios.get(nextPage);
  if (response.status !== 200) {
    throw new Error("Message data를 가져오는데 실패했습니다.");
  }

  const data = response.data;
  nextPage = data.next;

  return data.results;
}

async function deleteMessage({ id }) {
  const response = await apiClient.delete(`messages/${id}/`);
  if (response.status !== 204) {
    throw new Error("Message를 삭제하는데 실패했습니다.");
  }
}

export { deleteMessage, getMessages, getNextPageMessages };
