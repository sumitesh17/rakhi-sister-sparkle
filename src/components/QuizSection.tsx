import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface QuizSectionProps {
  onNext: () => void;
}

const QuizSection = ({ onNext }: QuizSectionProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const questions = [
    {
      q: "Who is your favorite brother?",
      options: ["Me", "Sumitesh", "Both"],
      response: "I know your favorite brother is always me 😎"
    },
    {
      q: "What's our most iconic fight?",
      options: ["Over TV remote", "Over last piece of chocolate", "I don't even remember, we always make up"],
      response: "Haha, good times... we always end up laughing anyway."
    },
    {
      q: "What makes our bond special?",
      options: ["Our silly fights", "Inside jokes", "Everything"],
      response: "Exactly. It's everything. You're everything to me, sister."
    }
  ];

  const handleAnswer = () => {
    setShowResponse(true);
    setTimeout(() => {
      if (currentQ < 2) {
        setCurrentQ(currentQ + 1);
        setShowResponse(false);
      } else {
        setShowContinue(true);
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        {!showContinue ? (
          <>
            <h2 className="text-3xl font-semibold mb-8 text-pink-accent font-caveat">
              Question {currentQ + 1}
            </h2>
            
            {!showResponse ? (
              <>
                <p className="text-2xl mb-8 text-gray-medium font-dm-sans">
                  {questions[currentQ].q}
                </p>
                <div className="space-y-4">
                  {questions[currentQ].options.map((option, i) => (
                    <Button
                      key={i}
                      onClick={handleAnswer}
                      className="btn-magical w-full text-lg"
                    >
                      {String.fromCharCode(65 + i)}. {option}
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className="animate-fadeInUp">
                <p className="text-2xl text-pink-accent font-caveat">
                  {questions[currentQ].response}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold text-pink-accent mb-8 font-caveat sparkles">
              Ready for something special? 💕
            </h2>
            <Button onClick={onNext} className="btn-magical animate-pulse-soft">
              Continue ✨
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;