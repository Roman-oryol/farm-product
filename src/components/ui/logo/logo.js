import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { LinkLogo, LinkLogoHomePage } from "./style";
import { useLocation } from "react-router-dom";
import { AppRoute } from "/src/const";

function Logo() {
  const { pathname } = useLocation();
  return pathname !== AppRoute.MAIN ? (
    <LinkLogo to={AppRoute.MAIN}>
      <LogoImage />
    </LinkLogo>
  ) : (
    <LinkLogoHomePage>
      <LogoImage />
    </LinkLogoHomePage>
  );
}

export default Logo;
