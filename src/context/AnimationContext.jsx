import { createContext, useContext, useState, useEffect } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(
    () => localStorage.getItem("animations") !== "off",
  );

  useEffect(() => {
    localStorage.setItem("animations", animationsEnabled ? "on" : "off");
  }, [animationsEnabled]);

  return (
    <AnimationContext.Provider
      value={{ animationsEnabled, setAnimationsEnabled }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimations = () => useContext(AnimationContext);
