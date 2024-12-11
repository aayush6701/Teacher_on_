'use client'
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FeaturedProfiles = () => {
  const profiles = [
    { img: 'Rectangle 160.png', name: 'Hrithik C.', title: 'Class 11 Tuition', reviews: 799 },
    { img: 'Rectangle 161.png', name: 'Guru Charan T', title: 'Python Training classes', reviews: 69 },
    { img: 'Rectangle 162.png', name: 'Monjit Gogoi', title: 'Gym', reviews: 4 },
    { img: 'Rectangle 163.png', name: 'Amit Saxena', title: 'Forex Trading', reviews: 11 },
  ];

  const scrollContainerRef = useRef(null);

  // Function to handle infinite scroll logic by cycling the profiles
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const firstProfile = container.firstChild;
    if (container.scrollLeft >= firstProfile.offsetWidth) {
      container.scrollLeft -= firstProfile.offsetWidth;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll();
    }, 10); // Keep the scroll in motion by resetting scroll position

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#146DB2', padding: '3rem 0', position: 'relative' }}>
      {/* Position Style-27 images */}
      <img
        src="/Saly-27.png"
        alt="Top Left"
        style={{
          position: 'absolute',
          top: '2rem',
          left: '3rem',
          width: '191px',
          height: '136px', // Adjust the size as needed
        }}
      />
      <img
        src="/Saly-27.png"
        alt="Top Right"
        style={{
          position: 'absolute',
          top: '2rem',
          right: '3rem',
          width: '191px',
          height: '136px', // Adjust the size as needed
        }}
      />

      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'Gilroy-Black',
            fontSize: '50px',
            fontWeight: 400,
            lineHeight: '63.1px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Featured Profiles
        </h2>
        <p
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '30px',
            color: 'white',
            marginTop: '0.5rem',
          }}
        >
          Established with a vision to provide high-quality and accessible education, our platform is designed to cater to the diverse learning needs of students.
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          gap: '1rem',
          marginTop: '2.5rem',
          paddingBottom: '1rem',
          width: '100%',
          scrollBehavior: 'smooth',
        }}
        className="scroll-container"
      >
        {/* Profile Cards with Animation */}
        {profiles.concat(profiles).map((profile, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '1rem',
              width: '16rem',
              minWidth: '16rem',
              textAlign: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img src={`/${profile.img}`} alt={`Profile ${index + 1}`} style={{ borderRadius: '0.5rem', width: '100%' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginTop: '1rem' ,color: '#0F283C', textAlign: 'left'}}>{profile.name}</h3>
            <p style={{color: '#667681' , textAlign: 'left'}}>{profile.title}</p>
            <p style={{ color: '#146DB2', textAlign: 'left' }}><span style={{ color: '#FFAB09' }}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </span> {profile.reviews} Reviews </p>
          </div>
        ))}
      </div>

      <style>
        {`
          /* Hide scrollbar for all major browsers */
          .scroll-container {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
          }
          .scroll-container::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedProfiles;
