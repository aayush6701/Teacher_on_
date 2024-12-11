"use client";
import React, { useState } from "react"
import Experience from "../components/Experience";
import { useRouter } from "next/navigation";

const Education_EP = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Personal Info", iconSrc: "/right.png" },
    { label: "Education", active: true },
    { label: "Subjects", active: false },
    { label: "Experience", active: false },
    { label: "Teaching Detail", active: false },
    { label: "Profile Description", active: false },
    { label: "Courses", active: false },
  ];
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "endDate") {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSave = () => {
  
      router.push("/subjects"); // Redirect to the Subjects page
    
  };

  const handlePrevious = () => {
    router.push("/profileedit"); // Redirect to the Profile Edit page
  };
  
  const educationData = [
    {
      degree: "Mtech Computer science",
      institute: "Kalingo University",
      duration: "(Jun, 2020 - Apr, 2022)",
    },
    {
      degree: "Organization Excellence through Leadership",
      institute: "Indian Institute of Management Bangalore (IIM Bangalore)",
      duration: "(Sep, 2019 - Sep, 2019)",
    },
    {
      degree: "Bachelor of Engineering (BE/IT)",
      institute: "RAIPUR INSTITUTE OF TECHNOLOGY",
      duration: "(Jun, 2005 - Jul, 2009)",
    },
    {
      degree: "IGCSE Extension Course",
      institute: "Cambridge CAIE IGCSE extension Course",
      duration: "(Jan, 2022 - Feb, 2022)",
    },
    {
      degree: "Cambridge IGCSE Extension Course Chemistry",
      institute: "Cambridge CAIE IGCSE extension Course",
      duration: "(Jan, 2019 - Jan, 2019)",
    },
    {
      degree: "Cambridge professional development extension IGCSE Biology",
      institute: "Cambridge professional development Cambridge IGCSE Biology",
      duration: "(May, 2012 - Jul, 2012)",
    },
  ];

  return (
    <div className="w-full bg-white relative min-h-screen">
      <div className="w-full bg-[#136FB6] h-[236px] relative">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold tracking-wider mb-4 z-10">
            EDIT PROFILE
          </h1>
          <div className="w-full max-w-[800px] flex flex-col items-center z-10">
            <p className="text-white text-md">Get the right job you deserve</p>
          </div>
        </div>
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 z-0">
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

      <div className="w-full bg-white">
        <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
        <div className="w-full bg-white">
        <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
          {/* Updated Navigation */}
          <div
            className="relative bg-[#0F283C] text-white w-full max-w-[1281px] min-h-[117px] h-auto mt-[-2rem] rounded-tl-lg rounded-tr-lg flex justify-between items-center py-4 md:py-6 px-4 pl-10"
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
                      ["Teaching Detail", "Profile Description", "Courses", "Education", "Subjects", "Experience"].includes(
                        item.label
                      )
                        ? "whitespace-nowrap pb-3 "
                        : ""
                    }`}
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
                    <img
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


          <div className="p-8 bg-[#F2F6FB]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#F2F6FB] p-4 rounded shadow-sm"
                >
                  <div className="p-2 bg-[#F2F6FB] rounded">
                    <img src="./Group 451.png" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-[#4E5865] font-bold">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-[#8397A6]">{item.institute}</p>
                    <p className="text-sm text-[#8397A6]">{item.duration}</p>
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

            <div className="mt-8">
              <h3 className="font-medium mb-6 text-[black]">Add Education/Certification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    Institution name with city <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter here"
                    className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    Degree Type <span className="text-red-500">*</span>
                  </label>
                  <select className="text-black w-full lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]">
                    <option>B tech</option>
                    <option>M tech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    Degree Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter here"
                    className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <div className="relative w-full lg:w-[194px]">
                      <select className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10 text-[#8397A6] appearance-none">
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>March</option>
                      </select>
                      <img
                        src="./calanderE.png"
                        alt="Calendar icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      />
                    </div>
                    <div className="relative w-full lg:w-[194px]">
                      <select className=" text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10 text-[#8397A6] appearance-none">
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                      </select>
                      <img
                        src="./calanderE.png"
                        alt="Calendar icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    End Date <span className="text-[#6E7B82]">(Leave blank if not complete)</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter here"
                    className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    Association <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]">
          
                                      <option>Option 1</option>
                                      <option>Option 2</option>
                                      <option>Option 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    Speciality <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter here"
                    className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#4E5865]">
                    Score <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter here"
                    className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-left items-center mt-8">
                <button className="w-[179px] h-[52px] border border-[#0F283C] text-[#0F283C] font-bold text-sm rounded-[2px]"onClick={handlePrevious}>
                  &lt;&lt; Previous
                </button>
                <button className="w-[179px] h-[52px] ml-4 bg-[#0B1F36] text-white font-bold text-sm rounded-[4px]"  onClick={handleSave}>
                  Save &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Education_EP;

                 
