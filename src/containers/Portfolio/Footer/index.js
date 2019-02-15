import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Button from "reusecore/src/elements/Button";

import Container from "../../../components/UI/Container";
import SocialProfile from "../SocialProfile";
import { openModal, closeModal } from "@redq/reuse-modal";

import { FooterWrapper, FooterNav, FooterNavItem } from "./footer.style";
import { FOOTER_MENU } from "../../../data/Portfolio/data";
import { SOCIAL_PROFILES } from "../../../data/Portfolio/data";
import { heart } from "react-icons-kit/fa/heart";
import { ic_clear } from "react-icons-kit/md/ic_clear";
import colors from "../../../theme/portfolio/colors";
import LoginModal from "../../LoginModal/index";

// Default close button for modal
const CloseModalButton = () => (
  // <button
  //   className="modalCloseBtn"
  //   variant="fab"
  //   onClick={() => closeModal()}
  // >
  // <Icon icon={ic_clear}/>
  // </button>
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    title="x"
  />
);

const Footer = ({ row, col, linkStyle, copyrightStyle, azertyStudio }) => {
  // Search modal handler
  const handleModal = () => {
    openModal({
      config: {
        className: "search-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
          position: "fixed"
        }
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };

  return (
    <FooterWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...col}>
            <SocialProfile
              className="footer_social footer_social_center"
              items={SOCIAL_PROFILES}
              iconSize={30}
            />
            <Text
              as="p"
              content="Copyright © John Doe 2019 - Tous droits réservés."
              {...copyrightStyle}
            />
            <FooterNav>
              {FOOTER_MENU.map((item, index) => (
                <FooterNavItem key={`footer-nav-item-${index}`}>
                  <Button
                    variant="textButton"
                    onClick={handleModal}
                    title={item.label}
                  />
                </FooterNavItem>
              ))}
            </FooterNav>
            <Box {...azertyStudio}>
              <Text
                as="span"
                content="Site développé avec"
                {...copyrightStyle}
              />
              <Icon icon={heart} size={14} className="heart_sign" />
              <Text as="span" content="par" {...copyrightStyle} />
              <a
                href="https://www.azerty-studio.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text as="span" content="Azerty Studio" {...linkStyle} />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  linkStyle: PropTypes.object,
  copyrightStyle: PropTypes.object,
  AzertyStudio: PropTypes.object
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    ml: "-15px",
    mr: "-15px",
    mb: ["0", "20px"]
  },
  col: {
    pl: "15px",
    pr: "15px",
    mb: ["40px", "0", "0", "0", "0", "0"]
  },
  linkStyle: {
    fontSize: "14px",
    color: colors.ternary,
    pl: "5px",
    pr: "5px",
    mb: 0
  },
  copyrightStyle: {
    fontSize: "14px",
    color: "#fff",
    textAlign: "center",
    mb: "10px"
  },
  azertyStudio: {
    textAlign: "center",
    mt: "45px"
  }
};

export default Footer;
