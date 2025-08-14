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
import testDataFile from "./test_recipients_data.json";

import styled from "styled-components";

const backgroundColors = {
  beige: "#FFD382",
  purple: "#DCB9FF",
  green: "#9BE282",
  blue: "#9DDDFF",
};

const TopContainer = styled.div`
  text-align: center;
`;

const CardSection = styled.section`
  justify-self: center;
`;

const CardTitle = styled.h2`
  text-align: left;
`;

const CardContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 275px 275px 275px 275px;
  gap: 20px;
  width: fit-content;

  position: relative;
  overflow: visible;
`;

const CardItem = styled.div`
  width: 275px;
  height: 260px;
  border: 1px solid red;
  text-align: left;
  padding: 30px 24px 20px 24px;

  display: grid;
  grid-template-rows: 1fr 1fr auto;

  background-color: ${(props) =>
    backgroundColors[props.backgroundColor] || "white"};

  img {
    height: 28px;
    width: 28px;
    border-radius: 50%;
    border: 1px solid #ffffff;

    margin-left: -12px;
    &:first-child {
      margin-left: 0;
    }
  }

  div.message-images {
    display: flex;
  }

  div.over-profile {
    height: 28px;
    width: 28px;
    background-color: #ffffff;
    border-radius: 50%;

    margin-left: -12px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  h2 {
    margin: 0;
  }

  div.emoji-div {
    border-top: 1px solid red;
  }
`;

const NextButtonWrapper = styled.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const PreviewButtonWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const MakingButton = styled(PrimaryButton)`
  margin-top: 64px;
  font-weight: 400;
  padding: 14px 60px;
`;

function ShowMessageList() {
  const [testData, setTestData] = useState([]);
  const [popularCurrentPage, setPopularCurrentPage] = useState(0);
  const [recentCurrentPage, setRecentCurrentPage] = useState(0);
  const [popularrecentShowCards, setPopularrecentShowCards] = useState([]);
  const [recentShowCards, setRecentShowCards] = useState([]);
  const cardCount = 4;

  useEffect(() => {
    setTestData(testDataFile);
    // axiosInstance
    //   .get("/18-3/recipients/?limit=5&offset=20")
    //   .then((res) => {
    //     setTestData(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.error("오류:", err);
    //   });
  }, []);

  const totalPages = Math.ceil(testData.length / cardCount);

  useEffect(() => {
    const startPageNum = recentCurrentPage * cardCount;
    const endPageNum = startPageNum + cardCount;

    const popularStartPageNum = popularCurrentPage * cardCount;
    const popularEndPageNum = popularStartPageNum + cardCount;

    /* createdAt(생성된 시점)에 따라서 정렬 */
    setRecentShowCards(testData.slice(startPageNum, endPageNum));

    /* 여기서 messageCount(메시지수)에 따라서 정렬 */
    setPopularrecentShowCards(
      testData.slice(popularStartPageNum, popularEndPageNum)
    );
  }, [popularCurrentPage, recentCurrentPage, testData]);

  const handleTurnCards = (direction, mode) => {
    const current = mode === "popular" ? popularCurrentPage : recentCurrentPage;
    const setter =
      mode === "popular" ? setPopularCurrentPage : setRecentCurrentPage;
    const total = totalPages;

    const additionalPageIndex = direction === "next" ? 1 : -1;
    const newPageIndex = current + additionalPageIndex;

    if (newPageIndex >= 0 && newPageIndex < total) {
      setter(newPageIndex);
    }
  };

  return (
    <TopContainer>
      <article>
        <CardSection>
          <CardTitle>인기 롤링 페이퍼 🔥</CardTitle>
          <CardContainer>
            {popularrecentShowCards.map((item) => (
              <CardItem key={item.id} backgroundColor={item.backgroundColor}>
                <h2>To. {item.name}</h2>
                <div className="message-images">
                  {item.recentMessages.slice(0, 3).map((messageItem, index) => (
                    <img
                      key={index}
                      src={messageItem.profileImageURL}
                      alt={`profile-${index}`}
                      loading="lazy"
                    />
                  ))}
                  {item.messageCount > 3 ? (
                    <div className="over-profile">
                      <span>+{item.messageCount - 3}</span>
                    </div>
                  ) : null}
                </div>
                <span>
                  <strong>{item.messageCount}</strong>명이 작성했어요!
                </span>
                <div className="emoji-div">test</div>
              </CardItem>
            ))}
            {popularCurrentPage > 0 ? (
              <PreviewButtonWrapper
                onClick={() => handleTurnCards("preview", "popular")}
              >
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
              </PreviewButtonWrapper>
            ) : null}
            {popularCurrentPage < totalPages - 1 ? (
              <NextButtonWrapper
                onClick={() => handleTurnCards("next", "popular")}
              >
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
              </NextButtonWrapper>
            ) : null}
          </CardContainer>
        </CardSection>

        <CardSection>
          <CardTitle>최근에 만든 롤링 페이퍼 ⭐</CardTitle>
          <CardContainer>
            {recentShowCards.map((item) => (
              <CardItem key={item.id} backgroundColor={item.backgroundColor}>
                <h2>To. {item.name}</h2>
                <div className="message-images">
                  {item.recentMessages.slice(0, 3).map((messageItem, index) => (
                    <img
                      key={index}
                      src={messageItem.profileImageURL}
                      alt={`profile-${index}`}
                      loading="lazy"
                    />
                  ))}
                  {item.messageCount > 3 ? (
                    <div className="over-profile">
                      <span>+{item.messageCount - 3}</span>
                    </div>
                  ) : null}
                </div>
                <span>
                  <strong>{item.messageCount}</strong>명이 작성했어요!
                </span>
              </CardItem>
            ))}
            {recentCurrentPage > 0 ? (
              <PreviewButtonWrapper
                onClick={() => handleTurnCards("preview", "recent")}
              >
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
              </PreviewButtonWrapper>
            ) : null}
            {recentCurrentPage < totalPages - 1 ? (
              <NextButtonWrapper
                onClick={() => handleTurnCards("next", "recent")}
              >
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
              </NextButtonWrapper>
            ) : null}
          </CardContainer>
        </CardSection>
      </article>
      <MakingButton size={BUTTON_SIZE.large} title="나도 만들어보기" />
    </TopContainer>
  );
}

export default ShowMessageList;
