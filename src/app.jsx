import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortalProvider from "./components/portal/portal-provider";
import ContentLayout from "./layouts/content-layout";
import OnboardingLayout from "./layouts/onboarding-layout";
import Error404Page from "./pages/404-page";
import CreatePostPage from "./pages/create-post-page";
import MainPage from "./pages/main-page";
import MessagesPage from "./pages/messages-page";
import RollingPaperListPage from "./pages/rolling-paper-list-page";
import SendMessagePage from "./pages/send-message-page";
import GlobalStyle from "./styles/global-style";
import TestApiPage from "./tests/test-api-page";
import TestComponentsPage from "./tests/test-components-page";

function Provider({ children }) {
  return <PortalProvider>{children}</PortalProvider>;
}

function Development({ children }) {
  return import.meta.env.PROD ? <h1>개발 전용 페이지입니다.</h1> : children;
}

function App() {
  return (
    <>
      <GlobalStyle />
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
            <Route
              path="/test-api"
              element={
                <Development>
                  <TestApiPage />
                </Development>
              }
            />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
