import React, { useState } from "react";

import { Stack } from "@mui/material";

import { useAppContext } from "./AppContext";
import useLogOutUser from "./helpers/useLogOutUser";
import CustomButton from "./Components/CustomButton";
import Spinner from "./Components/Spinner";

const LogOutButton = ({ setStage }) => {
  const { user, setUser } = useAppContext();
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    await useLogOutUser(user, setUser);
    setLoading(false);
    setStage("NotLogged");
  };

  return (
    <Stack>
      {loading ? (
        <Spinner />
      ) : (
        <CustomButton margin="0" text="Log Out" onClick={handleLogOut} />
      )}
    </Stack>
  );
};

export default LogOutButton;
