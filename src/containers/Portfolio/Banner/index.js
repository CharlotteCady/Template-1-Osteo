import React from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Container from "../../../components/UI/Container";
import SocialProfile from "../SocialProfile";
import BannerWrapper, { ImageBanner } from "./banner.style";
import { SOCIAL_PROFILES } from "../../../data/Portfolio/data";
import { cornerDownRight } from "react-icons-kit/feather/cornerDownRight";
import colors from "../../../theme/portfolio/colors";
import OsteoImg from "../../../assets/image/portfolio/osteopathie.jpeg";

const BannerSection = ({
  row,
  contentArea,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            {/* <Heading content="Ostéopathe à Nantes" {...greetingStyle} /> */}
            <Heading content="Marc Durand" {...nameStyle} />
            <Heading content="Ostéopathe à Nantes" {...designationStyle} />
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: colors.primary }}
                size={22}
              />
              <Heading content="Soulagez vos douleurs" {...roleStyle} />
            </Box>
            <Text
              content="Qu’il s’agisse d’une urgence, d’une consultation en cabinet ou à domicile, je vous conseille et vous guide dans le processus de guérison. L’ostéopathie est une médecine alternative largement reconnue pour soulager les douleurs d’origine mécanique, en particulier les douleurs en bas du dos et à la nuque (cervicales)."
              {...aboutStyle}
            />
            <SocialProfile items={SOCIAL_PROFILES} />
          </Box>
          <ImageBanner src={OsteoImg} />
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "stretch"
  },
  contentArea: {
    width: ["100%", "100%", "50%", "40%"],
    p: ["65px 0 80px 0", "65px 0 80px 0", "80px 0 60px 0", "0"],
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column"
  },
  nameStyle: {
    as: "h2",
    color: "#fff",
    fontSize: ["38px", "38px", "44px", "60px", "74px"],
    fontWeight: "800",
    mb: "6px"
  },
  designationStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "500",
    mb: ["30px", "30px", "25px", "30px", "30px"]
  },
  roleWrapper: {
    flexBox: true,
    mb: "28px"
  },
  roleStyle: {
    as: "h4",
    fontSize: ["18px", "18px", "18px", "18px", "20px"],
    fontWeight: "500",
    color: "#fff",
    mb: "0",
    ml: "10px"
  },
  aboutStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    mb: "50px"
  }
};

export default BannerSection;
