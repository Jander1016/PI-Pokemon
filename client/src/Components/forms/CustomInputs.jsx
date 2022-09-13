import React from "react";
import {
  ErrorsForms,
  GroupInput,
  IconsValidation,
  Input,
  Label,
} from "./stylesForm";
import { faCircleCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const CustomInputs = ({
  type,
  name,
  label,
  state,
  changeState,
  placeholder,
  inputError,
  regEx,
  validate
}) => {
  const handleChange = (e) => {
    e.preventDefault(); 
    changeState(()=>({...state, campo: e.target.value }));
  };
  
  const validation = () => {
    if (regEx) {
      if (regEx.test(state.campo)) {
        changeState(()=>({ ...state, okValue: "true" }));
      } else {
        changeState(()=>({ ...state, okValue: "false" }));
      }
    }
  };

  return (
    <div>
      <Label htmlFor={name} validate={state.okValue}>
        {label}
      </Label>
      <GroupInput>
        <Input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={state.campo}
          onChange={handleChange}
          autoComplete="off"
          onKeyUp={validation}
          onBlur={validation}
          validate={state.okValue}
        />
        <IconsValidation
          icon={(state.okValue === "true" ? faCircleCheck : faTimesCircle)}
          validate={state.okValue}
        />
      </GroupInput>
      <ErrorsForms validate={state.okValue} >{inputError}</ErrorsForms>
    </div>
  );
};

export default CustomInputs;
