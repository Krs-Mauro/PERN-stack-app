import React from "react";

import { Stack } from "@mui/material";

import { AppProvider } from "./AppContext";
import PrivateSection from "./PrivateSection";

const App = () => {
  return (
    <AppProvider>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <PrivateSection />
      </Stack>
    </AppProvider>
  );
};

export default App;
