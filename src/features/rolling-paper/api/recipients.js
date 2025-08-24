import { apiClient } from "../../../api/client";

async function getRecipient({ id }) {
  const response = await apiClient.get(`recipients/${id}/`);
  if (response.status !== 200) {
    throw new Error("Recipient data를 가져오는데 실패했습니다.");
  }

  return response.data;
}

async function deleteRecipient({ id }) {
  const response = await apiClient.delete(`recipients/${id}/`);
  if (response.status !== 204) {
    throw new Error("Recipient를 삭제하는데 실패했습니다.");
  }
}

export { deleteRecipient, getRecipient };
