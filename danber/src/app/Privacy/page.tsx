import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PrivacyPolicy from '@/components/privacy';
const DanberWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default DanberWebsite;
