/* Importing necessary files, module, method, hooks, context etc. */
import { useState } from "react";
import { useApartmentsCountContext } from "../context/ApartmentsCountContext";

/* Creating Hook */
const useFetchApartmentCount = () => {
  const [loading, setLoading] = useState(false);
  const { setTotalApartmentCountDetails } = useApartmentsCountContext();

  /* Function to fetch apartments count */
  const fetchApartmentsCount = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:9000/totalFlatsNumbers");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setTotalApartmentCountDetails({ ...data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchApartmentsCount };
};

/* Default Export */
export default useFetchApartmentCount;
