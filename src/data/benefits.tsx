import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Web & App Development",
        description: "We create robust, scalable, and user-friendly digital experiences tailored to your business needs.",
        bullets: [
            {
                title: "Responsive Web Design",
                description: "Seamlessly adapt to all devices with modern, mobile-first designs.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Custom Web Applications",
                description: "Full-stack apps built with Next.js, React, and the MERN stack for high performance.",
                icon: <FiTarget size={26} />
            },
            {
                title: "E-Commerce Solutions",
                description: "Secure, scalable, and optimized online stores that drive sales.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Data Science & Analytics",
        description: "Turn raw data into actionable insights with our end-to-end data solutions.",
        bullets: [
            {
                title: "Data Visualization",
                description: "Interactive dashboards that make complex data easy to understand.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Predictive Analytics",
                description: "Forecast trends and behaviors using advanced statistical models.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Business Intelligence",
                description: "Data-driven insights that help you make smarter strategic decisions.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Machine Learning Solutions",
        description: "We harness the power of AI to build intelligent systems for the future.",
        bullets: [
            {
                title: "Recommendation Engines",
                description: "Personalized experiences that boost engagement and sales.",
                icon: <FiLock size={26} />
            },
            {
                title: "Natural Language Processing (NLP)",
                description: "Extract meaning and insights from text, speech, and customer feedback.",
                icon: <FiUser size={26} />
            },
            {
                title: "Computer Vision",
                description: "Image and video analysis solutions for automation and real-time recognition.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]