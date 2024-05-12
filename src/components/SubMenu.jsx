import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

function SubMenu({ anchorEl, onClose, items }) {
  const handleMouseLeave = (event) => {
    onClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item) => (
        <MenuItem key={item} onClick={onClose}>
          <Typography textAlign="center">{item}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default SubMenu;
