import { apiClient } from "../../../api/client";

async function getReactions({ recipientId }) {
  const response = await apiClient.get(`recipients/${recipientId}/reactions/`);
  if (response.status !== 200) {
    throw new Error("Reactions data를 가져오는데 실패했습니다.");
  }

  const data = response.data;
  return data.results;
}

async function addReaction({ recipientId, emoji }) {
  const response = await apiClient.post(
    `recipients/${recipientId}/reactions/`,
    {
      emoji,
      type: "increase",
    }
  );
  if (response.status !== 201) {
    throw new Error("Reaction을 추가하는데 실패했습니다.");
  }

  const data = response.data;
  return data;
}

export { addReaction, getReactions };
