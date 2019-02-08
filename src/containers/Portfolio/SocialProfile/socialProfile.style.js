import styled from "styled-components";

export const SocialProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SocialProfileItem = styled.div`
  margin-right: 18px;
  a {
    color: #fff;
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${props => props.theme.colors.primaryHover};
    }
  }
`;
