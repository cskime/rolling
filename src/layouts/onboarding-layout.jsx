import { useNavigate } from "react-router";
import { OutlinedButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import Header from "../components/header/header";

function OnboardingLayout({ children }) {
  const navigate = useNavigate();

  const handlePostCreate = () => navigate("/post");

  return (
    <>
      <Header>
        <OutlinedButton
          size={BUTTON_SIZE.medium}
          title="롤링 페이퍼 만들기"
          onClick={handlePostCreate}
        />
      </Header>
      <main>{children}</main>
    </>
  );
}

export default OnboardingLayout;
