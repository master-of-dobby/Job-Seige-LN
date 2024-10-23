import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Corrected import

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Initialize token from local storage

  useEffect(() => {
    checkToken(token); // Check token validity when the token changes or on mount
  }, [token]);

  const checkToken = (token) => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(
          "decoded token: " + decodedToken.exp * 1000 + " and " + Date.now()
        );
        const isExpired = decodedToken.exp * 1000 < Date.now();
        console.log("is expired ? " + !isExpired);
        setIsAuthenticated(!isExpired);
      } catch (error) {
        console.error("Token decoding error:", error);
        setIsAuthenticated(false);
      }
    } else {
      console.log("no token is there");
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    console.log("isAuthenticated changed: ", isAuthenticated);
  }, [isAuthenticated]);

  const login = (newToken) => {
    console.log("Logging in with token:", newToken);
    localStorage.setItem("token", newToken);
    setToken(newToken); // Update the token state
    checkToken(newToken); // Check token validity immediately after setting
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(""); // Clear the token state
    setIsAuthenticated(false); // Set authenticated state to false on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {console.log("in auth provider : " + isAuthenticated)}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
