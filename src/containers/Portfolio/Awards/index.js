import React from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Container from "../../../components/UI/Container";
import GlideCarousel from "../../../components/GlideCarousel";
import GlideSlide from "../../../components/GlideCarousel/glideSlide";

import { AWARDS } from "../../../data/Portfolio/data";

import {
  PrevButton,
  NextButton
} from "../../../containers/Portfolio/portfolio.style";
import {
  AwardSectionWrapper,
  AwardItem,
  AwardImageWrapper
} from "./awards.style";

const AwardsSection = ({
  secTitleWrapper,
  secTitle,
  secDescription,
  awardLogoStyle,
  awardNameStyle,
  awardDetailsStyle
}) => {
  //Carousel Options
  const carouselOptions = {
    type: "carousel",
    autoplay: 4000,
    perView: 4,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3
      },
      767: {
        perView: 2
      },
      500: {
        perView: 1
      }
    }
  };

  return (
    <AwardSectionWrapper id="awards_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Quand consulter ?" />
          <Text
            {...secDescription}
            content="Les champs d’application de l’ostéopathie sont très variés. L’ostéopathe a une vision du corps dans sa globalité, et est en mesure de vous aider à améliorer votre adaptabilité, à optimiser les divers fonctionnements de votre corps, à récupérer des traumas subis, à minimiser leurs séquelles potentielles, ou encore à améliorer votre posture."
          />
        </Box>

        <GlideCarousel
          carouselSelector="awards-carousel"
          options={carouselOptions}
          prevButton={
            <PrevButton>
              <span />
            </PrevButton>
          }
          nextButton={
            <NextButton>
              <span />
            </NextButton>
          }
        >
          <>
            {AWARDS.map((award, index) => (
              <GlideSlide key={`award-item-${index}`}>
                <AwardItem>
                  <AwardImageWrapper>
                    <Image
                      src={award.awardLogo}
                      alt={`award-logo-${index}`}
                      {...awardLogoStyle}
                    />
                  </AwardImageWrapper>
                  <Heading content={award.awardName} {...awardNameStyle} />
                  <Text content={award.awardDetails} {...awardDetailsStyle} />
                </AwardItem>
              </GlideSlide>
            ))}
          </>
        </GlideCarousel>
      </Container>
    </AwardSectionWrapper>
  );
};

AwardsSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  awardLogoStyle: PropTypes.object,
  awardNameStyle: PropTypes.object,
  awardDetailsStyle: PropTypes.object
};

AwardsSection.defaultProps = {
  secTitleWrapper: {
    width: ["100%", "100%", "60%", "50%", "50%"],
    mb: "90px"
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"]
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0"
  },
  awardLogoStyle: {
    ml: "auto",
    mr: "auto",
    mb: "25px"
  },
  awardNameStyle: {
    fontSize: ["16px", "16px", "18px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.35",
    textAlign: "center",
    mb: "17px"
  },
  awardDetailsStyle: {
    fontSize: ["15px", "15px", "15px", "16px"],
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    mb: "0",
    fontWeight: "300"
  }
};

export default AwardsSection;
