import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutSection";
import BgImageDiv from "../components/BgImageDiv";
import KeyFeatures from "../components/KeyFeatures";
import GlimpseOfExcellence from "../components/GlimpseOfExcellence";
import Programs from "../components/Programs";
import TextMarquee from "../components/TextMarquee";
import Launching from "../components/Launching";
import TestimonialSection from "../components/TestimonialSection";
import GradientSection from "../components/GradientSection";

const Hero = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <BgImageDiv />
      <KeyFeatures />
      <GlimpseOfExcellence />
      <Programs />
      <TextMarquee />
      <Launching />
      <TestimonialSection />
      <GradientSection />
    </>
  );
};

export default Hero;
