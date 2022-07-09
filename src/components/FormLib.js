import { useState } from "react";
import { useField } from "formik";
import {
  StyledTextInput,
  StyledLabel,
  StyledIcon,
  ErrorMsg,
} from "./../components/Styles";

// Eye for password
import { FiEyeOff, FiEye } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export const TextInput = ({icon , ...props}) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* eslint-disable-next-line react/prop-types */}
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

      {/* eslint-disable-next-line react/prop-types */}
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}

      {/* eslint-disable-next-line react/prop-types */}
      {props.type === "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      <StyledIcon>{icon}</StyledIcon>

      {/* eslint-disable-next-line react/prop-types */}
      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} right>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
      )}
    </div>
  );
};
