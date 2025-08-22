import { apiClient } from "../../../api/client";

async function getReactions({ recipientId }) {
  const response = await apiClient.get(`recipients/${recipientId}/reactions/`);
  if (response.status !== 200) {
    throw new Error("Reactions data를 가져오는데 실패했습니다.");
  }

  const data = response.data;
  return data.results;
}

export { getReactions };
