import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { loginReguest } from "../authentication/authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginReguest(login, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {" "}
      {children}{" "}
    </AuthenticationContext.Provider>
  );
};
