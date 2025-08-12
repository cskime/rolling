import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import defaultProfileImg from "../../assets/ic-person.svg";
import { useModal } from "../../hooks/use-modal";
import { formatDate } from "../../utils/formatter";
import Badge from "../badge/badge";
import BADGE_TYPE from "../badge/badge-type";
import { PrimaryButton } from "../button/button";
import BUTTON_SIZE from "../button/button-size";
import Colors from "../color/colors";

/* ProfileImage */

const profileImageStyle = css`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

const UserProfileImage = styled.div`
  ${profileImageStyle}

  img {
    width: 100%;
    height: 100%;
  }
`;

const DefaultProfileImage = styled.div`
  ${profileImageStyle}
  background-color: ${Colors.gray(300)};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }
`;

function ProfileImage({ profileImg }) {
  const img = <img src={profileImg ?? defaultProfileImg} alt="프로필 사진" />;
  return profileImg ? (
    <UserProfileImage>{img}</UserProfileImage>
  ) : (
    <DefaultProfileImage>{img}</DefaultProfileImage>
  );
}

/* UserInfo */

const Name = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

  span {
    font-weight: 700;
  }
`;

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

function UserInfo({ name, type }) {
  return (
    <StyledUserInfo>
      <Name>
        From.<span>{` ${name}`}</span>
      </Name>
      <Badge type={type} />
    </StyledUserInfo>
  );
}

/* UserProfile */

const StyledUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function UserProfile({ profileImg, name }) {
  return (
    <StyledUserProfile>
      <ProfileImage profileImg={profileImg} />
      <UserInfo name={name} type={BADGE_TYPE.coworker} />
    </StyledUserProfile>
  );
}

/* Header */

const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${Colors.gray(400)};
`;

const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Colors.gray(200)};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 19px;
  }
`;

function Header({ profileImg, name, date }) {
  return (
    <StyledHeader>
      <div>
        <UserProfile profileImg={profileImg} name={name} />
        <Date>{formatDate(date, ".")}</Date>
      </div>
    </StyledHeader>
  );
}

/* Modal */

const Content = styled.p`
  margin: 16px 0 24px;
  height: 240px;
  overflow: scroll;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #5a5a5a;
  padding-right: 16px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.gray(300)};
    border-radius: 2px;

    &:hover {
      background-color: ${Colors.gray(400)};
    }
  }
`;

const StyledModal = styled.div`
  background-color: white;
  width: 600px;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* Container */

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal({ user, date, content }) {
  const { setShowsModal } = useModal();

  const ModalPortal = ({ children }) => {
    return createPortal(children, document.getElementById("modal"));
  };

  const handleConfirmClick = () => setShowsModal(false);

  return (
    <ModalPortal>
      <ModalContainer>
        <StyledModal>
          <Header profileImg={user.profileImg} name={user.name} date={date} />
          <Content>{content}</Content>
          <PrimaryButton
            size={BUTTON_SIZE.medium}
            title="확인"
            onClick={handleConfirmClick}
          />
        </StyledModal>
      </ModalContainer>
    </ModalPortal>
  );
}

export default Modal;
