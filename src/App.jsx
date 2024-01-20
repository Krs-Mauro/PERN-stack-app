import React from "react";

import { Stack } from "@mui/material";

import { AppProvider } from "./AppContext";
import PrivateSection from "./PrivateSection";

const App = () => {
  return (
    <AppProvider>
      <Stack>
        <PrivateSection />
        <PublicSection />
      </Stack>
    </AppProvider>
  );
};

export default App;

const PublicSection = () => {
  return (
    <Stack>
      <h1>Public Section</h1>
      <h2>Hello</h2>
      <h3>World</h3>
    </Stack>
  );
};
