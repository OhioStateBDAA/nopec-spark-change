import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { ArrowLeft, CheckCircle2, PlayCircle, FileText } from "lucide-react";
import { completeModule } from "@/lib/courseProgress";
import { toast } from "sonner";

// Using Storyset illustrations via CDN
const moduleImages: Record<string, string> = {
  "1": "https://stories.freepiklabs.com/storage/14290/Environment_Artboard-1.svg",
  "2": "https://stories.freepiklabs.com/storage/4531/team-spirit-bro-01.svg",
  "3": "https://stories.freepiklabs.com/storage/15173/World_Mesa-de-trabajo-1.svg",
  "4": "https://stories.freepiklabs.com/storage/16702/Environment-01.svg",
  "5": "https://stories.freepiklabs.com/storage/13910/teaching_Artboard-1.svg",
  "6": "https://stories.freepiklabs.com/storage/57204/Life-in-a-city-01.svg",
  "7": "https://stories.freepiklabs.com/storage/16527/466-Team-work_Artboard-1.svg",
  "8": "https://stories.freepiklabs.com/storage/15808/Teaching_Mesa-de-trabajo-1.svg",
};

const Module = () => {
  const { id } = useParams();
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const moduleImage = moduleImages[id || "1"];
  const currentModuleId = Number(id) || 1;

  const handleQuizComplete = (score: number) => {
    setQuizCompleted(true);
    const passed = score >= 66;
    
    if (passed) {
      // Save progress and update points/badges
      const progress = completeModule(currentModuleId, score);
      
      // Show success toast with earned rewards
      const pointsEarned = 100;
      const badgesEarned = progress.badges;
      
      toast.success(`Module Complete! +${pointsEarned} points`, {
        description: `You scored ${score}%! ${badgesEarned > 0 ? `🏆 Badge earned!` : ''}`,
      });
    } else {
      toast.error("Score below passing threshold", {
        description: "You need 66% or higher to complete this module. Try again!",
      });
    }
  };

  const moduleContent = {
    title: "Welcome to Energy Aggregation & Sustainability",
    description: "Learn the basics of energy aggregation and how NOPEC empowers communities to make sustainable energy choices.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    keyPoints: [
      "Understanding what energy aggregation means",
      "How NOPEC works with communities across Northern Ohio",
      "The environmental and financial benefits of collective energy purchasing",
      "Your role as an informed energy consumer",
    ],
    learningObjectives: [
      "Explain energy aggregation in your own words",
      "Identify the key benefits of community choice aggregation",
      "Understand NOPEC's mission and impact",
      "Calculate your personal energy impact",
    ],
  };

  const quizQuestions = [
    {
      question: "What is energy aggregation?",
      options: [
        "Using renewable energy sources only",
        "Communities pooling together to purchase energy collectively",
        "Installing solar panels on every home",
        "Reducing energy consumption by 50%",
      ],
      correctAnswer: 1,
      explanation: "Energy aggregation is when communities pool their purchasing power to negotiate better energy rates and cleaner energy options collectively.",
    },
    {
      question: "What does NOPEC stand for?",
      options: [
        "National Organization for Power and Energy Conservation",
        "North Ohio Public Energy Council",
        "New Options for Public Energy Choices",
        "Northern Ohio Power and Electric Company",
      ],
      correctAnswer: 1,
      explanation: "NOPEC stands for North Ohio Public Energy Council, serving communities across Northern Ohio.",
    },
    {
      question: "What is a key benefit of community choice aggregation?",
      options: [
        "Free electricity for everyone",
        "Lower rates and cleaner energy options through collective bargaining",
        "Mandatory solar panel installation",
        "Government subsidies for all residents",
      ],
      correctAnswer: 1,
      explanation: "Community choice aggregation allows communities to negotiate better rates and access cleaner energy options by leveraging collective purchasing power.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Link to="/modules">
            <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="mr-2" /> Back to Modules
            </Button>
          </Link>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold opacity-90">Module {id}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{moduleContent.title}</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Section */}
            <Card className="overflow-hidden bg-gradient-card">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative p-12">
                <img 
                  src={moduleImage} 
                  alt="Module content"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition-all">
                  <Button variant="hero" size="lg" className="rounded-full w-20 h-20 shadow-xl">
                    <PlayCircle className="w-10 h-10" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="p-6 bg-gradient-card">
              <h2 className="text-2xl font-bold mb-4">About This Module</h2>
              <p className="text-muted-foreground mb-6">{moduleContent.description}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="text-secondary" /> Key Points
                  </h3>
                  <ul className="space-y-2">
                    {moduleContent.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileText className="text-primary" /> Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    {moduleContent.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Quiz Section */}
            {!showQuiz ? (
              <Card className="p-8 text-center bg-gradient-card">
                <h2 className="text-2xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
                <p className="text-muted-foreground mb-6">
                  Complete the quiz to earn points and unlock the next module. You need 66% or higher to pass!
                </p>
                <Button variant="hero" size="lg" onClick={() => setShowQuiz(true)}>
                  Start Quiz
                </Button>
              </Card>
            ) : (
              <QuizCard questions={quizQuestions} onComplete={handleQuizComplete} currentModuleId={currentModuleId} />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <Card className="p-6 bg-gradient-card">
                <h3 className="font-bold mb-4">Module Progress</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Video Completed</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-5 h-5 border-2 border-border rounded-full" />
                    <span>Quiz {quizCompleted ? "Completed" : "Pending"}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-success text-secondary-foreground">
                <h3 className="font-bold mb-2">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Downloadable Energy Impact Checklist</li>
                  <li>• NOPEC Community Guide</li>
                  <li>• Discussion Forum Access</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
