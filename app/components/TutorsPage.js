"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

// Header Component
const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#136FB6] to-[#136FB6] h-[236px] relative">
      {/* Two images on the top left */}
      <div className="absolute top-4 flex flex-col mx-0 space-y-2">
        <img
          src="/Ellipse 2.png" // Replace with the path to your first image
          alt="First Image"
          className="w-[130px] h-[125px] object-inherit"
        />
        <img
          src="/Ellipse 1.png" // Replace with the path to your second image
          alt="Second Image"
          className="w-[151px] h-[143px] object-inherit"
        />
      </div>

      {/* Main text content */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold tracking-wider mb-4">TEACHERS LIST</h1>
        <div className="w-full max-w-[800px] flex flex-col items-center">
          <p className="text-white text-xl">Get the right tutor you deserve</p>
        </div>
      </div>

      {/* Image on the right side */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
        <img
          src="/Saly-31.png"
          alt="Teacher illustration"
          className="w-[200px] h-[200px] object-contain"
        />
      </div>
    </div>
  );
};

const tutors = [
  // Example tutor data (Add more tutors if needed)
  {
        name: "Omar Khaled",
        subjects: ["Math (IGCSE)", "Math IGCE O/L"],
        qualification: "Mechatronics Engineer",
        country: "Egypt",
        experience: "1 Year Exp",
        rate: "7/day",
        description: (
          <p>
            "I am a Mechatronics Engineer from Cairo University who graduated with a grade equivalent to Very Good. <br/><br/>My interest in teaching has been developing since G10 and started by friends of my age until teaching G10 students privately."
          </p>
        ),
      },
      {
        name: "Mohammed Salman P",
        subjects: ["Quran for English Speakers"],
        qualification: "Teacher",
        country: "India",
        experience: "2 Year Exp",
        rate: "2-4/hour",
        description: (
          <p>
            "I am Mohammed Salman from Kerala, India. I am graduated in History. Now doing Pg in History. I have more than 10 years experience in Islamic theology. I studied in big mosque in Panannai named Makhdoomiyya dA wA college."
            <br />
            <br />
          </p>
        ),
      },
      {
        name: "Bishal Bhattarai",
        subjects: ["English"],
        qualification: "Maths tutor",
        country: "Egypt",
        experience: "1 Year Exp",
        rate: "7/day",
        description: (
          <p>
            "I have been working as a full time faculty for English in a reputed institution and now I am looking forward to work as an online tutor for reaching out to those who need my guidance and showing undue fortitude."
            <br />
            <br />
            <br />
          </p>
        ),
      },
      {
        name: "Omar Khaled",
        subjects: ["Physics"],
        qualification: "Physics Teacher",
        country: "Egypt",
        experience: "3 Year Exp",
        rate: "5/hour",
        description: "Physics teacher with a passion for helping students understand complex concepts in a simple way.",
      },
      {
        name: "Mohammed Salman P",
        subjects: ["Chemistry"],
        qualification: "Chemist",
        country: "USA",
        experience: "5 Year Exp",
        rate: "10/hour",
        description: "Experienced Chemistry tutor specializing in organic and inorganic chemistry.",
      },
      {
        name: "Bishal Bhattarai",
        subjects: ["Biology"],
        qualification: "Biologist",
        country: "Pakistan",
        experience: "2 Year Exp",
        rate: "8/hour",
        description: "Biologist with experience in teaching students at high school and college level.",
      },
      {
        name: "Omar Khaled",
        subjects: ["Computer Science"],
        qualification: "Software Engineer",
        country: "South Korea",
        experience: "4 Year Exp",
        rate: "12/hour",
        description: "Experienced in computer science fundamentals, programming, and web development.",
      },
      {
        name: "Mohammed Salman P",
        subjects: ["Spanish Language"],
        qualification: "Language Teacher",
        country: "Spain",
        experience: "6 Year Exp",
        rate: "15/hour",
        description: "Native Spanish speaker with extensive experience in teaching Spanish as a foreign language.",
      },
      {
        name: "Bishal Bhattarai",
        subjects: ["Chinese Language"],
        qualification: "Chinese Language Teacher",
        country: "China",
        experience: "8 Year Exp",
        rate: "20/hour",
        description: "Chinese language teacher with a deep understanding of teaching methodologies and cultural insights.",
      },
      // Page 2: Different names
      {
        name: "Ali Ahmed",
        subjects: ["Math (IGCSE)", "Math IGCE O/L"],
        qualification: "Mechatronics Engineer",
        country: "Egypt",
        experience: "1 Year Exp",
        rate: "7/day",
        description: "I am a Mechatronics Engineer from Cairo University who graduated with a grade equivalent to Very Good. My interest in teaching has been developing since G10 and started by friends of my age until teaching G10 students privately.",
      },
      {
        name: "Fatima Khan",
        subjects: ["Quran for English Speakers"],
        qualification: "Teacher",
        country: "India",
        experience: "2 Year Exp",
        rate: "2-4/hour",
        description: "I am Mohammed Salman from Kerala, India. I am graduated in History. Now doing Pg in History. I have more than 10 years experience in Islamic theology. I studied in big mosque in Panannai named Makhdoomiyya dA wA college.",
      },
      {
        name: "Rajiv Patel",
        subjects: ["English"],
        qualification: "Maths tutor",
        country: "Egypt",
        experience: "1 Year Exp",
        rate: "7/day",
        description: "I have been working as a full time faculty for English in a reputed institution and now I am looking forward to work as an online tutor for reaching out to those who need my guidance and showing undue fortitude.",
      },
      {
        name: "Lina Chen",
        subjects: ["Physics"],
        qualification: "Physics Teacher",
        country: "Egypt",
        experience: "3 Year Exp",
        rate: "5/hour",
        description: "Physics teacher with a passion for helping students understand complex concepts in a simple way.",
      },
      {
        name: "Carlos Rivera",
        subjects: ["Chemistry"],
        qualification: "Chemist",
        country: "USA",
        experience: "5 Year Exp",
        rate: "10/hour",
        description: "Experienced Chemistry tutor specializing in organic and inorganic chemistry.",
      },
      {
        name: "Zara Ali",
        subjects: ["Biology"],
        qualification: "Biologist",
        country: "Pakistan",
        experience: "2 Year Exp",
        rate: "8/hour",
        description: "Biologist with experience in teaching students at high school and college level.",
      },
      {
        name: "Kenji Tanaka",
        subjects: ["Computer Science"],
        qualification: "Software Engineer",
        country: "South Korea",
        experience: "4 Year Exp",
        rate: "12/hour",
        description: "Experienced in computer science fundamentals, programming, and web development.",
      },
      {
        name: "Isabella Garcia",
        subjects: ["Spanish Language"],
        qualification: "Language Teacher",
        country: "Spain",
        experience: "6 Year Exp",
        rate: "15/hour",
        description: "Native Spanish speaker with extensive experience in teaching Spanish as a foreign language.",
      },
      {
        name: "Wei Zhang",
        subjects: ["Chinese Language"],
        qualification: "Chinese Language Teacher",
        country: "China",
        experience: "8 Year Exp",
        rate: "20/hour",
        description: "Chinese language teacher with a deep understanding of teaching methodologies and cultural insights.",
      },
  // Add more tutors as necessary
];

const TutorCard = ({ tutor }) => (
  <div className="bg-[#EFF7FC] rounded-lg p-4 shadow-sm border border-gray-200">
    <div className="flex items-start justify-between mb-2">
      <div>
        <h3 className="font-medium text-base text-[#01354B] font-bold">
          {tutor.name} <span className="text-[#1BADFF]">({tutor.qualification})</span>
        </h3>
        <div className="flex gap-2 mt-1">
          {tutor.subjects.map((subject, index) => (
            <span
              key={index}
              className="border bg-blue-50 text-xs px-2 py-1 rounded-md text-[#01354B]"
              style={{ border: '1px solid #01354B', borderRadius: '2px' }}
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm text-[#667681] mb-4">{tutor.description}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="font-medium text-[#136FB6]">$ {tutor.rate}</span>
        {/* Replace icon with image */}
        <img src="/Group 518.png" alt="Location" className="w-[17px] h-[20px]" />
        <span className="text-[#136FB6]">{tutor.country}</span>
        <img src="/bag.png" alt="Experience" className="w-[21px] h-[21px]" />
        <span className="text-[#136FB6]">{tutor.experience}</span>
      </div>
    </div>
    <button
      className="mt-4 w-full bg-white border text-[#136FB6] py-2 rounded-[4px] text-sm"
      style={{ border: '2px solid #136FB6' }}
    >
      Contact Me
    </button>
  </div>
);

const TutorsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 9;
  const totalPages = Math.ceil(tutors.length / tutorsPerPage);

  const indexOfLastTutor = currentPage * tutorsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
  const currentTutors = tutors.slice(indexOfFirstTutor, indexOfLastTutor);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="p-8 max-w-7xl mx-auto">
        {tutors.length === 0 ? (
          <div className="text-center text-xl text-gray-600">No tutors available at the moment.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentTutors.map((tutor, index) => (
                <TutorCard key={index} tutor={tutor} />
              ))}
            </div>
            <div className="flex justify-center mt-8 gap-1">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="px-3 py-1 border rounded-md"
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 border rounded-md ${
                    index + 1 === currentPage ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="px-3 py-1 border rounded-md"
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TutorsPage;
