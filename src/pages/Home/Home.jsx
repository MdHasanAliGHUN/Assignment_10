import React from 'react';
import HeroSection from './HeroSection';
import TootsSection from './TootsSection';
import CompanyLogos from './CompanyLogos';
import Services from './Services';
import TestMonials from './TestMonials';
import Blogs from './Blogs';
import TeamSection from './TeamSection';
import Pricing from './Pricing';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <>
        <HeroSection/>
        <TootsSection/>
        <CompanyLogos/>
        <Services/>
        <TestMonials/>
        <Blogs/>
        <TeamSection/>
        <Pricing/>
        <NewsLetter/>
        </>
    );
};

export default Home;