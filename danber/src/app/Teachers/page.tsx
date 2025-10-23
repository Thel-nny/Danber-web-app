import React from 'react';
import Teachers from '@/components/teachers';
import Navbar from '@/components/ui/navbar';
const TeachersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Teachers />
    </div>
  );
};

export default TeachersPage;