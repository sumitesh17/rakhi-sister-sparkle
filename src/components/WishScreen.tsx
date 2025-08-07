import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface WishScreenProps {
  onNext: () => void;
  onIncreaseVolume: () => void;
}

const WishScreen = ({ onNext, onIncreaseVolume }: WishScreenProps) => {
  const [showWish, setShowWish] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    onIncreaseVolume();
    setTimeout(() => setShowWish(true), 500);
    setTimeout(() => setShowButton(true), 3500);
  }, [onIncreaseVolume]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fireworks Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl animate-sparkle">🎆</div>
        <div className="absolute top-32 right-32 text-3xl animate-sparkle" style={{ animationDelay: '0.5s' }}>🎇</div>
        <div className="absolute bottom-40 left-16 text-5xl animate-sparkle" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-32 right-24 text-4xl animate-sparkle" style={{ animationDelay: '1.5s' }}>🎆</div>
        <div className="absolute top-1/2 left-1/4 text-3xl animate-float">💗</div>
        <div className="absolute top-1/3 right-1/4 text-2xl animate-float" style={{ animationDelay: '1s' }}>💕</div>
      </div>

      <div className="text-center z-10">
        {showWish && (
          <div className="animate-fadeInUp">
            <h1 className="text-6xl font-bold font-caveat text-pink-accent mb-4 animate-heartbeat sparkles">
              Happy Rakshabandhan
            </h1>
            <h2 className="text-5xl font-bold font-caveat text-lavender-medium animate-heartbeat">
              Darshni 💕
            </h2>
          </div>
        )}
        
        {showButton && (
          <div className="mt-12 animate-fadeInUp">
            <Button onClick={onNext} className="btn-magical text-xl animate-pulse-soft">
              Continue the Journey ✨
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishScreen;