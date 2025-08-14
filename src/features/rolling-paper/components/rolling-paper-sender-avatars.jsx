import styled from "styled-components";
import Avatar from "../../../components/avatar/avatar";
import AVATAR_SIZE from "../../../components/avatar/avatar-size";

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

const StyledRollingPaperSenderAvatars = styled.div`
  position: relative;
  width: ${({ $count }) =>
    METRICS.size * $count - METRICS.overlap * ($count - 1)}px;
  height: ${METRICS.size}px;
`;

function RollingPaperSenderAvatars({ profiles }) {
  const numberOfAvatars = Math.min(profiles.length, 3);
  const restCount = profiles.length - numberOfAvatars;
  const range = Array.from({ length: numberOfAvatars }, (e, i) => i);
  const itemCount = numberOfAvatars + Math.min(restCount, 1);

  return (
    <StyledRollingPaperSenderAvatars $count={itemCount}>
      {range.map((index) => (
        <Positioned key={index} $index={index}>
          <Avatar
            source={profiles[index]}
            size={AVATAR_SIZE.extraSmall}
            color="white"
          />
        </Positioned>
      ))}
      {restCount > 0 && <RestCount $index={3}>{`+${restCount}`}</RestCount>}
    </StyledRollingPaperSenderAvatars>
  );
}

export default RollingPaperSenderAvatars;
