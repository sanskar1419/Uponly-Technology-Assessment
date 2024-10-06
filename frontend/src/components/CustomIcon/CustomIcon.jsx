/* Importing necessary files, module, method, hooks, context etc. */
import React from "react";

/* CustomIcon functional arrow component */
const CustomIcon = ({
  width,
  height,
  bgColor,
  padding,
  borderRadius,
  children,
  color,
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius,
        padding: padding || "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

/* Default Export */
export default CustomIcon;
