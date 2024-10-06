/* Importing necessary files, module, method, hooks, context etc. */
import React, { useEffect } from "react";
import useFetchApartmentCount from "./hooks/useAppartmentsCount";
import useFetchApartment from "./hooks/useApartmentFetch";
import useCurrentWing from "./hooks/useCurrentWing";
import { useApartmentsContext } from "./context/ApartmentContext";

/* Importing Components */
import MainBodyContainer from "./components/MainBodyContainer/MainBodyContainer";
import MainHeader from "./components/MainHeader/MainHeader";

/* Importing Material UI Component */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

/* App functional arrow component */
const App = () => {
  const { fetchApartmentsCount } = useFetchApartmentCount();
  const { apartments } = useApartmentsContext();
  const { fetchApartments } = useFetchApartment();
  const { setInitialValue } = useCurrentWing();

  /* Fetching Apartment on mounting */
  useEffect(() => {
    fetchApartments();
  }, []);

  /* Setting current wing on mounting and apartment change */
  useEffect(() => {
    if (apartments) {
      setInitialValue();
    }
  }, [apartments]);

  /* Fetching Apartment Count on mounting */
  useEffect(() => {
    fetchApartmentsCount();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      className="no-scrollbar"
      padding={1.5}
    >
      <Grid container spacing={2}>
        <MainHeader />
        <MainBodyContainer />
      </Grid>
    </Box>
  );
};

/* Default Export */
export default App;
