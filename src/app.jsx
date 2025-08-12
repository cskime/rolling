import DropdownProvider from "./components/text-field/dropdown-input/dropdown-provider";
import TestPage from "./pages/test-page";

function App() {
  return (
    <DropdownProvider>
      <TestPage />
    </DropdownProvider>
  );
}

export default App;
