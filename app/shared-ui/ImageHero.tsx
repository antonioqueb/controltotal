"use client";
import Image from "next/image";

const ImageHero: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src="/equipo.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        quality={100}
        priority
      />
    </div>
  );
};

export default ImageHero;
