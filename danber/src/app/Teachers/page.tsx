import React from 'react';
import Teachers from '@/components/teachers';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
const TeachersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Teachers />
        <Footer />
    </div>
  );
};

export default TeachersPage;