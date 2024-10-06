/* Importing necessary files, module, method, hooks, context etc. */
import { createContext, useContext, useState } from "react";

/* Creating Context */
export const ApartmentsCountContext = createContext();

/* Using Hook to consume context value */
export const useApartmentsCountContext = () => {
  return useContext(ApartmentsCountContext);
};

/* Exporting and arrow functional component to provide context */
export const ApartmentsCountContextProvider = ({ children }) => {
  const [totalApartmentCountDetails, setTotalApartmentCountDetails] =
    useState(null);

  return (
    <ApartmentsCountContext.Provider
      value={{ totalApartmentCountDetails, setTotalApartmentCountDetails }}
    >
      {children}
    </ApartmentsCountContext.Provider>
  );
};
