import { BrowserRouter, Route, Routes } from "react-router";
import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import MessagePage from "./pages/message-list";
import TestPage from "./pages/test-page";

function App() {
  return (
    <DropdownProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/test-components" element={<TestPage />} />
          <Route path="/list" element={<MessagePage />} />
        </Routes>
      </BrowserRouter>
    </DropdownProvider>
  );
}

export default App;
