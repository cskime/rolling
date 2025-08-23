import ArrowButton from "../../../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../../../components/button/arrow-button-direction";
import { media } from "../../../utils/media";
import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Avatar from "../../../components/avatar/avatar";
import AVATAR_SIZE from "../../../components/avatar/avatar-size";

const backgroundColors = {
  beige: "#FFE2AD",
  purple: "#ECD9FF",
  green: "#D0F5C3",
  blue: "#B1E4FF",
};

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

const CardItem = styled.div`
  width: 275px;
  min-height: 260px;
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
  background: ${(props) => {
    if (props.$backgroundImageURL) {
      return `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.$backgroundImageURL}) center/cover no-repeat`;
    }
    return backgroundColors[props.$backgroundColor] || "white";
  }};

  ${media.tablet} {
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  ${media.mobile} {
    width: 208px;
    height: 232px;
    padding: 30px 15px 20px 15px;
  }

  &::before {
    content: "";
    position: absolute;
    ${({ $backgroundImageURL, $backgroundColor }) => {
      return $backgroundImageURL ? "" : polygonStyle[$backgroundColor];
    }}
  }

  & > * {
    position: relative;
  }
`;

const ellipseStyle = css`
  width: 336px;
  height: 169px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor === "purple"
      ? "rgba(220,185,255,0.4)"
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
  margin-left: ${($messageIndex) => ($messageIndex === 0 ? "0" : "-12px")};
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
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 17px;
  margin-top: auto;

  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  z-index: 2;
`;

const CardEmoji = styled.span`
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 32px;
  color: #ffffff;
  padding: 8px 12px;
  margin-right: 5px;

  position: relative;
  white-space: nowrap;
  overflow: hidden;

  font-size: 16px;
  font-weight: 400;

  transition: max-width 0.3s ease, z-index 0s;

  &:hover {
    max-width: 200px;
    z-index: 100;
    position: relative;
  }

  ${media.mobile} {
    font-size: 14px;
    padding: 8px 8px;
    margin-right: 3px;
  }
`;

const HiddenCount = styled.span`
  display: inline;

  .show-on-hover {
    display: none;
  }

  ${CardEmoji}:hover & {
    .show-on-hover {
      display: inline;
    }
    .hide-on-hover {
      display: none;
    }
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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: ${(props) => props.size || "40px"};
  height: ${(props) => props.size || "40px"};
  border: ${(props) => props.thickness || "4px"} solid
    ${(props) => props.trackColor || "#f3f3f313"};
  border-top: ${(props) => props.thickness || "4px"} solid
    var(--color-purple-700);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  ${(props) =>
    props.centered &&
    css`
      margin: 0 auto;
      display: block;
    `}

  position: absolute;
  justify-self: anchor-center;
  align-self: anchor-center;
`;

function RollingPaperList({ cardData, totalPages, currentPage, onTurnCards }) {
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [profileLoadStates, setProfileLoadStates] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const loadStates = {};

      cardData.forEach((card) => {
        if (card.backgroundImageURL) {
          loadStates[card.id] = false;
        }
      });

      setImageLoadStates(loadStates);

      const imagePromises = cardData.map((card) => {
        if (!card.backgroundImageURL) return Promise.resolve();

        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImageLoadStates((prev) => ({
              ...prev,
              [card.id]: true,
            }));
            resolve();
          };
          img.onerror = () => {
            setImageLoadStates((prev) => ({
              ...prev,
              [card.id]: false,
            }));
            resolve();
          };
          img.src = card.backgroundImageURL;
        });
      });

      await Promise.all(imagePromises);
    };

    loadImages();
  }, [cardData]);

  useEffect(() => {
    const loadProfileImages = async () => {
      const initialStates = {};
      cardData.forEach((card) => {
        card.recentMessages.slice(0, 3).forEach((msg) => {
          initialStates[msg.id] = false;
        });
      });
      setProfileLoadStates(initialStates);

      const promises = [];
      cardData.forEach((card) => {
        card.recentMessages.slice(0, 3).forEach((msg) => {
          if (!msg.profileImageURL) return;
          promises.push(
            new Promise((resolve) => {
              const img = new Image();
              img.src = msg.profileImageURL;
              img.onload = () => {
                setProfileLoadStates((prev) => ({ ...prev, [msg.id]: true }));
                resolve();
              };
              img.onerror = () => {
                setProfileLoadStates((prev) => ({ ...prev, [msg.id]: false }));
                resolve();
              };
            })
          );
        });
      });

      await Promise.all(promises);
    };

    loadProfileImages();
  }, [cardData]);

  return (
    <CardContainer>
      {cardData.map((card) => (
        <CardItem
          key={card.id}
          $backgroundColor={card.backgroundColor}
          $backgroundImageURL={card.backgroundImageURL}
        >
          {card.backgroundImageURL && !imageLoadStates[card.id] && (
            <Spinner size="50px" thickness="3px" />
          )}
          <CardTitle
            $fontColor={card.backgroundImageURL ? "#ffffff" : "#000000"}
          >
            To. {card.name}
          </CardTitle>
          <ProfileContainer>
            {card.recentMessages
              .slice(0, 3)
              .map((messageCard, messageIndex) => (
                <CardProfile $messageIndex={messageIndex}>
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
          <CardEmojiBox>
            {card.topReactions.map((emoji, index) => {
              const countLength = emoji.count.toString().length;
              const isLongCount = countLength > 2;

              return (
                <CardEmoji key={index} $isLong={isLongCount}>
                  {isLongCount ? (
                    <HiddenCount>
                      <span className="hide-on-hover">{emoji.emoji}</span>
                      <span className="show-on-hover"> {emoji.count}</span>
                    </HiddenCount>
                  ) : (
                    `${emoji.emoji} ${emoji.count}`
                  )}
                </CardEmoji>
              );
            })}
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
