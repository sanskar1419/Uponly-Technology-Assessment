/* Importing necessary files, module, method, hooks, context etc. */
import { useState } from "react";
import { useApartmentsContext } from "../context/ApartmentContext";

/* Creating Hook */
const useFetchApartment = () => {
  const [loading, setLoading] = useState(false);
  const { setApartments } = useApartmentsContext();

  /* Function to fetch apartments */
  const fetchApartments = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:9000/Apartments");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setApartments([...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchApartments };
};

/* Default Export */
export default useFetchApartment;
