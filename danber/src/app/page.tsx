import React from 'react';
import Navbar from '@/components/ui/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import WhyChooseUs from '@/components/whyus';

const DanberWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default DanberWebsite;
