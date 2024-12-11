// import React from 'react';

// const StoreBanner = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-between bg-[#146DB2] px-6 sm:px-12 lg:px-16 py-8 sm:py-12 rounded-lg shadow-lg text-white border-[10px] border-solid border-[#146DB2] relative">

//       {/* Left Section with Illustration */}
//       <div className="flex-1 flex justify-center mb-6 lg:mb-0">
//         <img 
//           src="/Group 62.png" 
//           alt="Educational illustration" 
//           className="w-full max-w-[618px] h-auto" 
//         />
//       </div>

//       {/* Right Section with Text Content */}
//       <div className="flex-1 space-y-4 lg:ml-10">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Online Store</h2>
//         <p 
//           className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
//           style={{
//             fontFamily: 'Gilroy-Medium', 
//             fontSize: '20px', 
//             fontWeight: '400', 
//             lineHeight: '30px', 
//             textAlign: 'left',
//             textDecoration: 'none', 
//             textUnderlinePosition: 'from-font', 
//             textDecorationSkipInk: 'none'
//           }}
//         >
//           Established with a vision to provide high-quality and <br/>
//           accessible education, our platform is designed to cater <br/>
//           to the diverse learning needs of students.
//         </p>
//         <p className="text-base sm:text-lg lg:text-lg font-semibold leading-relaxed mb-6 ">
//           Buy and sell notes | Lesson plans |<br/>
//            Worksheets | Presentations Research ,
//            <br/> Papers | Digital activities | 
//            <br/>Educational tools.
//         </p>
//         <div className="flex items-center">
//           <button className="bg-[#1D9BF0] text-white font-bold py-3 px-8 rounded-md hover:bg-[#167ac1]">
//             Visit Store
//           </button>
//           <img 
//             src="/Vector arrow.png" 
//             alt="Arrow icon"
//             className="ml-3 w-6 h-6"
//             style={{
//               margin: '1rem',
//               marginRight: '0rem',
//               maxWidth: '15.47px',
//               maxHeight: '14px',
//             }}
//             />
//           <img 
//             src="/Vector white.png" 
//             alt="Arrow icon"
//             className="ml-3 w-6 h-6"
//             style={{
//               marginLeft: '-9px',
//               width: '2.5rem',
//               marginBottom: '11px'
//             }}
//           />
//         </div>
//       </div>

//       <div className="absolute top-[-20px] right-[-20px] hidden lg:block">
//       <img 
//           src="/planet.png" 
//           alt="Decorative planet" 
//           className="w-[106px] h-[60px]  transition-opacity duration-500 ease-in-out lg:opacity-100" 
//         />
//       </div>
//     </div>
//   );
// };

// export default StoreBanner;

import React from 'react';
import { useRouter } from 'next/navigation';

const StoreBanner = () => {
  const router = useRouter();

  const handleVisitStore = () => {
    router.push('/store');
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#146DB2] px-6 sm:px-12 lg:px-16 py-8 sm:py-12 rounded-lg shadow-lg text-white border-[10px] border-solid border-[#146DB2] relative">

      {/* Left Section with Illustration */}
      <div className="flex-1 flex justify-center mb-6 lg:mb-0">
        <img 
          src="/Group 62.png" 
          alt="Educational illustration" 
          className="w-full max-w-[618px] h-auto" 
        />
      </div>

      {/* Right Section with Text Content */}
      <div className="flex-1 space-y-4 lg:ml-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Online Store</h2>
        <p 
          className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
          style={{
            fontFamily: 'Gilroy-Medium', 
            fontSize: '20px', 
            fontWeight: '400', 
            lineHeight: '30px', 
            textAlign: 'left',
            textDecoration: 'none', 
            textUnderlinePosition: 'from-font', 
            textDecorationSkipInk: 'none'
          }}
        >
          Established with a vision to provide high-quality and <br/>
          accessible education, our platform is designed to cater <br/>
          to the diverse learning needs of students.
        </p>
        <p className="text-base sm:text-lg lg:text-lg font-semibold leading-relaxed mb-6 ">
          Buy and sell notes | Lesson plans |<br/>
           Worksheets | Presentations Research ,
           <br/> Papers | Digital activities | 
           <br/>Educational tools.
        </p>
        <div className="flex items-center">
          <button
            onClick={handleVisitStore}
            className="bg-[#1D9BF0] text-white font-bold py-3 px-8 rounded-md hover:bg-[#167ac1]"
          >
            Visit Store
          </button>
          <img 
            src="/Vector arrow.png" 
            alt="Arrow icon"
            className="ml-3 w-6 h-6"
            style={{
              margin: '1rem',
              marginRight: '0rem',
              maxWidth: '15.47px',
              maxHeight: '14px',
            }}
            />
          <img 
            src="/Vector white.png" 
            alt="Arrow icon"
            className="ml-3 w-6 h-6"
            style={{
              marginLeft: '-9px',
              width: '2.5rem',
              marginBottom: '11px'
            }}
          />
        </div>
      </div>

      <div className="absolute top-[-20px] right-[-20px] hidden lg:block">
      <img 
          src="/planet.png" 
          alt="Decorative planet" 
          className="w-[106px] h-[60px]  transition-opacity duration-500 ease-in-out lg:opacity-100" 
        />
      </div>
    </div>
  );
};

export default StoreBanner;
