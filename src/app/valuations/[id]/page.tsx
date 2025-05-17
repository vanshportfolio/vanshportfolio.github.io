'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const valuations = [
  {
    id: 1,
    company: 'Target Coporation Inc',
    industry: 'Technology',
    description: 'Comprehensive valuation analysis for a leading technology solutions provider.',
    highlights: [
      'DCF Analysis',
      'Market Comparables',
      'Strategic Value Assessment'
    ],
    value: '$250M',
    fullAnalysis: {
      overview: 'Detailed analysis of TechCorp Solutions, a leading provider of enterprise software solutions. The valuation was conducted using multiple methodologies to ensure a comprehensive assessment of the company\'s worth.',
      methodology: [
        'Discounted Cash Flow (DCF) Analysis',
        'Comparable Company Analysis',
        'Precedent Transactions Analysis',
        'Strategic Value Assessment'
      ],
      keyFindings: [
        'Strong recurring revenue model with 85% subscription-based revenue',
        'Market leadership in enterprise software solutions',
        'Robust growth potential in emerging markets',
        'Significant intellectual property portfolio'
      ],
      financialMetrics: {
        revenue: '$120M',
        ebitda: '$45M',
        growth: '25% YoY',
        margin: '37.5%'
      }
    }
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
    value: '$180M',
    fullAnalysis: {
      overview: 'Comprehensive valuation of GreenEnergy Inc., a renewable energy company with a diverse portfolio of solar and wind assets across multiple regions.',
      methodology: [
        'Asset-Based Valuation',
        'Income Approach',
        'Environmental Impact Assessment',
        'Regulatory Risk Analysis'
      ],
      keyFindings: [
        'Diversified portfolio of renewable energy assets',
        'Strong government incentives and subsidies',
        'Growing demand for clean energy solutions',
        'Favorable regulatory environment'
      ],
      financialMetrics: {
        revenue: '$85M',
        ebitda: '$32M',
        growth: '30% YoY',
        margin: '37.6%'
      }
    }
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
    value: '$120M',
    fullAnalysis: {
      overview: 'Detailed valuation of MediTech Innovations, a healthcare technology startup developing innovative medical devices with significant market potential.',
      methodology: [
        'Intellectual Property Valuation',
        'Market Penetration Analysis',
        'Regulatory Risk Assessment',
        'Comparable Transactions Analysis'
      ],
      keyFindings: [
        'Strong patent portfolio in medical device technology',
        'High growth potential in healthcare market',
        'Strategic partnerships with major healthcare providers',
        'Innovative product pipeline'
      ],
      financialMetrics: {
        revenue: '$45M',
        ebitda: '$15M',
        growth: '40% YoY',
        margin: '33.3%'
      }
    }
  }
];

export default function ValuationDetails() {
  const params = useParams();
  const valuation = valuations.find(v => v.id === Number(params.id));

  if (!valuation) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/50 to-pink-50/50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Valuation Not Found</h1>
          <Link
            href="/valuations"
            className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full 
                     shadow-lg hover:shadow-xl transition-all duration-300
                     text-lg font-medium"
          >
            Back to Valuations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/50 to-pink-50/50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                {valuation.company}
              </h1>
              <p className="text-xl text-violet-600 font-medium">{valuation.industry}</p>
            </div>
            <Link
              href="/valuations"
              className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full 
                       shadow-lg hover:shadow-xl transition-all duration-300
                       text-lg font-medium"
            >
              Back to Valuations
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-600 mb-6">{valuation.fullAnalysis.overview}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-xl font-semibold text-gray-900">{valuation.fullAnalysis.financialMetrics.revenue}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">EBITDA</p>
                <p className="text-xl font-semibold text-gray-900">{valuation.fullAnalysis.financialMetrics.ebitda}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Growth</p>
                <p className="text-xl font-semibold text-gray-900">{valuation.fullAnalysis.financialMetrics.growth}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Margin</p>
                <p className="text-xl font-semibold text-gray-900">{valuation.fullAnalysis.financialMetrics.margin}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Methodology</h3>
                <ul className="space-y-2">
                  {valuation.fullAnalysis.methodology.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-violet-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Key Findings</h3>
                <ul className="space-y-2">
                  {valuation.fullAnalysis.keyFindings.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-violet-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 
