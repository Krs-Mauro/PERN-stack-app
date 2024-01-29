import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
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
