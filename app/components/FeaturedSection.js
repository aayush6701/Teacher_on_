
// components/FeaturedSection.js
import Image from 'next/image';

export default function FeaturedSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white">
      {/* Left Section (Portrait Image and Text) */}
      <div className="flex flex-col space-y-6 lg:w-1/2">
        {/* Trending Now */}
        <div className="p-3 inline-block rounded-md">
          <span className="text-[#1BADFF] font-[Gilroy-Medium] text-[18px] leading-[21.83px] text-left">
            ~ TRENDING NOW ~
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-[Gilroy-Black] text-[50px] leading-[63.1px] text-left text-[#0F283C]">
          IGCSE & ICSE <span className="text-[#146DB2]">TUTORS</span>
        </h1>

        {/* Paragraph */}
        <p className="font-[Gilroy-Medium] text-[20px] leading-[30px] text-[#667681] text-left">
          Established with a vision to provide high-quality and accessible education,
          our platform is designed to cater to the diverse learning needs of students.
        </p>

        {/* Admission Information */}
        <div className="text-[20px] leading-[30px] font-[Gilroy-SemiBold] text-[#0F283C] text-left">
          <span>ADMISSION FOR CLASS <span className="text-[#1BADFF] font-[Gilroy-ExtraBold]">9TH AND 10TH</span></span>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-2 gap-4 text-left text-black">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center bg-[#7B82CA] rounded-full">
              <Image src="/Vector3.png" alt="Customised Plans" width={21} height={18} />
            </div>
            <span className="font-[Gilroy-SemiBold] text-[20px] font-[400] leading-[30px] text-left decoration-skip-ink">
              Customised Plans
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center bg-[#72B482] rounded-full">
              <Image src="/Vector3.png" alt="Science Lab" width={21} height={18} />
            </div>
            <span className="font-[Gilroy-SemiBold] text-[20px] font-[400] leading-[30px] text-left decoration-skip-ink">
              Science Lab
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center bg-[#CEA27F] rounded-full">
              <Image src="/Vector3.png" alt="Test Series" width={21} height={18} />
            </div>
            <span className="font-[Gilroy-SemiBold] text-[20px] font-[400] leading-[30px] text-left decoration-skip-ink">
              Test Series
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center bg-[#D17D7B] rounded-full">
              <Image src="/Vector3.png" alt="8+ more lessons" width={21} height={18} />
            </div>
            <span className="font-[Gilroy-SemiBold] text-[20px] font-[400] leading-[30px] t decoration-skip-ink">
              8+ more lessons
            </span>
          </div>
        </div>

        {/* Enroll Now Button with Image */}
        <div className="flex items-center mt-4">
          <button className="bg-[#1BADFF] text-white w-[179px] h-[52px] rounded-md hover:bg-blue-600 flex items-center justify-center">
            <span className="text-left">Enroll Now</span>
          </button>
          <div className="ml-2 flex items-center justify-center " style={{ marginLeft: "2rem" }}>
            <Image src="/Group.png" alt="Icon" width={60} height={70} />
          </div>
        </div>
      </div>

      {/* Right Section (Watch Video Image) */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center relative">
        {/* Rectangle 145 Image */}
        <div className="relative">
          <Image 
            src="/Rectangle 145.png"  // Replace with the correct path for Rectangle 145
            alt="Rectangle 145" 
            width={528} 
            height={532} 
            className="object-cover rounded-md"
          />

          {/* Rectangle 146 Image overlapping Rectangle 145 */}
          <Image 
            src="/Rectangle 146.png"  // Replace with the correct path for Rectangle 146
            alt="Rectangle 146" 
            width={480} 
            height={556} 
            className="absolute top-14 left-6 object-cover rounded-md"
          />
<div className="relative bottom-0 lg:bottom-[195px] lg:left-[-185px] mb-4 lg:mb-0 lg:w-[360px] lg:h-[220px] w-full h-auto">
  <Image
    src="/Rectangle 147.png" // Replace with the correct path for Rectangle 147
    alt="Rectangle 147"
    layout="responsive"
    width={360}
    height={220}
    className="object-cover rounded-md"
  />
  
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[101px] h-[101px]">
    <Image
      src="/Group 57.png" // Replace with the correct path for Group 57
      alt="Group 57"
      layout="responsive"
      width={101}
      height={101}
      className="object-cover rounded-full"
    />
  </div>

  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-[Gilroy-SemiBold] text-[22px] font-weight-400">
    Watch Video
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
