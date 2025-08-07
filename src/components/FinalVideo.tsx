import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface FinalVideoProps {
  onNext: () => void;
}

const FinalVideo = ({ onNext }: FinalVideoProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 500);
    setTimeout(() => setShowVideo(true), 2000);
    // Simulate video ending after 10 seconds
    setTimeout(() => setShowFinalText(true), 12000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        {showMessage && (
          <div className="animate-fadeInUp mb-8">
            <h2 className="text-3xl font-bold font-caveat text-pink-accent sparkles">
              The first person I started capturing in this University... 📹
            </h2>
          </div>
        )}
        
        {showVideo && (
          <div className="animate-fadeInUp mb-8">
            {/* Placeholder for uploaded video */}
            <div className="w-full max-w-2xl h-80 bg-pink-soft rounded-lg border-4 border-white-pure shadow-lg flex items-center justify-center mx-auto">
              <p className="text-pink-accent font-caveat text-xl">
                🎥 Your special video will play here
              </p>
            </div>
          </div>
        )}
        
        {showFinalText && (
          <div className="animate-fadeInUp">
            <p className="text-2xl font-caveat text-pink-accent mb-8 leading-relaxed">
              I love you, sister. You're my best sister.<br />
              Hope you like my gifts.<br />
              Thank you for everything. 💕
            </p>
            
            <Button onClick={onNext} className="btn-magical text-xl">
              Final Surprise ✨
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalVideo;