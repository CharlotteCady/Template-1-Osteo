import styled from 'styled-components';
import {
  color,
  width,
  height,
  display,
  space,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  position,
  overflow,
  fontSize,
  textAlign,
} from 'styled-system';

// FeatureBlock wrapper style
const FeatureBlockWrapper = styled.div`
  &.icon_left {
    display: flex;
    align-items: flex-start;
  }
  &.icon_right {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    .content__wrapper {
      text-align: right;
    }
  }

  /* styled system prop support */
  ${display}
  ${width}
  ${height}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
`;

// Icon wrapper style
const IconWrapper = styled.div`
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
  ${fontSize}
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}
  ${textAlign}
`;

// Button wrapper style
const ButtonWrapper = styled.div`
  ${display}
  ${space}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}
`;

export { IconWrapper, ContentWrapper, ButtonWrapper };
export default FeatureBlockWrapper;
