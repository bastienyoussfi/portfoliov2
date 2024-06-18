import { useState } from 'react'
import Homepage from './pages/Homepage'
import './App.css'
import { useEffect } from "react";
import { createContext } from "react";

export const AppContext = createContext(() => {});

function App() {
    const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

    const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
      <AppContext.Provider value={{ theme, switchTheme }}>
        <Homepage />
      </AppContext.Provider>
    )
}

export default App