import React from 'react';
import Navbar from '@/components/ui/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Contact from '@/components/contact';
import WhyChooseUs from '@/components/whyus';
import Footer from '@/components/ui/footer';
const DanberWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default DanberWebsite;
