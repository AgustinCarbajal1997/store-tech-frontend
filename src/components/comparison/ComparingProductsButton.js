import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCheckmark } from "react-icons/io";
import { addToCompare } from "../../store/actions/comparison.action";
const ComparingProductsButton = ({ item, productsState }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(null);
  const currentCategory = useSelector(state => state.comparison.category);
  const onClickInputHandler = (e) => {
    if(currentCategory && item.article !== currentCategory) return;
    if (productsState.length >= 4 && !isChecked) return e.preventDefault();
    dispatch(addToCompare(item.article, item.id));
  };
  useEffect(() => {
    const isExisted = productsState.find((product) => item.id === product);
    if (isExisted) return setIsChecked(true);
    return setIsChecked(null);
  }, [productsState, item]);

  return (
    <div>
      <label className="button-comparison">
        <div
          className={`artificial-checkbox ${isChecked ? "tick" : null}`}
          onClick={onClickInputHandler}
        >
          {isChecked && <IoMdCheckmark color="white" size={"1.5em"} />}
        </div>
        <span>Comparar</span>
      </label>
    </div>
  );
};

export default ComparingProductsButton;
