import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QuizCard } from "@/components/QuizCard";
import heroImage from "@/assets/hero-energy.jpg";

// Using Storyset mascot-style illustration - minimal clean style
const heroMascot = "https://stories.freepiklabs.com/storage/12245/Forest-01.svg";

const Index = () => {
  const [showImpactQuiz, setShowImpactQuiz] = useState(false);

  const impactQuizQuestions = [
    {
      question: "How often do you turn off lights and electronics when you leave a room?",
      options: [
        "Always",
        "Sometimes",
        "Rarely",
      ],
      points: [3, 2, 1],
      explanations: [
        "You're crushing it. Turning off devices reduces your energy bill and your carbon footprint.",
        "Not bad, but there's room to save more. Every device left on adds to your bill.",
        "This is costing you. Even small changes here could drop your monthly bill."
      ],
      correctAnswer: 0,
      explanation: "",
    },
    {
      question: "Do you know who your energy supplier is?",
      options: [
        "Yes, and I know what I'm paying",
        "I know the name, but not the details",
        "No, I have no idea",
      ],
      points: [3, 2, 1],
      explanations: [
        "That's huge. Knowing your supplier and rates means you can spot better deals, like the ones NOPEC negotiates.",
        "You're halfway there. Knowing the details helps you save, NOPEC makes it even easier.",
        "No judgment, most people don't. But this is literally money on the table you could be saving."
      ],
      correctAnswer: 0,
      explanation: "",
    },
    {
      question: "How often do you compare energy supply offers or shop for better rates?",
      options: [
        "Every year",
        "Every few years",
        "Never",
      ],
      points: [3, 2, 1],
      explanations: [
        "You're on it. Regular rate checks mean more savings, and with NOPEC you get group discounts without the hassle.",
        "Better than nothing, but rates change fast. NOPEC handles this automatically for whole communities.",
        "You're probably overpaying. NOPEC does the shopping for you so you don't have to think about it."
      ],
      correctAnswer: 0,
      explanation: "",
    },
    {
      question: "Have you ever participated in a community sustainability initiative?",
      options: [
        "Yes, often",
        "Yes, once or twice",
        "No, but I'd like to",
        "No, not interested",
      ],
      points: [4, 3, 2, 1],
      explanations: [
        "Love this energy. Community action amplifies impact, especially with programs like NOPEC.",
        "Solid start. The more people join in, the bigger the savings and environmental wins.",
        "Perfect, that's the spirit. Programs like NOPEC make it easy to get involved.",
        "Fair enough. But group programs save you money without extra effort on your part."
      ],
      correctAnswer: 0,
      explanation: "",
    },
    {
      question: "If your community could save money and cut emissions by working together, how likely would you be to support it?",
      options: [
        "Very likely",
        "Somewhat likely",
        "Not likely",
      ],
      points: [3, 2, 1],
      explanations: [
        "That's what NOPEC is built on. Group buying power means everyone saves more and emissions drop.",
        "Makes sense. Community programs work because the bigger the group, the better the deal.",
        "No pressure, but you'd literally be saving money while helping the environment. Worth a look."
      ],
      correctAnswer: 0,
      explanation: "",
    },
  ];

  const handleQuizComplete = (score: number) => {
    // Just close the modal after showing results
    setTimeout(() => {
      setShowImpactQuiz(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="bg-card/20 backdrop-blur-md rounded-3xl p-6 animate-bounce-in">
              <img 
                src={heroMascot} 
                alt="Energy Learning"
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Community Power:<br />
            Energy Aggregation & Sustainability
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Learn how to make a real impact on energy consumption and sustainability in your community with NOPEC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/modules">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 rounded-2xl">
                Start Learning <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-2xl bg-card/20 border-card text-card hover:bg-card hover:text-primary backdrop-blur-sm"
              onClick={() => setShowImpactQuiz(true)}
            >
              Take Impact Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why This Course Matters</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border-4 border-primary/20">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empower Change</h3>
              <p className="text-muted-foreground">
                Learn how collective action can reduce energy costs and carbon emissions
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border-4 border-secondary/20">
              <div className="w-20 h-20 bg-gradient-warning rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-card-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-muted-foreground">
                Discover how your community can work together for sustainable energy
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border-4 border-accent/20">
              <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Ready</h3>
              <p className="text-muted-foreground">
                Gain shareable credentials for LinkedIn and build energy sector skills
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border-4 border-info/20">
              <div className="w-20 h-20 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-10 h-10 text-info-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Engage with quizzes, simulations, and real-world case studies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join thousands of young people learning to make a difference in energy sustainability
          </p>
          <Link to="/modules">
            <Button variant="hero" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl">
              Explore Course Modules <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Impact Quiz Modal */}
      <Dialog open={showImpactQuiz} onOpenChange={setShowImpactQuiz}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Your Energy Impact Assessment</DialogTitle>
            <DialogDescription>
              Discover your energy-saving potential and how NOPEC can help you save money
            </DialogDescription>
          </DialogHeader>
          <QuizCard 
            questions={impactQuizQuestions} 
            onComplete={handleQuizComplete}
            currentModuleId={0}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
