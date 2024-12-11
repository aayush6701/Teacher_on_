import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-white p-4 sm:p-8 md:p-16">
      <div
        className="relative flex flex-col md:flex-row items-center rounded-[20px] mx-auto"
        style={{
          maxWidth: '1280px',
          height: 'auto',
          background: 'linear-gradient(to right, #091E3A, #2F80ED, #2D9EE0)',
        }}
      >
        {/* Left Image Section */}
        <div className="w-full md:w-[425px] h-[250px] md:h-full ml-0 md:ml-8 mb-4 md:mb-0">
          <Image
            src="/Group 573.png" // Replace with your image path
            alt="Contact Image"
            width={425}
            height={490}
            className="object-cover rounded-t-[20px] md:rounded-l-[20px] md:rounded-t-none"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 h-auto p-4 md:p-8" style={{ fontFamily: 'Gilroy' }}>
          <p className="text-white text-[16px] md:text-[18px] mb-2">~ JOIN US NOW ~</p>
          <h1 className="text-white font-bold text-[30px] md:text-[50px] leading-tight">DIRECTION CLASSES</h1>
          <p className="text-white text-[16px] md:text-[20px] mt-4 mb-6">
            YOUR ONE STOP PLACE FOR THOSE WHO WANT TO GET A+ GRADE IN ALL SUBJECTS IN THEIR BOARDS
          </p>

          {/* Input Fields */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name*"
              className="w-full md:w-[253px] h-[52px] bg-transparent border border-white text-white placeholder-white text-lg rounded px-4 focus:outline-none"
            />

            {/* Phone Number Input */}
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full md:w-[253px] h-[52px] bg-transparent border border-white text-white placeholder-white text-lg rounded px-4 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email*"
            className="w-full md:w-[253px] h-[52px] bg-transparent border border-white text-white placeholder-white text-lg rounded px-4 focus:outline-none mb-4"
          />
          <br></br>
          <button
              className="w-full md:w-[179px] h-[52px] bg-white text-[#1268AA] font-bold rounded text-lg mt-1"
              style={{ fontFamily: 'Gilroy' }}
            >
              Send Message
            </button>
        </div>
        <div className="absolute bottom-4 right-4 opacity-50 w-[102px] h-[127px]"> <Image src="/Saly-26.png" alt="Decorative Image" width={102} height={127} /> </div>
      </div>
    </div>
  );
}
