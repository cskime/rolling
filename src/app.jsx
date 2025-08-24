import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortalProvider from "./components/portal/portal-provider";
import ContentLayout from "./layouts/content-layout";
import OnboardingLayout from "./layouts/onboarding-layout";
import CreatePostPage from "./pages/create-post-page";
import MainPage from "./pages/main-page";
import RollingPaperListPage from "./pages/rolling-paper-list-page";
import MessagesPage from "./pages/messages-page";
import SendMessagePage from "./pages/send-message-page";
import TestApiPage from "./tests/test-api-page";
import TestComponentsPage from "./tests/test-components-page";
import Error404Page from "./pages/404-page";

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
                <RollingPaperListPage />
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
            <Route path=":id">
              <Route index element={<MessagesPage />} />
              <Route path="edit" element={<MessagesPage />} />
              <Route
                path="message"
                element={
                  <ContentLayout>
                    <SendMessagePage />
                  </ContentLayout>
                }
              />
            </Route>
          </Route>
          <Route path="/test-components" element={<TestComponentsPage />} />
          <Route path="/test-api" element={<TestApiPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
