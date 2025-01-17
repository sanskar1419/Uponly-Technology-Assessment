/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";
import { useCurrentApartmentsContext } from "../../context/CurrentApartmentContext";
import { BookingMenuContextProvider } from "../../context/BookingMenuContext";

/* Importing Material UI Component */
import Grid from "@mui/material/Grid2";

/* Importing Components */
import FlatDataContainer from "../FlatDataContainer/FlatDataContainer";
import CustomPagination from "../CustomPagination/CustomPagination";
import CustomFunctionalButton from "../CustomFunctionalButton/CustomFunctionalButton";
import PropertyDetails from "../PropertyDetails/PropertyDetails";

/* MainBodyContainer functional arrow component */
const MainBodyContainer = () => {
  const { currentWing } = useCurrentApartmentsContext();

  return (
    <Grid spacing={2} size={12} container marginBottom={1}>
      {currentWing ? (
        <>
          <Grid container justifyContent="space-around" size={12}>
            {currentWing.totalFlatNumber.map((item, index) => (
              <FlatDataContainer
                key={index}
                item={item}
                boxBorderRadius={2}
                boxPadding={2}
                height={160}
                countVariant="h4"
                iconContainerBorderRadius="50%"
                iconContainerWidth={40}
                iconContainerHeight={40}
              />
            ))}
          </Grid>
          <Grid size={12} container justifyContent="space-between">
            <Grid
              size={{ xs: 10, md: 11 }}
              height={365}
              position="relative"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              container
              borderRadius={2}
              direction="column"
            >
              <BookingMenuContextProvider>
                <PropertyDetails />
              </BookingMenuContextProvider>
              <CustomPagination />
            </Grid>
            <CustomFunctionalButton />
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

/* Default Export */
export default MainBodyContainer;
