import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import { useAppContext } from "./AppContext";
import CustomButton from "./Components/CustomButton";
import AccessForm from "./AccessForm";

const PrivateSection = () => {
  const { user, supabase } = useAppContext();
  const [stage, setStage] = useState("NotLogged");

  useEffect(() => {
    if (user) {
      setStage("logged");
    } else {
      setStage("NotLogged");
    }
  }, []);

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

      {stage === "logged" && (
        <>
          <h1>{`the user is ${JSON.stringify(user)}`}</h1>
          <CustomButton
            text="Log Out"
            onClick={async () => {
              await supabase.auth.signOut();
              setStage("NotLogged");
            }}
          />
        </>
      )}
    </Stack>
  );
};

export default PrivateSection;
