import { useState } from "react";
import PortalContext from "./portal-context";

function PortalProvider({ children }) {
  const [portalState, setPortalState] = useState({});
  const value = { portalState, setPortalState };
  return <PortalContext value={value}>{children}</PortalContext>;
}

export default PortalProvider;
