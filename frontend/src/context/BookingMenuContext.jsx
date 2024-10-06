/* Importing necessary files, module, method, hooks, context etc. */
import { createContext, useContext, useState } from "react";

/* Creating Context */
export const BookingMenuContext = createContext();

/* Using Hook to consume context value */
export const useBookingMenuContext = () => {
  return useContext(BookingMenuContext);
};

/* Exporting and arrow functional component to provide context */
export const BookingMenuContextProvider = ({ children }) => {
  const [bookingSchema, setBookingSchema] = useState(null);

  return (
    <BookingMenuContext.Provider value={{ bookingSchema, setBookingSchema }}>
      {children}
    </BookingMenuContext.Provider>
  );
};
