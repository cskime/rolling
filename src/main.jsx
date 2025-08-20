import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { initKakaoSDK } from "./libs/kakao/kakao-service";

initKakaoSDK();

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
