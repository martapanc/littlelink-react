"use client";

import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {DarkModeToggle} from "@anatoliygatt/dark-mode-toggle";

type Mode = 'dark' | 'light';

export default function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mode, setMode] = useState<Mode>(theme as Mode);

  useEffect(() => {
    setMode(theme as Mode);
  }, [theme]);

  const toggleTheme = () => {
    const currentTheme = theme === 'dark';

    setMode(currentTheme ? 'light' : 'dark');
    return setTheme(currentTheme ? 'light' : 'dark');
  }

  return (
    <div className="flex justify-end mb-10 w-full">
      <DarkModeToggle
        mode={mode}
        dark="Dark"
        light="Light"
        size="sm"
        inactiveTrackColor="#e2e8f0"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
        ariaLabel="Toggle color scheme"
        onChange={toggleTheme}
      />
    </div>
  )
}
