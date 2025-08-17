import ArrowButton from "../../../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../../../components/button/arrow-button-direction";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../../../components/button/button";
import BUTTON_SIZE from "../../../components/button/button-size";
import ToggleButton from "../../../components/button/toggle-button";

import React, { useEffect, useState } from "react";

import styled from "styled-components";

const backgroundColors = {
  beige: "#FFE2AD",
  purple: "#ECD9FF",
  green: "#D0F5C3",
  blue: "#B1E4FF",
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 275px 275px 275px 275px;
  gap: 20px;
  width: fit-content;
  font-family: Pretendard;

  position: relative;
  overflow: visible;
`;

const CardItem = styled.div`
  width: 275px;
  height: 260px;
  border-radius: 16px;
  text-align: left;
  padding: 30px 24px 20px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  display: grid;
  grid-template-rows: 1fr 1fr auto;

  background: ${(props) =>
    props.$backgroundImageURL
      ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.$backgroundImageURL}) center/cover no-repeat`
      : backgroundColors[props.$backgroundColor] || "white"};

  position: relative;
  overflow: hidden;

  /* 배경 도형 */
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    ${(props) => {
      if (!props.$backgroundImageURL) {
        if (
          props.$backgroundColor === "purple" ||
          props.$backgroundColor === "green"
        ) {
          return `
              width: 336px;
              height: 169px;
              background-color: ${
                props.$backgroundColor === "purple"
                  ? "rgba(220,185,255,0.4)"
                  : "rgba(155, 226, 130, 0.3)"
              };
              border-radius: 90.5px;
              top: 124px;
              left: 133px;
            `;
        } else if (props.$backgroundColor === "beige") {
          return `
              width: 332px;
              height: 318px;
              border-radius: 51px;
              background-color: #ffd382;
              top: 124px;
              left: 154px;
            `;
        } else if (props.$backgroundColor === "blue") {
          const svgString = `<svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M74.4299 16.6978C88.1712 -5.00283 119.829 -5.00284 133.57 16.6978L202.482 125.526C217.239 148.829 200.495 179.25 172.912 179.25H35.0878C7.5049 179.25 -9.23877 148.829 5.51768 125.526L74.4299 16.6978Z" fill="#9DDDFF"/></svg>`;
          const encodedSvg = encodeURIComponent(svgString);

          return `
            width: 170px;
            height: 200px;
            background-image: url("data:image/svg+xml,${encodedSvg}");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            top: 108px;
            left: 113px;
          `;
        }
      }
      return "";
    }}
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.$fontColor || "black"};
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const CardProfile = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid #ffffff;

  margin-left: -12px;
  &:first-child {
    margin-left: 0;
  }
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
  em {
    font-weight: 700;
    font-style: normal;
  }
`;

const CardEmoji = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
  return (
    <CardContainer>
      {cardData.map((item) => (
        <CardItem
          key={item.id}
          $backgroundColor={item.backgroundColor}
          $backgroundImageURL={item.backgroundImageURL}
        >
          <CardTitle
            $fontColor={item.backgroundImageURL ? "#ffffff" : "#000000"}
          >
            To. {item.name}
          </CardTitle>
          <ProfileContainer>
            {item.recentMessages.slice(0, 3).map((messageItem, index) => (
              <CardProfile
                key={index}
                src={messageItem.profileImageURL}
                alt={`profile-${index}`}
              />
            ))}
            {item.messageCount > 3 && (
              <OverProfile>
                <span>+{item.messageCount - 3}</span>
              </OverProfile>
            )}
          </ProfileContainer>
          <MessageCountText
            $fontColor={item.backgroundImageURL ? "#ffffff" : "#000000"}
          >
            <em>{item.messageCount}</em>명이 작성했어요!
          </MessageCountText>
          <CardEmoji>{item.topReactions.map((emoji) => emoji.emoji)}</CardEmoji>
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
