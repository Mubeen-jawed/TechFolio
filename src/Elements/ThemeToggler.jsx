import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggler = () => {
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
      sunColor="white"
      moonColor="black"
    />
  );
};

export default ThemeToggler;
