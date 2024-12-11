
"use client";
import React, { useState } from "react"; // Ensure useState is imported
import { useRouter } from "next/navigation";
  
const Experience = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const educationData = [
    { subject: "ICSE Maths", grade: "(Grade 8 - Grade 10)" },
    { subject: "IGCSE Maths" },
    { subject: "ICSE Chemistry", grade: "(Grade 9 - Grade 10)" },
    { subject: "IBDP Maths SL/HL" },
    { subject: "IBDP Math SL/HL" },
    { subject: "AS & A level Mathematics" },
    { subject: "IGCSE Business studies" },
    { subject: "IGCSE Economics" },
    { subject: "IGCSE 9-1 Chemistry" },
  ];

  const router = useRouter();

  const [subject, setSubject] = useState("");
  const [fromLevel, setFromLevel] = useState("");
  const [toLevel, setToLevel] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [board, setBoard] = useState("");

  const handleSave = () => {
    if (!subject || !fromLevel || !toLevel || !classLevel || !board) {
      alert("Please fill in all the required fields.");
    } else {
      // Redirect to Experience page
      window.location.href = "/experience";
    }
  };
  
  const handlePrevious = () => {
       
    router.push("/Education");

};

  return (
    <div className="w-full bg-white relative min-h-screen">
      <div className="w-full bg-[#136FB6] h-[368px] relative">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-[60px] font-bold tracking-wider mb-4 z-10">
            EDIT PROFILE
          </h1>
          <div className="w-full max-w-[800px] flex flex-col items-center z-10">
            <p className="text-white text-[20px]">Get the right job you deserve</p>
          </div>
        </div>
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 z-10">
          <img
            src="./Saly-31.png"
            alt="Teacher illustration"
            className="w-[150px] h-[150px] object-contain"
          />
        </div>
        <div className="absolute top-[-20px] ml-[-2rem] z-0">
          <img
            src="./Ellipse 2.png"
            alt="Teacher illustration"
            className="w-[200px] h-[200px] object-contain"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full bg-white">
        <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
          {/* Navigation */}
          <div className="bg-[#0F283C] py-2 px-4 pl-4 md:pl-10 rounded-t-lg w-full min-h-[117px]">
            <div className="flex justify-between items-center">
              {/* Hamburger Icon */}
              <button
  className="text-white md:hidden"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )}
</button>


              {/* Navigation Links */}
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } md:flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 py-4 md:py-0 w-full md:w-auto`}
              >
                {[
                  { label: "Personal Info", iconSrc: "/right.png" },
                  { label: "Education", iconSrc: "/right.png" },
                  { label: "Subjects",  active: true },
                  { label: "Experience" },
                  { label: "Teaching Detail" },
                  { label: "Profile Description" },
                  { label: "Courses" },
                ].map((item, index) => (
                  <div key={index} className="relative flex flex-col items-center group">
                    {/* Label */}
                    <span
                      className={`text-sm md:text-base font-gilroy ${
                        ["Education", "Personal Info"].includes(item.label)
                          ? "whitespace-nowrap "
                          : ""
                      } ${
                        ["Subjects", "Personal Info", "Teaching Detail", "Profile Description", "Courses", "Experience", "Education"].includes(item.label)
                          ? "whitespace-nowrap mt-[25px]"
                          : ""
                      }
                      `}
                    >
                      {item.label}
                    </span>

                    {/* Icon */}
                    {item.iconSrc && (
                      <img
                        src={item.iconSrc}
                        alt={item.label}
                        width={15}
                        height={15}
                        className="mt-1"
                      />
                    )}

                    {/* Underline Animation */}
                    <span
                      className={`block h-[2px] mt-1 w-full transition-transform duration-300 ease-in-out ${
                        item.active ? "bg-white" : "bg-transparent"
                      } group-hover:bg-white group-hover:scale-100 ${
                        item.active ? "scale-100" : "scale-0"
                      }`}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Cards - Responsive Grid */}
          <div className="p-8 bg-[#F2F6FB]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-4 rounded-[2px] border border-[#B4C2D3]"
                >
                  <div className="flex-grow">
                    <h3 className="font-bold text-[#4E5865]">{item.subject}</h3>
                    {item.grade && <p className="text-sm text-[#8397A6]">{item.grade}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-[#1BADFF] rounded-full w-10 h-10">
                      <img
                        src="/Group 440.png"
                        alt="Edit Icon"
                        className="w-4 h-4 mx-auto"
                      />
                    </button>
                    <button className="p-2 bg-[#FF281B] w-10 h-10 rounded-full">
                      <img
                        src="/delete.png"
                        alt="Remove Icon"
                        className="w-4 h-4 mx-auto"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Education Form */}
          <div className="p-8 bg-[#F2F6FB]">
            <h3 className="font-medium mb-6 text-[black] font-bold">Please add subjects below.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              <div>
                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                  Subject <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]" value={subject}
              onChange={(e) => setSubject(e.target.value)}>
                  <option>Select here</option>
                  <option>science</option>
                  <option>Math</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                  From level <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"  value={fromLevel}
              onChange={(e) => setFromLevel(e.target.value)}>
                  <option>Select class</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                  To level <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"  value={toLevel}
              onChange={(e) => setToLevel(e.target.value)}>
                  <option>Select class</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                  Class <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"  value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}>
                  <option>Select class</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                  Board <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"  value={board}
              onChange={(e) => setBoard(e.target.value)}>
                  <option>Select board</option>
                  <option>Board A</option>
                  <option>Board B</option>
                  <option>Board C</option>
                </select>
              </div>
              <p className="text-[#FF281B] text-[14px] mt-2 col-span-3">
                If not in options above, add a new subject.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-left items-center mt-8">
              <button className="w-[179px] h-[52px] border border-[#0F283C] text-[#0F283C] font-bold text-sm rounded-[2px]" onClick={handlePrevious}>
                &lt;&lt; Previous
              </button>
              <button className="w-[179px] h-[52px] ml-4 bg-[#0B1F36] text-white font-bold text-sm rounded-[4px]" onClick={handleSave}  >
                Save &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
