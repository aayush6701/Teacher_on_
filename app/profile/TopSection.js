// components/Top_section.js

const TopSection = () => {
    return (
      <div className="w-full min-h-[236px] bg-[#136FB6] flex justify-center items-center text-center relative">
        {/* Left Image */}
        <img
          src="/Group 571.png" // Replace with actual left image path
          alt="Left Image"
          className="absolute top-4 left-0 w-[200] h-[236px] z-0" // Adjust positioning as needed
        />
        
        {/* Center Text */}
        <div className="text-white">
          <p className="text-[60px] md:text-[40px] font-bold z-10" style={{ fontFamily: 'Gilroy' }}>
            MY PROFILE
          </p>
          <p className="text-[20px] md:text-[16px] z-10" style={{ fontFamily: 'Gilroy' }}>
            Get The Right Tutor You Deserve
          </p>
        </div>
        
        {/* Right Image */}
        <img
          src="/Saly-31.png" // Replace with actual right image path
          alt="Right Image"
          className="absolute top-4 right-4 w-[151px] h-[151px]"
        />
      </div>
    );
  };
  
  export default TopSection;
  