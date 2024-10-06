/* Importing necessary files, module, method, hooks, context etc. */
import React, { useEffect, useState } from "react";

/* Importing Components */
import CustomIcon from "../CustomIcon/CustomIcon";

/* Importing Material UI Component */
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";

/* Importing Material UI icons */
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import FilePresentRoundedIcon from "@mui/icons-material/FilePresentRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";

/* CustomFunctionalButton functional arrow component */
const CustomFunctionalButton = () => {
  const [functionMenu, setFunctionMenu] = useState(null);

  /* Fetching functional menu on mounting */
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("http://localhost:9000/functionalMenu");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setFunctionMenu([...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <Grid
      size={{ xs: 2, md: 1 }}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius={2}
      direction="column"
      spacing={2}
      container
      justifyContent="center"
      alignItems="center"
      paddingY={1}
    >
      {functionMenu && (
        <>
          {functionMenu.map((item, index) => (
            <Stack
              direction="column"
              key={index}
              justifyContent="center"
              alignItems="center"
              paddingX={0.5}
            >
              <div
                style={{
                  border: "2px solid #D3D3D3",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              >
                <div
                  style={{
                    border: "2px solid #D3D3D3",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                >
                  <CustomIcon
                    width={16}
                    height={16}
                    bgColor={item.color}
                    padding={5}
                    borderRadius="50%"
                  >
                    {item.function === "Cancel Booking" ? (
                      <CloseRoundedIcon sx={{ color: "white", fontSize: 16 }} />
                    ) : item.function === "Demand Letter" ? (
                      <NoteAltRoundedIcon
                        sx={{ color: "white", fontSize: 16 }}
                      />
                    ) : item.function === "Lead Dashboard" ? (
                      <DashboardCustomizeRoundedIcon
                        sx={{ color: "white", fontSize: 16 }}
                      />
                    ) : item.function === "Reminder Letter" ? (
                      <FilePresentRoundedIcon
                        sx={{ color: "white", fontSize: 16 }}
                      />
                    ) : (
                      <PaymentsRoundedIcon
                        sx={{ color: "white", fontSize: 16 }}
                      />
                    )}
                  </CustomIcon>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.7rem",
                  marginTop: "5px",
                }}
              >
                {item.function}
              </div>
            </Stack>
          ))}
        </>
      )}
    </Grid>
  );
};

/* Default Export */
export default CustomFunctionalButton;
