import { BrowserRouter, Route, Routes } from "react-router";
import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import OnboardingLayout from "./layouts/onboarding-layout";
import MainPage from "./pages/main-page";
import MessagePage from "./pages/message-list";
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
          <Route path="/test-components" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </DropdownProvider>
  );
}

export default App;
