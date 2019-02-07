import styled from "styled-components";

const BannerWrapper = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: center;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const ImageBanner = styled.div`
  width: 55%;
  height: 100vh;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position: 60%;
  position: absolute;
  top: 0;
  right: 0;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(000, 000, 000, 0.1);
  }
  @media (max-width: 991px) {
    width: 45%;
    height: 100%;
    background-position: 88%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export default BannerWrapper;
