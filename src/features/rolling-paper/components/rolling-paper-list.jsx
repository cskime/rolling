import { useMemo } from "react";
import styled, { css } from "styled-components";
import Avatar from "../../../components/avatar/avatar";
import AVATAR_SIZE from "../../../components/avatar/avatar-size";
import EmojiBadge from "../../../components/badge/emoji-badge";
import ArrowButton from "../../../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../../../components/button/arrow-button-direction";
import CardBackground from "../../../components/image/card-background";
import { useImageListLodeChecker } from "../../../hooks/use-image-loader";
import { media } from "../../../utils/media";
import { useNavigate } from "react-router";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 275px);
  gap: 20px;
  width: fit-content;
  font-family: Pretendard;
  position: relative;
  padding: 0;

  ${media.tablet} {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 24px;

    scrollbar-width: none;
    -ms-overflow-style: none;

    max-width: 1199px;
    width: 100%;
    padding: 0 24px;

    & > div {
      flex: 0 0 275px;
      scroll-snap-align: start;
    }
  }

  ${media.mobile} {
    max-width: 767px;
    width: 100%;
    padding: 0 20px;

    & > div {
      flex: 0 0 208px;
    }
  }
`;

const CardItem = styled(CardBackground)`
  width: 275px;
  height: 260px;
  border-radius: 16px;
  text-align: left;
  padding: 30px 24px 20px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  z-index: 0;
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  justify-content: space-between;

  ${media.tablet} {
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  ${media.mobile} {
    width: 208px;
    height: 232px;
    padding: 25px 15px 15px 15px;
    gap: 8px;
  }

  &::before {
    content: "";
    position: absolute;
    ${({ $backgroundImageURLForStyle, $backgroundColorForStyle }) => {
      return $backgroundImageURLForStyle
        ? ""
        : polygonStyle[$backgroundColorForStyle];
    }}
  }

  &:hover {
    filter: brightness(0.9);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  }
  &:active {
    filter: brightness(0.8);
    transform: translateY(1px);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ellipseStyle = css`
  width: 336px;
  height: 169px;
  background-color: ${({ $backgroundColorForStyle }) =>
    $backgroundColorForStyle === "purple"
      ? "rgba(220, 185, 255, 0.4)"
      : "rgba(155, 226, 130, 0.3)"};
  border-radius: 90.5px;
  top: 124px;
  left: 133px;

  ${media.mobile} {
    left: 100.6px;
  }
`;

const roundedRectangleStyle = css`
  width: 332px;
  height: 318px;
  border-radius: 51px;
  background-color: #ffd382;
  top: 124px;
  left: 154px;

  ${media.mobile} {
    left: 121.6px;
  }
`;

function getTriangleBackgroundImage() {
  const svgString = `<svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M74.4299 16.6978C88.1712 -5.00283 119.829 -5.00284 133.57 16.6978L202.482 125.526C217.239 148.829 200.495 179.25 172.912 179.25H35.0878C7.5049 179.25 -9.23877 148.829 5.51768 125.526L74.4299 16.6978Z" fill="#9DDDFF"/></svg>`;
  const encodedSvg = encodeURIComponent(svgString);
  return `url("data:image/svg+xml,${encodedSvg}")`;
}

const roundedTriangleStyle = css`
  width: 170px;
  height: 200px;
  background-image: ${getTriangleBackgroundImage};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  top: 108px;
  left: 113px;

  ${media.mobile} {
    left: 60.6px;
  }
`;

const polygonStyle = {
  beige: roundedRectangleStyle,
  purple: ellipseStyle,
  green: ellipseStyle,
  blue: roundedTriangleStyle,
};

const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.$fontColor || "black"};
  width: 225px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.mobile} {
    width: 175px;
    font-size: 18px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const CardProfile = styled.div`
  margin-left: ${({ $messageIndex }) => ($messageIndex === 0 ? "0" : "-12px")};
`;

const OverProfile = styled.div`
  height: 28px;
  width: 28px;
  background-color: #ffffff;
  border-radius: 50%;

  margin-left: -12px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const MessageCountText = styled.span`
  color: ${(props) => props.$fontColor || "black"};
  z-index: 1;
  em {
    font-weight: 700;
    font-style: normal;
  }
`;

const CardEmojiBox = styled.div`
  ${(props) =>
    props.$haveEmoji &&
    `
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    `}
  padding-top: 13px;
  margin-top: auto;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 2;

  ${media.mobile} {
    padding-top: 10px;
    gap: 4px;
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

function RollingPaperList({ cardData, totalPages, currentPage, onTurnCards }) {
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    if(!cardId) {
      navigate("*");
      return;
    }

    navigate(`/post/${cardId}`);
  };


  const profileImages = useMemo(
    () =>
      cardData.flatMap((card) =>
        card.recentMessages.slice(0, 3).map((msg) => ({
          id: msg.id,
          backgroundImageURL: msg.profileImageURL,
        }))
      ),
    [cardData]
  );

  const profileLoadStates = useImageListLodeChecker(profileImages);

  return (
    <CardContainer>
      {cardData.map((card) => (
        <CardItem
          key={card.id}
          $backgroundImageURLForStyle={card.backgroundImageURL}
          $backgroundColorForStyle={card.backgroundColor}
          backgroundImageURL={card.backgroundImageURL}
          backgroundColor={card.backgroundColor}
          overlayOn
          onClick={() => handleCardClick(card.id)}
        >
          <CardTitle
            $fontColor={card.backgroundImageURL ? "#ffffff" : "#000000"}
          >
            To. {card.name}
          </CardTitle>
          <ProfileContainer>
            {card.recentMessages
              .slice(0, 3)
              .map((messageCard, messageIndex) => (
                <CardProfile $messageIndex={messageIndex} key={messageIndex}>
                  <Avatar
                    key={messageIndex}
                    source={
                      profileLoadStates[messageCard.id]
                        ? messageCard.profileImageURL
                        : null
                    }
                    size={AVATAR_SIZE.extraSmall}
                  />
                </CardProfile>
              ))}
            {card.messageCount > 3 && (
              <OverProfile>
                <span>+{card.messageCount - 3}</span>
              </OverProfile>
            )}
          </ProfileContainer>
          <MessageCountText
            $fontColor={card.backgroundImageURL ? "#ffffff" : "#000000"}
          >
            <em>{card.messageCount}</em>명이 작성했어요!
          </MessageCountText>
          <CardEmojiBox $haveEmoji={card.topReactions.length > 0}>
            {card.topReactions.map((reaction) => (
              <EmojiBadge
                emoji={reaction.emoji}
                count={reaction.count}
                maxDigits={2}
              />
            ))}
          </CardEmojiBox>
        </CardItem>
      ))}
      {currentPage > 0 && (
        <PreviewButtonWrapper onClick={() => onTurnCards("preview")}>
          <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
        </PreviewButtonWrapper>
      )}
      {currentPage < totalPages - 1 && (
        <NextButtonWrapper onClick={() => onTurnCards("next")}>
          <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
        </NextButtonWrapper>
      )}
    </CardContainer>
  );
}

export default RollingPaperList;
