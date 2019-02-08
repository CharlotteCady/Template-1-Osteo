import React from "react";
import { Icon } from "react-icons-kit";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Container from "../../../components/UI/Container";
import GlideCarousel from "../../../components/GlideCarousel";
import GlideSlide from "../../../components/GlideCarousel/glideSlide";

import {
  PrevButton,
  NextButton
} from "../../../containers/Portfolio/portfolio.style";
import {
  TestimonialWrapper,
  TestimonialItem,
  TestimonialHead
} from "./testimonial.style";
import { TESTIMONIAL } from "../../../data/Portfolio/data";
import { starFull } from "react-icons-kit/icomoon/starFull";

const TestimonialSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  reviewStyle,
  nameStyle
}) => {
  //Carousel Options
  const carouselOptions = {
    type: "carousel",
    autoplay: 6000,
    perView: 3,
    gap: 28,
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
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Ce que disent mes patients" />
        </Box>
        <TestimonialWrapper>
          <GlideCarousel
            carouselSelector="testimonial-carousel"
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
              {TESTIMONIAL.map((item, index) => (
                <GlideSlide key={`testimonial-item-${index}`}>
                  <TestimonialItem>
                    <TestimonialHead>
                      <Icon
                        icon={item.icon || starFull}
                        size={item.iconSize || 12}
                      />
                      <Icon
                        icon={item.icon || starFull}
                        size={item.iconSize || 12}
                      />
                      <Icon
                        icon={item.icon || starFull}
                        size={item.iconSize || 12}
                      />
                    </TestimonialHead>
                    <Text {...reviewStyle} content={item.review} />
                    <Heading as="h3" content={item.name} {...nameStyle} />
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </TestimonialWrapper>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  reviewStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "100px", "110px", "150px"],
    pb: "50px"
  },
  secTitleWrapper: {
    mb: ["90px", "90px", "50px", "50px", "50px"]
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"]
  },
  reviewStyle: {
    fontSize: "16px",
    fontWeight: 300,
    color: "#43414e",
    lineHeight: "1.5",
    mb: "30px"
  },
  nameStyle: {
    fontSize: "16px",
    color: "#302b4e",
    fontWeight: "600",
    mb: "7px"
  }
};

export default TestimonialSection;
