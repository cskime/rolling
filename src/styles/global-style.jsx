import { createGlobalStyle } from "styled-components";
import NanumPenScript from "../assets/NanumPenScript.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'NanumPenScript';
src: url(${NanumPenScript}) format('truetype');
font-weight: normal;
font-style: normal;}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`;

export default GlobalStyle;
