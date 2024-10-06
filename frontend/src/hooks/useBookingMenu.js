/* Importing necessary files, module, method, hooks, context etc. */
import { useState } from "react";
import { useBookingMenuContext } from "../context/BookingMenuContext";

/* Creating Hook */
const useBookingMenu = () => {
  const [loading, setLoading] = useState(false);
  const { setBookingSchema } = useBookingMenuContext();

  /* Function to fetch booking menu */
  const fetchBookingMenu = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:9000/bookingSchema");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setBookingSchema({ ...data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchBookingMenu };
};

/* Default Export */
export default useBookingMenu;
