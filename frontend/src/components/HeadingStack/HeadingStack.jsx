import { Grid2, Typography } from "@mui/material";
import React from "react";

const HeadingStack = ({
  gridSize,
  gridPadding,
  mainHeadingVariant,
  subHeadingVariant,
  subHeadingFontWeight,
  subHeadingFontSize,
  subHeadingColor,
  heading,
  subHeading,
}) => {
  return (
    <Grid2 size={gridSize} padding={gridPadding}>
      <Typography variant={mainHeadingVariant} component="h2">
        {heading}
      </Typography>
      <Typography
        component={subHeadingVariant}
        fontWeight={subHeadingFontWeight}
        fontSize={subHeadingFontSize}
        color={subHeadingColor}
      >
        {subHeading}
      </Typography>
    </Grid2>
  );
};

export default HeadingStack;
