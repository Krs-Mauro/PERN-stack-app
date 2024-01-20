// create a context for the whole app

import React, { createContext, useContext, useState } from "react";

import supabase from "./helpers/supabaseClient";
import useFetchUser from "./helpers/useFetchUser";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    supabase,
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const contextValue = useContext(AppContext);

  if (!contextValue) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return contextValue;
};

export { AppProvider, useAppContext };
