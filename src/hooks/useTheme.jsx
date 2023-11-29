import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    return console.log("esse componte não esta no contexto");
  }

  return context;
}

export default useTheme;
