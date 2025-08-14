import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalProvider from "./components/modal/modal-provider";
import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import ContentLayout from "./layouts/content-layout";
import OnboardingLayout from "./layouts/onboarding-layout";
import CreatePostPage from "./pages/create-post-page";
import MainPage from "./pages/main-page";
import MessagePage from "./pages/message-list";
import RecipientPostPage from "./pages/recipient-post-page";
import SendMessagePage from "./pages/send-message-page";
import TestPage from "./pages/test-page";
import PostPage from "./pages/post-page";
import SendPage from "./pages/send-page";

function Provider({ children }) {
  return (
    <ModalProvider>
      <DropdownProvider>{children}</DropdownProvider>
    </ModalProvider>
  );
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
            <Route
              path=":id"
              element={
                <ContentLayout>
                  <RecipientPostPage />
                </ContentLayout>
              }
            />
          </Route>
          <Route path="/test-components" element={<TestPage />} />
          <Route path="/list" element={<MessagePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/post/{id}/message" element={<SendPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
