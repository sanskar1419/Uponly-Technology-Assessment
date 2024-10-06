/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";

/* Importing Context */
import { useCurrentApartmentsContext } from "../../context/CurrentApartmentContext";

/* Importing Components */
import ApartmentFloor from "../ApartmentFloor/ApartmentFloor";

/* ApartmentFloors functional arrow component */
const ApartmentFloors = () => {
  const { currentWing } = useCurrentApartmentsContext();

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        gap: "10px",
        overflowY: "auto",
        maxHeight: "82%",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {currentWing.floors.map((floor, index) => (
        <ApartmentFloor key={index} floor={floor} />
      ))}
    </div>
  );
};

/* Default Export */
export default ApartmentFloors;
