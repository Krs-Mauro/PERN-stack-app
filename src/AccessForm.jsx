import React, { useState } from "react";

import { Stack, CircularProgress } from "@mui/material";

import { useAppContext } from "./AppContext";
import CustomButton from "./Components/CustomButton";

const AccessForm = ({ stage }) => {
  const { supabase } = useAppContext();
  const [loading, setLoading] = useState(false);
  const inputStyles = {
    width: "292px",
    height: "30px",
    alignItems: "center",
  };

  let submitText = "Log In";

  if (stage === "singing") {
    submitText = "Sing Up";
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await supabase.auth.signInWithPassword({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    setLoading(false);
  };
  const handleSubmitSingup = async (e) => {
    e.preventDefault();
    setLoading(true);
    await supabase.auth.signUp({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    setLoading(false);
  };

  return (
    <form
      onSubmit={stage === "logging" ? handleSubmitLogin : handleSubmitSingup}
    >
      <Stack sx={{ width: "300px", alignItems: "center" }} spacing={2}>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          style={inputStyles}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          style={inputStyles}
        />

        {loading ? (
          <CircularProgress sx={{ color: "#fa4217" }} size={24} />
        ) : (
          <CustomButton type="submit" text={submitText} />
        )}
      </Stack>
    </form>
  );
};

export default AccessForm;
