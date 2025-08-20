import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import { useNavigate } from "react-router";

import React, { useEffect, useState, useMemo } from "react";
import { getRollingPaperList } from "../features/rolling-paper/api/rollingPaperList";

import styled from "styled-components";
import RollingPaperList from "../features/rolling-paper/components/rolling-paper-list";
import { media } from "../utils/media";
import { useMedia } from "../hooks/use-media";

const TopContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const CardSection = styled.section`
  justify-self: center;

  ${media.tablet} {
    width: 100%;
  }
`;

const CardTitle = styled.h2`
  text-align: left;

  ${media.tablet} {
    margin-left: 24px;
  }

  ${media.mobile} {
    margin-left: 20px;
  }
`;

const MakingButton = styled(PrimaryButton)`
  margin-top: 64px;
  font-weight: 400;
  padding: 14px 60px;

  ${media.tablet} {
    position: absolute;
    bottom: 24px;
    justify-self: anchor-center;
    margin-left: 24px;
    margin-right: 24px;
    width: calc(100% - 48px);
  }
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
  const [cardCount, setCardCount] = useState(4);
  const { isDesktop } = useMedia();

  useEffect(() => {
    isDesktop ? setCardCount(4) : setCardCount(null);
  }, [isDesktop]);

  const handleMakingButton = () => {
    navigate("/post");
  };

  useEffect(() => {
    isDesktop ? setCardCount(4) : setCardCount(null);
  }, [isDesktop]);


  useEffect(() => {
    getRollingPaperList().then(setTestData);
  }, []);

  useEffect(() => {
    testData.forEach((data) => {
      getCachedImage(data.imageURL);
    });
  }, [testData]);

  useEffect(() => {
    const sortedPopular = testData
      .slice()
      .sort((a, b) => b.messageCount - a.messageCount);
    setPopularDataList(sortedPopular);

    const sortedRecent = testData
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setRecentDataList(sortedRecent);
  }, [testData]);

  const totalPages = cardCount ? Math.ceil(testData.length / cardCount) : 1;

  const popularShowCards = useMemo(() => {
    if (!cardCount) return popularDataList;
    const start = popularCurrentPage * cardCount;
    return popularDataList.slice(start, start + cardCount);
  }, [popularDataList, popularCurrentPage, cardCount]);

  const recentShowCards = useMemo(() => {
    if (!cardCount) return recentDataList;
    const start = recentCurrentPage * cardCount;
    return recentDataList.slice(start, start + cardCount);
  }, [recentDataList, recentCurrentPage, cardCount]);

  const handleTurnCards = (direction, mode) => {
    const cardPageMap = {
      popular: { current: popularCurrentPage, setter: setPopularCurrentPage },
      recent: { current: recentCurrentPage, setter: setRecentCurrentPage },
    };

    const cardPageValue = cardPageMap[mode];
    const { current, setter } = cardPageValue;
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
            cardData={popularShowCards}
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
