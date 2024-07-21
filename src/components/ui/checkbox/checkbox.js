import { useState, useEffect } from "react";
import { Label } from "./styles";
import VisuallyHiddenInput from "/src/components/styled/visually-hidden-input";

export default function CheckBox({
  setTotalPrice,
  totalPrice,
  product,
  onSelect,
  onCheck,
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!isChecked && totalPrice !== 0) {
      setTotalPrice(totalPrice - product.price);
    }
    if (isChecked) {
      setTotalPrice(totalPrice + product.price);
    }
    onSelect(product, isChecked);
    onCheck(product.id, isChecked);
  }, [isChecked]);

  const handlerCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Label isChecked={isChecked}>
      {product.name}
      <VisuallyHiddenInput
        onChange={handlerCheck}
        type="checkbox"
        value={product.id}
      />
    </Label>
  );
}
