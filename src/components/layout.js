import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { Modal } from "@redq/reuse-modal";

import { DrawerProvider } from "../contexts/DrawerContext";
import { portfolioTheme } from "../theme/portfolio";
import { ResetCSS } from "../assets/css/style";
import {
  GlobalStyle,
  ContentWrapper
} from "../containers/Portfolio/portfolio.style";
import Navbar from "../containers/Portfolio/Navbar";
import Footer from "../containers/Portfolio/Footer";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={portfolioTheme}>
        <React.Fragment>
          <ResetCSS />
          <GlobalStyle />

          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            {children}
            <Footer />
          </ContentWrapper>
          <Modal />
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
