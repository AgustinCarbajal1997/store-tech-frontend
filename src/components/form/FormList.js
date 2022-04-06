import React from "react";
import FormInput from "../Input/FormInput";

const FormList = ({
  state,
  onChangeInputHandler,
  items,
  onBlurRegex,
  onSubmitHandle,
  classname,
  submitMessagge,
  title,
  children,
}) => {
  return (
    <div className={`${classname}-form-container`}>
      <h2>{title}</h2>
      <form
        onSubmit={onSubmitHandle}
        className={`${classname}-information-form`}
      >
        {items.map((item, idx) => (
          <FormInput
            key={idx}
            item={item}
            state={state}
            onChangeInputHandler={onChangeInputHandler}
            onBlurRegex={onBlurRegex}
            classname={classname}
          />
        ))}
        {children}
        <input
          type="submit"
          value={`${submitMessagge}`}
          className={`submit-${classname}-button`}
        />
      </form>
    </div>
  );
};

export default FormList;
