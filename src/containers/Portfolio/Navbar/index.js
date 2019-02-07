import React, { useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NavbarWrapper from "reusecore/src/elements/Navbar";
import Drawer from "reusecore/src/elements/Drawer";
import Button from "reusecore/src/elements/Button";
import Logo from "reusecore/src/elements/UI/Logo";
import Box from "reusecore/src/elements/Box";
import HamburgMenu from "../../../components/HamburgMenu";
import Container from "../../../components/UI/Container";
import { DrawerContext } from "../../../contexts/DrawerContext";

import { MENU_ITEMS } from "../../../data/Portfolio/data";
import ScrollSpyMenu from "../../../components/ScrollSpyMenu";
import Band from "../../../assets/image/portfolio/band.svg";
import LogoImage from "../../../assets/image/portfolio/logo.png";
import LogoImageAlt from "../../../assets/image/portfolio/logo-alt.png";
import colors from "../../../theme/portfolio/colors";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE"
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={Band}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={Band}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            <Link href="#">
              <a className="navbar_button">
                <Button {...button} title="PRENDRE RDV" />
              </a>
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor={colors.primary} />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <Link href="#">
                <a className="navbar_drawer_button">
                  <Button {...button} title="LET'S TALK" />
                </a>
              </Link>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object
};

Navbar.defaultProps = {
  navbarStyle: {
    className: "hosting_navbar",
    minHeight: "70px",
    display: "block"
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  logoStyle: {
    maxHeight: ["40px"]
  },
  button: {
    type: "button",
    fontSize: "16px",
    pl: "0",
    pr: "0",
    minHeight: "auto"
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center"
  }
};

export default Navbar;
