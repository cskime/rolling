import { css } from "styled-components";
import Colors from "../color/colors";

const INPUT_STYLES = Object.freeze({
  font: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  `,
  borderColor: {
    normal: (error) => (error ? Colors.error : Colors.gray(300)),
    hover: (error) => (error ? Colors.error : Colors.gray(500)),
    active: (error) => (error ? Colors.error : Colors.gray(700)),
    focus: (error) => (error ? Colors.error : Colors.gray(500)),
    disabled: Colors.gray(300),
  },
  textColor: {
    normal: Colors.gray(900),
    placeholder: Colors.gray(500),
  },
  backgroundColor: {
    normal: "#ffffff",
    disabled: Colors.gray(100),
  },
});

export default INPUT_STYLES;
