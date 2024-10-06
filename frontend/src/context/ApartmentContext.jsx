/* Importing necessary files, module, method, hooks, context etc. */
import { createContext, useContext, useState } from "react";

/* Creating Context */
export const ApartmentsContext = createContext();

/* Using Hook to consume context value */
export const useApartmentsContext = () => {
  return useContext(ApartmentsContext);
};

/* Exporting and arrow functional component to provide context */
export const ApartmentsContextProvider = ({ children }) => {
  const [apartments, setApartments] = useState(null);

  return (
    <ApartmentsContext.Provider value={{ apartments, setApartments }}>
      {children}
    </ApartmentsContext.Provider>
  );
};
