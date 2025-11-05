import { JourneyNode } from "@/components/JourneyNode";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Award } from "lucide-react";

// Using Storyset illustrations via CDN
const storysetImages = {
  environment: "https://stories.freepiklabs.com/storage/14290/Environment_Artboard-1.svg",
  teamSpirit: "https://stories.freepiklabs.com/storage/4531/team-spirit-bro-01.svg",
  world: "https://stories.freepiklabs.com/storage/15173/World_Mesa-de-trabajo-1.svg",
  energySaving: "https://stories.freepiklabs.com/storage/16702/Environment-01.svg",
  education: "https://stories.freepiklabs.com/storage/13910/teaching_Artboard-1.svg",
  community: "https://stories.freepiklabs.com/storage/57204/Life-in-a-city-01.svg",
  goals: "https://stories.freepiklabs.com/storage/16527/466-Team-work_Artboard-1.svg",
  graduation: "https://stories.freepiklabs.com/storage/15808/Teaching_Mesa-de-trabajo-1.svg",
};

const Modules = () => {
  const totalPoints = 800;
  const earnedPoints = 0;
  const completedModules = 0;
  const totalModules = 8;

  const modules = [
    {
      id: 1,
      title: "Welcome to Energy Aggregation",
      description: "Discover what energy aggregation is and take your energy impact quiz!",
      isLocked: false,
      isCompleted: false,
      isCurrent: true,
      points: 100,
      color: "green" as const,
      imageUrl: storysetImages.environment,
    },
    {
      id: 2,
      title: "Power of Community Choice",
      description: "Learn how communities work together for better energy rates and cleaner power.",
      isLocked: false,
      isCompleted: false,
      isCurrent: false,
      points: 100,
      color: "blue" as const,
      imageUrl: storysetImages.teamSpirit,
    },
    {
      id: 3,
      title: "Sustainable Energy 101",
      description: "Explore solar, wind, and local energy through interactive experiences.",
      isLocked: false,
      isCompleted: false,
      isCurrent: false,
      points: 100,
      color: "purple" as const,
      imageUrl: storysetImages.world,
    },
    {
      id: 4,
      title: "Informed Energy Consumer",
      description: "Master energy bills and spot greenwashing like a pro.",
      isLocked: true,
      isCompleted: false,
      isCurrent: false,
      points: 100,
      color: "yellow" as const,
      imageUrl: storysetImages.energySaving,
    },
    {
      id: 5,
      title: "Careers & Advocacy",
      description: "Meet professionals and build your energy career skills.",
      isLocked: true,
      isCompleted: false,
      isCurrent: false,
      points: 100,
      color: "green" as const,
      imageUrl: storysetImages.education,
    },
    {
      id: 6,
      title: "NOPEC in Action",
      description: "See real youth-led initiatives creating local impact.",
      isLocked: true,
      isCompleted: false,
      isCurrent: false,
      points: 100,
      color: "blue" as const,
      imageUrl: storysetImages.community,
    },
    {
      id: 7,
      title: "Your Sustainable Future",
      description: "Set goals and access career toolkits for real change.",
      isLocked: true,
      isCompleted: false,
      isCurrent: false,
      points: 100,
      color: "purple" as const,
      imageUrl: storysetImages.goals,
    },
    {
      id: 8,
      title: "Capstone Challenge",
      description: "Earn your certificate and share your achievement!",
      isLocked: true,
      isCompleted: false,
      isCurrent: false,
      points: 100,
      color: "yellow" as const,
      imageUrl: storysetImages.graduation,
    },
  ];

  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header Stats */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b-4 border-primary shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-gradient-success rounded-xl p-3 shadow-md">
              <div className="w-12 h-12 bg-background/80 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-card-foreground">{earnedPoints}</div>
                <div className="text-xs text-card-foreground/80">Points</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gradient-purple rounded-xl p-3 shadow-md">
              <div className="w-12 h-12 bg-background/80 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-card-foreground">
                  {completedModules}/{totalModules}
                </div>
                <div className="text-xs text-card-foreground/80">Complete</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gradient-blue rounded-xl p-3 shadow-md">
              <div className="w-12 h-12 bg-background/80 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-info" />
              </div>
              <div>
                <div className="text-2xl font-bold text-card-foreground">0</div>
                <div className="text-xs text-card-foreground/80">Badges</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Path */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Card */}
          <Card className="p-6 mb-12 bg-gradient-card shadow-xl border-4 border-primary/20 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Your Learning Journey</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-semibold">
                <span>Course Progress</span>
                <span className="text-primary">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-4 bg-muted" />
              <p className="text-sm text-muted-foreground">
                Keep going! Complete all modules to earn your certificate 🎓
              </p>
            </div>
          </Card>

          {/* Journey Nodes */}
          <div className="space-y-8 relative">
            {/* Starting Point */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-hero text-primary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-xl animate-bounce-in">
                🚀 Start Here!
              </div>
            </div>

            {modules.map((module, index) => (
              <div
                key={module.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="relative"
              >
                <JourneyNode {...module} />
              </div>
            ))}

            {/* End Point */}
            <div className="flex justify-center mt-12">
              <div className="bg-gradient-warning text-card-foreground px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                🏆 Certificate Awaits!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
