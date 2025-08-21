import { useState } from "react";
import TextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Colors from "../components/color/colors";
import styled from "styled-components";
import Avatar from "../components/avatar/avatar";
import AVATAR_SIZE from "../components/avatar/avatar-size";
import BUTTON_SIZE from "../components/button/button-size";
import { useNavigate } from "react-router";
import { PrimaryButton } from "../components/button/button";
import TextEditor from "../components/text-editor/text-editor";

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

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const AvatarOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

const AvatarDescription = styled.p`
  font-weight: 400;
  color: ${Colors.gray(500)};
`;

const AvatarOption = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AvatarPreview = styled.div`
  cursor: pointer;
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? `0 0 0 2px ${Colors.purple(600)}` : "none"};
  border-radius: 50%;
`;

const ButtonWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 150px;
  width: 720px;
`;

const CreateButton = styled(PrimaryButton)`
  width: 100%;
`;

const TextFieldStyle = styled(TextField)`
  width: 50%;
`;

function SendMessagePage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [relationOption, setRelationOption] = useState("지인");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [content, setContent] = useState("I am your reach text editor.");
  const [selectedFont, setSelectedFont] = useState({
    title: "Noto Sans",
    fontFamily: "Noto Sans",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    // 값 입력 중 에러 없애기
    if (nameError) {
      setNameError("");
    }
  };

  const trimmed = name.trim();

  const handleBlur = () => {
    setName(trimmed);
    if (trimmed === "") {
      setNameError("이름을 입력해 주세요");
    }
  };

  const avatarList = [
    "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
    "https://picsum.photos/id/522/100/100",
    "https://picsum.photos/id/547/100/100",
    "https://picsum.photos/id/268/100/100",
    "https://picsum.photos/id/1082/100/100",
    "https://picsum.photos/id/571/100/100",
    "https://picsum.photos/id/494/100/100",
    "https://picsum.photos/id/859/100/100",
    "https://picsum.photos/id/437/100/100",
    "https://picsum.photos/id/1064/100/100",
  ];

  const handleCreate = () => {
    const randomID = Math.floor(Math.random() * 10000);
    navigate(`/post/${randomID}`);
  };

  const canCreate =
    trimmed !== "" && content.replace(/<[^>]+>/g, "").trim() !== "";
  // 정규식 유효성 검사로 html 태그 찾기("<"로 시작해서 ">"로 끝나는 문자 중 > 를 제외한(^ not) 모든 문자 제외)

  const fontOptions = [
    { title: "Noto Sans", fontFamily: "Noto Sans" },
    { title: "Pretendard", fontFamily: "Pretendard" },
    { title: "나눔고딕", fontFamily: "Nanum Ghthic" },
    { title: "나눔손글씨 펜체", fontFamily: "Nanum Pen Script" },
  ];

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
        <AvatarWrapper>
          <Avatar size={AVATAR_SIZE.large} source={selectedAvatar} />
          <AvatarOptionWrapper>
            <AvatarDescription>
              프로필 이미지를 선택해 주세요!
            </AvatarDescription>
            <AvatarOption>
              {avatarList.map((url, index) => (
                <AvatarPreview
                  key={index}
                  $isSelected={selectedAvatar === url}
                  onClick={() => setSelectedAvatar(url)}
                >
                  <Avatar size={AVATAR_SIZE.medium} source={url} />
                </AvatarPreview>
              ))}
            </AvatarOption>
          </AvatarOptionWrapper>
        </AvatarWrapper>
      </Wrapper>
      <Wrapper>
        <SendTitle>상대와의 관계</SendTitle>
        <TextFieldStyle
          type={TEXT_FIELD_TYPE.dropdown}
          dropdownId="realtionship-dropdown"
          placeholder={relationOption}
          value={relationOption}
          options={["친구", "지인", "동료", "가족"]}
          onSelect={setRelationOption}
        />
      </Wrapper>
      <Wrapper>
        <SendTitle>내용을 입력해 주세요</SendTitle>
        <div>
          <TextEditor
            style={{
              height: "300px",
              marginBottom: "20px",
              width: "100%",
            }}
            value={content}
            onChange={(value) => setContent(value)}
            font={selectedFont.fontFamily}
          />
        </div>
      </Wrapper>
      <Wrapper>
        <SendTitle>폰트 선택</SendTitle>
        <TextFieldStyle
          type={TEXT_FIELD_TYPE.dropdown}
          dropdownId="font-option-dropdown"
          placeholder={selectedFont.title}
          value={selectedFont.title}
          options={fontOptions}
          onSelect={(selectedFontOption) => {
            const selected = fontOptions.find(
              (fontOption) => fontOption.title === selectedFontOption
            );
            setSelectedFont(selected);
          }}
          style={{ fontFamily: selectedFont.fontFamily }}
        />
      </Wrapper>
      <ButtonWrapper>
        <CreateButton
          title="생성하기"
          size={BUTTON_SIZE.large}
          disabled={!canCreate}
          onClick={handleCreate}
        />
      </ButtonWrapper>
    </SendContainer>
  );
}

export default SendMessagePage;
