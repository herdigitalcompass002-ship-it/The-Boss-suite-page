import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { WhatsInsidePage } from './components/WhatsInsidePage';
import { IsItForYouPage } from './components/IsItForYouPage';
import { Footer } from './components/Footer';
import { StartingQuizModal } from './components/StartingQuizModal';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Sync hash routing on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash === 'home' || hash === 'whats-inside' || hash === 'is-it-for-you') {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2E2824]">
      {/* Top 3-Zone Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )}
        {activePage === 'whats-inside' && (
          <WhatsInsidePage
            onNavigate={handleNavigate}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )}
        {activePage === 'is-it-for-you' && (
          <IsItForYouPage
            onNavigate={handleNavigate}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )}
      </main>

      {/* Starting Point Quiz Modal */}
      <StartingQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onNavigateToInside={() => handleNavigate('whats-inside')}
      />

      {/* Quiet Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
