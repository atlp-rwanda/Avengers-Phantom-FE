import React from "react";
import AddIcon from "@mui/icons-material";

const Button = ({ bcolor, text, handlerFunc }) => {
  return (
    <button
      style={{
        color: "white",
        variant: "contained",
        height: "35px",
        width: "150.37px",
        borderRadius: "5px",
        backgroundColor: bcolor,
        cursor: "pointer",
        border: "none",
      }}
      onClick={handlerFunc}
    >
      {text}
    </button>
  );
};

export default Button;
