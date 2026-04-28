import React from "react";
import Navbar from "@/components/ui/navbar";
import Gallery from "@/components/gallery";
import MissionVision from "@/components/mission-vision";
import Footer from "@/components/ui/footer";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Gallery />
        <MissionVision />
        <Footer />
    </div>
  );
};

export default AboutUs;
