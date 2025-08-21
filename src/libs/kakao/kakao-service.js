function initKakaoSDK() {
  window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  window.Kakao.isInitialized();
}

function shareRollingPaper({ recipientId, recipientName }) {
  if (!recipientId || !recipientName) return;

  const appIdString = import.meta.env.VITE_KAKAO_MESSAGE_TEMPLATE_ID;
  const appId = Number(appIdString);
  if (!appId) return;

  window.Kakao.Share.sendCustom({
    templateId: appId,
    templateArgs: {
      recipientId,
      recipientName,
    },
  });
}

export { initKakaoSDK, shareRollingPaper };
