import React, { useState } from "react";
import logo from "../assests//Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Icon } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "contact",
      icon: <PhoneRoundedIcon />,
    },

    {
      text: "cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <Link
          activeClass="active"
          to="a"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="t"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
        >
          Testimonials
        </Link>

        <Link
          activeClass="active"
          to="c"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
        >
          contact
        </Link>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Booking New</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
