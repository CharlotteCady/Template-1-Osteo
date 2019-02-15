import React from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Container from "../../../components/UI/Container";

import { SkillItem, SkillDetails, SkillIcon, SkillAbout } from "./skill.style";
import { SKILLS } from "../../../data/Portfolio/data";

const SkillSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  col,
  skillTitle,
  skillDescription
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="skills_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Tarifs et remboursements" />
          <Text
            {...secDescription}
            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </Box>

        <Box {...row}>
          {SKILLS.map((item, index) => (
            <Box {...col} key={`skill-item-${index}`}>
              <SkillItem>
                <SkillDetails>
                  <SkillIcon>
                    <Image src={item.icon} alt={`skill-icon-${index + 1}`} />
                  </SkillIcon>
                  <SkillAbout>
                    <Heading content={item.title} {...skillTitle} />
                    <Text content={item.description} {...skillDescription} />
                  </SkillAbout>
                </SkillDetails>
              </SkillItem>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

SkillSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
  skillSuccessRate: PropTypes.object,
  successRateText: PropTypes.object
};

SkillSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "100px", "110px", "140px"],
    pb: ["150px", "160px", "160px", "180px", "210px"],
    bg: "#f9f9f9"
  },
  secTitleWrapper: {
    mb: ["65px", "65px", "80px", "90px", "105px"]
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
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
    mb: "0",
    textAlign: "center",
    width: "600px",
    maxWidth: "100%",
    ml: "auto",
    mr: "auto"
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: ["-15px", "-15px", "-15px", "-25px", "-25px"],
    mr: ["-15px", "-15px", "-15px", "-25px", "-25px"]
  },
  col: {
    width: [1, 1, 0.5, 0.33],
    pl: ["15px", "15px", "15px", "25px", "25px"],
    pr: ["15px", "15px", "15px", "25px", "25px"],
    mb: ["30px", "30px", "30px", "50px", "50px"]
  },
  skillTitle: {
    fontSize: ["16px", "18px", "18px", "20px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    mb: "12px"
  },
  skillDescription: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    fontWeight: "300",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0"
  }
};

export default SkillSection;
