import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Context } from "../Context";

const drawerWidth = 240;
const navItems = [
  "General",
  "Health",
  "Science",
  "Technology",
  "Business",
  "Sports",
  "Entertainment",
];

const Navbar = (props) => {
  const { navClick } = React.useContext(Context);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        News
        <span className="bg-yellow-500 px-3 py-1 rounded-lg text-black font-extrabold">
          App
        </span>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => navClick(e, item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#023047", display: 'flex' }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Hamburger Icon (only for devices below 900px) */}
        
          {/* NewsApp Text (aligned to the left for all screen sizes) */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "900",
              textAlign: "left", // Always align text to the left
              display: { xs: "block", sm: "block" },
              flexGrow: 1, // Ensure this takes up available space to push other elements
            }}
          >
            News
            <span className="bg-yellow-500 px-3 py-1 rounded-lg text-black font-extrabold">
              App
            </span>
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "block", md: "none" }, // Show only for small devices below 900px
              ml: "auto", // Align hamburger icon to the right
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Navigation buttons for larger screens (above 900px) */}
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={(e) => navClick(e, item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
