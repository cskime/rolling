import ArrowButton from "../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../components/button/arrow-button-direction";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import ToggleButton from "../components/button/toggle-button";

import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios-instance";

function ShowMessageList() {
  // const [imageUrl, setImageUrl] = useState(null);

  const cardConStyle = {
    border: "1px solid red",
    display: "grid",
    gridTemplateColumns: "275px 275px 275px 275px",
    gap: "20px",
    width: "fit-content",

    position: "relative",
    overflow: "visible",
  };

  const cardStyle = {
    width: "275px",
    height: "260px",
    border: "1px solid red",
  };

  const testStyle = {
    textAlign: "center",
  };

  const sectionStyle = {
    justifySelf: "center",
  };

  const buttonStyle = {
    marginTop: "64px",
    fontWeight: "400",
    padding: "14px 60px",
  };

  const htStyle = {
    textAlign: "left",
  };

  const rButton = {
    position: "absolute",
    right: -20, // 필요시 조정
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 20,
  };

  const lButton = {
    position: "absolute",
    left: -20, // 필요시 조정
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 20,
  };

  useEffect(() => {
    axiosInstance
      .get("/18-3/recipients/?limit=5&offset=20")
      .then((res) => {
        console.log(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div style={testStyle}>
      /* navi 들어갈 자리 */
      <article>
        <section style={sectionStyle}>
          <h2 style={htStyle}>인기 롤링 페이퍼 🔥</h2>
          <div className="card-container" style={cardConStyle}>
            <div className="card" style={cardStyle}></div>
            <div className="card" style={cardStyle}></div>
            <div className="card" style={cardStyle}></div>
            <div className="card" style={cardStyle}></div>
            <div style={rButton}>
              <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
            </div>
          </div>
        </section>
        <section style={sectionStyle}>
          <h2 style={htStyle}>최근에 만든 롤링 페이퍼 ⭐</h2>
          <div className="card-container" style={cardConStyle}>
            <div className="card" style={cardStyle}></div>
            <div className="card" style={cardStyle}></div>
            <div className="card" style={cardStyle}></div>
            <div className="card" style={cardStyle}></div>
            <div style={lButton}>
              <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
            </div>
          </div>
        </section>
      </article>
      <PrimaryButton
        size={BUTTON_SIZE.large}
        style={buttonStyle}
        title="나도 만들어보기"
      />
    </div>
  );

  /* axios 사용 예시코드 */
  // useEffect(() => {
  //   axiosInstance
  //     .get("/background-images/")
  //     .then((res) => {
  //       if (res.data && res.data.imageUrls && res.data.imageUrls.length > 0) {
  //         setImageUrl(res.data.imageUrls[0]);
  //       }
  //     })
  //     .catch(console.error);
  // }, []);

  // return (
  //   <div>
  //     {imageUrl ? (
  //       <img src={imageUrl} alt="background" style={{ maxWidth: "100%" }} />
  //     ) : (
  //       <p>이미지를 불러오는 중입니다...</p>
  //     )}
  //   </div>
  // );
}

export default ShowMessageList;
