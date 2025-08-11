import { useState } from "react";
import styled from "styled-components";
import arrowDownImg from "../../assets/ic-chevron-down.svg";
import arrowUpImg from "../../assets/ic-chevron-up.svg";
import Colors from "../color/colors";
import INPUT_STYLES from "./input-styles";

const StyledDropdownInput = styled.button`
  background-color: ${INPUT_STYLES.backgroundColor.normal};
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
  position: relative;

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

const Dropdown = styled.div`
  background-color: white;
  box-shadow: 0 0 0 1px ${Colors.gray(300)} inset,
    0 2px 12px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
`;

const DropdownOption = styled.div`
  width: calc(100% - 2px);
  border: none;
  background: none;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${Colors.gray(900)};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.gray(100)};
  }
`;

function DropdownInput({
  error,
  placeholder,
  value,
  options,
  onSelect,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputClick = (event) => {
    setIsOpen(!isOpen);
    onSelect(event.target.textContent);
  };

  return (
    <>
      <StyledDropdownInput $error={error} onClick={handleInputClick} {...props}>
        {value ? (
          <InputText>{value}</InputText>
        ) : (
          <PlaceholderText>{placeholder}</PlaceholderText>
        )}
        <Icon>
          <img src={isOpen ? arrowUpImg : arrowDownImg} alt="Dropdown 화살표" />
        </Icon>
        {isOpen && (
          <Dropdown>
            {options.map((option, index) => (
              <DropdownOption key={`${index}-${option}`}>
                {option}
              </DropdownOption>
            ))}
          </Dropdown>
        )}
      </StyledDropdownInput>
    </>
  );
}

export default DropdownInput;
