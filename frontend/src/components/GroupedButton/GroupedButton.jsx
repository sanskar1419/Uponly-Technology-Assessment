/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";

/* Importing Material UI Component */
import { Button, Grid2 } from "@mui/material";

/* Importing Material UI icons */
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

/* GroupedButton functional arrow component */
const GroupedButton = ({
  isIcon,
  gridSpacing,
  container,
  direction,
  height,
  menu,
}) => {
  const renderGroup = () => (
    <Grid2
      spacing={gridSpacing}
      container={container}
      direction={direction}
      height={height}
    >
      {menu.map((item, index) => (
        <Button variant={item.variant} key={index}>
          {item.buttonContent}
        </Button>
      ))}
    </Grid2>
  );

  const renderGroupWithIcon = () => (
    <Grid2
      spacing={gridSpacing}
      container={container}
      direction={direction}
      height={height}
    >
      {menu.map((item, index) => (
        <Button
          variant={item.variant}
          key={index}
          startIcon={
            item.startIcon === "ExitToAppRoundedIcon" ? (
              <ExitToAppRoundedIcon />
            ) : (
              <AddRoundedIcon />
            )
          }
        >
          {item.buttonContent}
        </Button>
      ))}
    </Grid2>
  );
  /* Returning based on isIcon bool value */
  return isIcon ? renderGroupWithIcon() : renderGroup();
};

/* Default Export */
export default GroupedButton;
