/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";
import { useApartmentsContext } from "../../context/ApartmentContext";

/* Importing Material UI Component */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

/* SelectElement functional arrow component */
const SelectElement = ({ placeholder, selectHeight, minWidth }) => {
  const { apartments } = useApartmentsContext();

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: minWidth,
      }}
    >
      <InputLabel sx={{ marginTop: "-8px" }}>{placeholder}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        label="Select Building"
        sx={{ height: selectHeight }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {apartments &&
          apartments.map((apartment) => (
            <MenuItem value={apartment.id} key={apartment.id}>
              {apartment.wing} - Wing
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

/* Default Export */
export default SelectElement;
