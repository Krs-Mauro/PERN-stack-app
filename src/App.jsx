import React from "react";

import { Stack } from "@mui/material";

import { AppProvider } from "./AppContext";
import PrivateSection from "./PrivateSection";
import PublicSection from "./PublicSection";

const App = () => {
  return (
    <AppProvider>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <PrivateSection />
        <PublicSection />
      </Stack>
    </AppProvider>
  );
};

export default App;
