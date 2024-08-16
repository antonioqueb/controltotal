'use client';

import Hero from '@/app/shared-ui/Hero';
import Servicios from '@/app/shared-ui/Servicios';
import Faq from '@/app/homepage/FAQSection';
import Baner from '@/app/shared-ui/Banner';
import ContactSection from '@/app/shared-ui/ContactSection';
import Footer from '@/app/shared-ui/Footer';
import MultiCards from '@/app/shared-ui/MultiCards';
import Testimonials from '@/app/shared-ui/Testimonials';
import LastProjects from '@/app/shared-ui/last-projects';
// import ContentCardsBlog from '@/app/shared-ui/component/content-cards-blog';
import Navbar from "@/app/shared-ui/Nabvar";
import NabvarUsers from "@/app/shared-ui/NabvarUsers";
import { useSession } from "next-auth/react";
import React from "react";

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {session ? <NabvarUsers /> : <Navbar />}
      <Baner />
      <MultiCards />
      <Servicios />
      <Testimonials />
      <Hero />
      <LastProjects />
      <ContactSection />
      {/* <ContentCardsBlog /> */}
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
