// import React from "react";


// const ProfileDescription = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       <div className="w-full bg-gradient-to-r from-[#136FB6] to-[#136FB6] h-auto md:h-[236px] relative">
//         <div className="flex flex-col items-center justify-center h-full">
//           <h1 className="text-white text-2xl md:text-4xl font-bold tracking-wider mb-4">EDIT PROFILE</h1>
//           <div className="w-full max-w-[800px] flex flex-col items-center">
//             <p className="text-white text-sm md:text-md">Get the right job you deserve</p>
//           </div>
//         </div>

//         {/* Add the image to the right side */}
//         <div className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
//           <img 
//             src="./Saly-31.png"
//             alt="Teacher illustration"
//             className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] object-contain"
//           />
//         </div>
//         <div className="absolute left-2 top-1/3 transform -translate-y-1/2 hidden md:block">
//           <img 
//             src="./Ellipse 2.png"
//             alt="Teacher illustration"
//             className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-contain"
//           />
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <div className="relative max-w-6xl mx-auto shadow-lg -mt-8">
//         <div className="bg-[#0F283C] py-2 px-4 rounded-t-lg" style={{ padding: 25 }}>
//           <div className="flex flex-wrap justify-between">
//             <button className="text-gray-400">Personal Info</button>
//             <button className="text-gray-400">Education</button>
//             <button className="text-gray-400">Subjects</button>
//             <button className="text-gray-400">Experience</button>
//             <button className="text-gray-400">Teaching Detail</button>
//             <button className="text-white border-b-2 border-white">Profile Description</button>
//             <button className="text-gray-400">Courses</button>
//           </div>
//         </div>

//         {/* Profile Description Content */}
//         <div className="p-4 md:p-8 bg-[#F2F6FB] flex-1">
//           <div className="mb-6">
//             <h2 className="text-lg font-medium mb-2">Profile description</h2>
//             <p className="text-sm text-[#4E5865] mb-2">This is the most important section for you. *</p>
//             <p className="text-sm text-[#146FB6] mb-2">80% of students will decide if they want to hire you just based on what you write here.</p>
//             <p className="text-sm text-[#4E5865] italic mb-4">Make sure it's good, relevant, in detail, and without mistakes.</p>
//             <p className="text-sm text-[#4E5865] italic mb-4">Do not copy-paste your resume here.</p>
//             <div className="inline-block bg-[#136EB4] py-1 px-3 rounded mb-4">
//               <p className="text-sm text-white">Do not share any contact details.</p>
//             </div>
//           </div>

//           {/* Text Editor Area */}
//           <div className="border border-[#0F283C] rounded-lg p-4 md:p-8 bg-[#F2F6FB] mb-6 text-[#0F283C]">
//             <div className="space-y-2">
//               <p>Hello,</p><br />
//               <p>Being a CAIE IGCSE IBDP AS & A Level Certified Educator I believe in making Studies easy and fun learning.</p><br />
//               <p>I prepare with IGCSE AS Level & IBDP application based exam pattern questions, teaching methodology and correction guidelines as per board norms.</p><br />
//               <p>Many students under my guidance have bagged A* at 100/100 in board exams, many world toppers and Rankers throughout and have got selected in Universities worldwide.</p><br />
//               <p>We customize your classes as per your pace of learning, if you need handholding, building fundamentals or more of test series or exam pattern papers we design the sessions accordingly.</p><br />
//               <p>Apart from explanation of concepts it's also important to analyse how a particular topic is asked in the board exams. After explanation of topic we discuss exam pattern questions and solutions</p><br />
//               <p>I have a experience of teaching IGCSE and ICSE IBDP AS&A levels from past 15+ years with proven track of phenomenal results every year.</p><br />
//               <p>You can ask for a demo class, see the difference and decide to enroll.</p><br />
//               <span className="font-bold">
//                 <p>IGCSE Chemistry, Maths & Physics, Biology</p>
//                 <p>IBDP Math HL SL, ASALevel Maths</p><br />
//                 <p>ICSE Chemistry physics biology maths.</p>
//               </span>
//             </div>
//           </div>

//           {/* Power Profile Section */}
//           <div className="inline-block bg-[#18A61E] py-2 px-10 rounded mb-4">
//             <p className="text-white text-sm">Power Profile: 95.5%</p>
//           </div>

//           {/* Checkbox */}
//           <div className="mb-6">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               <span className="text-sm text-[#4E5865]">I have not shared any contact details (Email, Phone, Skype, Website etc)</span>
//             </label>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-start gap-2">
//             <button className="px-4 md:px-6 py-2 border border-[#0F283C] text-[#0F283C] w-[179px] h-[52px] rounded text-sm">&lt;&lt; Previous</button>
//             <button className="px-4 md:px-6 py-2 bg-[#0B1F36] text-white rounded w-[179px] h-[52px] text-sm">Submit &gt;&gt;</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDescription;


'use client';
// // components/TeachingDetailForm.js
import React, { useState } from "react";
import Image from "next/image";

const ProfileDescription = () => {
  // States to track the selected radio buttons
  const [travel, setTravel] = useState(null);
  const [onlineTeaching, setOnlineTeaching] = useState(null);
  const [digitalPen, setDigitalPen] = useState(null);
  const [homeworkHelp, setHomeworkHelp] = useState(null);
  const [fullTimeTeacher, setFullTimeTeacher] = useState(null);

  // Function to handle the radio button selection
  const handleTravelChange = (value) => {
    setTravel(value);
  };

  const handleOnlineTeachingChange = (value) => {
    setOnlineTeaching(value);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Personal Info", iconSrc: "/right.png" },
    { label: "Education", iconSrc: "/right.png" },
    { label: "Subjects", iconSrc: "/right.png" },
    { label: "Experience", iconSrc: "/right.png" },
    { label: "Teaching Detail", iconSrc: "/right.png"},
    { label: "Profile Description" , active: true},
    { label: "Courses" },
  ];

  return (
    <div className="bg-white min-h-screen  flex flex-col items-center">
      <div
        className="relative bg-[#136FB6] text-white w-screen text-center py-4 flex flex-col items-center justify-center"
        style={{ height: 368 }}
      >
        {/* Top left and top right images */}
        <Image src="/Group 569.png" alt="Group 569" width={368} height={368} className="absolute top-0 left-0 z-0" />
        <Image src="/Saly-31.png" alt="Saly 31" width={151} height={151} className="absolute top-0 right-0"  />

        {/* Centered "Edit Profile" heading */}
        <h1 className="font-gilroy font-bold text-[60px] leading-none text-center z-10">EDIT PROFILE</h1>
        <p className="font-gilroy text-[20px] text-center mt-2 leading-[30px] z-10">Get the right job you deserve</p>
      </div>

{/* Navigation Bar overlapping the "Edit Profile" section */}
<div
      className="relative bg-[#0F283C] text-white w-full max-w-[1281px] min-h-[117px] h-auto mt-[-2rem] rounded-tl-lg rounded-tr-lg flex justify-between items-center py-4 md:py-6 px-4"
      style={{ top: "-10%" }}
    >
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex gap-4 md:gap-8 items-center">
        {menuItems.map((item, index) => (
          <a
            href="#"
            key={index}
            className="relative flex flex-col items-center group"
          >
            <span
              className={`text-sm md:text-base font-gilroy ${
                ["Teaching Detail", "Profile Description", "Courses"].includes(
                  item.label
                )
                  ? "whitespace-nowrap "
                  : ""
              }
              ${item.label === "Courses" ? "text-[#A6B6C2] pb-3" : ""}
              ${item.label === "Profile Description" ? "te pb-3" : ""}
              `}
              
            >
              
              {item.label}
            </span>
            <span
              className={`block h-[2px] mt-1 w-full transition-transform duration-300 ease-in-out ${
                item.active ? "bg-white" : "bg-transparent"
              } group-hover:bg-white group-hover:scale-100 ${
                item.active ? "scale-100" : "scale-0"
              }`}
            ></span>
            {item.iconSrc && (
              <Image
                src={item.iconSrc}
                alt={item.label}
                width={15}
                height={15}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="sm:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F283C] text-white sm:hidden">
          <nav className="flex flex-col items-start p-4 space-y-4">
            {menuItems.map((item, index) => (
              <a
                href="#"
                key={index}
                className="w-full text-left px-2 py-1 border-b border-gray-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>


     
      {/* Profile Description Content */}
      <div className="p-4 md:p-8 bg-[#F2F6FB] max-w-[1281px] flex-1">
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Profile description</h2>
            <p className="text-sm text-[#4E5865] mb-2">This is the most important section for you. *</p>
            <p className="text-sm text-[#146FB6] mb-2">80% of students will decide if they want to hire you just based on what you write here.</p>
            <p className="text-sm text-[#4E5865] italic mb-4">Make sure it's good, relevant, in detail, and without mistakes.</p>
            <p className="text-sm text-[#4E5865] italic mb-4">Do not copy-paste your resume here.</p>
            <div className="inline-block bg-[#136EB4] py-1 px-3 rounded mb-4">
              <p className="text-sm text-white">Do not share any contact details.</p>
            </div>
          </div>

          {/* Text Editor Area */}
          <div className="border border-[#0F283C] rounded-lg p-4 md:p-8 bg-[#F2F6FB] mb-6 text-[#0F283C]">
            <div className="space-y-2">
              <p>Hello,</p><br />
              <p>Being a CAIE IGCSE IBDP AS & A Level Certified Educator I believe in making Studies easy and fun learning.</p><br />
              <p>I prepare with IGCSE AS Level & IBDP application based exam pattern questions, teaching methodology and correction guidelines as per board norms.</p><br />
              <p>Many students under my guidance have bagged A* at 100/100 in board exams, many world toppers and Rankers throughout and have got selected in Universities worldwide.</p><br />
              <p>We customize your classes as per your pace of learning, if you need handholding, building fundamentals or more of test series or exam pattern papers we design the sessions accordingly.</p><br />
              <p>Apart from explanation of concepts it's also important to analyse how a particular topic is asked in the board exams. After explanation of topic we discuss exam pattern questions and solutions</p><br />
              <p>I have a experience of teaching IGCSE and ICSE IBDP AS&A levels from past 15+ years with proven track of phenomenal results every year.</p><br />
              <p>You can ask for a demo class, see the difference and decide to enroll.</p><br />
              <span className="font-bold">
                <p>IGCSE Chemistry, Maths & Physics, Biology</p>
                <p>IBDP Math HL SL, ASALevel Maths</p><br />
                <p>ICSE Chemistry physics biology maths.</p>
              </span>
            </div>
          </div>

          {/* Power Profile Section */}
          <div className="inline-block bg-[#18A61E] py-2 px-10 rounded mb-4">
            <p className="text-white text-sm">Power Profile: 95.5%</p>
          </div>

          {/* Checkbox */}
          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-[#4E5865]">I have not shared any contact details (Email, Phone, Skype, Website etc)</span>
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start gap-2">
            <button className="px-4 md:px-6 py-2 border border-[#0F283C] text-[#0F283C] w-[179px] h-[52px] rounded text-sm">&lt;&lt; Previous</button>
            <button className="px-4 md:px-6 py-2 bg-[#0B1F36] text-white rounded w-[179px] h-[52px] text-sm">Submit &gt;&gt;</button>
          </div>
        </div>
      </div>
  
  );
};

export default ProfileDescription;
