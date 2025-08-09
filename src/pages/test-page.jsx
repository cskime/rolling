import ArrowButton from "../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../components/button/arrow-button-direction";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";

function TestPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        margin: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <PrimaryButton size={BUTTON_SIZE.large} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.medium} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.small} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.extraSmall} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.extraSmall} title="Hello" disabled />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <SecondaryButton size={BUTTON_SIZE.large} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.medium} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.small} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.extraSmall} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.extraSmall} title="Hello" disabled />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <OutlinedButton size={BUTTON_SIZE.large} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.medium} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.small} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.extraSmall} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.extraSmall} title="Hello" disabled />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
        <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
      </div>
    </div>
  );
}

export default TestPage;
