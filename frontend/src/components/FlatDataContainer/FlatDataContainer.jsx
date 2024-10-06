/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";
import { useCurrentApartmentsContext } from "../../context/CurrentApartmentContext";

/* Importing Components */
import CustomIcon from "../CustomIcon/CustomIcon";

/* Importing Material UI Component */
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

/* Importing Material UI icon */
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";

/* FlatDataContainer functional arrow component */
const FlatDataContainer = ({
  item,
  height,
  boxBorderRadius,
  boxPadding,
  countVariant,
  iconContainerWidth,
  iconContainerHeight,
  iconContainerBorderRadius,
}) => {
  const { currentWing } = useCurrentApartmentsContext();
  return (
    <Grid
      size={{
        xs: 9,
        sm: 5.5,
        md: 12 / currentWing.totalFlatNumber.length - 0.1,
      }}
      height={height}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius={boxBorderRadius}
      container
      justifyContent="start"
      padding={boxPadding}
      alignItems="center"
      direction="column"
      marginBottom={2}
    >
      <Grid
        borderBottom="1.5px solid grey"
        width="100%"
        container
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={1}
      >
        <Typography variant="body1" color="grey" fontSize={15}>
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}{" "}
          <span>Flat</span>
        </Typography>
        <CustomIcon
          width={iconContainerWidth}
          height={iconContainerHeight}
          borderRadius={iconContainerBorderRadius}
          bgColor={
            item.type === "total"
              ? "blue"
              : item.type === "booked"
              ? "red"
              : item.type === "available"
              ? "green"
              : "grey"
          }
        >
          <ApartmentRoundedIcon sx={{ color: "white" }} />
        </CustomIcon>
      </Grid>

      <Grid
        container
        width="100%"
        height="60%"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant={countVariant}>{item.number}</Typography>
      </Grid>
    </Grid>
  );
};

/* Default Export */
export default FlatDataContainer;
