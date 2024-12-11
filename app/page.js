"use client";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TutorBanner from './components/TutorBanner';
import CustomSection from './components/CustomSection';
import LearningBanner from './components/LearningBanner';
import FeaturedProfiles from './components/FeaturedProfiles';
import Experience from './components/Experience';
import CourseCategories from './components/CourseCategories';
import CourseAd from './components/Course_ad';
import Premium from './components/Premium';
import StudentComponent from './components/StudentComponent';
import FeaturedSection from './components/FeaturedSection';
import StoreBanner from './components/StoreBanner';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import useWindowSize from './useWindowSize';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url('C:\Users\aayus\Desktop\TeacherOn_Page\app\fonts\Gilroy-Regular.woff2') format('woff2'),
         url('C:\Users\aayus\Desktop\TeacherOn_Page\app\fonts\Gilroy-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('C:\Users\aayus\Desktop\TeacherOn_Page\app\fonts\Gilroy-Bold.woff2') format('woff2'),
         url('C:\Users\aayus\Desktop\TeacherOn_Page\app\fonts\Gilroy-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Gilroy', sans-serif;
    margin: 0;
    padding: 0;
    overflow: auto;
  }

  .font-gilroy {
    font-family: 'Gilroy', sans-serif;
  }
`;


export default function HomePage() {
  const size = useWindowSize();

  // Log window size for debugging
  console.log('Current size:', size);

  // Return a loader or null until window size is determined
  if (!size.width) {
    return <div>Loading...</div>; // Optional: Replace with a spinner or placeholder
  }

  return (
    <>
      <GlobalStyle />
      <div className="font-gilroy overflow-hidden m-0 p-0">
        <div className="flex flex-col">
          <Navbar />
          {size.width < 768 ? <CustomSection /> : <TutorBanner />}
          <LearningBanner />
          <FeaturedProfiles />
          <Experience />
          <CourseCategories />
          <CourseAd />
          <Premium />
          <StudentComponent />
          <FeaturedSection />
          <StoreBanner />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
