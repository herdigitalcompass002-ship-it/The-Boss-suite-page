import React, { useState } from 'react';
import { PageId } from '../types';
import { PRODUCT_URL } from '../data/suiteData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'whats-inside', label: "What's Inside" },
    { id: 'is-it-for-you', label: 'Is It For You?' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFD5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Brand wordmark (single element, clean display face) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left font-serif text-xl sm:text-2xl font-semibold text-[#2E2824] hover:text-[#78533F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#78533F] rounded"
        >
          The BOSS Suite
        </button>

        {/* Zone 2: Navigation Links (Clean text, subtle active indicator) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#78533F] rounded ${
                  isActive
                    ? 'text-[#78533F] font-semibold'
                    : 'text-[#6E6259] hover:text-[#2E2824]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#78533F] rounded-full" />
                )}
              </button>
            );
          })}
          <button
            onClick={onOpenQuiz}
            className="text-xs font-medium text-[#78533F] hover:text-[#5C3D2E] underline underline-offset-4 transition-colors"
          >
            Take 60s Quiz ✨
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white bg-[#78533F] hover:bg-[#5C3D2E] active:scale-[0.98] transition-all rounded-full shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#78533F] focus-visible:ring-offset-2"
          >
            <span>Get The BOSS Suite — $597</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-medium text-white bg-[#78533F] rounded-full whitespace-nowrap"
          >
            $597
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#6E6259] hover:text-[#2E2824] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#78533F]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E8DFD5] bg-[#FAF7F2] px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  activePage === link.id
                    ? 'bg-[#F4EFEA] text-[#78533F] font-semibold'
                    : 'text-[#6E6259] hover:bg-[#F4EFEA]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="text-left px-3 py-2 text-sm text-[#78533F] font-medium hover:bg-[#F4EFEA] rounded-lg"
            >
              📝 Take 60-Second Starting Quiz
            </button>
          </div>
          <div className="pt-2 border-t border-[#E8DFD5]">
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-semibold text-white bg-[#78533F] hover:bg-[#5C3D2E] rounded-full text-center"
            >
              <span>Get The BOSS Suite — $597</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
