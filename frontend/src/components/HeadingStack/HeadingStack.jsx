/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";

/* Importing Material UI Component */
import { Grid2, Typography } from "@mui/material";

/* HeadingStack functional arrow component */
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
  headingFontSize,
}) => {
  return (
    <Grid2 size={{ xs: 4, md: 3 }} padding={gridPadding}>
      <Typography
        variant={mainHeadingVariant}
        fontSize={headingFontSize}
        component="h2"
      >
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

/* Default Export */
export default HeadingStack;
