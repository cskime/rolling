import React from 'react';
import Header from '../components/header/header';
import mainImg from '../assets/ld-emoji.png';
import styled from 'styled-components';

const CardContainerImage = styled.div`
  display: flex;
  gap: 16px;
  border-radius: 6px;
`;

const CardImage = styled.img`
  width: 205px;
  height: 162px;
  border: 1px solid #ededed;
  border-radius: 6px;
  object-fit: cover;
  margin: 0 10px;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f6f8ff;
  border-radius: 10px;
`;

const ContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;

  /* Mobile */
  @media (max-width: 767px) {
    gap: 16px;
  }
`;

function MainPage() {
  return (
    <Content>
      <ContentDetail>
        <div className="CardContainer">
          <CardContainerImage>
            <div className="CardContainerText">
              <h2>누구나 손쉽게, 온라인 롤링페이퍼를 만들 수 있어요</h2>
              <p>로그인 없이 자유롭게 만들어요.</p>
            </div>
            <CardImage src="../../assets/main-img01.png" />
            <CardImage src="../../assets/main-img02.png" />
            <CardImage src="../../assets/main-img03.png" />
          </CardContainerImage>
        </div>
        <div
          className="spacer"
          style={{ height: '30px', backgroundColor: '#ffffff' }}
        ></div>
        <div className="EmojiContainer">
          <CardContainerImage>
            <div className="EmojiContainerImage">
              <img src={mainImg} alt="올이모지" />
            </div>
            <div className="EmojiContainerText">
              <h2>서로에게 이모지로 감정을 표현해보세요</h2>
              <p>롤링 페이지에 이모지를 추가할 수 있어요.</p>
            </div>
          </CardContainerImage>
        </div>
      </ContentDetail>
      <div
        className="Footer"
        style={{
          textAlign: 'center',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#ffffff',
        }}
      >
        <button className="cta-button">구경해 보기</button>
      </div>
    </Content>
  );
}

export default MainPage;
