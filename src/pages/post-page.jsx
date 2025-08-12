import { useState } from "react";
import InputTextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Colors from "../components/color/colors";
import ToggleButton from "../components/button/toggle-button";

const postContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "0 auto",
};

const wrapperStyle = {
  paddingTop: "50px",
  width: "720px",
};

const postTitleStyle = {
  fontWeight: "700",
};

const postSummaryStyle = {
  fontWeight: "400",
  color: Colors.gray(500),
};

const postToggleButtonStyle = {
  width: "100%",
  display: "flex",
};

function PostPage() {
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
    <div style={postContainerStyle}>
      <div className="to-wrapper" style={wrapperStyle}>
        <h2 style={postTitleStyle}>To.</h2>
        <InputTextField
          type={TEXT_FIELD_TYPE.input}
          value={name}
          onChange={handleChange}
          onBlur={handleOnBlur}
          placeholder="받는 사람 이름을 입력해 주세요"
          error={nameError}
        />
      </div>
      <div className="background-wrapper" style={wrapperStyle}>
        <h2 style={postTitleStyle}>배경화면을 선택해 주세요.</h2>
        <h4 style={postSummaryStyle}>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </h4>
        <div style={postToggleButtonStyle}>
          <ToggleButton value="컬러" options={["컬러", "이미지"]} />
        </div>
      </div>
      <button></button>
    </div>
  );
}

export default PostPage;
