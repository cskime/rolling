import { useState } from "react";
import PopoverContext from "./popover-context";

function PopoverProvider({ children }) {
  const [showsPopover, setShowsPopover] = useState(false);
  const value = { showsPopover, setShowsPopover };
  return <PopoverContext value={value}>{children}</PopoverContext>;
}

export default PopoverProvider;
