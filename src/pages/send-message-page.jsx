import { useState } from "react";
import TextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Colors from "../components/color/colors";
import ToggleButton from "../components/button/toggle-button";
import styled from "styled-components";
import Avatar from "../components/avatar/avatar";
import AVATAR_SIZE from "../components/avatar/avatar-size";

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

const AvatarSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

const AvatarSummary = styled.p`
  font-weight: 400;
  color: ${Colors.gray(500)};
`;

const AvatarOption = styled.div`
  display: flex;
  justify-content: space-between;
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
        <AvatarWrapper>
          <Avatar size={AVATAR_SIZE.large} />
          <AvatarSummaryWrapper>
            <AvatarSummary>프로필 이미지를 선택해 주세요!</AvatarSummary>
            <AvatarOption>
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://i.pinimg.com/236x/49/86/62/4986627b45cecd1a5c4330bda777c2bf.jpg"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRok3sjZOWtm7o5kFf0BdW0w7IUHI1oAlC-Z6RCKAiCvvCExG_qq7qMzPOQlEzfknS3B3U&usqp=CAU"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://i.pinimg.com/236x/20/d1/6f/20d16f236500e8daa315a298a8586193.jpg"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://i.pinimg.com/474x/28/6c/fd/286cfdcdaeaf2768d4b285a226c33a02.jpg"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxR-Twic2lXwfF87JweyQ81vrGDUgn7zzYj60N-wD21DwS4JzOc0BLhzaOuUt4PGfLcI&usqp=CAU"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://i.pinimg.com/236x/74/68/89/7468894ce7592357a3514dbb8dc5f181.jpg"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfMjE1/MDAxNjMwNTk5NjE4NTc5.b-OgHjcav5kz8kt_9Cr2u1Z_eJYmKY_H9Ii9mOnwo74g.r0G6iGYg-oQMLnTymwyrjDlOMGLEnWGYJXefCSy2ixwg.JPEG.gmlwjd5363/FB＿IMG＿1630599533529.jpg?type=w800"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfMTIy/MDAxNjMwNTk5NjE5MDA5.w_wMeYmMF2kOhDAVXXxe0JgVqJhtGd0EuR0b2D2k3S0g.Nds6Oxagjks2DjjwFz5yWyjCGcEOL1iS84XqhAQw3wUg.JPEG.gmlwjd5363/FB＿IMG＿1630599535069.jpg?type=w800"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfNDQg/MDAxNjMwNTk5NjE5MzQ4.J4lhtJZRKMzEXj0HjrG1aH65qIcBv9GI1LdVQsWlC-Ug.10QCNt81CdbIyBkd1bFOAOAolDL6hxYXrb9dXgmS8zQg.JPEG.gmlwjd5363/FB＿IMG＿1630599536666.jpg?type=w800"
              />
              <Avatar
                size={AVATAR_SIZE.medium}
                source="https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDNfMzAg/MDAxNjMwNTk5NjE5ODI2.cmwNyDHTza4N64bhN0rIRu2KaFHUxqv0BkuaX6GBHJ0g.ufZqe7x1GLrCLJg2zb6N_nJ_fTgFPXq09TTe_fhsMiog.JPEG.gmlwjd5363/FB＿IMG＿1630599538261.jpg?type=w800"
              />
            </AvatarOption>
          </AvatarSummaryWrapper>
        </AvatarWrapper>
      </Wrapper>
      <Wrapper>
        <SendTitle>상대와의 관계</SendTitle>
        <TextField
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
