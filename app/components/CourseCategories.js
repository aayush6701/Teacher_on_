"use client";

import { useState } from 'react';

export default function CourseCategories() {
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const categories = [
    'All Category',
    'Online Classes',
    'Tuition',
    'Languages',
    'Hobby Classes',
    'IT Courses',
    'Exam Coaching'
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-6 py-8 bg-white font-gilroy relative">
      <img 
        src="/Saly-27.png" 
        alt="Top Left" 
        className="absolute top-0 left-0 w-[191px] h-[136px]"
      />
      <img 
        src="/Saly-27.png" 
        alt="Top Right" 
        className="absolute top-0 right-0 w-[191px] h-[136px] "
        style={{ transform:'scaleX(-1)'}}
      />
      <h2 className="text-center text-lg mb-4" style={{ color: '#1BADFF' }}>
        ~ COURSE ADVICE ~
      </h2>
      <h1 className="text-center text-3xl font-bold mb-2 text-black">
        Explore <span className="text-blue-500">Categories</span>
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Established with a vision to provide high-quality and accessible education, our
        platform is designed to cater to the diverse learning needs of students.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              fontSize: '18px',
              color: category === 'All Category' ? '#136FB6' : '#9FAAB2',
            }}
            className="px-4 py-2 rounded-full text-sm font-semibold"
          >
            {category}
          </button>
        ))}
        <button className="ml-auto border border-gray-300 px-4 py-2 rounded text-gray-700">
          Popular Course
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* Column 1: Tuitions and Languages */}
        <div className="relative flex flex-col w-full md:w-[48%] bg-[#F6FBFF] rounded-lg p-6">
          <img
            src="/Rectangle 91.png"
            className="absolute top-0 w-full h-[7px] rounded-tl-[20rem]  rounded-tr-[20rem]  left-0 object-fill z-0 "
            alt="Background"
          />
          <h3 className="font-semibold text-lg mb-4 mt-2 text-[#136FB6]">Tuitions</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Class 12 Tuition', 'Class 7 Tuition', 'Class 11 Tuition', 'Class 6 Tuition', 'Class 10 Tuition', 'Class I-V Tuition', 'Class 9 Tuition', 'Class 8 Tuition', 'BCom Tuition', 'BTech Tuition'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-[18px] text-[#8397A6] border border-[#8397A6]"
              >
                {item}
              </span>
            ))}
          </div>

          <h3 className="font-semibold text-lg mb-4 text-[#136FB6]">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {['Spoken English', 'IELTS', 'French Language', 'PTE', 'Spanish Language', 'TOEFL', 'German Language', 'Hindi Language'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-[18px] text-[#8397A6] border border-[#8397A6]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2: Hobbies and More */}
        <div className="relative flex flex-col w-full md:w-[48%] bg-[#F6FBFF] rounded-lg p-6 z-10 ">
          <img
            src="/Rectangle 116.png"
            className="absolute top-0 w-full h-[7px] rounded-tl-[20rem]  rounded-tr-[20rem]  left-0 object-fill z-0 "
            alt="Background"
          />
          
          <h3 className="font-semibold text-lg mb-4 mt-2 text-[#136FB6]">Hobbies</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Singing', 'Yoga', 'Dance', 'Guitar', 'Personality Development Training'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-[18px] text-[#8397A6] border border-[#8397A6]"
              >
                {item}
              </span>
            ))}
          </div>

          <h3 className="font-semibold text-lg mb-4 text-[#136FB6]">More</h3>
          <div className="flex flex-wrap gap-2">
            {['Online Tuitions', 'Online Language Classes', 'Online Hobby Classes', 'Spanish Online IT Coaching', 'Online Exam Entrance Coaching'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-[18px] text-[#8397A6] border border-[#8397A6]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
