import React, { useState } from "react";

import { Stack } from "@mui/material";

import CustomButton from "./Components/CustomButton";
import AccessForm from "./AccessForm";
import UserArea from "./UserArea";

const PrivateSection = () => {
  const [stage, setStage] = useState("NotLogged");

  return (
    <Stack>
      {stage === "NotLogged" && (
        <>
          <CustomButton text="Log In" onClick={() => setStage("logging")} />
          <CustomButton text="Sing Up" onClick={() => setStage("singing")} />
        </>
      )}

      {(stage === "logging" || stage === "singing") && (
        <AccessForm stage={stage} setStage={setStage} />
      )}

      {stage === "logged" && <UserArea setStage={setStage} />}
    </Stack>
  );
};

export default PrivateSection;
