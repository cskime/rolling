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
  beige: "#FFD382",
  purple: "#DCB9FF",
  green: "#9BE282",
  blue: "#9DDDFF",
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 275px 275px 275px 275px;
  gap: 20px;
  width: fit-content;

  position: relative;
  overflow: visible;
`;

const CardItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})`
  width: 275px;
  height: 260px;
  border-radius: 16px;
  text-align: left;
  padding: 30px 24px 20px 24px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);

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

function RollingPaperList({ cardData, totalPages, currentPage, onTurnCards }) {
  return (
    <CardContainer>
      {cardData.map((item) => (
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
      {currentPage > 0 ? (
        <PreviewButtonWrapper onClick={() => onTurnCards("preview")}>
          <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
        </PreviewButtonWrapper>
      ) : null}
      {currentPage < totalPages - 1 ? (
        <NextButtonWrapper onClick={() => onTurnCards("next")}>
          <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
        </NextButtonWrapper>
      ) : null}
    </CardContainer>
  );
}

export default RollingPaperList;
