import React from 'react';
import { PageId } from '../types';
import { PRODUCT_URL, PRICE } from '../data/suiteData';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E8DFD5] bg-[#FAF7F2] py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="font-serif text-xl font-semibold text-[#2E2824]">
              The BOSS Suite
            </span>
            <p className="text-xs text-[#6E6259] mt-1">
              Simple, warm, beginner-friendly digital marketing · {PRICE}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#6E6259]">
            <button
              onClick={() => handleNav('home')}
              className="hover:text-[#2E2824] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('whats-inside')}
              className="hover:text-[#2E2824] transition-colors"
            >
              What's Inside
            </button>
            <button
              onClick={() => handleNav('is-it-for-you')}
              className="hover:text-[#2E2824] transition-colors"
            >
              Is It For You?
            </button>
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#78533F] font-semibold hover:underline"
            >
              <span>Get Access</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E8DFD5] text-center text-[11px] text-[#8C7E74] leading-relaxed max-w-2xl mx-auto">
          <p className="mb-2">
            Disclosure: I’m an affiliate and may earn a commission if you purchase through my link. The course teaches ways to earn online; income and results are not guaranteed.
          </p>
          <p>
            © {new Date().getFullYear()} The BOSS Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
