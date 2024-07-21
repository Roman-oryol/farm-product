import Logo from "../../ui/logo/logo";
import Navigation from "../../layout/navigation/navigation";
import { StyledHeader, Inner } from "./style";

function Header() {
  return (
    <StyledHeader>
      <Inner>
        <Logo />
        <Navigation />
      </Inner>
    </StyledHeader>
  );
}

export default Header;
