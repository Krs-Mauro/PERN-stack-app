import React, { useState } from "react";

import { Stack, CircularProgress } from "@mui/material";

import { useAppContext } from "./AppContext";
import CustomButton from "./Components/CustomButton";

const LogOutButton = ({ setStage }) => {
  const { supabase } = useAppContext();
  const [loading, setLoading] = useState(false);

  return (
    <Stack>
      {loading ? (
        <CircularProgress sx={{ color: "#fa4217" }} size={24} />
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
