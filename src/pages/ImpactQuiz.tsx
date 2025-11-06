import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { QuizCard } from "@/components/QuizCard";

const ImpactQuiz = () => {
  const navigate = useNavigate();
  const [quizComplete, setQuizComplete] = useState(false);

  const impactQuizQuestions = [
    {
      question: "How often do you turn off lights and electronics when you leave a room?",
      options: [
        "Always",
        "Sometimes",
        "Rarely"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "You're crushing it. Turning off devices reduces your energy bill and your carbon footprint.",
        "Not bad, but there's room to save more. Every device left on adds to your bill.",
        "This is costing you. Even small changes here could drop your monthly bill."
      ]
    },
    {
      question: "Do you know who your energy supplier is?",
      options: [
        "Yes, and I know what I'm paying",
        "I know the name, but not the details",
        "No, I have no idea"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "That's huge. Knowing your supplier and rates means you can spot better deals, like the ones NOPEC negotiates.",
        "You're halfway there. Knowing the details helps you save, NOPEC makes it even easier.",
        "No judgment, most people don't. But this is literally money on the table you could be saving."
      ]
    },
    {
      question: "How often do you compare energy supply offers or shop for better rates?",
      options: [
        "Every year",
        "Every few years",
        "Never"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "You're on it. Regular rate checks mean more savings, and with NOPEC you get group discounts without the hassle.",
        "Better than nothing, but rates change fast. NOPEC handles this automatically for whole communities.",
        "You're probably overpaying. NOPEC does the shopping for you so you don't have to think about it."
      ]
    },
    {
      question: "Have you ever participated in a community sustainability initiative?",
      options: [
        "Yes, often",
        "Yes, once or twice",
        "No, but I'd like to",
        "No, not interested"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [4, 3, 2, 1],
      explanations: [
        "Love this energy. Community action amplifies impact, especially with programs like NOPEC.",
        "Solid start. The more people join in, the bigger the savings and environmental wins.",
        "Perfect, that's the spirit. Programs like NOPEC make it easy to get involved.",
        "Fair enough. But group programs save you money without extra effort on your part."
      ]
    },
    {
      question: "If your community could save money and cut emissions by working together, how likely would you be to support it?",
      options: [
        "Very likely",
        "Somewhat likely",
        "Not likely"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "That's what NOPEC is built on. Group buying power means everyone saves more and emissions drop.",
        "Makes sense. Community programs work because the bigger the group, the better the deal.",
        "No pressure, but you'd literally be saving money while helping the environment. Worth a look."
      ]
    }
  ];

  const handleQuizComplete = () => {
    setQuizComplete(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Take Your Impact Quiz</h1>
            <p className="text-lg text-muted-foreground">
              Discover how much you could save on energy costs and your environmental impact
            </p>
          </div>

          <QuizCard
            questions={impactQuizQuestions}
            onComplete={handleQuizComplete}
            currentModuleId={0}
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactQuiz;
