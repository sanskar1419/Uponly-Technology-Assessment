import { useState } from "react";
import { useApartmentsCountContext } from "../context/ApartmentsCountContext";

const useFetchButtonMenu = () => {
  const [loading, setLoading] = useState(false);
  const [headerButtonMenu, setHeaderButtonMenu] = useState(null);
  const [wingsButtonMenu, setWingsButtonMenu] = useState(null);

  const fetchHeaderButtonMenu = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:9000/headerButtonMenu");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setHeaderButtonMenu([...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchWingsButtonMenu = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:9000/wingsButtonMenu");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setWingsButtonMenu([...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchHeaderButtonMenu,
    headerButtonMenu,
    fetchWingsButtonMenu,
    wingsButtonMenu,
  };
};
export default useFetchButtonMenu;
