"use client";
import React, { useState } from 'react';

const Premium = () => {
  const [positions, setPositions] = useState({
    topLeft: { top: '4%', left: '6%' },
    topRight: { top: '4%', right: '6%' },
    centerLeft: { left: '-4%', top: '50%' },
    centerRight: { right: '-4%', top: '50%' },
    bottomLeft: { bottom: '4%', left: '2%' },
    bottomRight: { bottom: '4%', right: '2%' }
  });

  const handlePositionChange = (position, axis, value) => {
    setPositions(prevPositions => ({
      ...prevPositions,
      [position]: {
        ...prevPositions[position],
        [axis]: value
      }
    }));
  };

  return (
    <div className="bg-[#EDF7FF] relative flex items-center justify-center w-full min-h-screen lg:min-h-[636px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center w-full h-full max-w-screen-xl mx-auto space-y-10 lg:space-y-0 lg:space-x-16 px-4 md:px-8 lg:px-0 relative">
        
        <div 
          className="relative flex justify-center lg:justify-end w-full lg:w-auto max-w-full"
          style={{
            flex: '1 1 0%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img 
            src="/OBJECTS.png" 
            alt="Clock Illustration" 
            className="w-48 h-64 md:w-72 md:h-96 lg:w-[340px] lg:h-[534.51px] object-contain"
          />
          
          {/* Additional Images Around OBJECTS.png */}
          <img 
            src="/bulb.png" 
            alt="Top Left Icon" 
            className="absolute custom-size"
            style={{
              top: positions.topLeft.top,
              left: positions.topLeft.left
            }}
          />
          
          <img 
            src="/rocket.png" 
            alt="Top Right Icon" 
            className="absolute custom-size"
            style={{
              top: positions.topRight.top,
              right: positions.topRight.right
            }}
          />

          <img 
            src="/computer.png" 
            alt="Center Left Icon" 
            className="absolute custom-size transform"
            style={{
              left: positions.centerLeft.left,
              top: positions.centerLeft.top,
              transform: 'translateY(-50%)'
            }}
          />

          <img 
            src="/pencil.png" 
            alt="Center Right Icon" 
            className="absolute custom-size transform"
            style={{
              right: positions.centerRight.right,
              top: positions.centerRight.top,
              transform: 'translateY(-50%)'
            }}
          />

          <img 
            src="/globe.png" 
            alt="Bottom Left Icon" 
            className="absolute custom-size"
            style={{
              bottom: positions.bottomLeft.bottom,
              left: positions.bottomLeft.left
            }}
          />

          <img 
            src="/circle.png" 
            alt="Bottom Right Icon" 
            className="absolute custom-size"
            style={{
              bottom: positions.bottomRight.bottom,
              right: positions.bottomRight.right
            }}
          />
        </div>

        <div 
          className="flex flex-col items-start space-y-8 lg:pl-10 w-full lg:w-auto max-w-full"
          style={{
            flex: '1 1 0%',
          }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#0F283C] leading-tight lg:leading-snug text-center lg:text-left">
            Premium <span className="text-[#146DB2]">Learning</span> <br className="hidden lg:block" /> Experience
          </h1>

          <div className="flex items-start space-x-4 p-4 rounded-lg w-full">
            <div className="bg-[#192642] p-3 rounded-lg flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
              <img src="/hearts 1.png" alt="Easily Accessible Icon" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#0F283C]">Easily Accessible</h2>
              <p className="text-sm md:text-base lg:text-lg text-[#667681]">
                Learning Will Feel Very Comfortable With <br className="hidden md:block"/>Courslab.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-lg w-full">
            <div className="bg-[#192642] p-3 rounded-lg flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
              <img src="/jigsaw 1.png" alt="Fun Learning Experience Icon" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#0F283C]">Fun Learning Experience</h2>
              <p className="text-sm md:text-base lg:text-lg text-[#667681]">
                Learning Will Feel Very Comfortable With<br className="hidden md:block"/> Courslab.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-size {
          width: 89.66px;
          height: 91.72px;
        }

        @media (max-width: 768px) {
          .custom-size {
            width: 60px;
            height: 61px;
          }
        }

        @media (max-width: 1024px) {
          .lg\\:min-h-[636px] {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Premium;
