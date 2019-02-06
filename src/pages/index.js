import React from 'react';
// import { Link } from "gatsby";

import Layout from '../components/layout';
// import Image from "../components/image";
import SEO from '../components/seo';
import BannerSection from '../containers/Portfolio/Banner';
import AwardsSection from '../containers/Portfolio/Awards';
import PortfolioShowcase from '../containers/Portfolio/PortfolioShowcase';
import ProcessSection from '../containers/Portfolio/Process';
import SkillSection from '../containers/Portfolio/Skill';
import CallToAction from '../containers/Portfolio/CallToAction';
import TestimonialSection from '../containers/Portfolio/Testimonial';
import ClientsSection from '../containers/Portfolio/Clients';
import ContactSection from '../containers/Portfolio/Contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BannerSection />
    <PortfolioShowcase />
    <AwardsSection />
    <ProcessSection />
    <SkillSection />
    <CallToAction />
    <TestimonialSection />
    <ClientsSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
