import { useState } from "react";
import { useApartmentsCountContext } from "../context/ApartmentsCountContext";

const useFetchApartmentCount = () => {
  const [loading, setLoading] = useState(false);
  const { setTotalApartmentCountDetails } = useApartmentsCountContext();
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
export default useFetchApartmentCount;
