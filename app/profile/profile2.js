
const Profile2 = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Section */}
        <div className="w-full lg:w-[395px] space-y-4" >
          {/* First Section */}
          <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
            {/* Image at the top center */}
            <div className="flex justify-center mb-4">
              <img
                src="/Rectangle 278.png" // Replace with your image path
                alt="Rectangle 278"
                className="w-[361px] h-[144px] rounded-lg"
              />
            </div>

            {/* Name, subtitle, and icons in the same row */}
            <div className="flex items-start justify-between">
              {/* Name and subtitle section */}
              <div className="flex flex-col">
                <p className="text-[20px] font-bold text-[#01354B] leading-[24.76px]" style={{ fontFamily: 'Gilroy-Bold', fontWeight: '400', textAlign: 'left' }}>
                  Mohammed Salman P
                </p>
                <p className="text-[16px] text-[#667681] leading-[19.41px]" style={{ fontFamily: 'Gilroy-Medium', fontWeight: '400', textAlign: 'left' }}>
                  Qura'an for English Speakers
                </p>
                {/* Rating stars and review text */}
                <div className="flex items-center space-x-1 mt-2">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-[18px] h-[18px] fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 9.91 8.63 3 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[18px] text-[#146DB2] leading-[21.83px]" style={{ fontFamily: 'Gilroy-Medium', fontWeight: '400', textAlign: 'left' }}>
                    4.5 Review
                  </p>
                </div>
                {/* Fees in row */}
                <div className="flex items-center space-x-2 mt-4">
                  <p className="text-black font-bold" style={{ fontFamily: 'Gilroy-Medium', fontSize: '16px', fontWeight: '400', textAlign: 'left', whiteSpace: 'nowrap' }}>
                    Fees:
                  </p>
                  <p className="p-2 text-[16px] leading-[19.41px]" style={{ fontFamily: 'Gilroy-Medium', fontWeight: '400', textAlign: 'left', color: '#667681' }}>
                    ₹200–300/hour | (USD 2.39–3.59/hour)
                  </p>
                </div>
                {/* EXP in row */}
                <div className="flex items-center space-x-2 mt-1">
                  <p className="text-black font-bold" style={{ fontFamily: 'Gilroy-Medium', fontSize: '16px', fontWeight: '400', textAlign: 'left', whiteSpace: 'nowrap' }}>
                    Exp:
                  </p>
                  <p className="p-2 text-[16px] leading-[19.41px]" style={{ fontFamily: 'Gilroy-Medium', fontWeight: '400', textAlign: 'left', color: '#667681' }}>
                    2.0 Years
                  </p>
                </div>
              </div>

              {/* Rounded background images in a row */}
              <div className="flex flex-row justify-start space-x-2">
                <div className="w-[38px] h-[38px] bg-[#1BADFF] rounded-full flex items-center justify-center">
                  <img src="/phone.png" alt="Phone" className="w-[18px] h-[11px]" />
                </div>
                <div className="w-[38px] h-[38px] bg-[#136FB6] rounded-full flex items-center justify-center">
                  <img src="/camera.png" alt="Camera" className="w-[16px] h-[16px]" />
                </div>
              </div>
            </div>

            {/* Buttons below Exp */}
            <div className="flex space-x-2 mt-4">
              {/* Button Now */}
              <button
                className="w-full lg:w-[251px] h-[43px] bg-[#121212] text-white font-bold rounded-md flex items-center justify-center"
                style={{
                  fontFamily: 'Gilroy',
                  fontSize: '18px',
                }}
              >
                Book Now
              </button>

              {/* Share Button */}
              <button
                className="w-full lg:w-[92px] h-[43px] text-[#667681] border border-[#667681] rounded-md flex items-center justify-center"
                style={{
                  fontFamily: 'Gilroy',
                  fontSize: '18px',
                  fontWeight: '400', // Regular weight for Gilroy font
                }}
              >
                Share
              </button>
            </div>
          </div>

          {/* Second Section */}
          <div className="w-full lg:w-[395px] bg-white border border-[#DCE3E8] rounded-md p-4">
            <div className="mt-4">
              <p
                className="text-[20px] font-bold leading-[24.76px] text-[#01354B]"
                style={{
                  fontFamily: 'Gilroy-Bold',
                  fontWeight: '400',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                About Me <span className="text-[#FF281B]">*</span>
              </p>
            </div>
            {/* About Me Description */}
            <div className="mt-2">
              <p
                className="text-[16px] leading-[24px] text-[#81919C]"
                style={{
                  fontFamily: 'Gilroy-Medium',
                  fontWeight: '400',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                I am Mohammed Salman from Kerala, India. I am graduated in History. Now doing Pg in history. I have more than 10 years experience in Islamic theology. I studied in a big mosque in Ponnani named Makhdhoomiyya da'wa college. Also, I graduated from Jamia Markazil Saquafathi Sunniyya in Kerala, India. I have teaching experience from 1 to 12th classes. I can teach both Qur'an and Islamic Sharia and theology. I am exploring and engaging in Islamic and Qur'an studies. I have deep knowledge in Islamic Sharia and theology. Now also training to teach.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[395px] bg-white border border-[#DCE3E8] rounded-md p-4">
            <div className="mt-4">
              <p
                className="text-[20px] font-bold leading-[24.76px] text-[#01354B]"
                style={{
                  fontFamily: 'Gilroy-Bold',
                  fontWeight: '400',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                Contact Information <span className="text-[#FF281B]">*</span>
              </p>
            </div>
            {/* Contact Info */}
            <div className="mt-2">
              <p
                className="text-[16px] leading-[24px] text-[#81919C]"
                style={{
                  fontFamily: 'Gilroy-Medium',
                  fontWeight: '400',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                Location
              </p>
              {/* Location Information */}
              <div className="flex items-center mt-1">
                <img
                  src="/location.png"
                  alt="Location Icon"
                  className="w-[10px] h-[14px] mr-2"
                />
                <p
                  className="text-[16px] leading-[24px] text-[#136FB6]"
                  style={{
                    fontFamily: 'Gilroy',
                    fontWeight: '400',
                    textAlign: 'left',
                  }}
                >
                  INDIA
                </p>
              </div>
            </div>

            <div className="mt-2">
              <p
                className="text-[16px] leading-[24px] text-[#81919C]"
                style={{
                  fontFamily: 'Gilroy-Medium',
                  fontWeight: '400',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                Email Address
              </p>
              {/* Email Information */}
              <div className="flex items-center mt-1">
                <img
                  src="/mail.png"
                  alt="Email Icon"
                  className="w-[15px] h-[10px] mr-2"
                />
                <p
                  className="text-[16px] leading-[24px] text-[#136FB6]"
                  style={{
                    fontFamily: 'Gilroy',
                    fontWeight: '400',
                    textAlign: 'left',
                  }}
                >
                  mohammedsalman12@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-2">
              <p
                className="text-[16px] leading-[24px] text-[#81919C]"
                style={{
                  fontFamily: 'Gilroy-Medium',
                  fontWeight: '400',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                Languages
              </p>
              {/* Language List */}
              <div className="flex flex-row gap-2 mt-1">
                {["English", "Hindi", "Urdu"].map((language) => (
                  <div
                    key={language}
                    className="bg-[#DAE7F1] rounded-[4px] px-2 py-1 text-[16px] font-[400] text-[#475967]"
                    style={{ fontFamily: 'Gilroy' }}
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[863px] space-y-4">
          {/* Education Background Section */}
          <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
            <h2 className="text-[20px] font-bold text-[#01354B] mb-2">
              Education Background <span className="text-[#FF281B]">*</span>
            </h2>

            {/* Container for image and text */}
            <div className="flex items-start space-x-4">
              {/* Image on the left */}
              <img
                src="/Group 555.png" // Replace with the actual image path
                alt="Education Image"
                className="w-[61px] h-[61px] rounded-full"
              />
              {/* Text content on the right */}
              <div>
                <p className="text-[#01354B] text-[20px] font-bold mb-1">Saquafu</p>
                <p className="text-[#81919C] text-[16px]">Jamia Markazu Saquafathi Sunniyya India</p>
                <p className="text-[#81919C] text-[16px]">Apr, 2022 – Apr, 2024</p>
              </div>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
            <h2 className="text-[20px] font-bold text-[#01354B] mb-2">
              Subjects <span className="text-[#FF281B]">*</span>
            </h2>

            {/* Grid Layout for 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4">
                <img
                  src="/Group 556.png" // Replace with the actual icon path
                  alt="Icon 1"
                  className="w-[61px] h-[61px]"
                />
                <div>
                  <p className="text-[#01354B] text-[20px]">Qur'an for English Speakers</p>
                  <p className="text-[#81919C] text-[16px]">Beginner–Expert</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src="/Group 556.png" // Replace with the actual icon path
                  alt="Icon 2"
                  className="w-[61px] h-[61px]"
                />
                <div>
                  <p className="text-[#01354B] text-[18px]">Qur'an & Islamic duas</p>
                  <p className="text-[#81919C] text-[16px]">Beginner–Expert</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
            <h2 className="text-[20px] font-bold text-[#01354B] mb-2">
              Experience <span className="text-[#FF281B]">*</span>
            </h2>

            <div className="flex items-center space-x-4">
              <img
                src="/Group 570.png" // Replace with the actual icon path
                alt="Icon"
                className="w-[61px] h-[61px]"
              />
              <div>
                <p className="text-[#01354B] text-[20px] mb-1">Academic counselor</p>
                <p className="text-[#81919C] text-[16px]">Avodha Edutech</p>
                <p className="text-[#81919C] text-[16px]">Feb, 2020 – Jul, 2023</p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
            <h2 className="text-[20px] font-bold text-[#01354B] mb-2">
              Reviews <span className="text-[#FF281B]">*</span>
            </h2>
            <p className="text-[#667681] text-[16px]">No reviews yet. Be the first one to review this tutor.</p>
            <a href="#" className="text-[#146DB2]">Review this tutor</a>
          </div>

          {/* Video Section */}
          <div className="relative flex flex-col items-center overflow-hidden rounded-[10px] mt-8">
            <div className="w-full max-w-[1197px] h-[503px] bg-gray-800 overflow-hidden rounded-[10px]">
              <div className="relative w-full h-full">
                <img
                  src="/Rectangle 229.png"
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[137px] h-[137px]">
              <img src="/Group 437.png" alt="Overlay Icon" className="w-full h-full object-cover" />
              <p className="mt-2 text-white text-[24px] font-gilroy-bold text-center whitespace-nowrap" style={{ marginLeft: '-8px' }}>
                Introduction Video
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2;