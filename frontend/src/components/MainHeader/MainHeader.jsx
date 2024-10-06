import React, { useEffect } from "react";

import Grid from "@mui/material/Grid2";
import HeadingStack from "../HeadingStack/HeadingStack";
import SelectElement from "../SelectElement/SelectElement";
import useFetchButtonMenu from "../../hooks/useFetchButtonMenu";
import GroupedButton from "../GroupedButton/GroupedButton";

const MainHeader = () => {
  const { headerButtonMenu, fetchHeaderButtonMenu } = useFetchButtonMenu();

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
        gridSize={3}
        heading="Bloomy Height"
        subHeading="LMS/Properties List"
        subHeadingColor="grey"
        mainHeadingVariant="h5"
        subHeadingFontSize={12}
        subHeadingFontWeight={600}
      />
      <Grid
        size={8}
        container
        justifyContent="end"
        alignItems="center"
        spacing={2}
      >
        <SelectElement
          placeholder="Select Building"
          selectHeight="40px"
          minWidth={180}
        />
        {headerButtonMenu && (
          <GroupedButton
            gridSpacing={3}
            container
            direction="row"
            height={40}
            menu={headerButtonMenu}
            isIcon={false}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default MainHeader;
