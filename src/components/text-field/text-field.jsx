import styled from "styled-components";
import Colors from "../color/colors";
import DropdownInput from "./dropdown-input";
import TEXT_FIELD_TYPE from "./text-field-type";
import TextInput from "./text-input";

const StyledInputTextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${Colors.error};
`;

function InputTextField({ type, error, ...props }) {
  return (
    <StyledInputTextField>
      {type === TEXT_FIELD_TYPE.input ? (
        <TextInput error={error} {...props} />
      ) : (
        <DropdownInput error={error} {...props} />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledInputTextField>
  );
}

export default InputTextField;
