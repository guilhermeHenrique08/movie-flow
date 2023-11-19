import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Error from "./components/pages/Error";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
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
    <div className="h-full">
      <Navbar darkMode={darkMode} changeTheme={changeTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
