// components/LearningBanner.js

import React from 'react';

export default function LearningBanner() {
  return (
    <div className="bg-white py-1 pb-[8rem] relative font-gilroy"> {/* Apply the Gilroy font here */}
      {/* Image positioned at the top-left */}
      <img
        src="/lamp.png" // Replace with the correct image path
        alt="Overlay Image"
        className="z-10"
        style={{
          width: '77px',
          height: '71px',
        }}
      />

      {/* LearningBanner section with #EEF8FF background */}
      <div
        className="py-16 px-4 md:px-16 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0"
        style={{
          backgroundColor: '#EEF8FF',
          position: 'relative',
          top: '-35px', // This creates the overlap effect by moving the section upwards
        }}
      >
        {/* Left Section */}
        <div
          className="text-center md:text-left max-w-xs md:max-w-sm"
          style={{ maxWidth: '400px', color: '#0F283C' }}
        >
          <h2
            className="font-bold"
            style={{ fontSize: '50px', lineHeight: '1.2', wordWrap: 'break-word' }}
          >
            Online <span style={{ color: '#146DB2' }}>Learning</span> Designed For{' '}
            <span style={{ color: '#146DB2' }}>Real Life!</span>
          </h2>
        </div>

        {/* Divider (Only visible on larger screens) */}
        <div
          className="hidden md:block"
          style={{
            width: '2px',
            minHeight: '200px',
            height: '80%',
            background: 'linear-gradient(to bottom, #D9D9D9, #6D8A9E)',
          }}
        ></div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-start md:space-x-12 space-y-4 md:space-y-0">
          {/* User-friendly platform */}
          <div className="flex flex-col items-start space-y-4">
            {/* Image above Heading */}
            <div className="inline-block ">
              <img src="/Group 17.png" alt="User-friendly platform" className="h-[61px] w-[56px]" />
            </div>

            {/* Heading */}
            <h3 className="font-semibold" style={{ color: '#0F283C' }}>
              User-friendly platform to learn
            </h3>

            {/* Paragraph */}
            <p className="text-gray-500 text-sm max-w-xs">
              Packed with modern technology, classroom learning which used to be done conventionally.
            </p>
          </div>

          {/* Packed with modern technology */}
          <div className="flex flex-col items-start space-y-4">
            {/* Image above Heading */}
            <div className="inline-block ">
              <img src="/Group 17.png" alt="Modern Technology" className="h-[61px] w-[56px]" />
            </div>

            {/* Heading */}
            <h3 className="font-semibold" style={{ color: '#0F283C' }}>
              Packed with modern Technology
            </h3>

            {/* Paragraph */}
            <p className="text-gray-500 text-sm max-w-xs">
              Learning theory, computer-based training, online learning, m-learning, where mobile technology is used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
