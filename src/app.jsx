import { BrowserRouter, Route, Routes } from "react-router";
import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import ContentLayout from "./layouts/content-layout";
import OnboardingLayout from "./layouts/onboarding-layout";
import AddPostPage from "./pages/add-post-page";
import MainPage from "./pages/main-page";
import MessagePage from "./pages/message-list";
import RecipientPostPage from "./pages/recipient-post-page";
import SendMessagePage from "./pages/send-message-page";
import TestPage from "./pages/test-page";

function App() {
  return (
    <DropdownProvider>
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
                  <AddPostPage />
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
        </Routes>
      </BrowserRouter>
    </DropdownProvider>
  );
}

export default App;
