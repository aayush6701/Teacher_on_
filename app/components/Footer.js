import React from 'react';
import { FaSquareFacebook, FaSquareInstagram, FaSquareYoutube, FaLinkedin } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#051B2C]">
      <div className="bg-[dc-blue] text-white py-8 relative">
        <div className="container mx-auto px-8 pt-8">
          <div className="md:flex md:justify-between md:items-start">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-20 md:flex-1">
              <div className="text-center sm:text-left md:text-left">
                <Image
                  src="/Group 2.1.png"
                  alt="Direction Classes Logo"
                  width={240.18}
                  height={61}
                  top={9328}
                  left={80}
                  className="mx-auto sm:mx-0 md:mx-0"
                />
                <br />
                <p className="mt-4 font-medium footer-text">Direction Classes is a commitment to academic excellence and holistic development. We strive to create an environment that fosters curiosity, critical thinking, and a passion for learning.</p>
                <br /><br /><br />
                <h3 className="text-lg font-bold footer-heading">Follow us on Social Media:</h3>
                <div className="flex justify-center sm:justify-start mt-4 space-x-3">
                  <a href="#"><FaSquareFacebook className='w-8 h-8' /></a>
                  <a href="#"><FaSquareInstagram className='w-8 h-8' /></a>
                  <a href="#"><FaSquareYoutube className='w-8 h-8' /></a>
                  <a href="#"><FaLinkedin className='w-8 h-8' /></a>
                </div>
              </div>
              <div className="text-center sm:text-left md:text-left">
                <h3 className="text-lg font-bold footer-heading">Learning Path</h3><br />
                <ul className="text-with-line-spacing mt-2 space-y-2 font-medium footer-text list-disc pl-3">
                  <li className='disk'>IBDP</li>
                  <li className='disk'>AS & A LEVEL</li>
                  <li className='disk'>IGCSE</li>
                  <li className='disk'>ICSE</li>
                  <li className='disk'>Mulund</li>
                  <li className='disk'>Bhandup</li>
                  <li className='disk'>Powai</li>
                </ul>
              </div>
              <div className="text-center sm:text-left md:text-left">
                <h3 className="text-lg font-bold footer-heading">Topics</h3><br />
                <ul className="text-with-line-spacing mt-2 space-y-2 font-medium footer-text list-disc pl-3">
                  <li className='disk'>CHEMISTRY</li>
                  <li className='disk'>MATHS</li>
                  <li className='disk'>ENGLISH</li>
                  <li className='disk'>BIO</li>
                  <li className='disk'>ACCOUNTS</li>
                  <li className='disk'>BUSINESS <br></br> STUDIES</li>
                  <li className='disk'>Economics</li>
                  <li className='disk'>GEOGRAPHY</li>
                  <li className='normal'>class in Mumbai</li>
                  <li className='disk'>ENGLISH</li>
                </ul>
              </div>
            </div>
            <div className="text-center sm:text-left md:text-left md:mt-0 mt-8">
              <h3 className="text-lg font-bold footer-heading">Get In Touch</h3><br />
              <ul className="mt-2 space-y-2 font-medium footer-text">
                <li className="flex items-center text-[#1BADFF]">
                  <FaMapMarkerAlt className="mr-2" /> <strong>Address:</strong>
                </li>
                <li className="normal1">Direction Classes</li>
                <li className="normal1">UG-10, Avior corporate park Lbs road</li>
                <li className="normal1">Mulund West, 400078</li><br />

                <li className="flex items-center text-[#1BADFF]">
                  <IoCallSharp className="mr-2" /> <strong>Call Us:</strong>
                </li>
                <li className="normal1">+91 99877 58132</li><br />

                <li className="flex items-center text-[#1BADFF]">
                  <MdOutlineMail className="mr-2" /> <strong>Email Us:</strong>
                </li>
                <li className="normal1">enquirydirection@gmail.com</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-[#146DB2] text-white border-t border-gray-700 py-4 text-center footer-text">
        <p font-medium>Copyright © 2024 <strong>Direction Classes</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
