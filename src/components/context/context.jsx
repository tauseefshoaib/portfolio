import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function useNav() {
  return useContext(NavContext);
}

export function NavProvider({ children }) {
  const [nav, setNav] = useState(false);

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
}
