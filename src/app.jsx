import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import MessagePage from "./pages/message-list";
import TestPage from "./pages/test-page";
import PostPage from "./pages/post-page";

function App() {
  return (
    <DropdownProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/test-components" element={<TestPage />} />
          <Route path="/list" element={<MessagePage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </DropdownProvider>
  );
}

export default App;
