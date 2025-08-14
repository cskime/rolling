import { BrowserRouter, Route, Routes } from "react-router";
import ModalProvider from "./components/modal/modal-provider";
import PopoverProvider from "./components/popover/popover-provider";
import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import ContentLayout from "./layouts/content-layout";
import OnboardingLayout from "./layouts/onboarding-layout";
import CreatePostPage from "./pages/create-post-page";
import MainPage from "./pages/main-page";
import MessagePage from "./pages/message-list";
import MessagesPage from "./pages/messages-page";
import SendMessagePage from "./pages/send-message-page";
import TestPage from "./pages/test-page";

function Provider({ children }) {
  return (
    <ModalProvider>
      <PopoverProvider>
        <DropdownProvider>{children}</DropdownProvider>
      </PopoverProvider>
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
                  <MessagesPage />
                </ContentLayout>
              }
            />
          </Route>
          <Route path="/test-components" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
