import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import styled from "styled-components";

import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Container from "../../../components/UI/Container";
import { plus } from "react-icons-kit/feather/plus";
import { ButtonWrapper } from "../../Portfolio/portfolio.style";
import { SERVICE_LIST } from "../../../data/Portfolio/data";
import colors from "../../../theme/portfolio/colors";
import OsteoImage from "../../../assets/image/portfolio/me.jpeg";

const ImageWrapper = styled.div`
  max-width: 180px;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ExperiencesSection = ({
  sectionWrapper,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
  buttonWrapper,
  buttonStyle,
  learningList,
  listItem,
  listText,
  listTitle
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="experiences_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...learningRow}>
          <Box {...learningContentArea}>
            <ImageWrapper>
              <Image src={OsteoImage} />
            </ImageWrapper>
            <Heading content="Votre ostéopathe" {...learningTitle} />
            <Text
              content="Prendre le temps de vous connaître"
              {...learningSubTitle}
            />
            <Text
              {...learningDescription}
              content="Je m'appelle Marc Durand. J'exerce avec passion le métier d'ostéopathe depuis plus de 10 ans."
            />
            <Text
              {...learningDescription}
              content="Je vous accueille dans mon cabinet situé rue de la Belle Etoile à Nantes et me déplace également à domicile."
            />
            <Box {...buttonWrapper}>
              <ButtonWrapper>
                <Button
                  title="Prendre RDV"
                  className="portfolio_button"
                  {...buttonStyle}
                />
              </ButtonWrapper>
            </Box>
          </Box>
          <Box {...learningListArea}>
            {SERVICE_LIST.map((serviceList, index) => (
              <Box {...learningList} key={`serviceList-${index}`}>
                <Heading content={serviceList.title} {...listTitle} />
                {serviceList.listItems.map((item, index) => (
                  <Box {...listItem} key={`list-item-${index}`}>
                    <Icon icon={item.icon || plus} size={item.iconSize || 12} />
                    <Text as="span" content={item.content} {...listText} />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ExperiencesSection.propTypes = {
  sectionWrapper: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
  buttonWrapper: PropTypes.object,
  buttonLabelStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  learningList: PropTypes.object,
  listItem: PropTypes.object,
  listText: PropTypes.object,
  listTitle: PropTypes.object
};

ExperiencesSection.defaultProps = {
  sectionWrapper: {
    pt: ["10px", "40px", "30px", "50px", "50px"],
    pb: ["10px", "40px", "30px", "50px", "50px"],
    bg: "#f9f9f9"
  },
  learningRow: {
    flexBox: true,
    flexWrap: "wrap",
    mt: ["20px", "30px", "70px", "80px", "90px"],
    mb: "40px"
  },
  learningContentArea: {
    width: ["100%", "100%", "50%", "50%", "50%"],
    pr: ["0px", "0px", "60px", "80px", "160px"],
    mb: ["70px", "70px", "0", "0", "0"]
  },
  learningTitle: {
    fontSize: ["22px", "22px", "24px", "30px", "30px"],
    fontWeight: "700",
    color: colors.headingColor,
    lineHeight: "1.34",
    mb: ["20px", "20px", "15px", "20px", "20px"],
    pr: ["0", "0", "0", "65px", "65px"]
  },
  learningSubTitle: {
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontWeight: "400",
    color: colors.textColor,
    lineHeight: "1.5",
    mb: "20px",
    pr: ["0", "0", "0", "65px", "65px"]
  },
  learningDescription: {
    fontSize: "16px",
    fontWeight: 300,
    color: colors.textColor,
    lineHeight: "1.5",
    mb: "25px"
  },
  buttonWrapper: {
    flexBox: true,
    alignItems: "center",
    mt: ["30px", "40px", "40px"],
    flexWrap: ["wrap"]
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px"
  },
  learningListArea: {
    width: ["100%", "100%", "50%", "50%", "50%"],
    flexBox: true,
    flexWrap: "wrap",
    flexDirection: "column"
  },
  learningList: {
    width: ["100%"],
    pl: ["0", "0", "35px", "35px", "35x"],
    pr: ["0", "30px", "0", "0", "0"],
    mb: ["40px", "40px", "40px", "40px", "40px"]
  },
  listTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: colors.headingColor,
    mb: "25px"
  },
  listItem: {
    flexBox: true,
    alignItems: "center",
    color: colors.textColor,
    mb: "16px"
  },
  listText: {
    fontSize: "16px",
    fontWeight: "300",
    color: colors.textColor,
    mb: "0",
    ml: "5px"
  }
};

export default ExperiencesSection;
