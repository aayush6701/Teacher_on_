"use client";
import { FaSearch, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function TutorJobs() {

  // Example job data
const jobs = [
    {
      title: 'Online Vedic Maths, Vedic Mathematics tutor required',
      description: 'I am looking for a Vedic Maths Teacher.',
      time: '4 mins ago',
      location: 'Thane, Maharashtra, India',
      isHighlighted: true,
      categories: ['Vedic Maths', 'Vedic Mathematics']
    },
    {
      title: 'Online Civil Engineering assignment help teacher required',
      description: 'Environmental engineering',
      time: '6 mins ago',
      location: 'Mayfair, London, UK',
      isHighlighted: false,
      categories: ['Civil Engineering']
    },
    {
      title: 'Online Chess 1000-1800 rating teacher needed',
      description: 'I want my son to get proper coaching',
      time: '8 mins ago',
      location: 'Jaipur, Rajasthan',
      isHighlighted: false,
      categories: ['Chess 1000-1800 rating']
    },
    {
        title: 'Online Vedic Maths, Vedic Mathematics tutor required',
        description: 'I am looking for a Vedic Maths Teacher.',
        time: '4 mins ago',
        location: 'Thane, Maharashtra, India',
        isHighlighted: true,
        categories: ['Vedic Maths', 'Vedic Mathematics']
      },
      {
        title: 'Online Civil Engineering assignment help teacher required',
        description: 'Environmental engineering',
        time: '6 mins ago',
        location: 'Mayfair, London, UK',
        isHighlighted: false,
        categories: ['Civil Engineering']
      },
      {
        title: 'Online Chess 1000-1800 rating teacher needed',
        description: 'I want my son to get proper coaching',
        time: '8 mins ago',
        location: 'Jaipur, Rajasthan',
        isHighlighted: false,
        categories: ['Chess 1000-1800 rating']
      },
      {
        title: 'Online Vedic Maths, Vedic Mathematics tutor required',
        description: 'I am looking for a Vedic Maths Teacher.',
        time: '4 mins ago',
        location: 'Thane, Maharashtra, India',
        isHighlighted: true,
        categories: ['Vedic Maths', 'Vedic Mathematics']
      },
      {
        title: 'Online Civil Engineering assignment help teacher required',
        description: 'Environmental engineering',
        time: '6 mins ago',
        location: 'Mayfair, London, UK',
        isHighlighted: false,
        categories: ['Civil Engineering']
      },
      {
        title: 'Online Chess 1000-1800 rating teacher needed',
        description: 'I want my son to get proper coaching',
        time: '8 mins ago',
        location: 'Jaipur, Rajasthan',
        isHighlighted: false,
        categories: ['Chess 1000-1800 rating']
      },
    // Add more job objects here...
  ];
  
  // JobCard component
  const JobCard = ({ job, index }) => (
    <div className={`p-6 border rounded-lg job-card ${index === 0 ? 'highlighted' : ''} ${index === 1 ? 'second-card' : ''} ${index === 2 ? 'third-card' : ''} ${index === 3 ? 'fourth-card' : ''} ${index === 4 ? 'fifth-card' : ''} ${index === 5 ? 'sixth-card' : ''} ${index === 6 ? 'seventh-card' : ''} ${index === 7 ? 'eighth-card' : ''} ${index === 8 ? 'ninth-card' : ''}`}>
    <h3 className="text-xl font-semibold text-blue-900">{job.title}</h3>
    <div className="mb-4 mt-4">
      {job.categories.map((category, index) => (
        <button
          key={index}
          className="border border-black bg-transparent text-black px-3 py-1 text-sm mr-2"
        >
          {category}
        </button>
      ))}
    </div>
    <p className="text-sm text-gray-600">{job.description}</p>
    <div className="flex items-center justify-between mt-4 text-sm text-blue-500">
      <span className="flex items-center">
        <FaClock className="mr-1" />
        {job.time}
      </span>
      <span className="flex items-center">
        <FaMapMarkerAlt className="mr-1" />
        {job.location}
      </span>
      </div><br/>
      <button className="font-semibold mt-4 w-full bg-transparent text-blue-600 py-2 rounded-md border border-2 border-blue-600">
        View Details
      </button>
      <style jsx>{`
        .highlighted{
            background: #E1F6CC;
        }
        .second-card{
            background: #E9EBF8;
        }
        .third-card{
            background: #E6F1FF;
        }
        .fourth-card{
            background: #E1F6CC;
        }
        .fifth-card{
            background: #E9EBF8;
        }
        .sixth-card{
            background: #E9EBF8;
        }
        .seventh-card{
            background: #E1F6CC;
        }
        .eighth-card{
            background: #E9EBF8;
        }
        .ninth-card{
            background: #E6F1FF;
        }
      `}</style>
    </div>
  );

  return (
    <>
    <style jsx>{`
      .bg-blue{
        background: #0F283C;
      }
      .bg-custom{
        background: #136FB6;
      }
      .bg-gray{
        background: #9EB5C7;
      }
      .button-color{
        background: #1BADFF;
       }
       .text-blue{
        color: #136FB6;
       }
       .text-gray{
        color: #9FAAB2;
       }
    `}</style>
    <div className="container mx-auto bg-white ">
    <div className='flex flex-col items-center bg-custom text-white pt-14 pb-20 md:pt-14 md:pb-20 mb-28 relative'>
  
      <h1 className="text-4xl font-bold mb-4">TUTOR JOBS</h1>
      <h3 className="text-sm font-medium mb-4">Get the right job you deserve</h3>
      <img src="Vector_3.png" alt="Profile" className="absolute top-4 right-20 w-32 h-32 md:block hidden" />
      
    </div>
      <div className='mx-4 md:mx-20 pb-12 md:pt-52 rounded-t-lg rounded-b-none md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/6 md:-translate-y-1/4'>
        <div className="bg-blue p-4 rounded-lg shadow-md">
        <div className="mb-4">
    <h1 className="text-base font-bold text-white mb-4 mt-4">Find online teachers and home tutors for free!</h1>
    <div className="flex flex-col md:flex-row md:items-center">
        <input
            type="text"
            placeholder="Subject / Skill"
            className="p-2 border rounded-md mb-4 md:mb-0 w-full md:w-[399px] h-[52px] md:mr-4"
        />
        <input
            type="text"
            placeholder="Location"
            className="p-2 border rounded-md mb-4 md:mb-0 w-full md:w-[399px] h-[52px] md:mr-4"
        />
        <button className="flex items-center justify-center px-4 py-2 bg-[#1BADFF] w-full md:w-[179px] h-[52px] text-white rounded-md">
            <FaSearch className="mr-2" />Search
        </button>
    </div>


            </div>
        </div><br/>
        <div className="mx-2 mt-4">
            <div className='flex'>
                <h2 className="text-base text-blue-500 font-semibold md:mr-8">All Tutor Jobs</h2>
                <h2 className="text-base text-gray font-semibold md:mr-8">Online Tutor Jobs</h2>
                <h2 className="text-base text-gray font-semibold">Home Tutor Jobs</h2>
            </div><br/><br/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {jobs.map((job, index) => (
                    <JobCard key={index} job={job} index={index} />
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <nav className="inline-flex space-x-4">
                    {/* Left Arrow for Previous Page */}
                    <a href="#" className="px-4 py-2 border rounded-md flex items-center justify-center">
                    <span className="text-xl text-gray">&lt;</span> {/* Left Arrow */}
                    </a>

                    {/* Page Number Links */}
                    <a href="#" className="text-gray px-4 py-2 bg-blue-500 text-white rounded-md">1</a>
                    <a href="#" className="text-gray px-4 py-2 border rounded-md">2</a>
                    <a href="#" className="text-gray px-4 py-2 border rounded-md">3</a>
                    <a href="#" className="text-gray px-4 py-2 border rounded-md">4</a>
                    <a href="#" className="text-gray px-4 py-2 border rounded-md">5</a>

                    {/* Right Arrow for Next Page */}
                    <a href="#" className="px-4 py-2 border border-blue-600 rounded-md flex items-center justify-center">
                    <span className="text-blue-600 text-xl">&gt;</span> {/* Right Arrow */}
                    </a>
                </nav>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
