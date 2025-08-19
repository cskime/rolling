import ArrowButton from "../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../components/button/arrow-button-direction";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import ToggleButton from "../components/button/toggle-button";
import { useNavigate } from "react-router";

import React, { useEffect, useState } from "react";
// import axiosInstance from "../api/axios-instance";
import testDataFile from "./test_recipients_data.json";

import styled from "styled-components";
import RollingPaperList from "../features/rolling-paper/components/rolling-paper-list";

const TopContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const CardSection = styled.section`
  justify-self: center;
`;

const CardTitle = styled.h2`
  text-align: left;
`;

const MakingButton = styled(PrimaryButton)`
  margin-top: 64px;
  font-weight: 400;
  padding: 14px 60px;
`;

const cache = {};
function getCachedImage(url) {
  if (!cache[url]) {
    cache[url] = new Image();
    cache[url].src = url;
  }
  return cache[url].src;
}

function ShowMessageList() {
  const navigate = useNavigate();

  const [testData, setTestData] = useState([]);
  const [popularDataList, setPopularDataList] = useState([]);
  const [recentDataList, setRecentDataList] = useState([]);
  const [popularCurrentPage, setPopularCurrentPage] = useState(0);
  const [recentCurrentPage, setRecentCurrentPage] = useState(0);
  const [popularrecentShowCards, setPopularrecentShowCards] = useState([]);
  const [recentShowCards, setRecentShowCards] = useState([]);
  const cardCount = 4;

  const handleMakingButton = () => {
    navigate("/post");
  };

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

  useEffect(() => {
    testData.forEach((item) => {
      getCachedImage(item.imageURL);
    });
  }, [testData]);

  useEffect(() => {
    const sortedPopular = testData
      .slice()
      .sort((a, b) => b.messageCount - a.messageCount);
    setPopularDataList(sortedPopular);

    const sortedRecent = testData
      .slice()
      .sort((a, b) => b.createdAt - a.createdAt);
    setRecentDataList(sortedRecent);
  }, [testData]);

  const totalPages = Math.ceil(testData.length / cardCount);

  useEffect(() => {
    const startPageNum = recentCurrentPage * cardCount;
    const endPageNum = startPageNum + cardCount;

    const popularStartPageNum = popularCurrentPage * cardCount;
    const popularEndPageNum = popularStartPageNum + cardCount;

    setPopularrecentShowCards(
      popularDataList.slice(popularStartPageNum, popularEndPageNum)
    );
    setRecentShowCards(recentDataList.slice(startPageNum, endPageNum));
  }, [
    popularCurrentPage,
    recentCurrentPage,
    testData,
    popularDataList,
    recentDataList,
  ]);

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
          <RollingPaperList
            cardData={popularrecentShowCards}
            totalPages={totalPages}
            currentPage={popularCurrentPage}
            onTurnCards={(direction) => handleTurnCards(direction, "popular")}
          />
        </CardSection>

        <CardSection>
          <CardTitle>최근에 만든 롤링 페이퍼 ⭐</CardTitle>
          <RollingPaperList
            cardData={recentShowCards}
            totalPages={totalPages}
            currentPage={recentCurrentPage}
            onTurnCards={(direction) => handleTurnCards(direction, "recent")}
          />
        </CardSection>
      </article>
      <MakingButton
        size={BUTTON_SIZE.large}
        title="나도 만들어보기"
        onClick={handleMakingButton}
      />
    </TopContainer>
  );
}

export default ShowMessageList;
