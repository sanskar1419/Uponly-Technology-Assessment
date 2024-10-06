import { Grid2 } from "@mui/material";
import React, { useEffect } from "react";
import { useCurrentApartmentsContext } from "../../context/CurrentApartmentContext";
import HeadingStack from "../HeadingStack/HeadingStack";
import useFetchButtonMenu from "../../hooks/useFetchButtonMenu";
import GroupedButton from "../GroupedButton/GroupedButton";

const PropertyDetails = () => {
  const { currentWing } = useCurrentApartmentsContext();
  const { wingsButtonMenu, fetchWingsButtonMenu } = useFetchButtonMenu();

  useEffect(() => {
    fetchWingsButtonMenu();
  }, []);

  return (
    <>
      <Grid2
        height="20%"
        borderRadius="5px 5px 0 0"
        width="100%"
        bgcolor="#eafafe"
        paddingX={2}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <HeadingStack
          gridPadding={1}
          gridSize={3}
          heading={`${currentWing.wing} - Wing`}
          subHeading={`Total Floor : ${currentWing.floors.length}`}
          subHeadingColor="grey"
          mainHeadingVariant="h6"
          subHeadingFontSize={12}
          subHeadingFontWeight={400}
        />

        {wingsButtonMenu && (
          <GroupedButton
            gridSpacing={3}
            container
            direction="row"
            height={40}
            menu={wingsButtonMenu}
            isIcon
          />
        )}
      </Grid2>
    </>
  );
};

export default PropertyDetails;