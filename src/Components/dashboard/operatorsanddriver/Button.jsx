import React from "react";
import AddIcon from "@mui/icons-material";

const Button = ({ bcolor, text, handlerFunc }) => {
  return (
    <button
      style={{
        color: "white",
        variant: "contained",
        height: "30.16px",
        width: "150.37px",
        borderRadius: "45.125px",
        backgroundColor: bcolor,
        cursor: "pointer",
      }}
      onClick={handlerFunc}
    >
      {text}
    </button>
  );
};

export default Button;
