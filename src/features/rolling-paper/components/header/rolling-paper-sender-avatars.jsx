import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Avatar from "../../../../components/avatar/avatar";
import AVATAR_SIZE from "../../../../components/avatar/avatar-size";

const METRICS = {
  size: AVATAR_SIZE.extraSmall,
  leftMargin: 16,
  overlap: 12,
};

const Positioned = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ $index }) => $index * METRICS.leftMargin}px;
`;

const RestCount = styled(Positioned)`
  height: ${METRICS.size}px;
  padding: 0 6px;
  border: 1px solid #e3e3e3;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

function calculateWidth({ $numberOfAvatars, $restCountWidth }) {
  const contentWidth = METRICS.size * $numberOfAvatars;
  const overlapedWidth = METRICS.overlap * ($numberOfAvatars - 1);
  const restCountWidth = Math.max(0, $restCountWidth - METRICS.overlap);
  return contentWidth - overlapedWidth + restCountWidth;
}

const StyledRollingPaperSenderAvatars = styled.div`
  position: relative;
  width: ${(props) => calculateWidth(props)}px;
  height: ${METRICS.size}px;
`;

function RollingPaperSenderAvatars({ profiles }) {
  const countRef = useRef();
  const [restCountWidth, setRestCountWidth] = useState(METRICS.size);
  const numberOfAvatars = Math.min(profiles.length, 3);
  const restCount = profiles.length - numberOfAvatars;
  const range = Array.from({ length: numberOfAvatars }, (e, i) => i);

  useEffect(() => {
    setRestCountWidth(countRef.current?.getBoundingClientRect().width ?? 0);
  }, [countRef]);

  return (
    <StyledRollingPaperSenderAvatars
      $numberOfAvatars={numberOfAvatars}
      $restCountWidth={restCountWidth}
    >
      {range.map((index) => (
        <Positioned key={index} $index={index}>
          <Avatar
            source={profiles[index]}
            size={AVATAR_SIZE.extraSmall}
            color="white"
          />
        </Positioned>
      ))}
      {restCount > 0 && (
        <RestCount $index={3} ref={countRef}>{`+${restCount}`}</RestCount>
      )}
    </StyledRollingPaperSenderAvatars>
  );
}

export default RollingPaperSenderAvatars;
