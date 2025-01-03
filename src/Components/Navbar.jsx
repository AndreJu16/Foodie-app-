import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from "react-icons/hi2";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/info';
import CommentRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      to: "/"
    },
    {
      text: "about",
      icon: <InfoIcon />,
      to: "/abouts"
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      to: "/testimonials"
    },
    {
      text: "Contact",
      icon: <CommentRoundedIcon />,
      to: "/contacts"
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <li><Link to="/"><img src={Logo} alt="" /></Link></li>
      </div>
      <div className="navbar-links-container">
        <Link to="/" href="#home">Home</Link>
        <Link to="/abouts">About Us</Link>
        <Link to="/testimonials">Testimonials</Link> 
        <Link to="/contacts">Contact</Link>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;