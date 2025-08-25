import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CrushedPaperPlane from "../assets/ic-paperairplane.svg";
import logoImage from "../assets/logo.svg";
import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import { media } from "../utils/media";

const TopContainer = styled.article`
  height: 100vh;
  border: 1px solid #ff000021;
  display: flex;
  font-size: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentsContainer = styled.section`
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${CrushedPaperPlane}) center/cover repeat;
    background-size: 250px;
    opacity: 0.15;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Contents = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorNumber = styled.h1`
  font-weight: 900;
  color: var(--color-purple-700);
  margin: 0;
  font-size: 150px;

  ${media.mobile} {
    font-size: 110px;
  }
`;

const ErrorComment = styled.span`
  font-size: 70px;
  color: #6e6293;
  font-weight: 700;

  em {
    font-size: 90px;
    font-weight: 800;
    font-style: normal;
    color: #240079;
  }

  ${media.tablet} {
    font-size: 70px;
    em {
      font-size: 90px;
    }
  }

  ${media.mobile} {
    font-size: 40px;
    em {
      font-size: 50px;
    }
  }
`;

const ErrorCommentSofter = styled.span`
  font-size: 25px;
  color: #6e6293;
  font-weight: 400;

  ${media.mobile} {
    font-size: 18px;
  }
`;

const AirplaneSVG = styled.img`
  width: 250px;
  padding: 30px 0;

  ${media.mobile} {
    width: 200px;
  }
`;

const HomeButton = styled(PrimaryButton)`
  margin-top: 120px;
  font-weight: 400;
  padding: 14px 90px;

  ${media.tablet} {
    justify-self: anchor-center;
    width: calc(100% - 48px);
    padding: 14px 20px;
    margin: 120px 24px 24px 24px;
  }
`;

const Error404Page = () => {
  const navigate = useNavigate();

  const handleMainButtonClick = () => {
    navigate("/");
  };

  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <TopContainer>
      <ContentsContainer>
        <Contents>
          <AirplaneSVG src={logoImage} />
          <ErrorNumber>404</ErrorNumber>
          <ErrorComment>
            <em>앗 이런!</em> 페이지를 찾을 수 없습니다.
          </ErrorComment>
          <ErrorCommentSofter>
            페이지의 주소가 올바르지 않거나, 삭제 또는 다른 페이지로 변경되었습니다.
          </ErrorCommentSofter>
          <HomeButton
            size={BUTTON_SIZE.large}
            title="메인으로 돌아가기"
            onClick={handleMainButtonClick}
          />
        </Contents>
      </ContentsContainer>
    </TopContainer>
  );
};

export default Error404Page;
