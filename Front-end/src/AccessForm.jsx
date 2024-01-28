import React, { useState, useEffect } from "react";

import { Stack } from "@mui/material";

import { useAppContext } from "./AppContext";
import useLoginUser from "./helpers/useLogInUser";
import useSingUpUser from "./helpers/useSingUpUser";
import CustomButton from "./Components/CustomButton";
import Spinner from "./Components/Spinner";
import { inputStyles } from "./helpers/styles";

const AccessForm = ({ stage, setStage }) => {
  const { user, setUser } = useAppContext();
  const [loading, setLoading] = useState(false);

  const submitText = stage === "logging" ? "Log In" : "Sing Up";
  const message = `If you ${
    stage === "logging"
      ? "are new sing up instead"
      : "already have an account log in"
  }`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setLoading(true);
    if (stage === "logging") {
      await useLoginUser(setUser, setLoading, formData);
    } else {
      await useSingUpUser(setUser, setLoading, formData);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      setStage("logged");
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={{ width: "300px", alignItems: "center" }} spacing={2}>
        <input
          type="email"
          name="email"
          placeholder="email"
          disabled={loading}
          required
          style={inputStyles}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          disabled={loading}
          required
          style={inputStyles}
        />

        {loading ? (
          <Spinner />
        ) : (
          <>
            <CustomButton type="submit" text={submitText} />
            <h5>{message}</h5>
            <CustomButton
              text={stage === "logging" ? "Sing Up" : "Log In"}
              onClick={() =>
                setStage(stage === "logging" ? "singing" : "logging")
              }
            />
          </>
        )}
      </Stack>
    </form>
  );
};

export default AccessForm;
