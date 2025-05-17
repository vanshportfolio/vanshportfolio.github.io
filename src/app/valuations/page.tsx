'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const valuations = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    industry: 'Technology',
    description: 'Comprehensive valuation analysis for a leading technology solutions provider.',
    highlights: [
      'DCF Analysis',
      'Market Comparables',
      'Strategic Value Assessment'
    ],
    value: '$250M'
  },
  {
    id: 2,
    company: 'GreenEnergy Inc.',
    industry: 'Renewable Energy',
    description: 'Valuation of a renewable energy company with multiple solar and wind assets.',
    highlights: [
      'Asset-Based Valuation',
      'Future Cash Flow Projections',
      'Environmental Impact Assessment'
    ],
    value: '$180M'
  },
  {
    id: 3,
    company: 'MediTech Innovations',
    industry: 'Healthcare',
    description: 'Valuation of a healthcare technology startup with innovative medical devices.',
    highlights: [
      'IP Valuation',
      'Market Penetration Analysis',
      'Regulatory Risk Assessment'
    ],
    value: '$120M'
  }
];

export default function Valuations() {
  const [selectedValuation, setSelectedValuation] = useState<typeof valuations[0] | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/50 to-pink-50/50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
            Financial Analysis
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive valuation and financial analysis projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuations.map((valuation) => (
            <motion.div
              key={valuation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-8 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedValuation(valuation)}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">{valuation.company}</h3>
              <p className="text-violet-600 font-medium mb-4">{valuation.industry}</p>
              <p className="text-gray-600 mb-4">{valuation.description}</p>
              <div className="space-y-2">
                {valuation.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full text-sm">
                  {valuation.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Valuation Details Modal */}
        {selectedValuation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedValuation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedValuation.company}</h3>
                  <p className="text-violet-600 font-medium">{selectedValuation.industry}</p>
                </div>
                <button
                  onClick={() => setSelectedValuation(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedValuation.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedValuation.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-violet-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">{selectedValuation.value}</span>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`/valuations/${selectedValuation.id}`}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full 
                             shadow-lg hover:shadow-xl transition-all duration-300
                             text-lg font-medium"
                  >
                    View Full Analysis
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
} 