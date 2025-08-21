import ArrowButton from "../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../components/button/arrow-button-direction";
import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";

import { useEffect, useState } from "react";
import styled from "styled-components";

/* styled components */
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
`;

const NextBtnWpr = styled.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const PrevBtnWpr = styled.div`
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const MakingBtn = styled(PrimaryButton)`
  margin-top: 64px;
  font-weight: 400;
  padding: 14px 60px;
`;

/* 그냥 출력 테스트용 */
const testData = [
  { id: 1, to: "test1", messageCount: 1 },
  { id: 2, to: "test2", messageCount: 5 },
  { id: 3, to: "test3", messageCount: 10 },
  { id: 4, to: "test4", messageCount: 2 },
  { id: 5, to: "test5", messageCount: 3 },
  { id: 6, to: "test6", messageCount: 1 },
];

function ShowMessageList() {
  const [pprCurrentPage, setPprCurrentPage] = useState(0); // 인기카드
  const [currentPage, setCurrentPage] = useState(0); // 일반카드
  const [pprShowCards, setPprShowCards] = useState([]);
  const [showCards, setShowCards] = useState([]);
  const cardCount = 4;

  /* axios로 데이터 가져온다고 가정 */
  // axiosInstance
  //   .get("/18-3/recipients/?limit=5&offset=20")
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch(console.error);

  const totalPages = Math.ceil(testData.length / cardCount);

  useEffect(() => {
    const strtPageNum = currentPage * cardCount;
    const endPageNum = strtPageNum + cardCount;

    const pprStrtPageNum = pprCurrentPage * cardCount;
    const pprEndPageNum = pprStrtPageNum + cardCount;

    /* createdAt(생성된 시점)에 따라서 정렬 */
    setShowCards(testData.slice(strtPageNum, endPageNum));

    /* 여기서 messageCount(메시지수)에 따라서 정렬 */
    setPprShowCards(testData.slice(pprStrtPageNum, pprEndPageNum));
  }, [pprCurrentPage, currentPage]);

  const nextPage = (mode = null) => {
    if (mode) {
      console.log("pprnext");
      if (pprCurrentPage < totalPages - 1) {
        setPprCurrentPage((pprCurrentNum) => pprCurrentNum + 1);
      }
    } else {
      console.log("justnext");
      if (currentPage < totalPages - 1) {
        setCurrentPage((currentNum) => currentNum + 1);
      }
    }
  };

  const prevPage = (mode = null) => {
    if (mode) {
      console.log("pprprev");
      if (pprCurrentPage > 0) {
        setPprCurrentPage((pprCurrentNum) => pprCurrentNum - 1);
      }
    } else {
      console.log("justprev");
      if (currentPage > 0) {
        setCurrentPage((currentNum) => currentNum - 1);
      }
    }
  };

  return (
    <TopContainer>
      /* navi 들어갈 자리 */
      <article>
        <CardSection>
          <CardTitle>인기 롤링 페이퍼 🔥</CardTitle>
          <CardContainer>
            {pprShowCards.map((item) => (
              <CardItem key={item.id}>{item.to}</CardItem> // 테스트용
            ))}
            {pprCurrentPage > 0 ? (
              <PrevBtnWpr onClick={() => prevPage("ppr")}>
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
              </PrevBtnWpr>
            ) : null}
            {pprCurrentPage < totalPages - 1 ? (
              <NextBtnWpr onClick={() => nextPage("ppr")}>
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
              </NextBtnWpr>
            ) : null}
          </CardContainer>
        </CardSection>

        <CardSection>
          <CardTitle>최근에 만든 롤링 페이퍼 ⭐</CardTitle>
          <CardContainer>
            {showCards.map((item) => (
              <CardItem key={item.id}>{item.to}</CardItem> // 테스트용
            ))}
            {currentPage > 0 ? (
              <PrevBtnWpr onClick={() => prevPage()}>
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
              </PrevBtnWpr>
            ) : null}
            {currentPage < totalPages - 1 ? (
              <NextBtnWpr onClick={() => nextPage()}>
                <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
              </NextBtnWpr>
            ) : null}
          </CardContainer>
        </CardSection>
      </article>
      <MakingBtn size={BUTTON_SIZE.large} title="나도 만들어보기" />
    </TopContainer>
  );
}

export default ShowMessageList;
