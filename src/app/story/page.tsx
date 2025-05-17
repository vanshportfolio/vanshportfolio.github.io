'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';

const timelineData = [
  {
    title: 'MBA at Binghamton University',
    period: '2023 - Present',
    description: 'GPA: 3.92',
    skills: ['Financial Analysis', 'Valuation', 'Investment Management'],
  },
  {
    title: 'VerdeVista Investment Group',
    period: '2023',
    description: 'Private Equity Intern',
    skills: ['Due Diligence', 'Financial Modeling', 'Market Research'],
  },
  {
    title: 'Broome County Government',
    period: '2022',
    description: 'Tax Preparer',
    skills: ['Tax Preparation', 'Client Relations', 'Financial Documentation'],
  },
  {
    title: 'Teaching Assistant - FIN 322',
    period: '2023',
    description: 'Investment Analysis',
    skills: ['Teaching', 'Financial Analysis', 'Student Mentoring'],
  },
];

const skills = [
  { name: 'Bloomberg', level: 'Advanced' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Tableau', level: 'Advanced' },
  { name: 'Power BI', level: 'Advanced' },
  { name: 'Excel', level: 'Expert' },
];

const TimelineItem = ({ data, index }: { data: typeof timelineData[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="relative pl-8 pb-12 border-l-2 border-gray-200 last:border-l-0"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1D1D1F]" />
      <div className="bg-white p-6 rounded-2xl shadow-sm hover-glow">
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-gray-600 mb-2">{data.period}</p>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Story() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Story</h1>
          <p className="text-xl text-gray-600">
            A journey through finance, education, and professional growth
          </p>
        </motion.div>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.title} data={item} index={index} />
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-4 rounded-xl shadow-sm hover-glow"
              >
                <h3 className="font-semibold mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#1D1D1F] text-white rounded-full 
                     shadow-lg hover:shadow-xl transition-all duration-300
                     hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </main>
  );
} 