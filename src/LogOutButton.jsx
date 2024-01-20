import React, { useState } from "react";

import { Stack } from "@mui/material";

import { useAppContext } from "./AppContext";
import CustomButton from "./Components/CustomButton";
import Spinner from "./Components/Spinner";

const LogOutButton = ({ setStage }) => {
  const { supabase } = useAppContext();
  const [loading, setLoading] = useState(false);

  return (
    <Stack>
      {loading ? (
        <Spinner />
      ) : (
        <CustomButton
          text="Log Out"
          onClick={async () => {
            setLoading(true);
            await supabase.auth.signOut();
            setLoading(false);
            setStage("NotLogged");
            location.reload();
          }}
        />
      )}
    </Stack>
  );
};

export default LogOutButton;
