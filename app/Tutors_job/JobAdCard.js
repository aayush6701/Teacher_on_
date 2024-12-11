"use client";
import Image from 'next/image';
import profilePic from '/public/profilePic.png';
import Ellipse from '/public/Ellipse 36.png';

const JobAdCard = () => {
  return (
    <>
      <style jsx>{`
        .color {
          background-color: #146db2;
        }
        .profile-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 468px; /* Set size */
          height: 468px; /* Set size */
        }
        .ellipse {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0; /* Ellipse behind the profile picture */
        }
        .profile-pic {
          position: absolute;
          z-index: 1; /* Profile picture on top of the ellipse */
        }
        .text-section {
          max-width: 500px;
          padding: 20px;
        }
        .btn-apply {
          background-color: #1BADFF;
          color: white;
          padding: 14px 32px;
          font-size: 17px;
          border-radius: 4px;
          text-align: center;
          display: inline-block;
          margin-top: 20px;
        }
        .group-image {
          position: absolute;
          top: 50%;
          left: 120%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        @media (max-width: 768px) {
          .profile-container {
            width: 80%;
            height: auto;
          }
          .ellipse {
            width: 100%;
            height: auto;
          }
          .text-section {
            text-align: center;
            padding: 16px;
          }
          .btn-apply {
            display: block;
            margin: 20px auto;
          }
          .group-image {
            position: static;
            transform: none;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="container color rounded-2xl shadow-lg flex flex-col md:flex-row items-center max-w-[1281px] overflow-hidden p-8">
          {/* Profile Image Section */}
          <div className="relative mb-8 md:mb-0 md:mr-6">
            <div className="profile-container">
             
              {/* Profile Picture placed on top */}
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={350}
                height={350}
                className="profile-pic"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-section text-white">
            <h2 className="text-4xl font-bold mb-6">
              Get Matched With The Most <br /> Valuable Jobs, Just <br /> Apply in 1 Sec.
            </h2>
            <p className="mb-6 text-xs font-medium">
              Let your friends, family, and professional connections know that <br />
              you're looking for a job. They might know of opportunities that <br />
              aren't advertised.
            </p>
            <p className="mb-6 text-sm font-black">
              Easy steps to get your Dream Job with one platform
            </p>

            <button className="btn-apply">
              Apply Now
            </button>
          </div>

          {/* Group 574 image positioned */}
          <div className="group-image">
            <Image src="/Group 574.png" alt="Vector_2" width={72} height={70} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobAdCard;
