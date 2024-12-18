import Image from 'next/image';

const TestimonialCard = ({ name, rating, text, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-96 border border-blue-200 flex flex-col">
      <div className="flex">
      <Image src={image} alt={name} width={100} height={100} className="rounded mb-4" />
      <div className="flex mb-3 space-x-1 text-yellow-500 ml-auto">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.877 1.467 8.314-7.403-3.891-7.403 3.891 1.467-8.314-6.064-5.877 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.877 1.467 8.314-7.403-3.891-7.403 3.891 1.467-8.314-6.064-5.877 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.877 1.467 8.314-7.403-3.891-7.403 3.891 1.467-8.314-6.064-5.877 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.877 1.467 8.314-7.403-3.891-7.403 3.891 1.467-8.314-6.064-5.877 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.877 1.467 8.314-7.403-3.891-7.403 3.891 1.467-8.314-6.064-5.877 8.332-1.151z" fill="none" stroke="currentColor" strokeWidth="2"/></svg> {/* Half star */}
      </div>
      </div>
      <h4 className="text-lg font-bold mb-2 text-black">{name}</h4>
      <p className="text-gray-600 font-medium ">{text}</p>
    </div>
  );
};

export default TestimonialCard;
