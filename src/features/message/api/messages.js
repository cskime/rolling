import { apiClient } from "../../../api/client";

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
  return data.results;
}

export { getMessages };
