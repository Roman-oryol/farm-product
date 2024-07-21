import Button from "/src/components/ui/button/button";
import { ButtonToHome } from "./style";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import Ul from "/src/components/elements/ul";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: <ButtonToHome to={AppRoute.MAIN}>Главная</ButtonToHome>,
  },
  {
    to: AppRoute.BUY,
    button: <Button to={AppRoute.BUY}>Купить</Button>,
  },
];

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav>
      <Ul>
        {buttons
          .filter((button) => button.to !== pathname)
          .map((button) => (
            <li key={button.to}>{button.button}</li>
          ))}
      </Ul>
    </nav>
  );
}

export default Navigation;
