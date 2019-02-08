/** this is our Base Component every components must be Extend it */
import {
  space,
  borders,
  borderColor,
  background,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  display,
  fontSize,
  flex,
  order,
  alignSelf,
  color,
  textAlign,
  compose
} from 'styled-system';

export const themed = key => props => props.theme[key];

export const base = compose(
  () => ({ boxSizing: 'border-box' }),
  space,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  borders,
  borderColor,
  background,
  display,
  textAlign
);

base.propTypes = {
  ...display.propTypes,
  ...space.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...background.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes
};
