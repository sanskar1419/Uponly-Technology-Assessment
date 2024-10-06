/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";

/* Importing Material UI Component */
import { ListItemIcon, MenuItem } from "@mui/material";

/* Importing Material UI icons */
import * as Icons from "@mui/icons-material";

/* ApartmentMenuItem functional arrow component */
const ApartmentMenuItem = ({ handleClose, color, iconName, title }) => {
  /* Loading Icon Dynamically */
  let DynamicIcon = Icons[iconName];

  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <DynamicIcon
          fontSize="small"
          sx={{ color: color }}
          className="my-icon-css"
        />
      </ListItemIcon>
      {title}
    </MenuItem>
  );
};

/* Default Export */
export default ApartmentMenuItem;
