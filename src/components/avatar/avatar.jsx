import styled, { css } from "styled-components";
import defaultAvatarImage from "../../assets/ic-person.svg";
import Colors from "../color/colors";
import AVATAR_SIZE from "./avatar-size";

const borderWidth = {
  [AVATAR_SIZE.large]: 0,
  [AVATAR_SIZE.medium]: 1,
  [AVATAR_SIZE.small]: 1,
  [AVATAR_SIZE.extraSmall]: 1.5,
};

const avatarStyle = css`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => $size / 2}px;
  overflow: hidden;
`;

const StyledAvatar = styled.div`
  ${avatarStyle}
  border: ${({ $size }) => borderWidth[`${$size}`]}px solid ${({ $color }) =>
    $color};

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledDefaultAvatar = styled.div`
  ${avatarStyle}
  background-color: ${Colors.gray(300)};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${({ $size }) => $size * 0.4}px;
    height: ${({ $size }) => $size * 0.4}px;
  }
`;

function Avatar({
  source,
  size = AVATAR_SIZE.medium,
  color = Colors.gray(200),
}) {
  const img = <img src={source ?? defaultAvatarImage} alt="사용자 사진" />;
  return source ? (
    <StyledAvatar $size={size} $color={color}>
      {img}
    </StyledAvatar>
  ) : (
    <StyledDefaultAvatar $size={size}>{img}</StyledDefaultAvatar>
  );
}

export default Avatar;
