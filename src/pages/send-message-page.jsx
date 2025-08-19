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
`;

const DefaultAvatar = styled.div`
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 150px;
  width: 720px;
`;

const CreateButton = styled(PrimaryButton)`
  width: 100%;
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

  const handleBlur = () => {
    const trimmed = name.trim();
    setName(trimmed);
    if (trimmed === "") {
      setNameError("이름을 입력해 주세요");
    }
  };

  const avatarList = [
    "https://i.pinimg.com/236x/49/86/62/4986627b45cecd1a5c4330bda777c2bf.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRok3sjZOWtm7o5kFf0BdW0w7IUHI1oAlC-Z6RCKAiCvvCExG_qq7qMzPOQlEzfknS3B3U&usqp=CAU",
    "https://i.pinimg.com/236x/20/d1/6f/20d16f236500e8daa315a298a8586193.jpg",
    "https://i.pinimg.com/474x/28/6c/fd/286cfdcdaeaf2768d4b285a226c33a02.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxR-Twic2lXwfF87JweyQ81vrGDUgn7zzYj60N-wD21DwS4JzOc0BLhzaOuUt4PGfLcI&usqp=CAU",
    "https://i.pinimg.com/236x/74/68/89/7468894ce7592357a3514dbb8dc5f181.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfMjE1/MDAxNjMwNTk5NjE4NTc5.b-OgHjcav5kz8kt_9Cr2u1Z_eJYmKY_H9Ii9mOnwo74g.r0G6iGYg-oQMLnTymwyrjDlOMGLEnWGYJXefCSy2ixwg.JPEG.gmlwjd5363/FB＿IMG＿1630599533529.jpg?type=w800",
    "https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfMTIy/MDAxNjMwNTk5NjE5MDA5.w_wMeYmMF2kOhDAVXXxe0JgVqJhtGd0EuR0b2D2k3S0g.Nds6Oxagjks2DjjwFz5yWyjCGcEOL1iS84XqhAQw3wUg.JPEG.gmlwjd5363/FB＿IMG＿1630599535069.jpg?type=w800",
    "https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfNDQg/MDAxNjMwNTk5NjE5MzQ4.J4lhtJZRKMzEXj0HjrG1aH65qIcBv9GI1LdVQsWlC-Ug.10QCNt81CdbIyBkd1bFOAOAolDL6hxYXrb9dXgmS8zQg.JPEG.gmlwjd5363/FB＿IMG＿1630599536666.jpg?type=w800",
    "https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfMzAg/MDAxNjMwNTk5NjE5ODI2.cmwNyDHTza4N64bhN0rIRu2KaFHUxqv0BkuaX6GBHJ0g.ufZqe7x1GLrCLJg2zb6N_nJ_fTgFPXq09TTe_fhsMiog.JPEG.gmlwjd5363/FB＿IMG＿1630599538261.jpg?type=w800",
  ];

  const handleCreate = () => {
    const randomID = Math.floor(Math.random() * 10000);
    navigate(`/post/${randomID}`);
  };

  const canCreate = name.trim() !== "";

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
          <DefaultAvatar
            onClick={() => setSelectedAvatar((prev) => (prev ? null : prev))} // 아바타 선택 상태에서 재클릭 시 기본 아바타로
          >
            <Avatar size={AVATAR_SIZE.large} source={selectedAvatar} />
          </DefaultAvatar>
          <AvatarOptionWrapper>
            <AvatarDescription>
              프로필 이미지를 선택해 주세요!
            </AvatarDescription>
            <AvatarOption>
              {avatarList.map((url, index) => (
                <AvatarPreview
                  key={index}
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
        <TextField
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
        <TextField
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
