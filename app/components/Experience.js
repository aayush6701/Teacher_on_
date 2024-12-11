// Experience.js
import React from 'react';

const Experience = () => {
  const classes = [
    {
      id: 1,
      title: "BTech Tuition - BTech 1st Year Engineering",
      time: "Sat, 6 Jul at 06:00pm IST",
      image: "/teacher1.png",
      trainer: "John Doe",
    },
    {
      id: 2,
      title: "NEET-UG Coaching Classes - Chemistry",
      time: "Sat, 6 Jul at 06:00pm IST",
      image: "/teacher2.png",
      trainer: "Jane Smith",
    },
    {
      id: 3,
      title: "Personal Trainer - by Abhishek Somani",
      time: "Sat, 6 Jul at 06:00pm IST",
      image: "/teacher3.png",
      trainer: "Abhishek Somani",
    },
    {
      id: 4,
      title: "BTech Tuition - BTech 1st Year Engineering",
      time: "Sat, 6 Jul at 06:00pm IST",
      image: "/teacher1.png",
      trainer: "John Doe",
    },
    {
      id: 5,
      title: "NEET-UG Coaching Classes - Chemistry",
      time: "Sat, 6 Jul at 06:00pm IST",
      image: "/teacher2.png",
      trainer: "Jane Smith",
    },
    {
      id: 6,
      title: "Personal Trainer - by Abhishek Somani",
      time: "Sat, 6 Jul at 06:00pm IST",
      image: "/teacher3.png",
      trainer: "Abhishek Somani",
    },
  ];

  return (
    <div className="p-8 bg-white relative">
      {/* Top Left and Right Images */}
      <img
        src="/Saly-27.png"
        alt="Saly"
        className="absolute top-3 left-3 w-196 h-136"
      />
      <img
        src="/Saly-27.png"
        alt="Saly"
        className="absolute top-3 right-3 w-196 h-136"
        style={{ transform: 'scaleX(-1)' }}
      />

      <div className="text-center">
        {/* Live Classes Tagline */}
        <p
          style={{
            color: '#1BADFF',
            fontFamily: 'Gilroy-Medium',
            fontWeight: 400,
            fontSize: '18px',
          }}
        >
          ~ Live Classes ~
        </p>

        {/* Experience Direction Classes Header */}
        <h2
          className="text-5xl font-black"
          style={{
            color: '#0F283C',
            fontFamily: 'Gilroy-Black',
            fontWeight: 400,
            display: 'inline',
            marginRight: '5px',
          }}
        >
          Experience
        </h2>
        <h2
          className="text-5xl font-black"
          style={{
            color: '#146DB2',
            fontFamily: 'Gilroy-Black',
            fontWeight: 400,
            display: 'inline',
          }}
        >
          Direction Classes
        </h2>

        {/* Subtitle Text */}
        <p
          className="mt-4"
          style={{
            color: '#667681',
            fontFamily: 'Gilroy-Medium',
            fontWeight: 400,
            fontSize: '20px',
          }}
        >
          Established with a vision to provide high-quality and accessible education, our platform is designed to cater to the diverse learning needs of students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="rounded-lg"
            style={{
              backgroundColor: 'white',
              width: '409px',
              height: '550px',
              padding: '10px',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column', // Ensures elements are stacked vertically
              justifyContent: 'space-between', // Distributes space evenly
              alignItems: 'stretch', // Makes the card items stretch to the full width of the card
            }}
          >
            <img
              src={cls.image}
              alt={cls.trainer}
              style={{
                width: '100%',
                maxWidth: '387px',
                height: '199px',
                borderRadius: '10px',
                objectFit: 'cover',
                margin: '0 auto', // Centers the image
              }}
            />

            <div className="flex flex-col justify-between h-full">
              {/* Rating Stars and Rating Count */}
              <div className="flex items-center mt-4">
                <span className="text-gray-600 " style={{color: '#778D9E', fontSize: '16px', marginRight: '5px', marginTop: '1px'}}>4.9</span>
                <span className="text-yellow-500 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>

              {/* Class Title */}
              <h3
                className="text-xl font-semibold mt-2 text-gray-800 text-left"
                style={{ lineHeight: '1.4' }} // Prevents overlap if title is long
              >
                {cls.title}
              </h3>

              {/* Time with Icon */}
              <div className="flex items-center mt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: '#1BADFF' }}
                  className="mr-2"
                >
                  <path
                    d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z"
                    fill="currentColor"
                  />
                </svg>
                <p
                  style={{
                    color: '#778D9E',
                    fontFamily: 'Gilroy-Regular',
                    fontWeight: 400,
                    fontSize: '16px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {cls.time}
                </p>
              </div>

              {/* Class Starts In Section */}
              <div className="flex items-start mt-6">
                {/* "Class starts in" Text */}
                <div
                  style={{
                    color: '#000000',
                    fontFamily: 'Gilroy-SemiBold',
                    fontWeight: 400,
                    fontSize: '19.17px',
                    lineHeight: '1.2',
                  }}
                  className="mr-4 text-left"
                >
                  <div>Class</div>
                  <div>starts in:</div>
                </div>

                {/* Vertical Divider Line */}
                <div
                  style={{
                    width: '1.2px',
                    height: '49.13px',
                    background: 'linear-gradient(#D9D9D9, #737373)',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                ></div>

                {/* Countdown Section */}
                <div className="flex space-x-4 text-gray-700">
                  <div className="text-center">
                    <span className="font-semibold text-xl">0-3</span>
                    <div
                      style={{
                        color: '#F01515',
                        fontFamily: 'Gilroy-Regular',
                        fontWeight: 400,
                        fontSize: '19.17px',
                      }}
                    >
                      Hour
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-xl">0-16</span>
                    <div
                      style={{
                        color: '#F01515',
                        fontFamily: 'Gilroy-Regular',
                        fontWeight: 400,
                        fontSize: '19.17px',
                      }}
                    >
                      Min
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-xl">0-3</span>
                    <div
                      style={{
                        color: '#F01515',
                        fontFamily: 'Gilroy-Regular',
                        fontWeight: 400,
                        fontSize: '19.17px',
                      }}
                    >
                      Sec
                    </div>
                  </div>
                </div>
              </div>

              {/* Register Button and Free Trial Text */}
              <div className="text-center mt-6">
                <button
                  className="text-white rounded-md w-full"
                  style={{
                    backgroundColor: '#1BADFF',
                    width: '387px',
                    height: '57px',
                  }}
                >
                  Register Now
                </button>
                <p
                  className="text-sm mt-2"
                  style={{
                    color: '#000000',
                    fontFamily: 'Gilroy-Regular',
                    fontWeight: 400,
                    fontSize: '14px',
                  }}
                >
                  <span style={{ color: '#136FB6' }}>FREE</span> TRIAL CLASS
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
