'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';

const competitions = [
  {
    id: 1,
    title: 'Barclays Equity Research Challenge',
    year: '2023',
    role: 'Lead Analyst',
    result: 'Finalist',
    description: 'Conducted comprehensive equity research on a technology sector company, including financial modeling, industry analysis, and investment recommendation.',
    skills: ['Financial Modeling', 'Equity Research', 'Presentation'],
    image: '/competitions/barclays.jpg',
  },
  {
    id: 2,
    title: 'EY TechX Case Competition',
    year: '2023',
    role: 'Team Lead',
    result: 'Winner',
    description: 'Developed a strategic solution for a fintech company\'s digital transformation, focusing on market opportunity, competitive analysis, and implementation roadmap.',
    skills: ['Strategy', 'Digital Transformation', 'Market Analysis'],
    image: '/competitions/ey.jpg',
  },
  {
    id: 3,
    title: 'Bank of America M&A Challenge',
    year: '2022',
    role: 'Financial Analyst',
    result: 'Semi-Finalist',
    description: 'Analyzed potential acquisition targets for a Fortune 500 company, including valuation, synergy analysis, and integration strategy.',
    skills: ['M&A', 'Valuation', 'Due Diligence'],
    image: '/competitions/boa.jpg',
  },
];

const CompetitionCard = ({ data, onClick }: { data: typeof competitions[0]; onClick: () => void }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex-none w-[300px] bg-white rounded-2xl shadow-sm hover-glow cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="aspect-[4/3] bg-gray-100 relative">
        {/* Add image here when available */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <p className="text-sm opacity-90">{data.year}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">{data.role}</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {data.result}
          </span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">{data.description}</p>
      </div>
    </motion.div>
  );
};

const CompetitionModal = ({ isOpen, onClose, data }: {
  isOpen: boolean;
  onClose: () => void;
  data: typeof competitions[0];
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              ×
            </button>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">{data.year}</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {data.result}
                </span>
              </div>

              <div className="aspect-video bg-gray-100 rounded-xl mb-8">
                {/* Add image here when available */}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Role</h3>
                  <p className="text-gray-600">{data.role}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{data.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Competitions() {
  const [selectedCompetition, setSelectedCompetition] = useState<typeof competitions[0] | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Case Competitions</h1>
          <p className="text-xl text-gray-600">
            Showcasing strategic thinking and analytical prowess
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 px-1 snap-x snap-mandatory">
            {competitions.map((competition) => (
              <div key={competition.id} className="snap-start">
                <CompetitionCard
                  data={competition}
                  onClick={() => setSelectedCompetition(competition)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCompetition && (
        <CompetitionModal
          isOpen={!!selectedCompetition}
          onClose={() => setSelectedCompetition(null)}
          data={selectedCompetition}
        />
      )}
    </main>
  );
} 