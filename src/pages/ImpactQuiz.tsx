import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Zap, Leaf, Home, TrendingDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { QuizCard } from "@/components/QuizCard";

const ImpactQuiz = () => {
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const impactQuizQuestions = [
    {
      question: "🏠 When you leave a room, what happens to the lights and electronics?",
      options: [
        "💡 Everything goes OFF - I'm an energy ninja",
        "🤷 Sometimes I remember, sometimes I don't",
        "😅 They probably stay on... oops"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "You're crushing it! 💪 Turning off devices reduces your energy bill and your carbon footprint.",
        "Not bad! But there's room to save more. Every device left on adds to your bill. 💰",
        "Real talk: this is costing you money. Even small changes here could drop your monthly bill! 💸"
      ]
    },
    {
      question: "⚡ Quick - who's your energy supplier and what do you pay?",
      options: [
        "📊 I know exactly who and what I'm paying",
        "🤔 I know the company name... that's about it",
        "🙈 Honestly? No clue"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "That's huge! 🎯 Knowing your supplier and rates means you can spot better deals, like the ones NOPEC negotiates.",
        "You're halfway there! 👍 Knowing the details helps you save - NOPEC makes it even easier.",
        "No judgment! 😊 Most people don't know. But this is literally money on the table you could be saving."
      ]
    },
    {
      question: "🔍 How often do you shop around for better energy rates?",
      options: [
        "📅 Every year - I'm on top of it",
        "⏰ Every few years when I remember",
        "❌ Never - sounds exhausting"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "You're on it! 🔥 Regular rate checks mean more savings, and with NOPEC you get group discounts without the hassle.",
        "Better than nothing! ⚡ But rates change fast. NOPEC handles this automatically for whole communities.",
        "We get it! 😴 You're probably overpaying though. NOPEC does the shopping for you so you don't have to think about it."
      ]
    },
    {
      question: "🌱 Ever joined a community sustainability initiative?",
      options: [
        "✅ Yes! I'm all about that community action",
        "👋 Once or twice - it was pretty cool",
        "💚 No, but I'd totally be down",
        "🤷 Not really my thing"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [4, 3, 2, 1],
      explanations: [
        "Love this energy! 💚 Community action amplifies impact, especially with programs like NOPEC.",
        "Solid start! 🌟 The more people join in, the bigger the savings and environmental wins.",
        "Perfect! That's the spirit. 🙌 Programs like NOPEC make it easy to get involved.",
        "Fair enough! 💰 But group programs save you money without extra effort on your part."
      ]
    },
    {
      question: "💰 If your community could save money AND cut emissions together, would you be in?",
      options: [
        "🙋 100% yes - sign me up!",
        "🤔 Probably - sounds interesting",
        "😐 Meh, not really"
      ],
      correctAnswer: 0,
      explanation: "",
      points: [3, 2, 1],
      explanations: [
        "That's what NOPEC is built on! 🚀 Group buying power means everyone saves more and emissions drop.",
        "Makes sense, right? 💡 Community programs work because the bigger the group, the better the deal.",
        "No pressure! 💸 But you'd literally be saving money while helping the environment. Worth a look."
      ]
    }
  ];

  const handleQuizComplete = () => {
    setQuizComplete(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-primary to-secondary">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-primary-foreground hover:bg-primary-foreground/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          {!quizStarted ? (
            <Card className="p-8 md:p-12 text-center bg-card/95 backdrop-blur-sm shadow-2xl">
              <div className="mb-6">
                <div className="text-6xl mb-4">⚡🌍💚</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  What's Your Energy Personality?
                </h1>
                <p className="text-xl text-muted-foreground mb-2">
                  Take this BuzzFeed-style quiz to discover your energy impact!
                </p>
                <p className="text-lg text-muted-foreground">
                  Find out how your habits affect the planet (and your wallet) 💸
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8 text-left">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Discover Your Type</h3>
                    <p className="text-sm text-muted-foreground">Are you an Energy Champion, Eco-Curious, or just Getting Started?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10">
                  <TrendingDown className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">See Your Savings</h3>
                    <p className="text-sm text-muted-foreground">Learn how much money you could save annually</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/10">
                  <Leaf className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Your Impact</h3>
                    <p className="text-sm text-muted-foreground">See how you're affecting the planet's carbon footprint</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-info/10">
                  <Home className="w-6 h-6 text-info flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Easy Wins</h3>
                    <p className="text-sm text-muted-foreground">Get personalized tips to lower your energy bill</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                onClick={() => setQuizStarted(true)}
                className="text-lg px-12 py-6 rounded-full shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Start Quiz 🚀
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Takes only 2 minutes!</p>
            </Card>
          ) : (
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">What's Your Energy Personality?</h2>
                <p className="text-muted-foreground">Answer honestly - no judgment! 😊</p>
              </div>
              <QuizCard
                questions={impactQuizQuestions}
                onComplete={handleQuizComplete}
                currentModuleId={0}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactQuiz;
