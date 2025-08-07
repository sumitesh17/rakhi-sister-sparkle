import { useEffect, useState } from 'react';

const EndCredits = () => {
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCredits(true), 1000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Rakhi Thread Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl animate-float">🧵</div>
        <div className="absolute top-32 right-32 text-3xl animate-float" style={{ animationDelay: '1s' }}>🌸</div>
        <div className="absolute bottom-40 left-16 text-5xl animate-float" style={{ animationDelay: '2s' }}>🪷</div>
        <div className="absolute bottom-32 right-24 text-4xl animate-float" style={{ animationDelay: '3s' }}>💗</div>
        <div className="absolute top-1/2 left-1/4 text-6xl animate-sparkle">✨</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-sparkle" style={{ animationDelay: '2s' }}>⭐</div>
      </div>

      {showCredits && (
        <div className="text-center z-10 animate-fadeInUp">
          <h1 className="text-5xl font-bold font-caveat text-pink-accent mb-8 sparkles animate-heartbeat">
            Happy Rakshabandhan 2024
          </h1>
          
          <div className="space-y-4 text-xl font-dm-sans text-gray-medium">
            <p className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              Made with 💕 for Darshni
            </p>
            <p className="animate-fadeInUp" style={{ animationDelay: '1s' }}>
              From your loving brother
            </p>
            <p className="animate-fadeInUp font-caveat text-2xl text-pink-accent" style={{ animationDelay: '1.5s' }}>
              "Sisters are different flowers from the same garden" 🌸
            </p>
          </div>

          <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '2s' }}>
            <div className="text-6xl animate-heartbeat">
              💕 🧵 💕
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EndCredits;