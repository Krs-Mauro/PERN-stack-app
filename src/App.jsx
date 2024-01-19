import React from "react";

import { Stack } from "@mui/material";

import CustomButton from "./Components/CustomButton";
import { AppProvider, useAppContext } from "./AppContext";

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

const PrivateSection = () => {
  const { user } = useAppContext();

  return (
    <Stack>
      <h1>{`the user is ${JSON.stringify(user)}`}</h1>
      <CustomButton text="Log In" onClick={() => console.log("LOG IN")} />
      <CustomButton text="Sing Up" onClick={() => console.log("SING UP")} />
    </Stack>
  );
};

const PublicSection = () => {
  return (
    <Stack>
      <h1>Public Section</h1>
      <h2>Hello</h2>
      <h3>World</h3>
    </Stack>
  );
};
