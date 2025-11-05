import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle2, Star, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface JourneyNodeProps {
  id: number;
  title: string;
  description: string;
  isLocked: boolean;
  isCompleted: boolean;
  isCurrent: boolean;
  points: number;
  color: "green" | "yellow" | "purple" | "blue";
  imageUrl: string;
}

const colorStyles = {
  green: {
    bg: "bg-gradient-success",
    border: "border-primary",
    shadow: "shadow-lg hover:shadow-xl",
    icon: "text-primary",
  },
  yellow: {
    bg: "bg-gradient-warning",
    border: "border-secondary",
    shadow: "shadow-lg hover:shadow-xl",
    icon: "text-secondary",
  },
  purple: {
    bg: "bg-gradient-purple",
    border: "border-accent",
    shadow: "shadow-lg hover:shadow-xl",
    icon: "text-accent",
  },
  blue: {
    bg: "bg-gradient-blue",
    border: "border-info",
    shadow: "shadow-lg hover:shadow-xl",
    icon: "text-info",
  },
};

export const JourneyNode = ({
  id,
  title,
  description,
  isLocked,
  isCompleted,
  isCurrent,
  points,
  color,
  imageUrl,
}: JourneyNodeProps) => {
  const styles = colorStyles[color];

  const NodeContent = () => (
    <div className="relative">
      {/* Connector Line */}
      {id < 8 && (
        <div className="absolute left-1/2 -bottom-8 w-1 h-8 bg-border -translate-x-1/2 z-0" />
      )}

      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-500 cursor-pointer border-4",
          styles.border,
          styles.shadow,
          isLocked && "opacity-60 grayscale",
          isCurrent && "animate-pulse-glow scale-105",
          !isLocked && "hover:-translate-y-2 hover:scale-105"
        )}
      >
        {/* Illustration Preview */}
        <div className="h-32 overflow-hidden rounded-t-xl flex items-center justify-center bg-background/80 p-4">
          <img 
            src={imageUrl} 
            alt={title}
            className={cn(
              "h-full w-auto object-contain transition-all duration-300",
              isLocked && "grayscale opacity-50",
              !isLocked && "group-hover:scale-110"
            )}
          />
        </div>

        {/* Background Pattern */}
        <div className={cn("p-6 relative", styles.bg)}>
          {/* Status Icon */}
          <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center border-4 border-background z-10">
            {isCompleted ? (
              <CheckCircle2 className="w-8 h-8 text-primary animate-bounce-in" />
            ) : isLocked ? (
              <Lock className="w-8 h-8 text-muted-foreground" />
            ) : isCurrent ? (
              <Zap className="w-8 h-8 text-secondary animate-wiggle" />
            ) : (
              <Target className={cn("w-8 h-8", styles.icon)} />
            )}
          </div>

          {/* Module Number Badge */}
          <Badge
            className={cn(
              "absolute top-2 left-2 text-lg font-bold px-3 py-1 z-10",
              isCompleted ? "bg-primary" : "bg-background/80 text-foreground"
            )}
          >
            {id}
          </Badge>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2 text-card-foreground pr-12 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-card-foreground/80 line-clamp-2 mb-4">
              {description}
            </p>

            {/* Points Badge */}
            {!isLocked && (
              <div className="flex items-center gap-2 mt-4">
                <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="font-bold text-sm text-foreground">
                    +{points} pts
                  </span>
                </div>
                {isCompleted && (
                  <Badge className="bg-primary text-primary-foreground">
                    Completed
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );

  if (isLocked) {
    return (
      <div className="animate-fade-in">
        <NodeContent />
      </div>
    );
  }

  return (
    <Link to={`/module/${id}`} className="block animate-fade-in">
      <NodeContent />
    </Link>
  );
};
