import { useState } from "react";
import InputTextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Colors from "../components/color/colors";
import ToggleButton from "../components/button/toggle-button";
import styled from "styled-components";
import { PrimaryButton } from "../components/button/button";
import BackgroundSelect from "../components/option/background-select";
import { useNavigate } from "react-router";

const PostContainer = styled.div`
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

const PostTitle = styled.h2`
  font-weight: 700;
`;

const PostSummary = styled.p`
  font-weight: 400;
  color: Colors.gray(500);
`;

const ToggleButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ButtonWrapper = styled.div`
  padding-top: 50px;
  width: 720px;
`;

const CreateButton = styled(PrimaryButton)`
  width: 100%;
`;

function CreatePostPage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [backgroundType, setBackgroundType] = useState("컬러");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(""); // 값 입력 중 에러 없애기
  };

  const handleBlur = () => {
    const trimmed = name.trim();
    if (trimmed === "") {
      setNameError("값을 입력해 주세요");
    } else if (trimmed !== name) {
      setNameError("앞 뒤 공백 없이 입력해 주세요"); // 텍스트 앞 뒤 공백 에러 처리(임시)
    }
  };

  const handleBackgroundSelect = (e) => {
    let typeSelect = e.target.textContent;

    if (typeSelect === "컬러" || typeSelect === "이미지") {
      setBackgroundType(typeSelect);
      setSelected(0);
    }
  };

  const handleCreate = () => {
    const randomID = Math.floor(Math.random() * 10000);
    navigate(`/post/${randomID}`);
  };

  return (
    <PostContainer>
      <Wrapper>
        <PostTitle>To.</PostTitle>
        <InputTextField // TextField로 변경
          type={TEXT_FIELD_TYPE.input}
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="받는 사람 이름을 입력해 주세요"
          error={nameError}
        />
      </Wrapper>
      <Wrapper>
        <PostTitle>배경화면을 선택해 주세요.</PostTitle>
        <PostSummary>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </PostSummary>
        <ToggleButtonWrapper onClick={handleBackgroundSelect}>
          <ToggleButton
            value={backgroundType}
            options={["컬러", "이미지"]}
            onChange={(type) => {
              handleBackgroundSelect(type);
              setSelected(0);
            }}
          />
        </ToggleButtonWrapper>
      </Wrapper>
      <BackgroundSelect
        type={backgroundType === "컬러" ? "color" : "image"}
        selected={selected}
        onSelect={setSelected}
      />
      <ButtonWrapper>
        <CreateButton
          title="생성하기"
          size="large"
          disabled={name === "" || name !== name.trim()}
          onClick={handleCreate}
        />
      </ButtonWrapper>
    </PostContainer>
  );
}

export default CreatePostPage;
