import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [checked, setChecked] = useState(true);
  return (
    <ThemeContext.Provider value={{ checked, setChecked }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
