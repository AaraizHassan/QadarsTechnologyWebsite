'use client';
import React from 'react';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  const snippets = ['{ }', '</>', 'const', 'function', '()', '=>', '<div>', '</div>', 'useState()', 'let', 'React', 'import'];

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-32 pt-32 md:pt-40 px-5 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Falling Code Animation Layer */}
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          const snippet = snippets[Math.floor(Math.random() * snippets.length)];
          const left = Math.random() * 100;
          const duration = 8 + Math.random() * 6;
          const delay = Math.random() * 5;
          const fontSize = 14 + Math.random() * 20;
          const opacity = 0.3 + Math.random() * 0.7;

          return (
            <span
              key={i}
              className="absolute text-[#2563EB] font-mono"
              style={{
                left: `${left}%`,
                top: `-10%`,
                fontSize: `${fontSize}px`,
                opacity,
                animation: `fall ${duration}s linear ${delay}s infinite`,
              }}
            >
              {snippet}
            </span>
          );
        })}
      </div>

      {/* Text content */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-[#111827] max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-[#6B7280] max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <a
            href="#techstack"
            className="px-6 py-3 bg-[#2563EB] text-white rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#1E3A8A] hover:scale-110 active:animate-bounce-click"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        @keyframes bounce-click {
          0% {
            transform: scale(1);
          }
          30% {
            transform: scale(0.9);
          }
          50% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounce-click {
          animation: bounce-click 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
