import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface IntroScreenProps {
  onNext: () => void;
  onStartMusic: () => void;
}

const IntroScreen = ({ onNext, onStartMusic }: IntroScreenProps) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleTurnOnLights = () => {
    setLightsOn(true);
    setTimeout(() => setShowWelcome(true), 1000);
  };

  const handleBegin = () => {
    onStartMusic();
    onNext();
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-all duration-2000 ${
      lightsOn ? 'bg-gradient-to-br from-pink-light to-lavender-light' : 'bg-gray-900'
    }`}>
      {!lightsOn ? (
        <Button 
          onClick={handleTurnOnLights}
          className="btn-glow text-xl px-8 py-4"
        >
          ✨ Turn On Lights ✨
        </Button>
      ) : (
        showWelcome && (
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl font-bold font-caveat text-pink-accent mb-6 sparkles">
              Welcome Darshni 💕
            </h1>
            <p className="text-xl text-gray-medium mb-8 font-dm-sans">
              You're about to unlock something made only for you my sisto
            </p>
            <Button onClick={handleBegin} className="btn-magical">
              Let's Begin 🌸
            </Button>
          </div>
        )
      )}
    </div>
  );
};

export default IntroScreen;