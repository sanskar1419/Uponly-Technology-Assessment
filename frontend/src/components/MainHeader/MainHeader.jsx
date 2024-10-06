/* Importing necessary files, module, method, hooks, context etc. */
import React, { useEffect } from "react";
import useFetchButtonMenu from "../../hooks/useFetchButtonMenu";
import useWidth from "../../hooks/useWidth";

/* Importing Components */
import HeadingStack from "../HeadingStack/HeadingStack";
import SelectElement from "../SelectElement/SelectElement";
import GroupedButton from "../GroupedButton/GroupedButton";
import GroupedButtonMenu from "../GroupedButtonMenu/GroupedButtonMenu";

/* Importing Material UI Component */
import Grid from "@mui/material/Grid2";

/* MainHeader functional arrow component */
const MainHeader = () => {
  const { headerButtonMenu, fetchHeaderButtonMenu } = useFetchButtonMenu();
  const width = useWidth();

  /* Fetching header button menu */
  useEffect(() => {
    fetchHeaderButtonMenu();
  }, []);

  return (
    <Grid
      size={12}
      container
      paddingX={1}
      paddingY={0.5}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      justifyContent="space-between"
    >
      <HeadingStack
        gridPadding={1}
        // gridSize={3}
        heading="Bloomy Height"
        subHeading="LMS/Properties List"
        subHeadingColor="grey"
        mainHeadingVariant="h5"
        subHeadingFontSize={12}
        subHeadingFontWeight={600}
        headingFontSize={
          width === "xl" || width === "lg" || width === "md" ? "1rem" : "0.9rem"
        }
      />
      {headerButtonMenu && (
        <Grid
          size={{ md: 4, lg: 8 }}
          container
          justifyContent="end"
          alignItems="center"
          spacing={2}
          // border={2}
        >
          <SelectElement
            placeholder="Select Building"
            selectHeight="40px"
            minWidth={180}
          />
          {width === "xl" || width === "lg" ? (
            <GroupedButton
              gridSpacing={3}
              container
              direction="row"
              height={40}
              menu={headerButtonMenu}
              isIcon={false}
            />
          ) : (
            <GroupedButtonMenu menu={headerButtonMenu} />
          )}
        </Grid>
      )}
    </Grid>
  );
};

/* Default Export */
export default MainHeader;
