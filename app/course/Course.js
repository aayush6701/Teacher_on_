
"use client";
import React, { useState } from "react"; // Ensure useState is imported
import { useRouter } from "next/navigation";

const Course = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const educationData = [
        { subject: "Course", location: "Noida, Uttar Pradesh, India · On-site"},
        { subject: "Course", location: "Noida, Uttar Pradesh, India · On-site"},
        { subject: "Course", location: "Noida, Uttar Pradesh, India · On-site"},
    ];
    const router = useRouter();

    // State for form fields
    const [Course_title, setCourse_title] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Currency, setCurrency] = useState("INR");
    const [MOD, setMOD] = useState("Option 1");
const [Group, setGroup] = useState("Option 1");
const [Cert, setCert] = useState("Option 1");
const [CD, setCD] = useState("Option 1");
   
    const [LOI, setLOI] = useState("");
   

    // Function to handle save button click
    const handleSave = () => {
        if (
           Course_title &&
            Description &&
            Price &&
            Currency&&
            MOD &&
            Group &&
            Cert &&
            LOI &&
            CD
        ) {
            router.push("/store");
        } else {
            alert("Please fill in all required fields.");
        }
    };
    const handlePrevious = () => {
       
            router.push("/profile_description");
        
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
                                className={`${isMenuOpen ? "block" : "hidden"
                                    } md:flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 py-4 md:py-0 w-full md:w-auto`}
                            >
                                {[
                                    { label: "Personal Info", iconSrc: "/right.png" },
                                    { label: "Education", iconSrc: "/right.png" },
                                    { label: "Subjects", iconSrc: "/right.png" },
                                    { label: "Experience",iconSrc: "/right.png" },
                                    { label: "Teaching Detail" , iconSrc: "/right.png"},
                                    { label: "Profile Description", iconSrc: "/right.png" },
                                    { label: "Courses", active: true },
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col items-center group">
                                        {/* Label */}
                                        <span
                                            className={`text-sm md:text-base font-gilroy ${["Education", "Personal Info"].includes(item.label)
                                                    ? "whitespace-nowrap "
                                                    : ""
                                                } ${["Subjects", "Personal Info", "Teaching Detail", "Profile Description", "Courses", "Experience", "Education"].includes(item.label)
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
                                            className={`block h-[2px] mt-1 w-full transition-transform duration-300 ease-in-out ${item.active ? "bg-white" : "bg-transparent"
                                                } group-hover:bg-white group-hover:scale-100 ${item.active ? "scale-100" : "scale-0"
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
                                        <p className="text-[#136AAD]" style={{ fontSize: '14px' }}>{item.location}</p>
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
                        <h3 className="font-medium mb-6 text-[black] font-bold">Please add Course I teach.</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                            <div>
                                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                    Course title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"
                                    placeholder="Enter here"
                                    value={Course_title}
                                    onChange={(e) => setCourse_title(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"
                                    placeholder="Enter here"
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block font-bold text-sm mb-1 text-[#4E5865]">
                                    Price <span className="text-red-500">*</span>
                                </label>
                                <div class="flex max-w-[397px] w-full border border-[#9EB5C7] rounded-[3px] overflow-hidden">
                                <input
                                    type="text"
                                    class="flex-grow px-3 py-2 bg-[#F2F6FB] outline-none text-black text-[14px]"
                                    placeholder="Enter here"
                                    value={Price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <div class="w-[69px] h-[42px] bg-[#9EB5C7] flex items-center justify-center">
                                    <select class="bg-[#9EB5C7] text-white text-[14px] outline-none cursor-pointer w-full" value={Currency}
                                    onChange={(e) => setCurrency(e.target.value)}>
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="JPY">JPY</option>
                                    </select>
                                </div>
                                </div>

                            </div>
                            <div>
                                <label className="block  font-bold text-sm mb-1 text-[#4E5865]">
                                    Mode Of Delivery <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]" value={MOD}
                                    onChange={(e) => setMOD(e.target.value)}>

                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block  font-bold text-sm mb-1 text-[#4E5865]">
                                    Group Size <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]" value={Group}
                                    onChange={(e) => setGroup(e.target.value)}>

                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block  font-bold text-sm mb-1 text-[#4E5865]">
                                    Certificate Provided <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]" value={Cert}
                                    onChange={(e) => setCert(e.target.value)}>

                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                    Language Of Instructions <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"
                                    placeholder="Enter here"
                                    value={LOI}
                                    onChange={(e) => setLOI(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block  font-bold text-sm mb-1 text-[#4E5865]">
                                    Course Duration <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]" value={CD}
                                    onChange={(e) => setCD(e.target.value)}>

                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-left items-center mt-8">
                            <button className="w-[179px] h-[52px] border border-[#0F283C] text-[#0F283C] font-bold text-sm rounded-[2px]" onClick={handlePrevious}>
                                &lt;&lt; Previous
                            </button>
                            <button className="w-[179px] h-[52px] ml-4 bg-[#0B1F36] text-white font-bold text-sm rounded-[4px]" onClick={handleSave}>
                                Save &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
