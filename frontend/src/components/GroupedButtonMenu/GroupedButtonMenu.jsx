/* Importing necessary files, module, method, hooks, context etc. */
import * as React from "react";
import ApartmentMenuItem from "../ApartmentMenuItem/ApartmentMenuItem";

/* Importing Material UI Component */
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

/* Importing Material UI Component */
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

/* GroupedButtonMenu functional component */
export default function GroupedButtonMenu({ menu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  /* Function to handel click outside of element */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /* Function to close the menu */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Apartment settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40, background: "transparent" }}>
              <MenuRoundedIcon sx={{ color: "black" }} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 50,
                height: 50,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menu.map((item, index) => (
          <ApartmentMenuItem
            key={index}
            handleClose={handleClose}
            color="grey"
            title={item.buttonContent}
            iconName={item.startIcon}
          />
        ))}
      </Menu>
    </>
  );
}
