import { BrowserRouter, Route, Routes } from "react-router";
import ModalProvider from "./components/modal/modal-provider";
import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import MessagePage from "./pages/message-list";
import TestPage from "./pages/test-page";

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
          <Route path="/test-components" element={<TestPage />} />
          <Route path="/list" element={<MessagePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
