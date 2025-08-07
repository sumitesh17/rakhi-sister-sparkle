import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SecretNoteSectionProps {
  onNext: () => void;
}

const SecretNoteSection = ({ onNext }: SecretNoteSectionProps) => {
  const [currentNote, setCurrentNote] = useState<'bad' | 'good' | null>(null);
  const [showTyping, setShowTyping] = useState(false);

  const startBadMemory = () => {
    setCurrentNote('bad');
    setShowTyping(true);
  };

  const startGoodMemory = () => {
    setCurrentNote('good');
    setShowTyping(true);
  };

  // Demo content - will be replaced with uploaded files
  const badMemoryText = "That day we argued over something silly, and I let my stubborn side win. I know it hurt you, and I wish I had just hugged you instead. I'm sorry for the times I made you feel alone — we will erase that part and write better memories together.";
  const goodMemoryText = "Remember our late-night talks and laughing so hard we couldn't breathe? The way you cheer me up with one look, our inside jokes, our shared dreams — that's us. I treasure every bit of it, and I always will.";

  if (!currentNote) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-caveat text-pink-accent mb-8 sparkles">
            Time for some memories... 📝
          </h2>
          <Button onClick={startBadMemory} className="btn-magical text-xl">
            Read the Letters ✨
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl paper-letter rounded-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold font-caveat text-pink-accent">
            {currentNote === 'bad' ? '💔 Bad Memory' : '💕 Good Memory'}
          </h3>
          <div className="w-6 h-6 bg-pink-accent rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-medium font-dm-sans">
          {showTyping && (
            <p className="typing-text">
              {currentNote === 'bad' ? badMemoryText : goodMemoryText}
            </p>
          )}
        </div>

        <div className="text-center mt-8">
          {currentNote === 'bad' ? (
            <Button onClick={startGoodMemory} className="btn-magical">
              We should forget and erase this part 🗑️
            </Button>
          ) : (
            <Button onClick={onNext} className="btn-magical">
              We need to remember this part 💖
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecretNoteSection;