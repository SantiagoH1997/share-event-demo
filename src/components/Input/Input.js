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
              ? props.placeholder.length + "ch"
              : props.value.length + "ch",
          maxWidth: 210
        }}
        autoComplete="off"
      />
    </>
  );
};

export default Input;
