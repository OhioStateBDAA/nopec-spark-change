import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export const QuizCard = ({ questions, onComplete }: QuizCardProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleSubmit = () => {
    const isCorrect = parseInt(selectedAnswer) === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setAnswered(false);
    } else {
      setShowResult(true);
      onComplete(Math.round((score / questions.length) * 100));
    }
  };

  if (showResult) {
    return (
      <Card className="p-8 text-center bg-gradient-card">
        <div className="mb-6">
          {score / questions.length >= 0.7 ? (
            <CheckCircle2 className="w-20 h-20 mx-auto text-secondary animate-pulse-glow" />
          ) : (
            <XCircle className="w-20 h-20 mx-auto text-destructive" />
          )}
        </div>
        <h3 className="text-3xl font-bold mb-4">Quiz Complete!</h3>
        <p className="text-xl mb-6 text-muted-foreground">
          You scored <span className="font-bold text-primary">{score}</span> out of{" "}
          <span className="font-bold text-primary">{questions.length}</span>
        </p>
        <div className="text-6xl font-bold text-primary mb-8">
          {Math.round((score / questions.length) * 100)}%
        </div>
        <Button variant="success" size="lg" className="w-full">
          Continue to Next Module
        </Button>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = answered && parseInt(selectedAnswer) === question.correctAnswer;

  return (
    <Card className="p-8 bg-gradient-card animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-semibold text-primary">
            Score: {score}/{questions.length}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
      </div>

      <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={answered}>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                answered
                  ? index === question.correctAnswer
                    ? "border-secondary bg-secondary/10"
                    : selectedAnswer === index.toString()
                    ? "border-destructive bg-destructive/10"
                    : "border-border"
                  : "border-border hover:border-primary"
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer text-base"
              >
                {option}
              </Label>
              {answered && index === question.correctAnswer && (
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              )}
              {answered && selectedAnswer === index.toString() && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-destructive" />
              )}
            </div>
          ))}
        </div>
      </RadioGroup>

      {answered && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? "bg-secondary/10" : "bg-destructive/10"}`}>
          <p className="font-semibold mb-2">
            {isCorrect ? "Correct!" : "Not quite right"}
          </p>
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}

      <div className="mt-8 flex gap-4">
        {!answered ? (
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={handleSubmit}
            disabled={!selectedAnswer}
          >
            Submit Answer
          </Button>
        ) : (
          <Button variant="success" size="lg" className="w-full" onClick={handleNext}>
            {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </div>
    </Card>
  );
};
