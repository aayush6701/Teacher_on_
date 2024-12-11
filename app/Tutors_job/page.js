import React from 'react';
import TutorJobs from './TutorJobs';
import JobAdCard from './JobAdCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Page = () => {
  return (
    <main className="main-container w-full min-h-screen bg-white">
      <div className="mx-auto flex flex-col ">
        <Navbar />
        <TutorJobs />
        <JobAdCard />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
