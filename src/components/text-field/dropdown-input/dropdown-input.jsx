import styled from "styled-components";
import arrowDownImg from "../../../assets/ic-chevron-down.svg";
import arrowUpImg from "../../../assets/ic-chevron-up.svg";
import { useDropdown } from "../../../hooks/use-dropdown";
import INPUT_STYLES from "../input-styles";
import Dropdown from "./dropdown";
import DropdownOption from "./dropdown-option";

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

function Text({ value, placeholder }) {
  return value ? (
    <InputText>{value}</InputText>
  ) : (
    <PlaceholderText>{placeholder}</PlaceholderText>
  );
}

const Icon = styled.div`
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;

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

function DropdownInput({
  dropdownId,
  error,
  placeholder,
  value,
  options,
  onSelect,
  ...props
}) {
  const {
    targetRef,
    dropdownRect,
    showsDropdown,
    setShowsDropdown,
    handleTargetClick,
  } = useDropdown({
    id: dropdownId,
    type: "dropdown-input",
  });

  const handleInputClick = () => {
    handleTargetClick(!showsDropdown);
  };

  const handleOptionClick = (event) => {
    onSelect(event.target.textContent);
  };

  const handleDropdownClose = () => {
    setShowsDropdown(false);
  };

  return (
    <>
      <StyledDropdownInput
        $error={error}
        onClick={handleInputClick}
        {...props}
        ref={targetRef}
      >
        <Text value={value} placeholder={placeholder} />
        <Icon>
          <img
            src={showsDropdown ? arrowUpImg : arrowDownImg}
            alt="Dropdown 화살표"
          />
        </Icon>
        {showsDropdown && (
          <Dropdown
            origin={dropdownRect.origin}
            size={dropdownRect.size}
            onClose={handleDropdownClose}
          >
            {options.map((option, index) => (
              <DropdownOption
                key={`${index}-${option}`}
                onClick={handleOptionClick}
              >
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
