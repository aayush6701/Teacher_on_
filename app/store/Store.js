"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Styled Components for Checkbox
const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  color: #687682;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #1E1E1E;
    border-radius: 4px;
    background-color: transparent;
    transition: all 0.3s ease;
  }

  /* Change the style when checkbox is checked */
  ${CheckboxInput}:checked + &::before {
    background-color: #1E1E1E;
    border-color: #1E1E1E;
  }

  /* Display check mark when checked */
  ${CheckboxInput}:checked + &::after {
    content: '\\2713'; /* Unicode check mark */
    position: absolute;
    left: 4px;
    top: -2px;
    color: white;
    font-size: 16px;
  }
  
`;

const Store = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([10, 80]);

  const books = [
    { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
  ];

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(books.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  const FilterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-gilroy text-[#1E1E1E] text-[16px] font-semibold">{title}</h3>
          <Image
            src="/arrowd.png"
            alt="Arrow"
            width={15}
            height={17}
            className={`transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {isOpen && <div className="mt-2">{children}</div>}

        <Image src="/Line 6.png" alt="Separator" width={240} height={1} className="my-2" />
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center font-gilroy">
      {/* Header Section */}
      <div
        className="relative bg-[#136FB6] text-white w-full text-center py-4 flex flex-col items-center justify-center"
        style={{ height: '368px' }}
      >
        <div className="absolute inset-0 flex justify-between">
          <Image
            src="/Group 569.png"
            alt="Group 569"
            width={368}
            height={368}
            layout="fixed"
            className="absolute top-0 left-0 object-cover"
          />
          <Image
            src="/Saly-31.png"
            alt="Saly 31"
            width={151}
            height={151}
            layout="fixed"
            className="absolute top-0 right-0 object-cover"
          />
        </div>
        <h1 className="font-bold text-[40px] md:text-[60px] leading-none text-center">BROWSE OUR STORE</h1>
        <p className="text-[16px] md:text-[20px] text-center mt-2 leading-[30px]">Teaching and learning resources</p>
      </div>

      {/* Navigation Bar */}
      <div
        className="relative bg-[#0F283C] text-white max-w-[1281px] h-[117px] mt-[-58px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center items-center px-4 sm:px-8"
        style={{ top: '-20px' }}
      >
        <div className="flex items-center bg-[#D9D9D9] rounded-md w-[940px] h-[56px]">
          <select className="bg-transparent px-4 py-2 text-black focus:outline-none">
            <option>Books</option>
            <option>Stationery</option>
            <option>Courses</option>
          </select>

          <Image src="/Line 4.png" alt="Separator" width={1} height={40} className="mx-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent px-4 py-2 text-black focus:outline-none"
          />
          <Image src="/cross.png" alt="Clear" width={18} height={18} className="mr-4 cursor-pointer" />
          <Image src="/Line 4.png" alt="Separator" width={1} height={40} className="mx-2" />
          <Image src="/search.png" alt="Search" width={32} height={32} className="mr-4 cursor-pointer" />
        </div>
        <button className="ml-4 w-[179px] h-[56px] bg-[#009EF7] text-white rounded-md flex items-center justify-center">
          <Image src="/search_w.png" alt="Button Icon" width={21} height={21} className="mr-2" />
          <span className="font-bold">Search</span>
        </button>
      </div>

      {/* Store Content */}
      <div className=" mx-auto p-4 mt-8">
        <div className="flex ">
          {/* Sidebar Filter Section */}
          <div className="w-[270px] p-4 bg-gray-50 rounded-lg shadow-md ml-5 mr-5 " >
            <h2 className="text-xl font-semibold mb-4 flex items-center text-[#1E1E1E]">
              <Image src="/filter.png" alt="Filter Icon" width={17} height={17} className="mr-2" />
              Filters
            </h2>

            {/* Filter Options */}
            <FilterSection title="Subject">
              {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <CheckboxInput type="checkbox" id={`checkbox-${index}`} className="checkbox peer" />
                  <CheckboxLabel htmlFor={`checkbox-${index}`} className="checkbox-label">
                    {item}
                  </CheckboxLabel>
                </div>
              ))}
            </FilterSection>

            <FilterSection title="Stock Status">
              <div className="flex items-center mb-2">
                <CheckboxInput type="checkbox" id="checkbox-stock" className="checkbox peer" />
                <CheckboxLabel htmlFor="checkbox-stock" className="checkbox-label">
                  In Stock
                </CheckboxLabel>
              </div>
              <div className="flex items-center">
                <CheckboxInput type="checkbox" id="checkbox-out-stock" className="checkbox peer" />
                <CheckboxLabel htmlFor="checkbox-out-stock" className="checkbox-label">
                  Out of Stock
                </CheckboxLabel>
              </div>
            </FilterSection>

            {/* Price Range Filter */}
            <FilterSection title="Price Range">
  <div className="flex flex-col items-start w-full">
    <span className="text-[#687682] text-[14px] font-gilroy mb-2"> $10 - $80</span>

    {/* Single range input with two thumbs */}
    <div className="relative w-full">
      <input
        type="range"
        min="10"
        max="80"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        className="range-input"
        onMouseDown={(e) => {
          e.stopPropagation(); // Prevent closing the section when mouse down
        }}
        onTouchStart={(e) => {
          e.stopPropagation(); // Prevent closing the section when touch start
        }}
        onFocus={(e) => e.stopPropagation()} // Prevent focus event from propagating
        style={{
          background: `linear-gradient(to right, #136FB6 ${((priceRange[0] - 10) * 100) / (80 - 10)}%, #136FB6 ${((priceRange[1] - 10) * 100) / (80 - 10)}%, #ddd ${((priceRange[1] - 10) * 100) / (80 - 10)}%)`
        }}
      />
    </div>
  </div>

  <style jsx>{`
    .range-input {
      -webkit-appearance: none;
      width: 238px; /* Fixed width for the range bar */
      height: 3px; /* Thickness of the bar */
      background-color: #ddd; /* Light grey background for the range bar */
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
      position: relative;
      z-index: 1;
    }

    /* Webkit-based browsers (Chrome, Safari, Edge) */
    .range-input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px; /* Thumb size of 22px */
      height: 22px; /* Thumb size of 22px */
      background-color: #136FB6; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
      margin-top: -8px; /* Centers the thumb vertically */
    }

    /* Firefox */
    .range-input::-moz-range-thumb {
      width: 22px; /* Thumb size of 22px */
      height: 22px; /* Thumb size of 22px */
      background-color: #136FB6; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
      margin-top: -8px; /* Centers the thumb vertically */
    }

    /* Internet Explorer */
    .range-input::-ms-thumb {
      width: 22px; /* Thumb size of 22px */
      height: 22px; /* Thumb size of 22px */
      background-color: #136FB6; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
    }

    /* Track for Webkit browsers */
    .range-input:focus {
      outline: none; /* Remove the focus outline */
    }

    .range-input::-webkit-slider-runnable-track {
      height: 3px; /* Track thickness */
      background-color: #B7CEDB; /* Track color */
    }

    /* Track for Firefox */
    .range-input::-moz-range-track {
      height: 3px; /* Track thickness */
      background-color: #B7CEDB; /* Track color */
    }

    /* Track for Internet Explorer */
    .range-input::-ms-track {
      height: 3px; /* Track thickness */
      background-color: #B7CEDB; /* Track color */
      border-color: transparent;
      border-width: 10px 0;
      color: transparent;
      background-color: transparent; /* Ensures proper rendering */
    }
  `}</style>
</FilterSection>




            <FilterSection title="Type">
              <div className="flex items-center mb-2">
                <CheckboxInput type="checkbox" id="checkbox-stock" className="checkbox peer" />
                <CheckboxLabel htmlFor="checkbox-stock" className="checkbox-label">
                  Type 1
                </CheckboxLabel>
              </div>
              <div className="flex items-center">
                <CheckboxInput type="checkbox" id="checkbox-out-stock" className="checkbox peer" />
                <CheckboxLabel htmlFor="checkbox-out-stock" className="checkbox-label">
                  Type 2
                </CheckboxLabel>
              </div>
            </FilterSection>


          </div>

          {/* Main Content */}
          <div className="w-[1000px] max-w ml-1">
            {/* Grid layout for cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {currentBooks.map((book, index) => {
                const mrp = 500;  // Setting MRP as $500 for now
                const price = book.price || mrp; // Using book price if available, otherwise MRP
                const discountPercentage = ((mrp - price) / mrp) * 100; // Calculate discount percent
                const calculatedDiscountPercentage = discountPercentage.toFixed(0); // Round to 0 decimal points
                const rating = book.rating || 5; // Example rating out of 5

                return (
                  <div
                    key={index}
                    className="bg-[#D9E8F3] shadow-lg rounded-lg p-4 flex flex-col min-h-[472px] w-full w-[323px]" // Set min height and flexible width
                  >
                    {/* Title Image */}
                    <Image
                      src="/Rectangle 251.png"
                      alt="Title Image"
                      width={300}
                      height={180}
                      className="rounded-t-md object-cover mb-4"
                    />

                    {/* Book Title */}
                    <h3 className="text-black font-bold text-lg mb-2">{book.title}</h3>

                    {/* Author and Review Section */}
                    <div className="flex items-center mb-4">
                      {/* Author Name */}
                      <span className="bg-[#1BADFF] text-white text-[16px] px-2 py-1 mr-2">
                        By VIJAY ANAND
                      </span>

                      {/* Rating Stars */}
                      <div className="flex items-center ml-2 mr-1">
                        {Array.from({ length: rating }, (_, i) => (
                          <Image
                            key={i}
                            src="/start.png" // Replace with your star image path
                            alt="Star"
                            width={18}
                            height={17}
                            className="mr-1"
                          />
                        ))}
                      </div>

                      {/* Review Count */}
                      <span className="text-[#667681] text-[16px]">(79)</span>
                    </div>

                    {/* Bullet points */}
                    <ul className="text-[#136EB4] text-base list-disc pl-5 mb-4">
                      {book.bullets && book.bullets.map((bullet, idx) => (
                        <li key={idx} className="font-Gilroy">{bullet}</li>
                      ))}
                    </ul>

                    {/* Price and MRP */}
                    <div className="flex items-center mb-4">
                      <p className="text-black text-2xl font-bold mr-2">${price}</p>
                      <p className="text-[#62717B] text-base line-through mr-2">${mrp}</p>
                      <p className="text-[#FF281B] text-base">({calculatedDiscountPercentage}%)</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="mt-auto bg-transparent border border-[#136EB4] text-[#136EB4] text-sm font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-[#136EB4] hover:text-white">
                      <Image
                        src="/Group 487.png"
                        alt="Cart Icon"
                        width={22}
                        height={22}
                        className="mr-2"
                      />
                      Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center mt-6">
              {/* Previous Button */}
              <button
                onClick={() => {
                  goToPreviousPage();
                  setActivePage((prev) => (prev > 1 ? prev - 1 : prev)); // Adjust active page
                }}
                disabled={currentPage === 1}
                className={`mx-2 w-[64px] h-[64px] border-[1px] border-[#BCBCBC] bg-white rounded-lg flex items-center justify-center text-[#BCBCBC] text-[18px] font-gilroy disabled:border-gray-300 disabled:text-gray-300 hover:border-[#146BAE] hover:text-[#146BAE] ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
              >
                {"<"}
              </button>

              {/* Page Numbers */}
              <div className="flex mx-2">
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setActivePage(page)}  // Set active page when clicked
                      className={`w-[64px] h-[64px] border-[1px] rounded-lg flex items-center justify-center text-[18px] font-gilroy mx-2 ${currentPage === page
                          ? "bg-[#146BAE] text-white border-[#146BAE]"  // Active page style
                          : "bg-white text-[#BCBCBC] border-[#BCBCBC]"  // Inactive page style
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => {
                  goToNextPage();
                  setActivePage((prev) => (prev < totalPages ? prev + 1 : prev)); // Adjust active page
                }}
                disabled={currentPage === totalPages}
                className={`mx-2 w-[64px] h-[64px] border-[1px] border-[#BCBCBC] bg-white rounded-lg flex items-center justify-center text-[#BCBCBC] text-[18px] font-gilroy disabled:border-gray-300 disabled:text-gray-300 hover:border-[#146BAE] hover:text-[#146BAE] ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
              >
                {">"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;

<style jsx>{`
  .range-input {
      -webkit-appearance: none;
      width: 238px; /* Fixed width for the range bar */
      height: 3px; /* Thickness of the bar */
      background-color: #ddd; /* Light grey background for the range bar */
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
      position: relative;
      z-index: 1;
    }

    /* Style for Webkit browsers (Chrome, Safari, Edge) */
    .range-input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px; /* Set thumb size to 22px */
      height: 22px; /* Set thumb size to 22px */
      background-color: #B7CEDB; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
      margin-top: -8px; /* Centers the thumb vertically on the track */
    }

    /* Style for Firefox */
    .range-input::-moz-range-thumb {
      width: 22px; /* Set thumb size to 22px */
      height: 22px; /* Set thumb size to 22px */
      background-color: #B7CEDB; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
      margin-top: -8px; /* Centers the thumb vertically on the track */
    }

    /* Style for Internet Explorer */
    .range-input::-ms-thumb {
      width: 22px; /* Set thumb size to 22px */
      height: 22px; /* Set thumb size to 22px */
      background-color: #B7CEDB; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
    }

    /* Track styling */
    .range-input:focus {
      outline: none; /* Remove focus outline */
    }

    .range-input::-webkit-slider-runnable-track {
      height: 3px;
      background-color: #B7CEDB; /* Track color */
    }

    .range-input::-moz-range-track {
      height: 3px;
      background-color: #B7CEDB; /* Track color */
    }

    .range-input::-ms-track {
      height: 3px;
      background-color: #B7CEDB; /* Track color */
      border-color: transparent;
      border-width: 10px 0;
      color: transparent;
      background-color: transparent;
      /* Required for proper rendering in IE */
    }
  `}</style>
