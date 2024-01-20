import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import { useAppContext } from "./AppContext";
import CustomButton from "./Components/CustomButton";
import AccessForm from "./AccessForm";
import useFetchUser from "./helpers/useFetchUser";
import LogOutButton from "./LogOutButton";

const PrivateSection = () => {
  const { user, supabase, setUser } = useAppContext();
  const [stage, setStage] = useState("NotLogged");

  useEffect(() => {
    useFetchUser(supabase, setUser);
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
        <Stack alignItems="center">
          <h1>{`Welcome ${user.email}`}</h1>
          <LogOutButton setStage={setStage} />
        </Stack>
      )}
    </Stack>
  );
};

export default PrivateSection;
