
"use client";

import Image from 'next/image';

export default function CustomSection() {
      
  return (
    <div className="relative w-full font-gilroy">
      {/* Blue background till h-832 */}
      <div className="bg-[#136FB6] h-[832px] w-full sm:h-[632px] md:h-[732px] lg:h-[832px]"></div>

      {/* White background from h-832 to h-1032 */}
      <div className="bg-white h-[200px] w-full sm:h-[100px] md:h-[150px] lg:h-[200px]"></div>

      
      {/* <div className="bg-white h-[200px] w-full flex items-center justify-center sm:h-[100px] md:h-[150px] lg:h-[200px]"></div> */}
      
      {/* New top-right image (465x684) */}
      <div className="absolute top-4 right-4">
        <Image
          src="/Group 572.png"
          alt="Top Right Image"
          width={465}
          height={684}
        />
      </div>

      {/* Adjusted white box with bullet points */}
      <div className="absolute top-[246px] left-[calc(50%+60px)] bg-white w-[214px] h-[164px] rounded-[20px] p-4 shadow-md transform -translate-x-[-50px] sm:w-[180px] md:w-[214px]">
        <ul className="space-y-3">
          {["Customized Plan", "Science Lab", "Test Series", "8+ Lessons 4"].map((text, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Image
                src="/bullets.png"
                alt="Bullet Icon"
                width={20}
                height={20}
              />
              <span className="text-black text-[14px] md:text-[16px]">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* New top image: Saly-31 above the white box with bullets */}
      <div className="absolute top-[75px] left-[calc(50%+60px)] transform scale-75 sm:scale-90 md:scale-100 translate-x-[50px] translate-y-[-20px]">
        <Image
          src="/Saly-31.png"
          alt="Top Image"
          width={151}
          height={151}
        />
      </div>

      {/* New bottom image: Saly-21 below the white box with bullets */}
      <div className="absolute top-[421px] left-[calc(50%+60px)] transform scale-75 sm:scale-90 md:scale-100 translate-x-[10px] translate-y-[20px] opacity-20">
        <Image
          src="/Saly-h.png"
          alt="Bottom Image"
          width={153}
          height={109}
        />
      </div>

      {/* Top left image with transform classes */}
      <div className="absolute top-0 left-0 mt-4 transform scale-75 sm:scale-80 md:scale-90 translate-x-[-10px] translate-y-[10px]">
        <Image
          src="/Ellipse 2.png"
          alt="Small Top Left Image"
          width={124}
          height={124}
        />
      </div>

      {/* Second image below the first with different transform classes */}
      <div className="absolute top-[144px] left-4 transform scale-90 sm:scale-95 md:scale-105 translate-y-[-10px]">
        <Image
          src="/Ellipse 1H.png"
          alt="Below Top Left Image"
          width={613}
          height={579}
        />
      </div>

      {/* Lamp Image Overlap
      <div className="absolute bottom-[-35px] left-4 bg-white p-2 z-10">
        <Image
          src="/lamp.png"
          alt="Bottom Left Image"
          width={77}
          height={71}
        />
      </div> */}

      {/* Overlapping text box */}
      <div className="absolute top-[200px] left-[4rem] text-white w-[400px] md:w-[600px]">
        <p className="text-[40px] md:text-[60px] font-gilroy mb-1">
          Join Live Online Or
        </p>
        <p className="text-[40px] md:text-[60px] font-gilroy-bold mb-1">
          <span className="border-b-8 border-[#1BADFF] mb-[-1px]">Offline</span> Classes with
        </p>
        <p className="text-[40px] md:text-[60px] font-gilroy-bold">
          The <span className="text-[#1BADFF]">Best Tutors</span>
        </p>
      </div>

      {/* New text below the existing text */}
      <div className="absolute top-[490px] left-[4rem] text-white w-[400px] md:w-[600px]">
        <p className="text-white text-[14px] md:text-[20px] font-gilroy mt-4">
          At Direction Classes, we believe in empowering students through education and guiding them toward a successful future.
        </p>
      </div>

      {/* Button Section */}
      <div className="absolute top-[600px] left-[4rem] flex space-x-4">
        <button className="bg-white text-[#1268AA] text-[14px] md:text-[17px] w-[140px] md:w-[179px] h-[40px] md:h-[52px] rounded-[4px] flex items-center justify-center">
          Join as a Student
        </button>
       
      </div>

      {/* Underline image below "Best Tutors" */}
      <div className="absolute top-[465px] left-[205px]">
        <Image
          src="/underline.png"
          alt="Underline"
          width={277}
          height={23}
        />
      </div>

      {/* Saly-25 image on the right of "Best Tutors" */}
      <div className="absolute top-[400px] left-[500px]">
        <Image
          src="/Saly-25.png"
          alt="Saly-25"
          width={117}
          height={63}
        />
      </div>

      {/* White background box with ALERT text */}
      <div className="absolute top-[4rem] left-[4rem] bg-white w-[215px] h-[29px] rounded-[2.75px] flex items-center justify-end p-1">
        <span className="text-[13.75px] font-gilroy-semibold text-black">ALERT | ALERT | ALERT</span>
      </div>
      <div className="absolute top-[700px] left-1/2 transform -translate-x-1/2 bg-[#0F283C] w-full max-w-[1281px] h-[230px] rounded-[20px] flex flex-col justify-center items-center p-6">
  <p className="text-white text-[30px] font-gilroy-bold mb-6 text-left w-full pl-6">
    Find online teachers and home tutors for free!
  </p>

  <div className="flex w-full flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pl-6">
    <input
      type="text"
      placeholder="Subject/Skill"
      className="w-full md:w-[399px] h-[52px] bg-white text-[#0F283C] px-4 rounded-[4px] border-none"
    />
    <input
      type="text"
      placeholder="Location"
      className="w-full md:w-[399px] h-[52px] bg-white text-[#0F283C] px-4 rounded-[4px] border-none"
    />
    <button className="bg-[#1BADFF] text-white text-[17px] w-full md:w-[179px] h-[52px] rounded-[4px] flex items-center justify-center">
      Book Demo
    </button>
  </div>
</div>

    </div>
  );
}
