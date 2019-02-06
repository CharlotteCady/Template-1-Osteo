import React from 'react';
import ContainerWrapper from './style';

const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width,
}) => {
  return (
    <ContainerWrapper
      className={className}
      fullWidth={fullWidth}
      noGutter={noGutter}
      width={width}
      mobileGutter={mobileGutter}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
