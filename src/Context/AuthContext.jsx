import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get("http://localhost:8000/api/dashboard");
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        credentials
      );
      const { access, refresh } = response.data;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
      await fetchUserData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
    axios.defaults.headers.common["Authorization"] = "";
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
