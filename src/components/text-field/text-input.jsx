import styled from "styled-components";
import INPUT_STYLES from "./input-styles";

const StyledTextInput = styled.input`
  background-color: ${INPUT_STYLES.backgroundColor.normal};
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 0 1px
    ${({ $error }) => INPUT_STYLES.borderColor.normal($error)} inset;
  padding: 12px 16px;
  ${INPUT_STYLES.font}
  color: ${INPUT_STYLES.textColor.normal};
  min-width: 320px;

  &::placeholder {
    ${INPUT_STYLES.font}
    color: ${INPUT_STYLES.textColor.placeholder};
  }

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
  }
`;

function TextInput({ error, ...props }) {
  return <StyledTextInput $error={error} {...props} />;
}

export default TextInput;
