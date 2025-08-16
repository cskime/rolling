import styled from "styled-components";
import { useModal } from "../../hooks/use-modal";
import { formatDate } from "../../utils/formatter";
import Avatar from "../avatar/avatar";
import Badge from "../badge/badge";
import BADGE_TYPE from "../badge/badge-type";
import { PrimaryButton } from "../button/button";
import BUTTON_SIZE from "../button/button-size";
import Colors from "../color/colors";
import Portal from "../portal/portal";

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

function UserProfile({ profileImage, name }) {
  return (
    <StyledUserProfile>
      <Avatar source={profileImage} />
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

function Header({ profileImage, name, date }) {
  return (
    <StyledHeader>
      <div>
        <UserProfile profileImage={profileImage} name={name} />
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal({ id, user, date, content, children }) {
  const { showsModal, setShowsModal } = useModal({
    id: id,
    type: "modal",
  });

  const handleClick = () => setShowsModal(true);
  const handleConfirmClick = () => setShowsModal(false);

  return (
    <>
      <div onClick={handleClick}>{children}</div>
      {showsModal && (
        <Portal id="modal">
          <ModalContainer>
            <StyledModal>
              <Header
                profileImage={user.profileImage}
                name={user.name}
                date={date}
              />
              <Content>{content}</Content>
              <PrimaryButton
                size={BUTTON_SIZE.medium}
                title="확인"
                onClick={handleConfirmClick}
              />
            </StyledModal>
          </ModalContainer>
        </Portal>
      )}
    </>
  );
}

export default Modal;
