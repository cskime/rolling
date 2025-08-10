import styled from "styled-components";
import Colors from "../color/colors";
import BADGE_TYPE from "./badge-type";

const styles = {
  [BADGE_TYPE.acquaintance]: {
    backgroundColor: Colors.beige(100),
    color: Colors.beige(500),
  },
  [BADGE_TYPE.coworker]: {
    backgroundColor: Colors.purple(100),
    color: Colors.purple(600),
  },
  [BADGE_TYPE.family]: {
    backgroundColor: Colors.green(100),
    color: Colors.green(500),
  },
  [BADGE_TYPE.friend]: {
    backgroundColor: Colors.blue(100),
    color: Colors.blue(500),
  },
};

const title = {
  [BADGE_TYPE.acquaintance]: "지인",
  [BADGE_TYPE.coworker]: "동료",
  [BADGE_TYPE.family]: "가족",
  [BADGE_TYPE.friend]: "친구",
};

const StyledBadge = styled.div`
  background-color: ${({ $type }) => styles[$type].backgroundColor};
  color: ${({ $type }) => styles[$type].color};
  border-radius: 4px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

function Badge({ type }) {
  return <StyledBadge $type={type}>{title[type]}</StyledBadge>;
}

export default Badge;
