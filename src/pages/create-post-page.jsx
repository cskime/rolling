import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { apiClient } from "../api/client";
import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import ToggleButton from "../components/button/toggle-button";
import BACKGROUND_COLOR from "../components/color/background-color";
import Colors from "../components/color/colors";
import BackgroundSelect from "../components/option/background-select";
import TextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import { media } from "../utils/media";
import Toast from "../components/toast/toast";
import { useToast } from "../hooks/use-toast";

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
  color: ${Colors.gray(500)};
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
  const [backgroundUrls, setBackgroundUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState();
  const navigate = useNavigate();

  const { showsToast, isOpen, setShowsToast, onDismiss } = useToast({
    timeout: 5000,
  });

  const handleToastCloseClick = () => setShowsToast(false);

  const colorOptions = [
    { label: "beige", color: BACKGROUND_COLOR.beige },
    { label: "purple", color: BACKGROUND_COLOR.purple },
    { label: "blue", color: BACKGROUND_COLOR.blue },
    { label: "green", color: BACKGROUND_COLOR.green },
  ];

  const selectedColor = colorOptions[selected];
  const selectedImageURL = backgroundUrls[selected];

  useEffect(() => {
    if (backgroundType !== "이미지") return;

    const imageUrls = [
      "https://picsum.photos/id/683/3840/2160",
      "https://picsum.photos/id/24/3840/2160",
      "https://picsum.photos/id/599/3840/2160",
      "https://picsum.photos/id/1058/3840/2160",
    ];
    setBackgroundUrls(imageUrls);
  }, [backgroundType]);

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

  const handleCreate = async () => {
    if (!trimmed) {
      setNameError("이름을 입력해 주세요"); // 이거 안전장치로 필요할까요?
      return;
    }

    setLoading(true);

    const postData = {
      name: trimmed,
      backgroundColor:
        backgroundType === "컬러" ? selectedColor.label : "beige",
      backgroundImageURL: backgroundType === "이미지" ? selectedImageURL : null,
    };

    try {
      const response = await apiClient.post("/recipients/", postData);
      const newPostId = response.data.id;
      navigate(`/post/${newPostId}`);
    } catch (error) {
      console.error("게시물 생성 실패:", error);
      setToastMessage("게시물 생성에 실패했습니다. 다시 시도해 주세요.")
      setShowsToast(true);
    } finally {
      setLoading(false);
    }
  };

  const canCreate = trimmed !== "" && !loading;

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

      {showsToast&&
        <Toast
          isOpen={isOpen}
          message={`${toastMessage} 🚨`}
          onClose={handleToastCloseClick}
          onDismiss={onDismiss}
        />
      }
    </PostContainer>
  );
}

export default CreatePostPage;
