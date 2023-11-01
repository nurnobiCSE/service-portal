import { useState, useEffect } from 'react';

const textData = [
  'Welcome To Bangladesh e-Service portal',
  'Applying For Your Job',  
  'Find Your Exact Services',
  'Robust Your Experience',
  'Safe Your Time, reached and take fast service',
 
];

const TextSlider = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 3000); // Change the duration (in milliseconds) for auto play

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-teal-950 relative md:h-20 h-16 mt-1">
      <img className='w-full h-full absolute z-10 opacity-50' src="images/bg.jpg" alt="" />
      <p className="absolute flex inset-0 items-center justify-center z-20 md:text-3xl text-lg text-white md:font-extrabold capitalize text-center">{textData[currentTextIndex]}</p>
    </div>
  );
};

export default TextSlider;