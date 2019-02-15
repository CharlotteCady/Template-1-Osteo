import React from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";

import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Container from "../../../components/UI/Container";
import { IconWrapper } from "./contact.style";

import { ButtonWrapper } from "../../Portfolio/portfolio.style";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import { phone } from "react-icons-kit/fa/phone";
import { send } from "react-icons-kit/fa/send";

const ContactSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  replyTime,
  buttonStyle,
  buttonWrapper
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="contact_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Contact" />
          <Text
            {...secDescription}
            content="Le cabinet est ouvert du lundi au vendredi de 8h à 20h et le samedi de 9h à 17h."
          />
        </Box>
        <Box {...replyWrapper}>
          <IconWrapper>
            <Icon icon={mapMarker} size={22} className="contact-icon" />
          </IconWrapper>
          <Text
            as="p"
            content="18 rue de la Belle Etoile, 44000 Nantes"
            {...replyTime}
          />
        </Box>
        <Box {...replyWrapper}>
          <IconWrapper>
            <Icon icon={send} size={18} className="contact-icon" />
          </IconWrapper>
          <Text as="p" content="john.doe@gmail.com" {...replyTime} />
        </Box>
        <Box {...replyWrapper}>
          <IconWrapper>
            <Icon icon={phone} size={22} className="contact-icon" />
          </IconWrapper>
          <Text as="p" content="02 45 48 56 8" {...replyTime} />
        </Box>
        <Box {...buttonWrapper}>
          <ButtonWrapper>
            <Button
              title="Prendre RDV en ligne"
              className="portfolio_button"
              {...buttonStyle}
            />
          </ButtonWrapper>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object
};

ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ["70px", "80px", "100px", "110px", "140px"],
    pb: ["70px", "80px", "100px", "110px", "140px"],
    bg: "#f9f9f9"
  },
  secTitleWrapper: {
    mb: "30px"
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center"
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    width: "600px",
    maxWidth: "100%",
    ml: "auto",
    mr: "auto",
    mb: "0"
  },
  replyWrapper: {
    flexBox: true,
    alignItems: "center",
    justifyContent: "center",
    mb: "10px"
  },
  replyTime: {
    fontSize: "16px",
    fontWeight: "300",
    color: "#302b4e",
    mb: 0
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px"
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "50px"
  }
};

export default ContactSection;
