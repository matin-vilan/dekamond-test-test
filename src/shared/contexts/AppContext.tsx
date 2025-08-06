"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ACCESS_TOKEN_KEY } from "../constants/tokens";

// for more performance in larg apps
export const AppStateContext = createContext({
  accessToken: "",
});
export const AppActionsContext = createContext({
  setAccessToken: (accessToken: string) => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, []);

  return (
    <AppStateContext.Provider value={{ accessToken }}>
      <AppActionsContext.Provider value={{ setAccessToken }}>
        {children}
      </AppActionsContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppProvider;

export const useAppState = () => useContext(AppStateContext);
export const useAppActions = () => useContext(AppActionsContext);

export const useApp = () => {
  const state = useAppState();
  const actions = useAppActions();

  return {
    ...state,
    ...actions,
  };
};
