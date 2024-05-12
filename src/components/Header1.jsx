import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ElectricCarTwoToneIcon from "@mui/icons-material/ElectricCarTwoTone";

import useMediaQuery from "@mui/material/useMediaQuery";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import SubMenu from "./SubMenu";
import MobileBottomNavigation from "./MobileBottomNavigation";

const pages = [
  {
    name: "Dashboard",
    subMenu: ["Daily", "Weekly", "Monthly", "Overall"],
  },
  {
    name: "About",
    subMenu: ["Daily 2", "Weekly 2", "Monthly 2"],
  },
  { name: "Contact", subMenu: ["Daily 3", "Weekly 3", "Monthly 3"] },
  { name: "Blog" },
  { name: "Pricing" },
];
const settings = ["Profile", "Account", "Logout"];

function Header1() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = React.useState(null);
  //   const drawerWidth = 240;

  const matches = useMediaQuery("(min-width:600px)");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSubMenuEnter = (event) => {
    setAnchorElSubMenu(event.currentTarget);
  };

  const handleSubMenuLeave = () => {
    setAnchorElSubMenu(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <ElectricCarTwoToneIcon fontSize="large" sx={{ pt: "10px" }} />
          </Typography>

          {matches ? (
            <Box
              sx={{
                display: { sm: "flex" },
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Box
                  key={page.name}
                  onMouseEnter={handleSubMenuEnter}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Button
                    sx={{
                      mr: 1,
                      color: "inherit",
                      textTransform: "capitalize",
                      fontSize: "1.25rem",
                    }}
                  >
                    {page.name}
                  </Button>
                  {page.subMenu &&
                    anchorElSubMenu &&
                    anchorElSubMenu.textContent === page.name && (
                      <SubMenu
                        anchorEl={anchorElSubMenu}
                        onClose={handleSubMenuLeave}
                        items={page.subMenu}
                      />
                    )}
                </Box>
              ))}
            </Box>
          ) : (
            <></>
          )}

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp"> UM</Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>

        {!matches ? (
          <Box
            sx={{
              display: { xs: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Box
                key={page.name}
                onMouseEnter={handleSubMenuEnter}
                onMouseLeave={handleSubMenuLeave}
              >
                <Button
                  sx={{
                    color: "inherit",
                    textTransform: "capitalize",
                  }}
                >
                  {page.name}
                </Button>
                {page.subMenu &&
                  anchorElSubMenu &&
                  anchorElSubMenu.textContent === page.name && (
                    <MobileBottomNavigation
                      anchorEl={anchorElSubMenu}
                      onClose={handleSubMenuLeave}
                      items={page.subMenu}
                    />
                  )}
              </Box>
            ))}
          </Box>
        ) : (
          <></>
        )}
      </AppBar>
    </>
  );
}

export default Header1;
