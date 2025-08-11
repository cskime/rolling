import styled from "styled-components";
import arrowDownImg from "../../assets/ic-chevron-down.svg";
import INPUT_STYLES from "./input-styles";

const StyledDropdownInput = styled.button`
  background-color: ${INPUT_STYLES.backgroundColor.normal};
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 0 1px
    ${({ $error }) => INPUT_STYLES.borderColor.normal($error)} inset;
  padding: 12px 16px;
  min-width: 320px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 1px
      ${({ $error }) => INPUT_STYLES.borderColor.hover($error)} inset;
  }

  &:active {
    box-shadow: 0 0 0 2px
      ${({ $error }) => INPUT_STYLES.borderColor.active($error)} inset;
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ $error }) => INPUT_STYLES.borderColor.focus($error)} inset;
  }

  &:disabled {
    background-color: ${INPUT_STYLES.backgroundColor.disabled};
    box-shadow: 0 0 0 1px ${INPUT_STYLES.borderColor.disabled} inset;
    cursor: default;
  }
`;

const PlaceholderText = styled.span`
  ${INPUT_STYLES.font}
  color: ${INPUT_STYLES.textColor.placeholder};
  flex-grow: 1;
  text-align: left;
`;

const InputText = styled.span`
  ${INPUT_STYLES.font}
  color: ${INPUT_STYLES.textColor.normal};
  flex-grow: 1;
  text-align: left;
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;

function DropdownInput({ error, placeholder, value, disabled }) {
  return (
    <StyledDropdownInput $error={error} disabled={disabled}>
      {value ? (
        <InputText>{value}</InputText>
      ) : (
        <PlaceholderText>{placeholder}</PlaceholderText>
      )}
      <Icon>
        <img src={arrowDownImg} alt="Dropdown 화살표" />
      </Icon>
    </StyledDropdownInput>
  );
}

export default DropdownInput;
