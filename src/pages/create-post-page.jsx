import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import ToggleButton from "../components/button/toggle-button";
import BackgroundSelect from "../components/option/background-select";
import TextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import { media } from "../utils/media";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  ${media.tablet} {
    width: 100%;
    padding: 0 24px;
    display: flex;
  }

  ${media.mobile} {
    width: 100%;
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  max-width: 720px;
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
  padding-bottom: 150px;
  width: 100%;
  max-width: 720px;
`;

const CreateButton = styled(PrimaryButton)`
  width: 100%;
`;

const TOGGLE_OPTIONS = ["컬러", "이미지"];

const SELECT_TYPE = {
  컬러: "color",
  이미지: "image",
};

function CreatePostPage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [backgroundType, setBackgroundType] = useState(TOGGLE_OPTIONS[0]);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(""); // 값 입력 중 에러 없애기
  };

  const trimmed = name.trim();

  const handleBlur = () => {
    setName(trimmed);
    if (trimmed === "") {
      setNameError("이름을 입력해 주세요");
    }
  };

  const handleCreate = () => {
    const randomID = Math.floor(Math.random() * 10000);
    navigate(`/post/${randomID}`);
  };

  const canCreate = trimmed !== "";

  const handleToggleChange = (option) => {
    setBackgroundType(option);
    setSelected(0);
  };

  return (
    <PostContainer>
      <Wrapper>
        <PostTitle>To.</PostTitle>
        <TextField
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
        <ToggleButtonWrapper>
          <ToggleButton
            value={backgroundType}
            options={TOGGLE_OPTIONS}
            onChange={handleToggleChange}
          />
        </ToggleButtonWrapper>
      </Wrapper>
      <BackgroundSelect
        type={SELECT_TYPE[backgroundType]}
        selected={selected}
        onSelect={setSelected}
      />
      <ButtonWrapper>
        <CreateButton
          title="생성하기"
          size={BUTTON_SIZE.large}
          disabled={!canCreate}
          onClick={handleCreate}
        />
      </ButtonWrapper>
    </PostContainer>
  );
}

export default CreatePostPage;
