// app/store/page.js

import React from 'react';
import Store from './Store';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <Store />
      <Footer />
    </>
  );
};

export default Page;

