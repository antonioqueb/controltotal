"use client";

import Image from "next/image";
import { AspectRatio } from "@/app/shared-ui/aspect-ratio";

const ImageHero: React.FC = () => {
  return (
    <AspectRatio ratio={24 / 4}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src="/equipo.jpg"
          alt="Logo"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="rounded-r-lg"
        />
      </div>
    </AspectRatio>
  );
};

export default ImageHero;
