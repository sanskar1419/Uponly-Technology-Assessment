/* Importing necessary files, module, method, hooks, context etc. */
import { useState } from "react";

/* Creating Hook */
const useFetchButtonMenu = () => {
  const [loading, setLoading] = useState(false);
  const [headerButtonMenu, setHeaderButtonMenu] = useState(null);
  const [wingsButtonMenu, setWingsButtonMenu] = useState(null);

  /* Function to fetch header menu button */
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

  /* Function to fetch wings menu button */
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

/* Default Export */
export default useFetchButtonMenu;
