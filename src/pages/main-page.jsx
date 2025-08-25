import React from 'react';
import Header from '../components/header/header';
import emojiImg from '../assets/ld-emoji.png';
import cardImg1 from '../assets/ld-img01.png';
import cardImg2 from '../assets/ld-img02.png';
import cardImg3 from '../assets/ld-img03.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
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

const CardContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  background-color: #f6f8ff;
  padding: 30px;
  gap: 40px;

  /* Mobile */
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
    gap: 16px;
  }
`;

const CardContainerImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 720px;
  gap: 0px;
  background-color: #f6f8ff;

  /* Mobile */
  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;
    margin-top: 20px;
  }
`;

const EmojiContainerImage = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 6px;
  background-color: #f6f8ff;
  padding: 20px;
  align-items: center;
`;

const CardImage = styled.img`
  width: 205px;
  height: 162px;
  border-radius: 12px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  margin: 0px auto;

  /* Mobile */
  @media (max-width: 767px) {
    &:nth-child(1) {
      width: 65%;
      top: 0;
      left: 50%;
    }
    &:nth-child(2) {
      width: 70%;
      bottom: 0;
      right: unset;
      left: 50%;
    }
    &:nth-child(3) {
      width: 70%;
      bottom: 0;
      right: unset;
      left: 50%;
    }
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  background-color: #f6f8ff;
`;

const PointBadge = styled.div`
  background-color: #7f00ff;
  padding: 6px 10px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  text-align: center;
  width: fit-content;
`;

function MainPage() {
  return (
    <Content>
      <ContentDetail>
        <CardContainer>
          <div className="CardContainerText">
            <div style={{ margin: '0px', display: 'flex', gap: '0px' }}>
              <PointBadge>Point. 01</PointBadge>
            </div>
            <h2>누구나 손쉽게, 온라인 롤링페이퍼를 만들 수 있어요</h2>
            <p>로그인 없이 자유롭게 만들어요.</p>
          </div>
          <CardContainerImage>
            <CardImage src={cardImg1} alt="ld-img01.png" />
            <CardImage src={cardImg2} alt="ld-img02.png" />
            <CardImage src={cardImg3} alt="ld-img03.png" />
          </CardContainerImage>
        </CardContainer>
        <EmojiContainer>
          <EmojiContainerImage>
            <div className="EmojiContainerImage">
              <img src={emojiImg} alt="올이모지" />
            </div>
            <div className="EmojiContainerText">
              <div style={{ margin: '0px', display: 'flex', gap: '0px' }}>
                <PointBadge>Point. 02</PointBadge>
              </div>
              <h2>서로에게 이모지로 감정을 표현해보세요</h2>
              <p>롤링 페이지에 이모지를 추가할 수 있어요.</p>
            </div>
          </EmojiContainerImage>
        </EmojiContainer>
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
        <Link to="/list">
          <button className="cta-button">구경해 보기</button>
        </Link>
      </div>
    </Content>
  );
}

export default MainPage;
