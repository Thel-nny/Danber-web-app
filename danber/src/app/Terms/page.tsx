import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Terms from '@/components/terms';    
const DanberWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     <Navbar/>
     <Terms />
     <Footer />
    </div>
  );
};

export default DanberWebsite;
