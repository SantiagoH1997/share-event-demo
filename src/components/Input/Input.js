import React from "react";

const Input = props => {
  return (
    <>
      <input
        type="text"
        id={props.inputField}
        placeholder={props.placeholder}
        onChange={e => {
          props.onChange(e);
        }}
        value={`${props.value}`}
        style={{
          width:
            props.value.length === 0
              ? props.placeholder.length * 9.2 + 8 + "px"
              : props.value.length * 9.2 + 7 + "px",
          maxWidth: 210
        }}
        autoComplete="off"
      />
    </>
  );
};

export default Input;
