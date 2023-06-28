import React, { createContext, useContext, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const Login = React.lazy(async () => await import("./pages/Login"));
const Home = React.lazy(async () => await import("./pages/Home"));

import Layout from "./components/Layout";

type User = {
  username: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const authContext = useContext(AuthContext);
  console.log("authContext", authContext);

  const login = (username: string) => {
    setUser({ username });
    window.location.replace("/");
  };

  const logout = () => {
    setUser(null);
  };

  const values = useMemo(() => ({ setUser, user, login, logout }), [user]);

  return (
    <AuthContext.Provider value={values}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
