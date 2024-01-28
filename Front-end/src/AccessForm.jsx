import React, { useState, useEffect } from "react";

import { Stack } from "@mui/material";

import { useAppContext } from "./AppContext";
import useFetchUser from "./helpers/useFetchUser";
import useLoginUser from "./helpers/useLogInUser";
import CustomButton from "./Components/CustomButton";
import Spinner from "./Components/Spinner";
import { inputStyles } from "./helpers/styles";

const AccessForm = ({ stage, setStage }) => {
  const { supabase, user, setUser } = useAppContext();
  const [loading, setLoading] = useState(false);

  let submitText = "Log In";

  if (stage === "singing") {
    submitText = "Sing Up";
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    await useLoginUser(setUser, setLoading, formData);

    setLoading(false);
  };

  const handleSubmitSingup = async (e) => {
    e.preventDefault();
    setLoading(true);
    await supabase.auth.signUp({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    useFetchUser(supabase, setUser);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      setStage("logged");
    }
  }, [user]);

  return (
    <form
      onSubmit={stage === "logging" ? handleSubmitLogin : handleSubmitSingup}
    >
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
            <h5>{`If you ${
              stage === "logging"
                ? "are new sing up instead"
                : "already have an account log in"
            }`}</h5>
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
