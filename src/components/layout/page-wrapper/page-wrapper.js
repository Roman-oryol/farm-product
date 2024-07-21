import Header from "../header/header";
import Footer from "../footer/footer";
import { StyledPageWrapper, Main } from "./style";
import { Outlet } from "react-router-dom";

function PageWrapper(props) {
  return (
    <StyledPageWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledPageWrapper>
  );
}

export default PageWrapper;
