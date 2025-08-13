import Header from "../components/header/header";

function ContentLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default ContentLayout;
