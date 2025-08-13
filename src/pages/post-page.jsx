import { useState } from "react";
import InputTextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Colors from "../components/color/colors";
import ToggleButton from "../components/button/toggle-button";
import styled from "styled-components";

const PostContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const WrapperStyle = styled.div`
  padding-top: 50px;
  width: 720px;
`;

const PostTitleStyle = styled.h2`
  font-weight: 700;
`;

const PostSummaryStyle = styled.p`
  font-weight: 400;
  color: Colors.gray(500);
`;

const PostToggleButtonStyle = styled.div`
  width: 100%;
  display: flex;
`;

function PostPage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(""); // 값 입력 중 에러 없애기
  };

  const handleBlur = () => {
    const trimmed = name.trim();
    if (trimmed === "") {
      setNameError("값을 입력해 주세요");
    } else if (name !== trimmed) {
      setNameError("앞 뒤 공백 없이 입력해 주세요"); // 텍스트 앞 뒤 공백 에러 처리(임시)
    }
  };

  return (
    <PostContainerStyle>
      <WrapperStyle>
        <PostTitleStyle>To.</PostTitleStyle>
        <InputTextField // TextField로 변경
          type={TEXT_FIELD_TYPE.input}
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="받는 사람 이름을 입력해 주세요"
          error={nameError}
        />
      </WrapperStyle>
      <WrapperStyle>
        <PostTitleStyle>배경화면을 선택해 주세요.</PostTitleStyle>
        <PostSummaryStyle>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </PostSummaryStyle>
        <PostToggleButtonStyle>
          <ToggleButton value="컬러" options={["컬러", "이미지"]} />
        </PostToggleButtonStyle>
      </WrapperStyle>
      <button></button>
    </PostContainerStyle>
  );
}

export default PostPage;
