'use client'; // Add this line to mark the component as a client-side component

import { useState } from 'react'; // Import useState for managing dropdown state
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
export default function Navbar() {
  const router = useRouter(); // Initialize router
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown toggle
  const [isLeftCloseIcon, setIsLeftCloseIcon] = useState(false); // State to decide close icon position (left or right)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown menu state
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false); // Close the dropdown menu
  };

  const handleViewProfileClick = () => {
    console.log('Navigating to profile...');
    router.push('/profile');
  };

  const handleTeacherExpertClick = () => {
    console.log('Navigating to teacher/expert...');
    router.push('/TutorsPagefile'); // Use route path
  };

  const handleprofileeditClick = () => {
    console.log('Navigating to profile...');
    router.push('/profileedit'); // Use route path
  };

  const handletutorjobClick = () => {
    console.log('Navigating to tutorjob...');
    router.push('/Tutors_job'); // Use route path
  };

  
    const handleVisitStore = () => {
      router.push('/store');
    };

    const handlehome = () => {
      router.push('/');
    };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-lg md:px-8 md:py-2">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          src="/Group 2.png" // Ensure the image path is correct
          alt="Logo"
          width={180}
          height={45}
          className="object-contain" // Ensure the image fills its container
        />
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-[#515A60] text-sm font-Gilroy relative group" onClick={handlehome}>
          Home
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="border-l border-[#515A60] h-6" /> {/* Vertical line */}
        <a href="#" className="text-[#515A60] text-sm font-Gilroy relative group">
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="border-l border-[#515A60] h-6" /> {/* Vertical line */}
        <a href="#" className="text-[#515A60] text-sm font-Gilroy relative group">
          IGCSE
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="border-l border-[#515A60] h-6" /> {/* Vertical line */}
        <a href="#" className="text-[#515A60] text-sm font-Gilroy relative group" onClick={handleVisitStore}>
          Store
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Right Side: Search, SignUp, Login, and Dropdown */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-md" style={{ width: '176px', height: '54px' }}>
          <div className="flex items-center justify-center px-2">
            <Image
              src="/Vector2.png" // Replace with correct path for your icon
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div>

          {/* Vertical Line */}
          <div className="border-l border-[#515A60] h-6 mx-2" /> {/* Vertical line */}

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="text-sm outline-none text-[#515A60] bg-transparent w-full h-full pl-2"
          />
        </div>

        {/* Sign Up Button */}
        <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-md">
          <Image
            src="/Group 5.png" // Ensure the image path is correct
            alt="Sign Up"
            width={176}
            height={54}
            className="object-contain"
          />
        </button>

        {/* Login Button */}
        <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-md">
          <Image
            src="/Group 4.png" // Ensure the image path is correct
            alt="Login"
            width={124}
            height={54}
            className="object-contain"
          />
        </button>

        {/* Dropdown Icon */}
        <div className="relative">
          <Image
            src="/Vector.png"  // Ensure the image path is correct
            alt="Dropdown"
            width={34}
            height={29}
            className="object-contain cursor-pointer"
            onClick={handleDropdownToggle} // Toggle dropdown on click
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              {/* Background Overlay */}
              <div className="fixed inset-0 bg-black bg-opacity-60 z-9"></div>

              <div className="absolute right-0 mt-2 w-[376px] sm:w-[428px] bg-white shadow-lg rounded-md border border-gray-200 z-10 transition-all duration-300">
                <div className="p-4 relative">
                  {/* Close Button (Round Image) */}
                  <Image
                    src="/Group 517.png" // Replace with your close icon path
                    alt="Close Icon"
                    width={45}
                    height={45}
                    className={`absolute ${isLeftCloseIcon ? 'left-2' : 'right-2'} top-2 rounded-full cursor-pointer`}
                    onClick={handleCloseDropdown}
                  />

                  {/* Toggle the close icon position */}
                  <button
                    className="absolute top-2 left-2 text-sm text-[#1667A5] cursor-pointer"
                    onClick={() => setIsLeftCloseIcon(!isLeftCloseIcon)}
                  >
                  </button>

                  {/* Accounts Title */}
                  <div className="text-[#1667A5] font-Gilroy-Bold text-2xl mb-3">Accounts</div>

                  {/* Dropdown Items */}
                  <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                    <Image
                      src="/client.png" // Replace with your correct image path for the icon
                      alt="Student Icon"
                      width={21}
                      height={20}
                    />
                    <span className="text-[#667681] text-sm">Student / Client</span>
                  </div>

                  <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer" >
                    <Image
                      src="/teacher.png" // Replace with your correct image path for the icon
                      alt="Teacher Icon"
                      width={21}
                      height={20}
                    />
                    <span className="text-[#667681] text-sm" onClick={handleTeacherExpertClick}>Teacher / Expert</span>
                  </div>

                  <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                    <Image
                      src="/wallet.png" // Replace with your correct image path for the icon
                      alt="Wallet Icon"
                      width={21}
                      height={20}
                    />
                    <span className="text-[#667681] text-sm">Wallet</span>
                  </div>

                  <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer" onClick={handletutorjobClick}>
                    <Image
                      src="/jobs.png" // Replace with your correct image path for the icon
                      alt="Jobs Icon"
                      width={21}
                      height={20}
                    />
                    <span className="text-[#667681] text-sm">Jobs</span>
                  </div>

                  <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                    <Image
                      src="/setting.png" // Replace with your correct image path for the icon
                      alt="Settings Icon"
                      width={21}
                      height={20}
                    />
                    <span className="text-[#667681] text-sm"onClick={handleprofileeditClick}>Settings</span>
                  </div>

                  <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer" onClick={handleViewProfileClick}>
                    <Image
                      src="/profile.png" // Replace with your correct image path for the icon
                      alt="Profile Icon"
                      width={21}
                      height={20}
                    />
                    <span className="text-[#667681] text-sm">View Profile</span>
                  </div>

                  {/* Log Out Item */}
                  <div className="flex items-center space-x-3 bg-[#136FB6] text-white p-3 cursor-pointer w-full rounded-b-md">
                    <Image
                      src="/logout.png" // Replace with your correct image path for the icon
                      alt="Log Out Icon"
                      width={21}
                      height={20}
                    />
                    <span className="text-sm">Log Out</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
