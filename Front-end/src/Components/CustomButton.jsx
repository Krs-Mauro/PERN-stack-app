import React from "react";

import { Button } from "@mui/material";

const CustomButton = ({ margin, text, onClick, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        backgroundColor: "#fa4217",
        color: "#f7f8d9",
        border: "none",
        marginBottom: margin || "10px",
        width: "300px",
        "&:hover": {
          backgroundColor: "#c53515",
          border: "none",
        },
      }}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
