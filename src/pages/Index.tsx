import { useState, useEffect, useRef } from 'react';
import IntroScreen from '@/components/IntroScreen';
import QuizSection from '@/components/QuizSection';
import WishScreen from '@/components/WishScreen';
import SecretNoteSection from '@/components/SecretNoteSection';
import MemoryReveal from '@/components/MemoryReveal';
import FinalVideo from '@/components/FinalVideo';
import EndCredits from '@/components/EndCredits';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const sections = [
    'intro',
    'quiz',
    'wish',
    'secretNote',
    'memoryReveal',
    'finalVideo',
    'endCredits'
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const startMusic = () => {
    setMusicStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch(console.error);
    }
  };

  const increaseVolume = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
    }
  };

  useEffect(() => {
    // Preload demo audio (placeholder until real file is uploaded)
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  const renderCurrentSection = () => {
    switch (sections[currentSection]) {
      case 'intro':
        return <IntroScreen onNext={nextSection} onStartMusic={startMusic} />;
      case 'quiz':
        return <QuizSection onNext={nextSection} />;
      case 'wish':
        return <WishScreen onNext={nextSection} onIncreaseVolume={increaseVolume} />;
      case 'secretNote':
        return <SecretNoteSection onNext={nextSection} />;
      case 'memoryReveal':
        return <MemoryReveal onNext={nextSection} />;
      case 'finalVideo':
        return <FinalVideo onNext={nextSection} />;
      case 'endCredits':
        return <EndCredits />;
      default:
        return <IntroScreen onNext={nextSection} onStartMusic={startMusic} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        {/* Placeholder for now - user will upload their music file */}
        <source src="/demo-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="sparkles absolute top-20 left-20 text-2xl opacity-60 animate-sparkle" />
        <div className="sparkles absolute top-32 right-32 text-xl opacity-50 animate-sparkle" style={{ animationDelay: '1s' }} />
        <div className="sparkles absolute bottom-40 left-16 text-lg opacity-40 animate-sparkle" style={{ animationDelay: '2s' }} />
        <div className="floating-hearts absolute top-1/2 right-20 opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {renderCurrentSection()}
      </div>
    </div>
  );
};

export default Index;