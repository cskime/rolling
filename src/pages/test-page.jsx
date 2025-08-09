import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";

function TestPage() {
  return (
    <div style={{ margin: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <PrimaryButton size={BUTTON_SIZE.large} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.medium} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.small} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.extraSmall} title="Hello" />
      </div>
    </div>
  );
}

export default TestPage;
