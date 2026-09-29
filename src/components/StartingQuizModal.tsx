import React, { useState } from 'react';
import { QUIZ_QUESTIONS, PRODUCT_URL } from '../data/suiteData';
import { X, Check, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

interface StartingQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToInside: () => void;
}

export const StartingQuizModal: React.FC<StartingQuizModalProps> = ({
  isOpen,
  onClose,
  onNavigateToInside,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (archetype: string) => {
    const updated = [...answers, archetype];
    setAnswers(updated);
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Determine top suggestion
  const getRecommendation = () => {
    const hasFaceless = answers.filter((a) => a === 'faceless').length;
    const hasDigital = answers.filter((a) => a === 'digital_products').length;
    const hasAffiliate = answers.filter((a) => a === 'affiliate').length;

    if (hasFaceless >= hasDigital && hasFaceless >= hasAffiliate) {
      return {
        title: 'Faceless Content & Calm Curation',
        emoji: '🌿',
        desc: 'You value privacy, peace of mind, and simple aesthetics. You do not need to show your face on camera or record talking videos to build an audience. Inside The BOSS Suite, you will learn how to create aesthetic text carousels, curated guides, and faceless reels that resonate organically.',
        starterStep: 'Explore Module 3 (Faceless Content & Aesthetic Reels)',
      };
    } else if (hasDigital >= hasAffiliate) {
      return {
        title: 'Simple Digital Templates & Mini-Guides',
        emoji: '📝',
        desc: 'You love making helpful resources that save other people time. Creating a 3-page checklist, Notion board, or budget tracker that sells for $9 to $27 is the simplest, most gratifying way to get your feet wet with zero inventory.',
        starterStep: 'Explore Module 5 (Digital Product Creation & Stan Store Setup)',
      };
    } else {
      return {
        title: 'Affiliate Recommendations & Tool Stacks',
        emoji: '✨',
        desc: 'You want to start without the burden of creating your own product from scratch. By recommending courses, software, and helpful resources you genuinely believe in, you can earn commissions right away with clean step-by-step guidance.',
        starterStep: 'Explore Module 7 (Ethical Affiliate Marketing & 85% Commission Pathways)',
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#E8DFD5] rounded-3xl p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close quiz"
          className="absolute top-5 right-5 p-2 text-[#6E6259] hover:text-[#2E2824] hover:bg-[#F4EFEA] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold tracking-wide text-[#78533F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STEP {currentStep + 1} OF {QUIZ_QUESTIONS.length}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2E2824] mb-2 leading-snug">
              {currentQ.question}
            </h3>
            <p className="text-sm text-[#6E6259] mb-6">
              {currentQ.subtitle}
            </p>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.archetype)}
                  className="w-full text-left p-4 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#78533F] hover:bg-[#FDFBF9] transition-all group focus:outline-none focus:ring-2 focus:ring-[#78533F]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-[#2E2824] group-hover:text-[#78533F] transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-[#6E6259] mt-1 leading-relaxed">
                        {opt.sublabel}
                      </div>
                    </div>
                    <div className="w-5 h-5 rounded-full border border-[#D5C7B8] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#78533F] group-hover:bg-[#78533F]/10">
                      <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#78533F] transition-all" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#E8DFD5] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#78533F] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F4EFEA] border border-[#E8DFD5] text-2xl mb-4">
              {rec.emoji}
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-[#78533F] mb-1">
              Your Recommended Starting Point
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2E2824] mb-3">
              {rec.title}
            </h3>

            <div className="p-4 rounded-2xl bg-white border border-[#E8DFD5] text-left mb-6">
              <p className="text-sm text-[#4A4038] leading-relaxed mb-3">
                {rec.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-[#78533F] pt-2 border-t border-[#F4EFEA]">
                <Check className="w-4 h-4 shrink-0 text-[#78533F]" />
                <span>{rec.starterStep}</span>
              </div>
            </div>

            <p className="text-xs text-[#6E6259] mb-6 italic">
              Remember: The BOSS Suite covers all 24+ streams, so you are never locked in. Start here, build confidence, and branch out when you feel ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#78533F] hover:bg-[#5C3D2E] text-white text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Get The BOSS Suite — $597</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToInside();
                }}
                className="py-3 px-4 bg-white border border-[#E8DFD5] hover:bg-[#F4EFEA] text-[#2E2824] text-xs font-semibold rounded-full transition-colors"
              >
                See Full Curriculum
              </button>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 inline-flex items-center gap-1 text-xs text-[#6E6259] hover:text-[#2E2824] transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Retake quiz</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
