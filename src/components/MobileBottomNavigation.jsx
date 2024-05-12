import * as React from "react";
import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function MobileBottomNavigation({ anchorEl, onClose, items }) {
  console.log("subMenus", items);

  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        overflowX: "auto",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {items.map((item, index) => (
          <BottomNavigationAction
            sx={{ pl: 0 }}
            key={index}
            label={item}
            onClick={() => {
              // Handle click event here if needed
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}

export default MobileBottomNavigation;
