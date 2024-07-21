import Logo from "../../ui/logo/logo";
import { StyledFooter, Inner } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Inner>
        <Logo />
        <span>Создано 2024</span>
      </Inner>
    </StyledFooter>
  );
}

export default Footer;
