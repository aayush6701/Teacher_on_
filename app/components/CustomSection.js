
"use client";

import Image from 'next/image';

export default function CustomSection() {
  return (
    <div className="relative w-full font-gilroy bg-[#136FB6]">
      {/* Main Content Container */}
      <div className="container mx-auto relative flex flex-col items-center justify-center sm:flex-row sm:justify-between">

        {/* Right Section */}
        <div className="right-section flex flex-col items-center justify-center sm:static">
          {/* New top-right image (465x684) */}
          <div className="top-right-image sm:hidden">
            <Image
              src="/Group 572.png"
              alt="Top Right Image"
              width={465}
              height={684}
            />
          </div>

          {/* New top image: Saly-31 above the white box with bullets */}
          <div className="saly-31-image transform scale-75 sm:scale-90 md:scale-100 translate-y-[-20px] sm:block hidden">
            <Image
              src="/Saly-31.png"
              alt="Top Image"
              width={151}
              height={151}
            />
          </div>

          {/* New bottom image: Saly-21 below the white box with bullets */}
          <div className="saly-21-image transform scale-75 sm:scale-90 md:scale-100 translate-y-[20px] opacity-20 sm:block hidden">
            <Image
              src="/Saly-h.png"
              alt="Bottom Image"
              width={153}
              height={109}
            />
          </div>
        </div>

        {/* Left Section */}
        <div className="left-section flex flex-col items-center justify-center">
          {/* Top left image with transform classes */}
          <div className="top-left-image transform scale-75 sm:scale-80 md:scale-90 translate-x-[-10px] translate-y-[10px] sm:block hidden">
            <Image
              src="/Ellipse 2.png"
              alt="Small Top Left Image"
              width={124}
              height={124}
            />
          </div>

          {/* Second image below the first with different transform classes */}
          <div className="second-image transform scale-90 sm:scale-95 md:scale-105 translate-y-[-10px] sm:block hidden">
            <Image
              src="/Ellipse 1H.png"
              alt="Below Top Left Image"
              width={613}
              height={579}
            />
          </div>

          <div className="overlapping-text-box text-white w-[400px] md:w-[600px] flex flex-wrap justify-center sm:justify-between">
            <p className="text-[40px] md:text-[60px] font-gilroy mb-1 text-center w-full sm:w-auto">
              Join Live Online Or
            </p>
            <p className="text-[40px] md:text-[60px] font-gilroy-bold mb-1 text-center w-full sm:w-auto">
              <span className="border-b-8 border-[#1BADFF] mb-[-1px]">Offline</span> Classes with
            </p>
            <p className="text-[40px] md:text-[60px] font-gilroy-bold text-center w-full sm:w-auto">
              The <span className="text-[#1BADFF]">Best Tutors</span>
            </p>
          </div>

          {/* Underline image below "Best Tutors" */}
          <div className="underline-image my-2">
            <Image
              src="/underline.png"
              alt="Underline"
              width={277}
              height={23}
            />
          </div>

          {/* New text below the existing text */}
          <div className="new-text text-white w-[400px] md:w-[600px] mb-4">
            <p className="text-white text-[14px] md:text-[20px] font-gilroy mt-4 text-center">
              At Direction Classes, we believe in empowering students through education and guiding them toward a successful future.
            </p>
          </div>

          {/* Adjusted white box with bullet points */}
          <div className="bullet-points bg-white w-[214px] h-[164px] rounded-[20px] p-4 shadow-md sm:w-[180px] md:w-[214px] mt-4 mb-4">
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

          {/* Group 572.png Image for small screens */}
          <div className="flex justify-center my-4 sm:flex">
            <Image
              src="/Group 572.png"
              alt="Group 572 Image"
              width={465}
              height={684}
            />
          </div>

          {/* Button Section */}
          <div className="button-section flex space-x-4 justify-center">
            <button className="bg-white text-[#1268AA] text-[14px] md:text-[17px] w-[80%] md:w-[179px] h-[52px] rounded-[4px] flex items-center justify-center">
              Join as a Student
            </button>
          </div>

          {/* Saly-25 image on the right of "Best Tutors" */}
          <div className="saly-25-image sm:hidden">
            <Image
              src="/Saly-25.png"
              alt="Saly-25"
              width={117}
              height={63}
            />
          </div>

          {/* White background box with ALERT text */}
          <div className="alert-box bg-white w-[215px] h-[29px] rounded-[2.75px] flex items-center justify-center p-1 sm:block hidden">
            <span className="text-[13.75px] font-gilroy-semibold text-black">ALERT | ALERT | ALERT</span>
          </div>

          <div className="info-box bg-[#0F283C] w-full max-w-[1281px] rounded-[20px] flex flex-col justify-center items-center p-6">
            <p className="text-white text-[30px] font-gilroy-bold mb-4 mt-2 text-center">
              Find online teachers and home tutors for free!
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
              <input
                type="text"
                placeholder="Subject/Skill"
                className="w-[80%] md:w-[399px] h-[52px] bg-white text-[#0F283C] px-4 rounded-[4px] border-none mx-auto"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-[80%] md:w-[399px] h-[52px] bg-white text-[#0F283C] px-4 rounded-[4px] border-none mx-auto"
              />
              <button className="bg-[#1BADFF] text-white text-[17px] w-[80%] md:w-[179px] h-[52px] rounded-[4px] flex items-center justify-center mx-auto">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .left-section,
          .right-section {
            position: static;
            margin-bottom: 20px;
          }

          .top-left-image,
          .second-image,
          .overlapping-text-box,
          .new-text,
          .button-section,
          .underline-image,
          .saly-25-image,
          .alert-box,
          .info-box,
          .top-right-image,
          .bullet-points,
          .saly-31-image,
          .saly-21-image {
            position: static;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .saly-31-image, .saly-21-image, .top-left-image, .second-image, .alert-box {
            display: none;
          }

          .top-right-image {
            display: none;
          }

          .saly-25-image {
            display: none;
          }

          .button-section button {
            width: 179px;
            height: 52px;
          }
        }
          
      `}</style>
    </div>
  );
}
