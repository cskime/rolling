import { useState } from "react";
import TextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Colors from "../components/color/colors";
import ToggleButton from "../components/button/toggle-button";
import styled from "styled-components";

const SendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  width: 720px;
`;

const SendTitle = styled.h2`
  font-weight: 700;
`;

const SendSummary = styled.p`
  font-weight: 400;
  color: Colors.gray(500);
`;

const ToggleButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

function SendMessagePage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [option, setOption] = useState("지인");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    // 값 입력 중 에러 없애기
    if (nameError) {
      setNameError("");
    }
  };

  const handleBlur = () => {
    if (name.trim() === "") {
      setNameError("값을 입력해 주세요");
    } else if (name !== name.trim()) {
      setNameError("공백 없이 입력해 주세요"); // 텍스트 앞 뒤 공백 에러 처리(임시)
    }
  };

  return (
    <SendContainer>
      <Wrapper>
        <SendTitle>From.</SendTitle>
        <TextField
          type={TEXT_FIELD_TYPE.input}
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="이름을 입력해 주세요"
          error={nameError}
        />
      </Wrapper>
      <Wrapper>
        <SendTitle>프로필 이미지</SendTitle>
        <SendSummary>프로필 이미지를 선택해 주세요!</SendSummary>
      </Wrapper>
      <Wrapper>
        <SendTitle>상대와의 관계</SendTitle>
        <InputTextField
          type={TEXT_FIELD_TYPE.dropdown}
          dropdownId="dropdown"
          placeholder={option}
          value={option}
          options={["친구", "지인", "동료", "가족"]}
          onSelect={setOption}
        />
      </Wrapper>
      <Wrapper>
        <SendTitle>내용을 입력해 주세요</SendTitle>
      </Wrapper>
      <Wrapper>
        <SendTitle>폰트 선택</SendTitle>
      </Wrapper>
      <ToggleButtonWrapper>
        <ToggleButton value="컬러" options={["컬러", "이미지"]} />
      </ToggleButtonWrapper>
    </SendContainer>
  );
}

export default SendMessagePage;
