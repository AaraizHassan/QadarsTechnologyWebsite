// 'use client';
// import React, { useState } from "react";
// import clsx from "clsx";
// import { BsFillCheckCircleFill } from "react-icons/bs";
// import { IPricing } from "@/types";

// interface Props {
//   tier: IPricing & { deliverables?: string[] };
//   highlight?: boolean;
//   expanded?: boolean;
//   onToggle?: () => void;
// }

// const PricingColumn: React.FC<Props> = ({
//   tier,
//   highlight,
//   expanded,
//   onToggle,
// }) => {
//   const { name, price, features, deliverables } = tier;
//   const [hovered, setHovered] = useState(false);

//   // Only expand when hovered (desktop) or clicked (mobile)
//   const isExpanded = hovered || expanded;

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={onToggle}
//       className={clsx(
//         "relative w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden lg:max-w-full",
//         {
//           "shadow-xl scale-105": highlight && isExpanded,
//           "shadow-md": highlight && !isExpanded,
//           "animate-shake-slow": !isExpanded, // Shake when not expanded
//         }
//       )}
//     >
//       {/* Card top section */}
//       <div className="p-6 border-b border-gray-200 rounded-t-xl">
//         <h3 className="text-2xl font-semibold mb-3">{name}</h3>
//         <p className="text-sm text-gray-700 mb-4 leading-relaxed">
//           {typeof price === "number" ? `$${price}` : price}
//         </p>
//       </div>

//       {/* Expandable section */}
//       <div
//         className={clsx(
//           "transition-all duration-700 ease-in-out overflow-hidden px-6",
//           isExpanded ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
//         )}
//       >
//         <p className="font-bold mb-2">Stack Highlights:</p>
//         <ul className="space-y-2 mb-6">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-center text-sm">
//               <BsFillCheckCircleFill className="h-4 w-4 text-blue-600 mr-2" />
//               <span className="text-gray-800">{feature}</span>
//             </li>
//           ))}
//         </ul>

//         {deliverables && (
//           <>
//             <p className="font-bold mb-2">What We Deliver:</p>
//             <ul className="space-y-2">
//               {deliverables.map((item, idx) => (
//                 <li key={idx} className="text-sm text-gray-700">
//                   ✔ {item}
//                 </li>
//               ))}
//             </ul>
//           </>
//         )}
//       </div>

//       {/* Mystery Box Shake Animation */}
//       <style jsx>{`
//         @keyframes shake-slow {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           10% {
//             transform: translate(-1px, 1px) rotate(-0.5deg);
//           }
//           20% {
//             transform: translate(1px, -1px) rotate(0.5deg);
//           }
//           30% {
//             transform: translate(-1px, 0px) rotate(-0.3deg);
//           }
//           40% {
//             transform: translate(1px, 1px) rotate(0.3deg);
//           }
//           50% {
//             transform: translate(0px, -1px) rotate(0deg);
//           }
//         }

//         @media (min-width: 768px) {
//           .animate-shake-slow {
//             animation: shake-slow 3s ease-in-out infinite;
//             animation-delay: calc(1s * var(--delay, 0));
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PricingColumn;



'use client';
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IPricing } from "@/types";

interface Props {
  tier: IPricing & { deliverables?: string[] };
  highlight?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}

const PricingColumn: React.FC<Props> = ({
  tier,
  highlight,
  expanded,
  onToggle,
}) => {
  const { name, price, features, deliverables } = tier;
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size once (to differentiate hover vs click behavior)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isExpanded = isMobile ? expanded : hovered || expanded;

  return (
    <div
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => isMobile && onToggle?.()} // only toggle on mobile
      className={clsx(
        "relative w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden lg:max-w-full",
        {
          "shadow-xl scale-105": highlight && isExpanded,
          "shadow-md": highlight && !isExpanded,
          "animate-shake-slow": !isExpanded, // mystery shake when not expanded
        }
      )}
    >
      {/* Top section */}
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {typeof price === "number" ? `$${price}` : price}
        </p>
      </div>

      {/* Expandable section */}
      <div
        className={clsx(
          "transition-all duration-700 ease-in-out overflow-hidden px-6",
          isExpanded ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <p className="font-bold mb-2">Stack Highlights:</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <BsFillCheckCircleFill className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-800">{feature}</span>
            </li>
          ))}
        </ul>

        {deliverables && (
          <>
            <p className="font-bold mb-2">What We Deliver:</p>
            <ul className="space-y-2">
              {deliverables.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  ✔ {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Shake animation for mystery effect */}
      <style jsx>{`
        @keyframes shake-slow {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1px, 1px) rotate(-0.5deg); }
          20% { transform: translate(1px, -1px) rotate(0.5deg); }
          30% { transform: translate(-1px, 0px) rotate(-0.3deg); }
          40% { transform: translate(1px, 1px) rotate(0.3deg); }
          50% { transform: translate(0px, -1px) rotate(0deg); }
        }

        @media (min-width: 768px) {
          .animate-shake-slow {
            animation: shake-slow 3s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingColumn;
