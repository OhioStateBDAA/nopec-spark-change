import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Zap } from "lucide-react";

interface ProgressTrackerProps {
  totalModules: number;
  completedModules: number;
  points: number;
  badges: number;
}

export const ProgressTracker = ({
  totalModules,
  completedModules,
  points,
  badges,
}: ProgressTrackerProps) => {
  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <Card className="p-6 bg-gradient-hero text-primary-foreground shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Your Progress</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Course Completion</span>
            <span className="font-bold">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-3 bg-primary-foreground/20" />
          <p className="text-sm mt-2 opacity-90">
            {completedModules} of {totalModules} modules completed
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{badges}</div>
            <div className="text-xs opacity-90">Badges</div>
          </div>
          
          <div className="text-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{points}</div>
            <div className="text-xs opacity-90">Points</div>
          </div>
          
          <div className="text-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
            <Target className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{totalModules - completedModules}</div>
            <div className="text-xs opacity-90">To Go</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
