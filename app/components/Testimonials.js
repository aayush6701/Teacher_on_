"use client";
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'ARYA GUPTA',
    rating: 3.5,
    text: '"The coaching classes were crucial to my academic success. The professors emphasized critical analysis and effective answering techniques, while the DC test papers deepened my understanding. Nikita mam’s innovative teaching strategies and practical tips greatly enhanced my performance."',
    image: '/arya.png',
  },
  {
    name: 'JHANVI S',
    rating: 3.5,
    text: '"Unlike other coaching classes, we didn’t have regular classes and tests. Instead, we had quizzes, activities, workshops, and tests for every chapter. This approach helped me understand better, and the test series cleared doubts and questions. Achieving good marks was the result of consistent hard work by both us and our teachers."',
    image: '/jhanvi.png',
  },
  {
    name: 'ARYA GUPTA',
    rating: 3.5,
    text: '"Thanks to our professors’ guidance, I learned how to analyze a question and provide direct, effective answers, leading to me achieving good marks. The DC test papers were instrumental in enhancing my understanding of the concepts. Additionaly"',
    image: '/arya_2.png',
  },
];

const Testimonials = () => {
  return (
    <>
    <style jsx>{`
          h3 {
            color: #0F283C;
            margin-bottom: 1rem;
          }

          .para {
            text-align: center;
            margin-bottom: 5px;
          }

          .testimonial-section {
            background-color: #f7fafc;
            padding: 3rem 0;
          }

          .testimonial-card {
            background-color: white;
            padding: 1rem;
            border-radius: 0.25rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            margin: 0 1rem;
            flex: 1;
          }

          .testimonial-card img {
            border-radius: 50%;
          }

          .testimonial-card h4 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .testimonial-card .stars {
            display: flex;
          }

          .testimonial-card .stars svg {
            height: 1.25rem;
            width: 1.25rem;
            border-color: #ffd700;
            color: #ffd700; /* Gold color for filled stars */
          }

          .testimonial-card .stars svg.empty {
            color: #d1d5db; /* Gray color for empty stars */
          }

        .testimonial-card p {
          color: #667681; /* Text color */
        }

        .buttons {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
      `}</style>
    
    <section className="testimonial-section bg-gray-100 py-16 p-10">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className='para text-blue-500 text-xl flex'>~TESTIMONIALS~</p>
            <h3 className="text-5xl flex font-black">Trusted by Thousands of</h3>
            <h3 style={{color: '#146DB2'}} className="text-5xl flex font-black">Students and Parents</h3>
            <p style={{color: '#667681'}} className='para text-xl font-medium flex'>Don't take our word for it. Trust our customers.</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-transparent text-blue-600 font-bold hover:text-white border border-blue-600 hover:border-transparent px-4 py-2 rounded-md hover:bg-blue-600">&lt;  Previous</button>
            <button className="bg-blue-600 text-white hover:text-blue-600 font-bold border border-blue-600 hover:border-blue-600 px-4 py-2 rounded-md hover:bg-white">Next  &gt;</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;

