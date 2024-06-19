import { useState } from 'react'
import Homepage from './pages/Homepage'
import './App.css'
import { useEffect } from "react";
import { createContext } from "react";
import { motion } from "framer-motion";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

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
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          exit={{ opacity: 0 }}
        >
          <Homepage />
        </motion.div>
        
        
      </AppContext.Provider>
    )
}

export default App