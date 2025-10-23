import React from 'react';
import Image from 'next/image';

const TeacherImageWithBackground = () => {
  return (
    <div className="relative">
      {/* Geometric background shapes */}
      <div className="absolute inset-0">
        <Image 
          src="/rectangles.svg" 
          alt="Teacher" 
          fill
          style={{ objectFit: 'cover' }}
       />
      </div>
      
      {/* Teacher image */}
      <div className="relative z-10 flex justify-center">
        <div className="w-90 h-106 relative">
          <Image 
            src="/teacher.svg" 
            alt="Teacher" 
            fill
            style={{ objectFit: 'cover' }}
             />
        </div>
      </div>
    </div>
  );
};

export default TeacherImageWithBackground;
