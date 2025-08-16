import styled from "styled-components";
import Header from "../components/header/header";

const Main = styled.main`
  flex-grow: 1;
  min-height: 100vh - 64px;
`;

const StyledContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function ContentLayout({ children }) {
  return (
    <StyledContentLayout>
      <Header />
      <Main>{children}</Main>
    </StyledContentLayout>
  );
}

export default ContentLayout;
