'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const caseCompetitions = [
  {
    id: 'barclays',
    title: 'Barclays Investment Banking Case Competition',
    date: '2024',
    description: 'Led a team in analyzing and presenting investment opportunities in the technology sector, focusing on M&A strategies and market positioning.',
    achievements: [
      'Developed comprehensive financial models for potential acquisitions',
      'Presented to senior Barclays executives',
      'Won first place in the competition'
    ],
    skills: ['Financial Modeling', 'M&A Analysis', 'Team Leadership']
  },
  {
    id: 'ey',
    title: 'EY Strategy Case Competition',
    date: '2023',
    description: 'Analyzed market entry strategies for a Fortune 500 company looking to expand into emerging markets.',
    achievements: [
      'Conducted market research across 5 emerging economies',
      'Developed risk assessment framework',
      'Created detailed implementation timeline'
    ],
    skills: ['Market Analysis', 'Risk Assessment', 'Strategic Planning']
  },
  {
    id: 'boa',
    title: 'Bank of America Global Markets Challenge',
    date: '2023',
    description: 'Participated in a global markets simulation, managing a portfolio of various financial instruments.',
    achievements: [
      'Achieved 15% portfolio return in volatile market conditions',
      'Implemented hedging strategies for risk management',
      'Presented investment thesis to BofA traders'
    ],
    skills: ['Portfolio Management', 'Risk Management', 'Market Analysis']
  }
];

const timeline = [
  {
    year: '2024',
    title: 'MBA Candidate',
    company: 'Binghamton University',
    description: 'Pursuing MBA with focus on Finance and Technology',
    achievements: [
      'Selected for Dean\'s List',
      'Active member of Investment Fund',
      'Participating in multiple case competitions'
    ]
  },
  {
    year: '2023',
    title: 'Investment Analyst',
    company: 'Private Equity Firm',
    description: 'Conducted due diligence and financial analysis for potential investments',
    achievements: [
      'Analyzed over 20 potential investment opportunities',
      'Developed financial models for portfolio companies',
      'Contributed to successful exit strategy'
    ]
  },
  {
    year: '2022',
    title: 'Financial Analyst',
    company: 'Investment Bank',
    description: 'Supported M&A transactions and financial modeling',
    achievements: [
      'Worked on $500M+ M&A transactions',
      'Created complex financial models',
      'Prepared pitch books for client meetings'
    ]
  },
  {
    year: '2021',
    title: 'Bachelor\'s Degree',
    company: 'University',
    description: 'Graduated with honors in Finance',
    achievements: [
      'Dean\'s List all semesters',
      'Finance Club President',
      'Completed CFA Level 1'
    ]
  }
];

const gradientAnimation = {
  'animate-gradient-x': {
    backgroundSize: '200% 200%',
    animation: 'gradient-x 15s ease infinite',
  },
  '@keyframes gradient-x': {
    '0%, 100%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
  },
};

export default function Home() {
  const [selectedCase, setSelectedCase] = useState<typeof caseCompetitions[0] | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/50 to-pink-50/50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-purple-50/80 to-pink-50/80" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent tracking-tight animate-gradient-x">
              Vansh Sharma
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
              MBA Student @ Binghamton
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Turning data into deal flow. Financial Valuations that Mean Business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/valuations"
                  className="inline-block px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full 
                           shadow-lg hover:shadow-xl transition-all duration-300
                           text-lg font-medium"
                >
                  View My Work
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block px-10 py-5 text-gray-900 rounded-full 
                           shadow-lg hover:shadow-xl transition-all duration-300
                           text-lg font-medium border-2 border-violet-600
                           hover:bg-violet-600 hover:text-white"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-violet-500 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* My Story Section */}
      <section id="story" className="min-h-screen py-20 bg-gradient-to-b from-pink-50/50 via-purple-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-xl text-gray-600">
              A timeline of my professional and educational experience
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-600 via-fuchsia-500 to-rose-500" />

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'} md:w-1/2`}
              >
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-violet-600 font-medium mb-4">{item.company}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-violet-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Competitions Section */}
      <section id="competitions" className="min-h-screen py-20 bg-gradient-to-b from-white via-purple-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              Case Competitions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseCompetitions.map((competition) => (
              <motion.div
                key={competition.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm p-8 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedCase(competition)}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">{competition.title}</h3>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {competition.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-violet-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full text-sm mt-6">
                  {competition.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Competition Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedCase.title}</h3>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedCase.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedCase.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-violet-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Skills Demonstrated</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
