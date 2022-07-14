import { useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export const DarkModeToggle = () => {
  const { isDarkMode, toggle } = useDarkMode();
  const [themeColorIcon, setThemeColorIcon] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      setThemeColorIcon("🌞");
    } else {
      setThemeColorIcon("🌚");
    }
  }, [isDarkMode, setThemeColorIcon]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggle}
      className="btn btn-sm btn-ghost"
    >
      <span>{themeColorIcon}</span>
    </button>
  );
};
