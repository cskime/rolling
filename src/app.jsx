import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortalProvider from "./components/portal/portal-provider";
import ContentLayout from "./layouts/content-layout";
import OnboardingLayout from "./layouts/onboarding-layout";
import CreatePostPage from "./pages/create-post-page";
import MainPage from "./pages/main-page";
import MessagePage from "./pages/rolling-paper-list-page";
import MessagesPage from "./pages/messages-page";
import SendMessagePage from "./pages/send-message-page";
import TestPage from "./pages/test-page";

function Provider({ children }) {
  return <PortalProvider>{children}</PortalProvider>;
}

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <OnboardingLayout>
                <MainPage />
              </OnboardingLayout>
            }
          />
          <Route
            path="/list"
            element={
              <OnboardingLayout>
                <MessagePage />
              </OnboardingLayout>
            }
          />
          <Route path="/post">
            <Route
              index
              element={
                <ContentLayout>
                  <CreatePostPage />
                </ContentLayout>
              }
            />
            <Route
              path=":id/message"
              element={
                <ContentLayout>
                  <SendMessagePage />
                </ContentLayout>
              }
            />
            <Route path=":id" element={<MessagesPage />} />
          </Route>
          <Route path="/test-components" element={<TestPage />} />
          <Route path="/list" element={<MessagePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
