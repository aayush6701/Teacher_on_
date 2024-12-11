// 'use client';
// // // components/TeachingDetailForm.js
// import React, { useState } from "react";
// import Image from "next/image";

// const TeachingDetailForm = () => {
//   // States to track the selected radio buttons
//   const [travel, setTravel] = useState(null);
//   const [onlineTeaching, setOnlineTeaching] = useState(null);
//   const [digitalPen, setDigitalPen] = useState(null);
//   const [homeworkHelp, setHomeworkHelp] = useState(null);
//   const [fullTimeTeacher, setFullTimeTeacher] = useState(null);

//   // Function to handle the radio button selection
//   const handleTravelChange = (value) => {
//     setTravel(value);
//   };

//   const handleOnlineTeachingChange = (value) => {
//     setOnlineTeaching(value);
//   };

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const menuItems = [
//     { label: "Personal Info", iconSrc: "/right.png" },
//     { label: "Education", iconSrc: "/right.png" },
//     { label: "Subjects", iconSrc: "/right.png" },
//     { label: "Experience", iconSrc: "/right.png" },
//     { label: "Teaching Detail", active: true },
//     { label: "Profile Description" },
//     { label: "Courses" },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen  flex flex-col items-center">
//       <div
//         className="relative bg-[#136FB6] text-white w-screen text-center py-4 flex flex-col items-center justify-center"
//         style={{ height: 368 }}
//       >
//         {/* Top left and top right images */}
//         <Image src="/Group 569.png" alt="Group 569" width={368} height={368} className="absolute top-0 left-0 z-0" />
//         <Image src="/Saly-31.png" alt="Saly 31" width={151} height={151} className="absolute top-0 right-0"  />

//         {/* Centered "Edit Profile" heading */}
//         <h1 className="font-gilroy font-bold text-[60px] leading-none text-center z-10">EDIT PROFILE</h1>
//         <p className="font-gilroy text-[20px] text-center mt-2 leading-[30px] z-10">Get the right job you deserve</p>
//       </div>

// {/* Navigation Bar overlapping the "Edit Profile" section */}
// <div
//       className="relative bg-[#0F283C] text-white w-full max-w-[1281px] min-h-[117px] h-auto mt-[-2rem] rounded-tl-lg rounded-tr-lg flex justify-between items-center py-4 md:py-6 px-4"
//       style={{ top: "-10%" }}
//     >
//       {/* Desktop Navbar */}
//       <nav className="hidden sm:flex gap-4 md:gap-8 items-center">
//         {menuItems.map((item, index) => (
//           <a
//             href="#"
//             key={index}
//             className="relative flex flex-col items-center group"
//           >
//             <span
//               className={`text-sm md:text-base font-gilroy ${
//                 ["Teaching Detail", "Profile Description", "Courses"].includes(
//                   item.label
//                 )
//                   ? "whitespace-nowrap pb-3"
//                   : ""
//               }`}
//             >
//               {item.label}
//             </span>
//             <span
//               className={`block h-[2px] mt-1 w-full transition-transform duration-300 ease-in-out ${
//                 item.active ? "bg-white" : "bg-transparent"
//               } group-hover:bg-white group-hover:scale-100 ${
//                 item.active ? "scale-100" : "scale-0"
//               }`}
//             ></span>
//             {item.iconSrc && (
//               <Image
//                 src={item.iconSrc}
//                 alt={item.label}
//                 width={15}
//                 height={15}
//               />
//             )}
//           </a>
//         ))}
//       </nav>

//       {/* Mobile Hamburger Menu Button */}
//       <button
//         className="sm:hidden text-white"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-8 h-8"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Mobile Navbar */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#0F283C] text-white sm:hidden">
//           <nav className="flex flex-col items-start p-4 space-y-4">
//             {menuItems.map((item, index) => (
//               <a
//                 href="#"
//                 key={index}
//                 className="w-full text-left px-2 py-1 border-b border-gray-700"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </div>


//       {/* Form Content */}
//       <div className="bg-[F2F6FB] shadow-lg rounded-lg p-6 w-full max-w-[1281px] mt-8 ">
//         {/* Updated Heading for Fee in INR */}
//         <h2 className="text-black font-gilroy text-[20px] mb-4">Fee in INR - Indian Rupee</h2>
//         <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Form fields */}
//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               I charge <span className="text-[#FF281B]">*</span>
//             </label>
//             <input
//               type="text"
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none "
//               placeholder="Enter here"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Minimum fee <span className="text-[#FF281B]">*</span>
//             </label>
//             <input
//               type="text"
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
//               placeholder="Enter here"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Maximum fee <span className="text-[#FF281B]">*</span>
//             </label>
//             <input
//               type="text"
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
//               placeholder="Enter here"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Fee Details <span className="text-[#FF281B]">*</span>
//             </label>
//             <input
//               type="text"
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
//               placeholder="Enter here"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Years of total experience <span className="text-[#FF281B]">*</span>
//             </label>
//             <input
//               type="text"
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
//               placeholder="Enter here"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Years of total teaching experience <span className="text-[#FF281B]">*</span>
//             </label>
//             <input
//               type="text"
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
//               placeholder="Enter here"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Years of online teaching experience <span className="text-[#FF281B]">*</span>
//             </label>
//             <input
//               type="text"
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
//               placeholder="Enter here"
//             />
//           </div>

//           {/* Custom Radio Button Styles */}
//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Are you willing to travel to Student? <span className="text-[#FF281B]">*</span>
//             </label>
//             <div className="flex items-center space-x-4 ">
//               <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left " >
//                 <div
//                   onClick={() => handleTravelChange("yes")}
//                   className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${travel === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
//                     }`}
//                 >
//                   {travel === "yes" && (
//                     <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//                   )}
//                 </div>
//                 <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
//               </label>
//               <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
//                 <div
//                   onClick={() => handleTravelChange("no")}
//                   className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${travel === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
//                     }`}
//                 >
//                   {travel === "no" && (
//                     <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//                   )}
//                 </div>
//                 <span className="text-[#8397A6] font-gilroy ml-3">No</span>
//               </label>
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Available for online teaching? <span className="text-[#FF281B]">*</span>
//             </label>
//             <div className="flex items-center space-x-4">
//               <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
//                 <div
//                   onClick={() => handleOnlineTeachingChange("yes")}
//                   className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${onlineTeaching === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
//                     }`}
//                 >
//                   {onlineTeaching === "yes" && (
//                     <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//                   )}
//                 </div>
//                 <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
//               </label>
//               <label className="flex items-center relative  w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
//                 <div
//                   onClick={() => handleOnlineTeachingChange("no")}
//                   className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${onlineTeaching === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
//                     }`}
//                 >
//                   {onlineTeaching === "no" && (
//                     <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//                   )}
//                 </div>
//                 <span className="text-[#8397A6] font-gilroy ml-3">No</span>
//               </label>
//             </div>
//           </div>

//           <div className="flex flex-col">
//         <label className="text-[#4E5865] text-sm font-medium mb-2">
//           Do you have a digital pen? <span className="text-[#FF281B]">*</span>
//         </label>
//         <div className="flex items-center space-x-4">
//           <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
//             <div
//               onClick={() => setDigitalPen("yes")}
//               className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${digitalPen === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
//             >
//               {digitalPen === "yes" && (
//                 <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//               )}
//             </div>
//             <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
//           </label>
//           <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
//             <div
//               onClick={() => setDigitalPen("no")}
//               className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${digitalPen === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
//             >
//               {digitalPen === "no" && (
//                 <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//               )}
//             </div>
//             <span className="text-[#8397A6] font-gilroy ml-3">No</span>
//           </label>
//         </div>
//       </div>

//            {/* Question 3: Do you help with homework and assignments? */}
//       <div className="flex flex-col">
//         <label className="text-[#4E5865] text-sm font-medium mb-2">
//           Do you help with homework and assignments? <span className="text-[#FF281B]">*</span>
//         </label>
//         <div className="flex items-center space-x-4">
//           <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
//             <div
//               onClick={() => setHomeworkHelp("yes")}
//               className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${homeworkHelp === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
//             >
//               {homeworkHelp === "yes" && (
//                 <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//               )}
//             </div>
//             <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
//           </label>
//           <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
//             <div
//               onClick={() => setHomeworkHelp("no")}
//               className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${homeworkHelp === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
//             >
//               {homeworkHelp === "no" && (
//                 <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//               )}
//             </div>
//             <span className="text-[#8397A6] font-gilroy ml-3">No</span>
//           </label>
//         </div>
//       </div>

//       {/* Question 4: Are you a full-time teacher? */}
//       <div className="flex flex-col">
//         <label className="text-[#4E5865] text-sm font-medium mb-2">
//           Are you a full-time teacher employed by a school/college? <span className="text-[#FF281B]">*</span>
//         </label>
//         <div className="flex items-center space-x-4">
//           <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
//             <div
//               onClick={() => setFullTimeTeacher("yes")}
//               className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${fullTimeTeacher === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
//             >
//               {fullTimeTeacher === "yes" && (
//                 <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//               )}
//             </div>
//             <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
//           </label>
//           <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
//             <div
//               onClick={() => setFullTimeTeacher("no")}
//               className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${fullTimeTeacher === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
//             >
//               {fullTimeTeacher === "no" && (
//                 <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
//               )}
//             </div>
//             <span className="text-[#8397A6] font-gilroy ml-3">No</span>
//           </label>
//         </div>
//         </div>
//           <div className="flex flex-col">
//             <label className="text-[#4E5865] text-sm font-medium mb-2">
//               Opportunites you are intrested in <span className="text-[#FF281B]">*</span>
//             </label>
//             <select
//               className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none text-[#8397A6] font-gilroy text-[16px]"
//               defaultValue=""
//             >
//               <option value="" disabled className="text-[#8397A6]">
//                 Select here
//               </option>
//               <option value="0-1" className="text-[#8397A6]">0-1 years</option>
//               <option value="1-3" className="text-[#8397A6]">1-3 years</option>
//               <option value="3-5" className="text-[#8397A6]">3-5 years</option>
//               <option value="5-10" className="text-[#8397A6]">5-10 years</option>
//               <option value="10+" className="text-[#8397A6]">10+ years</option>
//             </select>
//           </div>



//           {/* Add other form fields here... */}
//         </form>
//         <div className="flex justify-left mt-6">
//           <button
//             className="w-[179px] h-[52px] border border-[#0F283C] rounded-[4px] bg-white text-[#0F283C] font-gilroy text-[17px]"
//           >
//             Previous
//           </button>
//           <button
//             className="w-[179px] h-[52px] border border-[#0F283C] rounded-[4px] bg-[#0F283C] text-white font-gilroy text-[17px] mx-6 "
//           >
//             submit
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TeachingDetailForm;



'use client';
// // components/TeachingDetailForm.js
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TeachingDetailForm = () => {
  const router = useRouter();

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
    { label: "Teaching Detail", active: true },
    { label: "Profile Description" },
    { label: "Courses" },
  ];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = travel && onlineTeaching && digitalPen && homeworkHelp && fullTimeTeacher;
    if (allFieldsFilled) {
      router.push('/profile_description');
    } else {
      alert("Please fill in all fields");
    }
  };

  // Function to handle navigation to the previous page
  const handlePrevious = () => {
    router.push('/experience');
  };

  return (
    <div className="bg-gray-100 min-h-screen  flex flex-col items-center">
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
                  ? "whitespace-nowrap pb-3"
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


      {/* Form Content */}
      <div className="bg-[F2F6FB] shadow-lg rounded-lg p-6 w-full max-w-[1281px] mt-8 ">
        {/* Updated Heading for Fee in INR */}
        <h2 className="text-black font-gilroy text-[20px] mb-4">Fee in INR - Indian Rupee</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              I charge <span className="text-[#FF281B]">*</span>
            </label>
            <input
              type="text"
              className="text-black border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none "
              placeholder="Enter here"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Minimum fee <span className="text-[#FF281B]">*</span>
            </label>
            <input
              type="text"
              className="text-black border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
              placeholder="Enter here"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Maximum fee <span className="text-[#FF281B]">*</span>
            </label>
            <input
              type="text"
              className="text-black border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
              placeholder="Enter here"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Fee Details <span className="text-[#FF281B]">*</span>
            </label>
            <input
              type="text"
              className="text-black border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
              placeholder="Enter here"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Years of total experience <span className="text-[#FF281B]">*</span>
            </label>
            <input
              type="text"
              className="text-black border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
              placeholder="Enter here"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Years of total teaching experience <span className="text-[#FF281B]">*</span>
            </label>
            <input
              type="text"
              className="text-black border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
              placeholder="Enter here"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
            Years of online teaching experience <span className="text-[#FF281B]">*</span>
            </label>
            <input
              type="text"
              className="text-black border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none"
              placeholder="Enter here"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Are you willing to travel to Student? <span className="text-[#FF281B]">*</span>
            </label>
            <div className="flex items-center space-x-4 ">
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left " >
                <div
                  onClick={() => handleTravelChange("yes")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${travel === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
                    }`}
                >
                  {travel === "yes" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
              </label>
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
                <div
                  onClick={() => handleTravelChange("no")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${travel === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
                    }`}
                >
                  {travel === "no" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">No</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Available for online teaching? <span className="text-[#FF281B]">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
                <div
                  onClick={() => handleOnlineTeachingChange("yes")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${onlineTeaching === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
                    }`}
                >
                  {onlineTeaching === "yes" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
              </label>
              <label className="flex items-center relative  w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
                <div
                  onClick={() => handleOnlineTeachingChange("no")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${onlineTeaching === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"
                    }`}
                >
                  {onlineTeaching === "no" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">No</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Do you have a digital pen? <span className="text-[#FF281B]">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
                <div
                  onClick={() => setDigitalPen("yes")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${digitalPen === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
                >
                  {digitalPen === "yes" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
              </label>
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3 flex justify-left">
                <div
                  onClick={() => setDigitalPen("no")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${digitalPen === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
                >
                  {digitalPen === "no" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">No</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Do you help with homework and assignments? <span className="text-[#FF281B]">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
                <div
                  onClick={() => setHomeworkHelp("yes")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${homeworkHelp === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
                >
                  {homeworkHelp === "yes" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
              </label>
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
                <div
                  onClick={() => setHomeworkHelp("no")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${homeworkHelp === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
                >
                  {homeworkHelp === "no" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">No</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Are you a full-time teacher employed by a school/college? <span className="text-[#FF281B]">*</span>
            </label>
            <div className="flex items-center space-x-4">
                        
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
                <div
                  onClick={() => setFullTimeTeacher("yes")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${fullTimeTeacher === "yes" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
                >
                  {fullTimeTeacher === "yes" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">Yes</span>
              </label>
              <label className="flex items-center relative w-[178px] h-[42px] border-[#9EB5C7] border-[1px] rounded-[2px] p-3">
                <div
                  onClick={() => setFullTimeTeacher("no")}
                  className={`custom-radio w-6 h-6 border-2 rounded-sm flex justify-center items-center cursor-pointer ${fullTimeTeacher === "no" ? "border-[#4E5865] bg-white" : "border-[#4E5865] bg-transparent"}`}
                >
                  {fullTimeTeacher === "no" && (
                    <span className="text-[#4E5865]" style={{ fontSize: "14px", fontWeight: "bold" }}>✔</span>
                  )}
                </div>
                <span className="text-[#8397A6] font-gilroy ml-3">No</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#4E5865] text-sm font-medium mb-2">
              Opportunites you are intrested in <span className="text-[#FF281B]">*</span>
            </label>
            <select
              className="border-[#9EB5C7] border p-3 rounded-[2px] focus:outline-none text-[#8397A6] font-gilroy text-[16px]"
              defaultValue=""
            >
              <option value="" disabled className="text-[#8397A6]">
                Select here
              </option>
              <option value="0-1" className="text-[#8397A6]">0-1 years</option>
              <option value="1-3" className="text-[#8397A6]">1-3 years</option>
              <option value="3-5" className="text-[#8397A6]">3-5 years</option>
              <option value="5-10" className="text-[#8397A6]">5-10 years</option>
              <option value="10+" className="text-[#8397A6]">10+ years</option>
            </select>
          </div>
        </form>
        <div className="flex justify-left mt-6">
          <button
            type="button"
            className="w-[179px] h-[52px] border border-[#0F283C] rounded-[4px] bg-white text-[#0F283C] font-gilroy text-[17px]"
            onClick={handlePrevious}
          >
           &lt;&lt; Previous
          </button>
          <button
            type="submit"
            className="w-[179px] h-[52px] border border-[#0F283C] rounded-[4px] bg-[#0F283C] text-white font-gilroy text-[17px] mx-6 "
            onClick={handleSubmit}
          >
            Submit &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachingDetailForm;
