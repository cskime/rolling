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
  const [imageUrl, setImageUrl] = useState(null);

  /* axios 사용용 예시코드 */
  useEffect(() => {
    axiosInstance
      .get("/background-images/")
      .then((res) => {
        if (res.data && res.data.imageUrls && res.data.imageUrls.length > 0) {
          setImageUrl(res.data.imageUrls[0]);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="background" style={{ maxWidth: "100%" }} />
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
    </div>
  );
}

export default ShowMessageList;
