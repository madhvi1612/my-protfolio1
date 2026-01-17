import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ isLoading }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const letters = textRef.current?.querySelectorAll('span');

    if (isLoading) {
      // Dark background slowly fade in
      gsap.to(loader, {
        opacity: 1,
        duration: 1.4,
        ease: "power2.out"
      });

      // Text letters dheere dheere upar se aate hue
      gsap.fromTo(letters,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          stagger: 0.1,
          delay: 0.4
        }
      );

    } else {
      // Smoothly fade out
      gsap.to(loader, {
        opacity: 0,
        duration: 1,
        ease: "power2.in"
      });
    }
  }, [isLoading]);

  const text = "Madhvi"; // Yahan apna naam ya "Loading" rakh sakte ho

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      style={{ 
        opacity: 0,
        visibility: isLoading ? 'visible' : 'hidden',
        pointerEvents: isLoading ? 'auto' : 'none',
        transition: 'visibility 0.3s ease-in-out, opacity 1s ease-in-out'
      }}
    >
      <div className="text-center">
        <h1
          ref={textRef}
          className="text-6xl md:text-8xl font-light text-white tracking-widest"
        >
          {text.split('').map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                opacity: 0
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Optional subtle subtitle */}
        <p className="mt-10 text-white/40 text-lg tracking-wider">
          Portfolio
        </p>
      </div>
    </div>
  );
};

export default Loader;