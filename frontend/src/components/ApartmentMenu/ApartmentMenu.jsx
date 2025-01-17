/* Importing necessary files, module, method, hooks, context etc. */
import * as React from "react";

/* Importing Material UI Component */
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Grid2 } from "@mui/material";

/* Importing Material UI icon */
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

/* Importing Components */
import ApartmentMenuItem from "../ApartmentMenuItem/ApartmentMenuItem";

/* Importing Context */
import { useBookingMenuContext } from "../../context/BookingMenuContext";

/* AccountMenu functional component */
export default function AccountMenu({ flat }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { bookingSchema } = useBookingMenuContext();

  /* Function to handel click outside of element */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /* Function to setAnchorEl */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          position: "absolute",
          top: "-8px",
          right: "-20px",
        }}
      >
        <Tooltip title="Apartment settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, background: "transparent" }}>
              <KeyboardArrowDownRoundedIcon
                sx={{ color: "black" }}
              ></KeyboardArrowDownRoundedIcon>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      {bookingSchema && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 2,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1,
                "& .MuiAvatar-root": {
                  width: 50,
                  height: 32,
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
                  bgcolor: "#1976d2",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: 10,
                  bgcolor: "#1976d2",
                  borderRadius: "4px 4px 0 0",
                  // transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div
            style={{
              height: "2.5rem",
              background: "#eafafe",
              padding: "0 1rem ",
              display: "flex",
              alignItems: "center",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            Flat No. - {flat.flatNumber}
          </div>

          <Grid2 paddingY={2}>
            {flat.status === "Available" && (
              <>
                {bookingSchema.available.map((item, index) => (
                  <ApartmentMenuItem
                    handleClose={handleClose}
                    iconName={item.iconName}
                    color="#1976d2"
                    key={index}
                    title={item.type}
                  />
                ))}
              </>
            )}
            {flat.status === "Booked" && (
              <>
                {bookingSchema.booked.map((item, index) => (
                  <ApartmentMenuItem
                    handleClose={handleClose}
                    iconName={item.iconName}
                    color="#1976d2"
                    key={index}
                    title={item.type}
                  />
                ))}
              </>
            )}

            {flat.status === "Blocked" && (
              <>
                {bookingSchema.blocked.map((item, index) => (
                  <ApartmentMenuItem
                    handleClose={handleClose}
                    iconName={item.iconName}
                    color="#1976d2"
                    key={index}
                    title={item.type}
                  />
                ))}
              </>
            )}
          </Grid2>
        </Menu>
      )}
    </>
  );
}
