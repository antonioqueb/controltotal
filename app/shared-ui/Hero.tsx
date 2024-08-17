import * as React from "react";
import FormHero from "./FormHero";
import ImageHero from "./ImageHero";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen">
      
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center xl:justify-between xl:mx-8 ">
        <FormHero className="mx-4 md:mx-0" />
      </div>
      <ImageHero />
    </section>
  );
};

export default Hero;
