import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, CheckCircle2, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  progress: number;
  isLocked: boolean;
  isCompleted: boolean;
  imageUrl: string;
  duration: string;
}

export const ModuleCard = ({
  id,
  title,
  description,
  progress,
  isLocked,
  isCompleted,
  imageUrl,
  duration,
}: ModuleCardProps) => {
  return (
    <Link to={isLocked ? "#" : `/module/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {isLocked && (
            <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center backdrop-blur-sm">
              <Lock className="w-12 h-12 text-primary-foreground" />
            </div>
          )}
          {isCompleted && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-success border-0">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            </div>
          )}
          {!isLocked && !isCompleted && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">
                <PlayCircle className="w-4 h-4 mr-1" />
                {duration}
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          
          {!isLocked && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold text-primary">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};
