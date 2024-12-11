export default function StatisticsBanner() {
  return (
    <div className="relative bg-[#146DB2] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 mt-[-50px] ml-[-50px] z-0">
        <img src="/Ellipse 6.png" alt="Large" className="w-[250px] h-[250px] ml-[20px] z-0"/>
        <img src="/planet.png" alt="Small" className="absolute top-[70px] left-[60px] mt-2 ml-2 w-[88px] h-[50px] z-0 "/>
      </div>
      <div className="absolute top-[110px] right-0 mt-[-50px] z-0">
        <img src="/Saly-26.png" alt="Third" className="w-[102px] h-[127px]  opacity-30 z-0"/>
      </div>
      <div className="absolute bottom-0 right-0 mb-[-30px]">
        <img src="/Ellipse 7.png" alt="Fourth" className="w-[199px] h-[199px] opacity-50 z-0"/>
        <img src="/globe 2.png" alt="Fifth" className="absolute bottom-0 right-0 mb-[4.5rem] mr-[2.5rem] w-[58px] h-[70px] z-0"/>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:justify-start gap-8">

        {/* Left Side with Heading */}
        <div className="text-center sm:text-center lg:text-left w-full lg:w-1/4 z-10">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[50px] font-bold mb-4 z-10">
            Over <span className="font-extrabold">500 Plus</span> <span className="font-extrabold text-[#1BADFF]">Course</span> in One Place
          </h2>
        </div>

        {/* Divider (Vertical Gradient) */}
        <div className="hidden lg:block lg:w-[1px] bg-gradient-to-b from-[#D9D9D9] to-[#3691D8] lg:h-[250px] lg:mx-4"></div>

        {/* Statistics with Star Ratings and Numbers */}
        <div className="flex flex-col lg:flex-row justify-start w-full lg:w-3/4 gap-8">

          {/* Student Reviews */}
          <div className="flex flex-col items-start lg:items-start bg-none text-blue-600 p-6 rounded-lg w-full sm:w-auto lg:w-1/3"> <div className="flex items-center"> <span className="text-white text-[22px] mr-2">4.9</span>  <span className="text-yellow-400 text-3xl ml-2">★★★★☆</span> </div> <div className="flex justify-center lg:justify-start mt-4 space-x-2">  <img src="Group 29.png" alt="Profile 3" className="w-149 h-61 rounded-full" /> </div> <p className="text-[40px] text-white leading-[0.7] font-semibold mt-4">500M+ <span className="text-[22px] font-normal " >Student Reviews</span></p> </div>
          {/* Divider between Student Reviews and Verified Tutors */}
          <div className="hidden lg:block lg:w-[1px] bg-gradient-to-b from-[#D9D9D9] to-[#3691D8] lg:h-[250px] lg:mx-4"></div>

          {/* Verified Tutors */}
          <div className="flex flex-col items-start lg:items-start bg-none text-blue-600 p-6 rounded-lg w-full sm:w-auto lg:w-1/3"> <div className="flex items-center"> <span className="text-white text-[22px] mr-2">4.9</span>  <span className="text-yellow-400 text-3xl ml-2">★★★★☆</span> </div> <div className="flex justify-center lg:justify-start mt-4 space-x-2">  <img src="Group 29.png" alt="Profile 3" className="w-149 h-61 rounded-full" /> </div> <p className="text-[40px] text-white leading-[0.7] font-semibold mt-4"><span className="whitespace-nowrap">7.5 Lakh+ </span><br></br><span className="text-[22px] font-normal " >Verified Tutors</span></p> </div>

          {/* Divider between Verified Tutors and Verified Students */}
          <div className="hidden lg:block lg:w-[1px] bg-gradient-to-b from-[#D9D9D9] to-[#3691D8] lg:h-[250px] lg:mx-4"></div>

          {/* Verified Students */}
          <div className="flex flex-col items-start lg:items-start bg-none text-blue-600 p-6 rounded-lg w-full sm:w-auto lg:w-1/3"> <div className="flex items-center"> <span className="text-white text-[22px] mr-2">4.9</span>  <span className="text-yellow-400 text-3xl ml-2">★★★★☆</span> </div> <div className="flex justify-center lg:justify-start mt-4 space-x-2">  <img src="Group 29.png" alt="Profile 3" className="w-149 h-61 rounded-full" /> </div> <p className="text-[40px] text-white leading-[0.7] font-semibold mt-4">55 Lakh+  <span className="text-[22px] font-normal " >Verified Students</span></p> </div>
          
        </div>
      </div>
    </div>
  );
}
