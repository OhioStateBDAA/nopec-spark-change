import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points?: number[];
  explanations?: string[];
}

interface QuizCardProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  currentModuleId: number;
}

export const QuizCard = ({ questions, onComplete, currentModuleId }: QuizCardProps) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [answered, setAnswered] = useState(false);
  
  const isImpactQuiz = questions[0].points !== undefined;

  const handleContinue = () => {
    const nextModuleId = currentModuleId + 1;
    if (nextModuleId <= 8) {
      navigate(`/module/${nextModuleId}`);
    } else {
      // Last module - go back to modules page
      navigate("/modules");
    }
  };

  const handleSubmit = () => {
    const question = questions[currentQuestion];
    const answerIndex = parseInt(selectedAnswer);
    
    if (isImpactQuiz && question.points) {
      // Impact quiz: add points from selected answer
      const earnedPoints = question.points[answerIndex];
      setTotalPoints(totalPoints + earnedPoints);
      
      // Calculate max points for this question
      const maxQuestionPoints = Math.max(...question.points);
      setMaxPoints(maxPoints + maxQuestionPoints);
    } else {
      // Regular quiz: check if correct
      const isCorrect = answerIndex === question.correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
      }
    }
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setAnswered(false);
    } else {
      let percentage;
      if (isImpactQuiz) {
        // Calculate percentage based on total points earned vs max possible
        percentage = Math.round((totalPoints / maxPoints) * 100);
      } else {
        // Regular quiz percentage
        percentage = Math.round((score / questions.length) * 100);
      }
      setShowResult(true);
      onComplete(percentage);
    }
  };

  if (showResult) {
    const percentage = isImpactQuiz 
      ? Math.round((totalPoints / maxPoints) * 100)
      : Math.round((score / questions.length) * 100);
    const passed = percentage >= 66;
    
    if (isImpactQuiz) {
      // Impact Quiz Results
      let resultTitle = "";
      let resultMessage = "";
      let savingsAmount = 0;
      
      if (percentage >= 80) {
        resultTitle = "You're already pretty energy conscious";
        resultMessage = "You're doing great, but NOPEC can still save you money through group buying power.";
        savingsAmount = 50;
      } else if (percentage >= 60) {
        resultTitle = "You're on the right track";
        resultMessage = "You've got good habits, but switching to NOPEC could save you even more without changing anything.";
        savingsAmount = 75;
      } else if (percentage >= 40) {
        resultTitle = "There's room to save";
        resultMessage = "You're leaving money on the table. NOPEC makes it dead simple to cut your bill without thinking about it.";
        savingsAmount = 100;
      } else {
        resultTitle = "You could be saving way more";
        resultMessage = "Real talk, you're probably overpaying. NOPEC handles everything automatically.";
        savingsAmount = 150;
      }
      
      const co2Reduction = Math.round(savingsAmount * 5.5);
      
      return (
        <Card className="p-8 bg-gradient-card">
          <div className="text-center mb-8">
            <div className={`text-6xl font-bold mb-4 text-primary`}>
              {percentage}%
            </div>
            <h3 className="text-2xl font-bold mb-3">{resultTitle}</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {resultMessage}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">${savingsAmount}</div>
              <div className="text-sm text-muted-foreground">Potential yearly savings</div>
            </Card>
            
            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <div className="text-3xl font-bold text-secondary mb-2">{co2Reduction} lbs</div>
              <div className="text-sm text-muted-foreground">CO₂ reduced per year</div>
            </Card>
            
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">10 hours</div>
              <div className="text-sm text-muted-foreground">Saved shopping rates</div>
            </Card>
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full"
            onClick={handleContinue}
          >
            {currentModuleId < 8 ? "Continue to Next Module" : "Complete Course"}
          </Button>
        </Card>
      );
    }
    
    // Regular Quiz Results
    return (
      <Card className="p-8 text-center bg-gradient-card">
        <div className="mb-6">
          {passed ? (
            <CheckCircle2 className="w-20 h-20 mx-auto text-primary animate-bounce-in" />
          ) : (
            <AlertCircle className="w-20 h-20 mx-auto text-secondary animate-bounce-in" />
          )}
        </div>
        <h3 className="text-3xl font-bold mb-4">
          {passed ? "Quiz Complete! 🎉" : "Keep Learning!"}
        </h3>
        <p className="text-xl mb-6 text-muted-foreground">
          You scored <span className="font-bold text-primary">{score}</span> out of{" "}
          <span className="font-bold text-primary">{questions.length}</span>
        </p>
        <div className={`text-6xl font-bold mb-4 ${passed ? "text-primary" : "text-secondary"}`}>
          {percentage}%
        </div>
        {passed ? (
          <p className="text-primary font-semibold mb-8">
            ✅ Passing Score: 66% or higher
          </p>
        ) : (
          <p className="text-muted-foreground mb-8">
            You need 66% or higher to pass. Try again to unlock the next module!
          </p>
        )}
        <div className="space-y-3">
          <Button 
            variant={passed ? "success" : "hero"} 
            size="lg" 
            className="w-full"
            onClick={handleContinue}
          >
            {passed 
              ? (currentModuleId < 8 ? "Continue to Next Module" : "Complete Course")
              : "Back to Modules"
            }
          </Button>
          {!passed && (
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={() => window.location.reload()}
            >
              Retake Quiz
            </Button>
          )}
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = answered && parseInt(selectedAnswer) === question.correctAnswer;
  
  // Show explanation immediately for impact quiz
  const showExplanation = selectedAnswer !== "" && isImpactQuiz && question.explanations;
  const selectedExplanation = showExplanation 
    ? question.explanations![parseInt(selectedAnswer)]
    : "";

  return (
    <Card className="p-8 bg-gradient-card animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          {!isImpactQuiz && (
            <span className="text-sm font-semibold text-primary">
              Score: {score}/{questions.length}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
      </div>

      <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={answered}>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <div key={index}>
              <div
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                  answered && !isImpactQuiz
                    ? index === question.correctAnswer
                      ? "border-secondary bg-secondary/10"
                      : selectedAnswer === index.toString()
                      ? "border-destructive bg-destructive/10"
                      : "border-border"
                    : selectedAnswer === index.toString()
                    ? "border-primary bg-primary/10"
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
                {answered && !isImpactQuiz && index === question.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                )}
                {answered && !isImpactQuiz && selectedAnswer === index.toString() && index !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>

      {showExplanation && !answered && (
        <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
          <p className="text-sm text-foreground">{selectedExplanation}</p>
        </div>
      )}

      {answered && !isImpactQuiz && (
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
            {isImpactQuiz ? "Next Question" : "Submit Answer"}
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
