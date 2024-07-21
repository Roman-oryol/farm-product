import Ul from "/src/components/elements/ul";
import { Option, Property } from "./styles";

function OptionsList({ list = [], delimeter = ": " }) {
  return (
    <Ul>
      {list.map((option, index) => {
        return (
          <Option>
            <Property>
              {option.property}
              {delimeter}
            </Property>
            {option.value}
          </Option>
        );
      })}
    </Ul>
  );
}

export default OptionsList;
