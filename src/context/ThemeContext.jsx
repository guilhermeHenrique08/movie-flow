import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  function changeTheme() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");

    localStorage.removeItem("darkTheme");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("darkTheme", darkMode);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("darkTheme")) {
      changeTheme();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
