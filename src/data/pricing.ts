import { IPricing } from "@/types";

// export const tiers: IPricing[] = [
export const tiers: (IPricing & { deliverables?: string[] })[] = [
    {
        name: 'Web Development',
        price: 'We design and develop responsive, high-performance websites tailored to your business needs. From sleek landing pages to full-scale web apps, our stack ensures flexibility and speed.',
        features: [
            'Frontend: React.js, Next.js, TailwindCSS',
            'Backend: Node.js, Express.js, Flask',
            'Databases: MongoDB, MySQL, PostgreSQL',
        ],
        deliverables: [
            'Custom, responsive website designs',
            'SEO-friendly & optimized performance',
            'Clean, scalable code for future growth',
        ],
    },
    {
        name: 'Data Analytics',
        price: 'Turn raw data into actionable insights with our analytics expertise. From dashboards to predictive models, we help you make data-driven decisions.',
        features: [
            'Python (Pandas, NumPy, Matplotlib, Seaborn)',
            'SQL (MySQL, PostgreSQL)',
            'Power BI / Tableau basics',
        ],
        deliverables: [
            'Interactive dashboards & reports',
            'Data-driven business insights',
            'Predictive models for smarter decisions',
        ],
    },
    {
        name: 'Machine Learning & AI',
        price: 'We build intelligent systems powered by ML & AI — from predictive modeling to natural language processing and computer vision.',
        features: [
            'Scikit-learn, TensorFlow, PyTorch',
            'NLP (NLTK, spaCy, Transformers)',
            'Computer Vision (OpenCV, CNNs)',
        ],
        deliverables: [
            'Custom ML models tailored to your use case',
            'Automation of repetitive tasks with AI',
            'Innovative NLP & computer vision solutions',
        ],
    },
];
