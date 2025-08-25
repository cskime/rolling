import { useState } from "react";
import styled from "styled-components";
import Colors from "../color/colors";

const StyledToggleButton = styled.div`
  background-color: ${Colors.gray(100)};
  border-radius: 6px;
`;

const ToggleItem = styled.button`
  background: ${({ $selected }) => ($selected ? "white" : "none")};
  border: none;
  color: ${({ $selected }) =>
    $selected ? Colors.purple(700) : Colors.gray(900)};
  box-shadow: ${({ $selected }) =>
    $selected ? `0 0 0 2px ${Colors.purple(600)} inset` : "none"};
  border-radius: 6px;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $selected }) =>
      $selected ? Colors.purple(100) : Colors.gray(200)};
  }

  span {
    display: block;
    min-width: 90px;
    font-size: 16px;
    font-weight: ${({ $selected }) => ($selected ? 700 : 400)};
  }
`;

function ToggleButton({ value, options = [], onChange }) {
  const [selected, setSelected] = useState(value);

  const handleOptionClick = (option, index) => {
    setSelected(option);

    if (onChange) {
      onChange(option, index);
    }
  };

  return (
    <StyledToggleButton>
      {options.map((option, index) => (
        <ToggleItem
          key={index}
          $selected={selected === option}
          onClick={(event) =>
            handleOptionClick(event.target.textContent, index)
          }
        >
          <span>{option}</span>
        </ToggleItem>
      ))}
    </StyledToggleButton>
  );
}

export default ToggleButton;
