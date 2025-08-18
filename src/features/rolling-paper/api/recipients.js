import mockRecipient from "./mock-recipient.json";

async function getRecipient() {
  // NOTE: API를 연동하기 전에 mock data로 먼저 개발합니다.
  return mockRecipient;
}

export { getRecipient };
