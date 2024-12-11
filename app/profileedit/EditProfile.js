"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const EditProfile = () => {
  const [selectedTab, setSelectedTab] = useState("Personal Info");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    specialty: "",
    email: "",
    city: "",
    address: ""
  });
  
  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextClick = () => {
    // Check if all required fields are filled
    const requiredFields = [
      'firstName',
      'lastName',
      'mobile',
      'specialty',
      'email',
      'city',
      'address'
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert('Input fields are not filled');
        return;
      }
    }

    // If all fields are filled, navigate to Education page
    router.push('/Education');
  };

  const tabs = [
    "Personal Info",
    "Education",
    "Subjects",
    "Experience",
    "Teaching Detail",
    "Profile Description",
    "Courses",
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Top Component */}
      <div
        className="relative bg-[#136FB6] text-white w-full text-center py-4 flex flex-col items-center justify-center"
        style={{ height: '368px' }}
      >
         {/* Top left and top right images */}
         <div className="absolute inset-0 flex justify-between">
          <Image
            src="/Group 569.png"
            alt="Group 569"
            width={368}
            height={368}
            layout="fixed"
            className="absolute top-0 left-0 object-cover"
          />
          <Image
            src="/Saly-31.png"
            alt="Saly 31"
            width={151}
            height={151}
            layout="fixed"
            className="absolute top-0 right-0 object-cover"
          />
        </div>
        {/* Centered "Edit Profile" heading */}
        <h1 className="font-gilroy font-bold text-[40px] md:text-[60px] leading-none text-center">EDIT PROFILE</h1>
        <p className="font-gilroy text-[16px] md:text-[20px] text-center mt-2 leading-[30px]">Get the right job you deserve</p>
      </div>

      {/* Navigation Bar overlapping the "Edit Profile" section */}
      <div
        className="relative bg-[#0F283C] text-white w-full max-w-[1281px] min-h-[117px] h-auto mt-[-2rem] rounded-tl-lg rounded-tr-lg flex justify-start items-center px-4 sm:px-8"
        style={{ top: '-20px' }}
      >
        <nav className="hidden sm:flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`relative flex flex-col items-center group ${selectedTab === tab ? 'text-white' : 'text-gray-300'}`}
              onClick={() => setSelectedTab(tab)}
            >
              <span className="text-[14px] md:text-[18px] font-gilroy">{tab}</span>
              <span
                className={`block h-[2px] mt-1 w-full transition-transform duration-300 ease-in-out ${
                  selectedTab === tab ? 'bg-white' : 'bg-transparent'
                } group-hover:bg-white`}
              ></span>
            </button>
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

        {/* Mobile Menu - Conditionally Rendered */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-[#0F283C] text-white p-4">
            <nav>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`block p-2 text-left w-full ${selectedTab === tab ? 'text-white' : 'text-gray-300'}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className="bg-[#F2F6FB] shadow-lg rounded-lg p-6 w-full max-w-[1281px] mt-8">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-start md:w-1/3 mb-6 md:mb-0">
            <div className="w-full max-w-[275px] h-[242px] mb-4 bg-gray-200 border-2 border-dotted border-white overflow-hidden">
              <img src="/Rectangle 225.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-[#1BADFF] mb-2">
              Recommendation for JPG, PNG <br /> Max Size 5MB
            </p>
            <input type="file" className="hidden" id="profileImage" />
            <label
              htmlFor="profileImage"
              className="w-[179px] h-[52px] flex items-center justify-center bg-[#1BADFF] text-white text-sm rounded cursor-pointer"
            >
              Choose Image
            </label>
          </div>

          {/* Form Inputs */}
          <div className="md:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-[#9EB5C7] rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F6FB] text-black"
                  placeholder="Enter here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 text-black border border-[#9EB5C7] rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F6FB]"
                  placeholder="Enter here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number *</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 p-2 border text-black border-[#9EB5C7] rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F6FB]"
                  placeholder="Enter here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Specialty, Strength or Current Role *
                </label>
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  className="mt-1 p-2 border text-black border-[#9EB5C7] rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F6FB]"
                  placeholder="Enter here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email ID *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border text-black border-[#9EB5C7] rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F6FB]"
                  placeholder="Enter here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 p-2 border text-black border-[#9EB5C7] rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F6FB]"
                  placeholder="Enter here"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-2 border text-black border-[#9EB5C7] rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F6FB]"
                  placeholder="Enter here"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={handleNextClick}
                  className="w-full sm:w-[179px]  h-[52px] border border-[#0F283C] rounded-[4px] bg-[#0F283C] text-white font-gilroy text-[17px] "
                >
                  Next &gt;&gt;
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative flex flex-col items-center overflow-hidden rounded-[10px] mt-8">
          {/* Video Frame */}
          <div className="w-full max-w-[1197px] h-[503px] bg-gray-800 overflow-hidden rounded-[10px]">
            {/* Video Container */}
            <div className="relative w-full h-full">
              {/* Video Thumbnail (Fallback Image) */}
              <img
                src="/Rectangle 229.png"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Overlay Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[137px] h-[137px]">
            <img src="/Group 437.png" alt="Overlay Icon" className="w-full h-full object-cover" />
          </div>

          {/* Text Below Video */}
          <p className="mt-4 text-white text-[24px] font-gilroy-bold">
            Introduction Video
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
