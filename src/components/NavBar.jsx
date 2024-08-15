import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const logoStyle = {
  width: "100px",
  height: "auto",
  cursor: "pointer",
  marginRight: "10px",
  marginTop: "5px",
};

function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <AppBar
        sx={{
          position: "relative",
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "0px",
                px: 0,
              }}
            >
              <a href="/">
                <img
                  src={"images/givngodark.png"}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </a>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem sx={{ py: "6px", px: "15px" }}>
                  <NavLink
                    variant="body2"
                    to="/psds"
                    style={{ textDecoration: "none", color: "#1f1f1f" }}
                  >
                    PSDs
                  </NavLink>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <NavLink
                    variant="body2"
                    style={{ textDecoration: "none", color: "#1f1f1f" }}
                    to="/textures"
                  >
                    Textures
                  </NavLink>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <NavLink
                    variant="body2"
                    style={{ textDecoration: "none", color: "#1f1f1f" }}
                    to="/effects"
                  >
                    Effects
                  </NavLink>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <NavLink
                    variant="body2"
                    style={{ textDecoration: "none", color: "#1f1f1f" }}
                    to="/creatorshops"
                  >
                    Creator Shops
                  </NavLink>
                </MenuItem>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {!loggedIn ? (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    component="a"
                    href="/signin"
                  >
                    Sign in
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component="a"
                    href="/signup"
                  >
                    Sign up
                  </Button>
                </Box>
              ) : (
                <MenuItem>
                  <NavLink to="/profile">
                    <AccountCircleIcon
                      color="primary"
                      sx={{ fontSize: "2.6em", mt: 0.4 }}
                    />
                  </NavLink>
                </MenuItem>
              )}
            </Box>

            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <MenuItem>
                      <NavLink
                        variant="body2"
                        to="/psds"
                        style={{ textDecoration: "none", color: "#1f1f1f" }}
                      >
                        PSDs
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        variant="body2"
                        to="/textures"
                        style={{ textDecoration: "none", color: "#1f1f1f" }}
                      >
                        Textures
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        variant="body2"
                        to="/effects"
                        style={{ textDecoration: "none", color: "#1f1f1f" }}
                      >
                        Effects
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        variant="body2"
                        to="/creatorshops"
                        style={{ textDecoration: "none", color: "#1f1f1f" }}
                      >
                        Creator Shops
                      </NavLink>
                    </MenuItem>
                    <Divider />
                    {loggedIn ? (
                      <MenuItem>
                        <NavLink to="/profile">
                          <Button
                            color="primary"
                            variant="contained"
                            component="a"
                            target="_blank"
                            sx={{ width: "100%" }}
                          >
                            Profile
                          </Button>
                        </NavLink>
                      </MenuItem>
                    ) : (
                      <Box>
                        <MenuItem>
                          <Button
                            color="primary"
                            variant="contained"
                            component="a"
                            href="/signup"
                            target="_blank"
                            sx={{ width: "100%" }}
                          >
                            Sign up
                          </Button>
                        </MenuItem>
                        <MenuItem>
                          <Button
                            color="primary"
                            variant="outlined"
                            component="a"
                            href="/signin"
                            target="_blank"
                            sx={{ width: "100%" }}
                          >
                            Sign in
                          </Button>
                        </MenuItem>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
