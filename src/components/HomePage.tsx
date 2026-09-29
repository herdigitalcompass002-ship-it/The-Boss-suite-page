import React from 'react';
import { PageId } from '../types';
import { PRODUCT_URL, PRICE, STARTER_PATHS } from '../data/suiteData';
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_cozy_workspace_1790707720245.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuiz }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-14 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#E8DFD5] text-xs text-[#78533F] font-medium mb-6">
          <span>A friendly beginner's guide to digital income</span>
          <span>·</span>
          <span>Self-paced</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2E2824] mb-6 leading-[1.15] text-balance">
          Build an online business that fits your life ✨
        </h1>

        <p className="text-base sm:text-lg text-[#6E6259] leading-relaxed max-w-2xl mx-auto mb-8 text-balance font-normal">
          You don’t need a huge audience or years of experience to get started. You just need a simple place to begin and the right guidance along the way.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#78533F] hover:bg-[#5C3D2E] active:scale-[0.98] text-white text-sm font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span>Explore The BOSS Suite 🤎</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => onNavigate('whats-inside')}
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#F4EFEA] border border-[#E8DFD5] text-[#2E2824] text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2"
          >
            <span>See What’s Inside</span>
          </button>
        </div>

        {/* Hero Visual Asset */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-sm bg-[#F4EFEA] aspect-[16/9] max-w-3xl mx-auto">
          <img
            src={heroImage}
            alt="Warm aesthetic workspace with course materials, journal, and coffee"
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white text-xs sm:text-sm font-medium">
            <span className="bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full">
              ✨ 24+ flexible pathways to learn at your pace
            </span>
            <span className="hidden sm:inline bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full font-serif">
              Beginner-first
            </span>
          </div>
        </div>
      </section>

      {/* Spotlight Card: Meet The BOSS Suite */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xs text-center sm:text-left relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-lg">
              <div className="text-xs font-semibold text-[#78533F] tracking-wide uppercase">
                Digital Course & Roadmap
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E2824]">
                Meet The BOSS Suite — {PRICE}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6259] leading-relaxed">
                A beginner-friendly digital marketing course that gives you different paths to explore and helps you figure out where to start.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#6E6259]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#78533F]" />
                  Step-by-step videos
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#78533F]" />
                  Weekly coaching calls
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#78533F]" />
                  Lifetime access
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto text-center">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#78533F] hover:bg-[#5C3D2E] text-white text-xs font-semibold rounded-full shadow-sm transition-all"
              >
                <span>Explore The BOSS Suite 🤎</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <div className="mt-2 text-[11px] text-[#8C7E74]">
                One-time payment of {PRICE}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Section: Not sure where to start? */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F4EFEA] text-[#78533F] mb-3">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E2824] mb-3">
            Not sure where to start?
          </h2>
          <p className="text-sm sm:text-base text-[#6E6259] leading-relaxed">
            That’s exactly why The BOSS Suite was created. You can explore different options and take it one step at a time.
          </p>
        </div>

        {/* 3 Starter Pathways Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {STARTER_PATHS.map((path, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8DFD5] rounded-2xl p-5 hover:border-[#78533F]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-semibold text-[#78533F] mb-1">
                  {path.tag}
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2E2824] mb-1.5">
                  {path.title}
                </h3>
                <div className="text-xs text-[#8C7E74] mb-3 italic">
                  Vibe: {path.vibe}
                </div>
                <p className="text-xs text-[#6E6259] leading-relaxed">
                  {path.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini interactive prompt to take the quiz */}
        <div className="bg-[#F4EFEA] border border-[#E8DFD5] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-[#78533F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need help deciding right now?</span>
            </div>
            <div className="text-sm font-serif font-medium text-[#2E2824]">
              Take the 60-second quiz to discover your natural starting point
            </div>
          </div>
          <button
            onClick={onOpenQuiz}
            className="px-5 py-2.5 bg-white hover:bg-[#FAF7F2] border border-[#D5C7B8] text-xs font-semibold text-[#2E2824] rounded-full transition-all shrink-0 shadow-2xs"
          >
            Start Quiz (Takes 1 min) ✨
          </button>
        </div>
      </section>

      {/* Gentle Next Step Footer Bar */}
      <section className="max-w-2xl mx-auto px-4 text-center pt-6">
        <button
          onClick={() => {
            onNavigate('whats-inside');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#78533F] hover:text-[#5C3D2E] underline underline-offset-4 transition-colors"
        >
          <span>Next up: So… what do you actually get? 👀</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
