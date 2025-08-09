import { useState } from "react";
import styled from "styled-components";

const StyledToggleButton = styled.div`
  background-color: var(--color-gray-100);
  border-radius: 6px;
`;

const ToggleItem = styled.button`
  background: ${({ $selected }) => ($selected ? "white" : "none")};
  border: none;
  color: ${({ $selected }) =>
    $selected ? "var(--color-purple-700)" : "var(--color-gray-900)"};
  box-shadow: ${({ $selected }) =>
    $selected ? "0 0 0 2px var(--color-purple-600) inset" : "none"};
  border-radius: 6px;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;

  span {
    display: block;
    min-width: 90px;
    font-size: 16px;
    font-weight: ${({ $selected }) => ($selected ? 700 : 400)};
  }
`;

function ToggleButton({ value, options = [] }) {
  const [selected, setSelected] = useState(value);

  const handleOptionClick = (event) => {
    setSelected(event.target.textContent);
  };

  return (
    <StyledToggleButton>
      {options.map((title, index) => (
        <ToggleItem
          key={index}
          $selected={selected === title}
          onClick={handleOptionClick}
        >
          <span>{title}</span>
        </ToggleItem>
      ))}
    </StyledToggleButton>
  );
}

export default ToggleButton;
