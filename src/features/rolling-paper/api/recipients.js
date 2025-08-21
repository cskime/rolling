import { apiClient } from "../../../api/client";

async function getRecipient({ id }) {
  const response = await apiClient.get(`recipients/${id}/`);
  if (response.status !== 200) {
    throw new Error("Recipient data를 가져오는데 실패했습니다.");
  }

  return response.data;
}

export { getRecipient };
