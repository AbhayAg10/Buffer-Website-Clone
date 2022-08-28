import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null
  });

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  }

  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
  }
  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
