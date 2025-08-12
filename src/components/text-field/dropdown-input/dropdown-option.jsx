import styled from "styled-components";
import Colors from "../../color/colors";

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

export default DropdownOption;
