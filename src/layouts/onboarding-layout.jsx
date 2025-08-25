import { useNavigate } from "react-router";
import styled from "styled-components";
import { OutlinedButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import Header from "../components/header/header";

const LayoutHeader = styled(Header)`
  flex-shrink: 0;
`;

const Main = styled.main`
  flex-grow: 1;
  min-height: 100vh - 64px;
`;

const StyledOnbardingLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function OnboardingLayout({ children }) {
  const navigate = useNavigate();

  const handlePostCreate = () => navigate("/post");

  return (
    <StyledOnbardingLayout>
      <LayoutHeader>
        <OutlinedButton
          size={BUTTON_SIZE.medium}
          title="롤링 페이퍼 만들기"
          onClick={handlePostCreate}
        />
      </LayoutHeader>
      <Main>{children}</Main>
    </StyledOnbardingLayout>
  );
}

export default OnboardingLayout;
