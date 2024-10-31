import { useEffect, useState } from 'react';

const SteleLoader = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Set a timeout to clear the text after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false); // Hide the loader after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {isAnimating && (
        <div
          id="stelleloader"
          className="fixed inset-0 flex pt-28 items-start justify-center z-50"
        >
          <div
            className="w-3 h-3 bg-white rounded-full relative"
            style={{
              boxShadow: '0 0 15px 10px rgba(255, 255, 255, 0.8)',
              animation: 'shooting-star 1s ease-out forwards',
            }}
          />
        </div>
      )}

      <style>
        {`
          @keyframes shooting-star {
            0% {
              transform: translate(-50%, -50%) scale(1) rotate(45deg);
              opacity: 1;
            }
            70% {
              transform: translate(250%, 250%) scale(0.8) rotate(45deg);
              opacity: 0.5;
            }
            100% {
              transform: translate(400%, 400%) scale(0.5) rotate(45deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default SteleLoader;
