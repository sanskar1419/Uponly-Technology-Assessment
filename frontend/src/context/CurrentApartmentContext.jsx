/* Importing necessary files, module, method, hooks, context etc. */
import { createContext, useContext, useState } from "react";

/* Creating Context */
export const CurrentApartmentsContext = createContext();

/* Using Hook to consume context value */
export const useCurrentApartmentsContext = () => {
  return useContext(CurrentApartmentsContext);
};

/* Exporting and arrow functional component to provide context */
export const CurrentApartmentsContextProvider = ({ children }) => {
  const [currentWing, setCurrentWing] = useState(null);

  return (
    <CurrentApartmentsContext.Provider value={{ currentWing, setCurrentWing }}>
      {children}
    </CurrentApartmentsContext.Provider>
  );
};
