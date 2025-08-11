import smileAddImg from "../assets/ic-face-smile-add.svg";
import ArrowButton from "../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../components/button/arrow-button-direction";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import ToggleButton from "../components/button/toggle-button";

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
        <OutlinedButton
          size={BUTTON_SIZE.medium}
          title="Hello"
          icon={smileAddImg}
        />
        <OutlinedButton
          size={BUTTON_SIZE.small}
          title="Hello"
          icon={smileAddImg}
        />
        <OutlinedButton
          size={BUTTON_SIZE.extraSmall}
          title="Hello"
          icon={smileAddImg}
        />
        <OutlinedButton
          size={BUTTON_SIZE.extraSmall}
          title="Hello"
          disabled
          icon={smileAddImg}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <OutlinedButton size={BUTTON_SIZE.medium} icon={smileAddImg} />
        <OutlinedButton size={BUTTON_SIZE.small} icon={smileAddImg} />
        <OutlinedButton size={BUTTON_SIZE.extraSmall} icon={smileAddImg} />
        <OutlinedButton
          size={BUTTON_SIZE.extraSmall}
          disabled
          icon={smileAddImg}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
        <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        <ToggleButton options={["컬러", "이미지", "다른값"]} />
        <ToggleButton value="이미지" options={["컬러", "이미지", "다른값"]} />
      </div>
    </div>
  );
}

export default TestPage;
