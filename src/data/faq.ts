// import { IFAQ } from "@/types";
// import { siteDetails } from "./siteDetails";

// export const faqs: IFAQ[] = [
//     {
//         question: `Is ${siteDetails.siteName} secure?`,
//         answer: 'Absolutely. We use bank-level encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.',
//     },
//     {
//         question: `Can I use ${siteDetails.siteName} on multiple devices?`,
//         answer: 'Absolutely! Your Finwise account syncs seamlessly across all your devices - smartphone, tablet, and computer.',
//     },
//     {
//         question: 'Can I connect all my bank accounts?',
//         answer: `Yes! ${siteDetails.siteName} supports connections with over 10,000 financial institutions worldwide. Simply log in through our secure portal to link your accounts.`
//     },
//     {
//         question: 'Do I need any financial expertise to use the investing features?',
//         answer: 'Not at all! Our expert-curated portfolios and educational resources make investing accessible to everyone, regardless of experience level.',
//     },
//     {
//         question: 'What if I need help using the app?',
//         answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of Finwise.'
//     }
// ];

import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `What services does ${siteDetails.siteName} offer?`,
    answer: `We specialize in custom web development, mobile app development, and data analytics solutions. Whether you need a scalable website, a mobile application, or insights from your business data, we’ve got you covered.`,
  },
  {
    question: `Do you work with startups as well as established businesses?`,
    answer: `Yes! We help startups build their MVPs quickly and cost-effectively, and we also partner with established businesses to modernize systems, create new platforms, or integrate advanced data solutions.`,
  },
  {
    question: `What technologies do you use for development?`,
    answer: `Our team works with modern stacks including React, Next.js, Node.js, Python, and SQL/NoSQL databases. For mobile, we build with React Native and Flutter. We tailor the tech stack based on your project needs.`,
  },
  {
    question: `Can you handle both design and development?`,
    answer: `Absolutely. We provide end-to-end solutions — from UI/UX design to development, deployment, and ongoing support. Our design team ensures a clean, user-friendly experience while our developers bring it to life.`,
  },
  {
    question: `How do you ensure project quality and timely delivery?`,
    answer: `We follow agile methodologies, breaking projects into clear milestones. Regular updates, transparent communication, and quality assurance testing ensure that your project is delivered on time and meets expectations.`,
  },
  {
    question: `Do you offer post-launch support and maintenance?`,
    answer: `Yes, we provide ongoing maintenance, performance monitoring, and feature enhancements so your product continues to evolve and perform well after launch.`,
  }
];
