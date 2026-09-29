import React from 'react';
import { PageId } from '../types';
import { SUITE_ITEMS, PRODUCT_URL, PRICE } from '../data/suiteData';
import { ArrowRight, Sparkles, Check, HeartHandshake } from 'lucide-react';
import tabletImage from '../assets/images/course_preview_tablet_1790707733401.jpg';

interface WhatsInsidePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuiz: () => void;
}

export const WhatsInsidePage: React.FC<WhatsInsidePageProps> = ({ onNavigate, onOpenQuiz }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Header */}
      <section className="pt-8 sm:pt-14 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#E8DFD5] text-xs text-[#78533F] font-medium mb-4">
          <span>The Full Breakdown</span>
          <span>·</span>
          <span>Everything included in {PRICE}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2E2824] mb-5 text-balance">
          So… what do you actually get? 👀
        </h1>

        <p className="text-base text-[#6E6259] leading-relaxed max-w-2xl mx-auto text-balance font-normal">
          No gatekeeping, no confusing upsells. Everything you need to learn digital marketing, find your path, and get set up properly is right inside.
        </p>
      </section>

      {/* 8 Feature Cards Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SUITE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E8DFD5] rounded-3xl p-6 hover:border-[#78533F]/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4 select-none">
                  {item.emoji}
                </div>
                <h2 className="font-serif text-lg font-semibold text-[#2E2824] mb-2 leading-snug">
                  {item.title}
                </h2>
                <div className="text-xs font-medium text-[#78533F] mb-2.5">
                  {item.subtitle}
                </div>
                <p className="text-xs text-[#6E6259] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {item.id === 'quiz' && (
                <div className="mt-4 pt-3 border-t border-[#F4EFEA]">
                  <button
                    onClick={onOpenQuiz}
                    className="text-xs text-[#78533F] hover:text-[#5C3D2E] font-medium inline-flex items-center gap-1"
                  >
                    <span>Try the preview quiz</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Optional Affiliate Opportunity Note & Visual Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFFFF] border border-[#E8DFD5] rounded-3xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Visual Image Column */}
            <div className="md:col-span-5 h-64 md:h-full min-h-[260px] bg-[#F4EFEA] relative">
              <img
                src={tabletImage}
                alt="The BOSS Suite course walkthrough preview on tablet"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#78533F]">
                <HeartHandshake className="w-4 h-4" />
                <span>BONUS HIGHLIGHT</span>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-[#2E2824] leading-snug">
                Plus, there’s an optional affiliate opportunity with an advertised 85% commission.
              </h2>

              <p className="text-xs sm:text-sm text-[#6E6259] leading-relaxed">
                If you love the course and want to recommend it to other beginners, you have the option to apply to share it as an affiliate. It is 100% optional — you can also use what you learn to build your own separate digital products, templates, or services.
              </p>

              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E8DFD5] text-[11px] text-[#6E6259] leading-relaxed">
                <span className="font-semibold text-[#2E2824]">Friendly note on transparency:</span> We do not make income guarantees or exaggerated claims. Any earning potential depends entirely on individual dedication, effort, consistency, and market dynamics.
              </div>

              <div className="pt-2">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#78533F] hover:bg-[#5C3D2E] text-white text-xs font-semibold rounded-full shadow-sm transition-all"
                >
                  <span>See What’s Inside on Stan Store — {PRICE}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gentle Section Footer Navigation */}
      <section className="max-w-2xl mx-auto px-4 text-center pt-4">
        <button
          onClick={() => {
            onNavigate('is-it-for-you');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#78533F] hover:text-[#5C3D2E] underline underline-offset-4 transition-colors"
        >
          <span>Next up: Could this be a good place to start? 🤎</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
