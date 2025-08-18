import { useState } from "react";
import InputTextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Colors from "../components/color/colors";
import ToggleButton from "../components/button/toggle-button";
import styled from "styled-components";

const SendContainerStyle = styled.div`
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

const SendTitleStyle = styled.h2`
  font-weight: 700;
`;

const SendSummaryStyle = styled.p`
  font-weight: 400;
  color: Colors.gray(500);
`;

const SendToggleButtonStyle = styled.div`
  width: 100%;
  display: flex;
`;

function SendPage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    // 값 입력 중 에러 없애기
    if (nameError) {
      setNameError("");
    }
  };

  const handleOnBlur = () => {
    if (name.trim() === "") {
      setNameError("값을 입력해 주세요");
    } else if (name !== name.trim()) {
      setNameError("공백 없이 입력해 주세요"); // 텍스트 앞 뒤 공백 에러 처리(임시)
    }
  };

  return (
    <SendContainerStyle>
      <WrapperStyle>
        <SendTitleStyle>From.</SendTitleStyle>
        <InputTextField // TextField로 변경
          type={TEXT_FIELD_TYPE.input}
          value={name}
          onChange={handleChange}
          onBlur={handleOnBlur}
          placeholder="이름을 입력해 주세요"
          error={nameError}
        />
      </WrapperStyle>
      <WrapperStyle>
        <SendTitleStyle>프로필 이미지</SendTitleStyle>
        <SendSummaryStyle>프로필 이미지를 선택해 주세요!</SendSummaryStyle>
      </WrapperStyle>
      <WrapperStyle>
        <SendTitleStyle>상대와의 관계</SendTitleStyle>
      </WrapperStyle>
      <WrapperStyle>
        <SendTitleStyle>내용을 입력해 주세요</SendTitleStyle>
      </WrapperStyle>
      <WrapperStyle>
        <SendTitleStyle>폰트 선택</SendTitleStyle>
      </WrapperStyle>
      <SendToggleButtonStyle>
        <ToggleButton value="컬러" options={["컬러", "이미지"]} />
      </SendToggleButtonStyle>
    </SendContainerStyle>
  );
}

export default SendPage;
