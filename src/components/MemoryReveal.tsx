import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface MemoryRevealProps {
  onNext: () => void;
}

const MemoryReveal = ({ onNext }: MemoryRevealProps) => {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPhoto(true), 1000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl font-bold font-caveat text-pink-accent mb-8 sparkles">
          A precious moment... 📸
        </h2>
        
        {showPhoto && (
          <div className="animate-fadeInUp">
            <div className="relative inline-block">
              {/* Placeholder for uploaded photo */}
              <div className="w-96 h-64 bg-pink-soft rounded-lg border-4 border-white-pure shadow-lg flex items-center justify-center">
                <p className="text-pink-accent font-caveat text-xl">
                  📷 Your special photo will appear here
                </p>
              </div>
              
              {/* Photo frame effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-medium to-lavender-medium rounded-lg blur opacity-20"></div>
            </div>
            
            <p className="text-xl text-gray-medium font-dm-sans mt-6 mb-8">
              This moment captured forever in our hearts 💕
            </p>
            
            <Button onClick={onNext} className="btn-magical text-xl">
              Continue the Story ✨
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryReveal;