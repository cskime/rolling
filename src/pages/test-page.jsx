import smileAddImg from "../assets/ic-face-smile-add.svg";
import Badge from "../components/badge/badge";
import BADGE_TYPE from "../components/badge/badge-type";
import EmojiBadge from "../components/badge/emoji-badge";
import ArrowButton from "../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../components/button/arrow-button-direction";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import ToggleButton from "../components/button/toggle-button";
import TextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";

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
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Badge type={BADGE_TYPE.acquaintance} />
        <Badge type={BADGE_TYPE.coworker} />
        <Badge type={BADGE_TYPE.family} />
        <Badge type={BADGE_TYPE.friend} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <EmojiBadge emoji="😚" count={1} />
        <EmojiBadge emoji="😁" count={10} />
        <EmojiBadge emoji="😉" count={100} />
        <EmojiBadge emoji="😊" count={1000} />
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <TextField type={TEXT_FIELD_TYPE.input} placeholder="Placeholder" />
        <TextField
          type={TEXT_FIELD_TYPE.input}
          value="Input value"
          placeholder="Placeholder"
          disabled
        />
        <TextField
          type={TEXT_FIELD_TYPE.input}
          placeholder="Placeholder"
          error="Error Message"
        />
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <TextField type={TEXT_FIELD_TYPE.dropdown} placeholder="Placeholder" />
        <TextField
          type={TEXT_FIELD_TYPE.dropdown}
          value="Input value"
          placeholder="Placeholder"
          disabled
        />
        <TextField
          type={TEXT_FIELD_TYPE.dropdown}
          placeholder="Placeholder"
          error="Error Message"
        />
      </div>
    </div>
  );
}

export default TestPage;
