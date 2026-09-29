import React, { useState } from 'react';
import { PageId } from '../types';
import { PRODUCT_URL, PRICE } from '../data/suiteData';
import { ArrowUpRight, Sparkles, ChevronDown, Check } from 'lucide-react';
import lifestyleImage from '../assets/images/cozy_lifestyle_creative_1790707745290.jpg';

interface IsItForYouPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuiz: () => void;
}

export const IsItForYouPage: React.FC<IsItForYouPageProps> = ({ onNavigate, onOpenQuiz }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const FAQS = [
    {
      q: 'Do I need prior tech or marketing experience?',
      a: 'Not at all. The course is designed from ground zero for beginners. It walks you through setting up step-by-step with clear, click-by-click video instructions.',
    },
    {
      q: 'How much time do I need each week?',
      a: 'Because it is completely self-paced with lifetime access, there are no deadlines. Even setting aside 30 to 45 minutes a few days a week gives you plenty of time to learn at your own calm pace.',
    },
    {
      q: 'Do I have to show my face on social media?',
      a: 'No. Several modules are dedicated entirely to faceless marketing, digital templates, and behind-the-scenes systems. You get to choose the style that feels good to you.',
    },
    {
      q: 'Are there hidden monthly fees?',
      a: 'No. The BOSS Suite is a one-time payment of $597 with lifetime access and future updates included.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Header */}
      <section className="pt-8 sm:pt-14 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#E8DFD5] text-xs text-[#78533F] font-medium mb-4">
          <span>Finding Your Fit</span>
          <span>·</span>
          <span>Zero Pressure</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2E2824] mb-6 text-balance">
          Could this be a good place to start? 🤎
        </h1>

        <div className="space-y-4 text-base sm:text-lg text-[#6E6259] leading-relaxed max-w-2xl mx-auto font-normal">
          <p>
            Maybe you’re brand new to digital marketing. Maybe you’ve tried a few things and still aren’t sure what direction to take.
          </p>
          <p className="text-[#2E2824] font-medium">
            The BOSS Suite gives you different options to explore so you can find something that fits <span className="underline decoration-[#78533F]/40 underline-offset-4">your goals, your time, and your lifestyle.</span>
          </p>
        </div>
      </section>

      {/* This may be for you if */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#E8DFD5] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Criteria */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#2E2824] mb-2">
                  This may be for you if:
                </h2>
                <p className="text-xs text-[#6E6259]">
                  A thoughtful checklist to see if this matches where you are right now.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5]">
                  <span className="text-lg select-none">✨</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2E2824]">
                      You want to learn digital marketing
                    </h3>
                    <p className="text-xs text-[#6E6259] mt-0.5">
                      Understanding how digital products, content, and modern online distribution actually work in simple terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5]">
                  <span className="text-lg select-none">✨</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2E2824]">
                      You want different online business ideas to explore
                    </h3>
                    <p className="text-xs text-[#6E6259] mt-0.5">
                      Rather than being pushed into one single rigid method, you have 24+ flexible paths to choose from.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5]">
                  <span className="text-lg select-none">✨</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2E2824]">
                      You want guidance instead of figuring everything out alone
                    </h3>
                    <p className="text-xs text-[#6E6259] mt-0.5">
                      Weekly mentorship calls, templates, scripts, and a kind community to answer your questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuiz}
                  className="text-xs font-semibold text-[#78533F] hover:text-[#5C3D2E] inline-flex items-center gap-1.5 underline underline-offset-4"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Not sure yet? Take the quick starting quiz</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Photo */}
            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E8DFD5] bg-[#F4EFEA] aspect-[4/3] sm:aspect-square relative shadow-2xs">
                <img
                  src={lifestyleImage}
                  alt="Cozy warm planner with coffee and morning sunlight"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium bg-black/40 backdrop-blur-xs p-2.5 rounded-xl text-center">
                  "Take it one day, one simple step at a time."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl font-semibold text-[#2E2824] mb-2">
            Common questions from beginners
          </h2>
          <p className="text-xs text-[#6E6259]">
            Everything explained simply and casually.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8DFD5] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm font-semibold text-[#2E2824]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#78533F] shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 pt-1 text-xs text-[#6E6259] leading-relaxed border-t border-[#FAF7F2]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Explore CTA Box */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F4EFEA] border border-[#E8DFD5] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xs">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2E2824]">
              Ready to explore?
            </h2>

            <p className="text-sm sm:text-base text-[#6E6259] leading-relaxed">
              You don’t have to have everything figured out before you start.
            </p>

            <div className="font-serif text-lg sm:text-xl font-medium text-[#78533F] py-2">
              One lesson. One skill. One step at a time. ✨
            </div>

            <div className="pt-3">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#78533F] hover:bg-[#5C3D2E] active:scale-[0.98] text-white text-sm font-semibold rounded-full shadow-sm transition-all"
              >
                <span>Get The BOSS Suite — {PRICE}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="mt-3 text-xs text-[#8C7E74]">
                Instant lifetime access upon checkout · Secure Stan Store link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate & Income Disclosure */}
      <section className="max-w-2xl mx-auto px-4 text-center pt-2">
        <p className="text-xs text-[#8C7E74] leading-relaxed italic border-t border-[#E8DFD5] pt-6">
          Disclosure: I’m an affiliate and may earn a commission if you purchase through my link. The course teaches ways to earn online; income and results are not guaranteed.
        </p>
      </section>
    </div>
  );
};
