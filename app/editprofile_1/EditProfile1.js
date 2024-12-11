"use client"
import { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { FaRegTrashAlt, FaRegEdit, FaCheckCircle, FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

export default function EditProfile1() {
  const [experiences, setExperiences] = useState([
    { id: 1, title: 'Teacher / Professor', location: 'Noida, Uttar Pradesh, India', type: 'On-site', duration: 'Full-time - 2 yrs 5 mos' },
    { id: 2, title: 'Teacher / Professor', location: 'Noida, Uttar Pradesh, India', type: 'On-site', duration: 'Full-time - 2 yrs 5 mos' },
    { id: 3, title: 'Teacher / Professor', location: 'Noida, Uttar Pradesh, India', type: 'On-site', duration: 'Full-time - 2 yrs 5 mos' },
  ]);

  const handleDelete = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
    <style jsx>{`
      .bg-blue{
        background: #0F283C;
      }
      .bg-white{
        background: #F2F6FB;
      }
      .bg-custom{
        background: #136FB6;
      }
      .bg-gray{
        background: #9EB5C7;
      }
    `}</style>
    <div className="container mx-auto p-4">
    <div className='flex flex-col items-center bg-custom text-white pt-14 pb-20 mb-20 md:pt-14 md:pb-20 mb-28 relative'>
      <h1 className="text-4xl font-bold mb-4">EDIT PROFILE</h1>
      <h3 className="text-sm font-medium mb-4">Get the right job you deserve</h3>
      <img src="Vector_3.png" alt="Profile" className="absolute top-4 right-20 w-32 h-32 md:block hidden" />
    </div>
      <div className='bg-white mx-4 md:mx-20 pb-12 rounded-t-lg rounded-b-none md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/6 md:-translate-y-1/4'>
        <div className="bg-blue p-6 rounded-lg shadow-md">
            <div className="md:hidden flex justify-end">
              <button onClick={toggleDropdown} className="text-white text-3xl focus:outline-none">
                <IoReorderThree />
              </button>
            </div>
            <div className={`${dropdownOpen ? '' : 'hidden'} md:flex md:flex-wrap md:space-x-16 text-white mb-4`}>
              {['Personal Info', 'Education', 'Subjects', 'Experience', 'Teaching Detail', 'Profile Description', 'Courses'].map((item, index) => (
                <div key={index} className="relative px-2 py-1 md:px-4 md:py-2">
                  {item}
              {item === 'Experience' && (
                <div className="absolute left-0 right-0 h-1 bg-white mt-1 md:h-1 w-24"></div>
              )}
              {['Personal Info', 'Education', 'Subjects'].includes(item) && (
                <div className="flex justify-center mt-2 md:mt-0">
                  <FaCheckCircle className="text-white text-2xl md:block hidden" />
                </div>
              )}
            </div>
          ))}
          </div>
        </div><br/><br/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mx-4 md:mx-12 mt-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex justify-between items-center bg-gray-100 p-4 mb-4 rounded-md shadow-sm border border-blue-300">
              <div>
                <h2 className="font-semibold">{exp.title}</h2>
                <p className='text-blue-500'>{exp.location} . {exp.type}</p>
                <p>{exp.duration}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center"><FaRegEdit /></button>
                <button onClick={() => handleDelete(exp.id)} className="bg-red-500 text-white p-2 rounded-full flex items-center justify-center"><FaRegTrashAlt /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-12">
          <h2 className="text-xl font-semibold mt-8">Please add Teaching and Professional Experience.</h2><br/>
          <form className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Organization <span className="text-red-500">*</span></label>
                <input type="text" placeholder='Enter here' className="mt-1 block w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Designation <span className="text-red-500">*</span></label>
                <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Enter here</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Start Date <span className="text-red-500">*</span></label>
                <div className="flex space-x-2">
                    <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                      ))}
                    </select>
                    <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Year</option>
                      {Array.from({ length: 50 }, (_, i) => (
                        <option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</option>
                      ))}
                    </select>
                  </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">End Date (Leave blank if still working) <span className="text-red-500">*</span></label>
                <input type="month" placeholder='Enter here' className="mt-1 block w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Association <span className="text-red-500">*</span></label>
                <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select here</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Job Description <span className="text-red-500">*</span></label>
                <input type="text" placeholder='Type here' className="mt-1 block w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div><br/>
            <div className="flex space-x-4 mt-8">
          <button
            type="button"
            className="flex items-center bg-transparent text-black font-bold hover hover:text-white border border-black hover:border-transparent px-6 py-2 rounded-md hover:bg-black"
          >
            <FaAngleDoubleLeft className="mr-2" />
            Previous
          </button>
          <button
            type="submit"
            className="flex items-center bg-black text-white font-bold hover hover:text-black border border-black hover:border-black px-6 py-2 rounded-md hover:bg-white"
          >
            Save <FaAngleDoubleRight className="ml-2" />
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
