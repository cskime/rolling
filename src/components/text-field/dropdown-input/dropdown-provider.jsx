import { useState } from "react";
import DropdownContext from "./dropdown-context";

function DropdownProvider({ children }) {
  const [dropdownState, setDropdownState] = useState({});
  const value = { dropdownState, setDropdownState };
  return <DropdownContext value={value}>{children}</DropdownContext>;
}

export default DropdownProvider;
