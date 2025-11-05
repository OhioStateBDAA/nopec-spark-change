import { ModuleCard } from "@/components/ModuleCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import communityPowerImage from "@/assets/community-power.jpg";
import sustainableEnergyImage from "@/assets/sustainable-energy.jpg";
import informedConsumerImage from "@/assets/informed-consumer.jpg";

const Modules = () => {
  const modules = [
    {
      id: 1,
      title: "Welcome to Energy Aggregation & Sustainability",
      description: "Discover what energy aggregation is and how NOPEC empowers communities. Take your energy impact quiz!",
      progress: 0,
      isLocked: false,
      isCompleted: false,
      imageUrl: communityPowerImage,
      duration: "15 min",
    },
    {
      id: 2,
      title: "The Power of Community Choice in Energy",
      description: "Learn how Community Choice Aggregation (CCA) works and explore real case studies of bill savings and carbon reductions.",
      progress: 0,
      isLocked: false,
      isCompleted: false,
      imageUrl: communityPowerImage,
      duration: "20 min",
    },
    {
      id: 3,
      title: "Sustainable Energy Solutions 101",
      description: "Explore solar, wind, and local energy mixes through interactive maps and understand green energy's impact in Ohio.",
      progress: 0,
      isLocked: false,
      isCompleted: false,
      imageUrl: sustainableEnergyImage,
      duration: "25 min",
    },
    {
      id: 4,
      title: "How to Be an Informed Energy Consumer",
      description: "Master energy bills, spot greenwashing, and learn to choose suppliers and advocate for fair rates.",
      progress: 0,
      isLocked: true,
      isCompleted: false,
      imageUrl: informedConsumerImage,
      duration: "30 min",
    },
    {
      id: 5,
      title: "Careers and Advocacy in Energy Sustainability",
      description: "Meet young professionals, explore career paths, and create your energy skills LinkedIn statement.",
      progress: 0,
      isLocked: true,
      isCompleted: false,
      imageUrl: informedConsumerImage,
      duration: "25 min",
    },
    {
      id: 6,
      title: "NOPEC in Action: Community Impact",
      description: "Watch mini-documentaries and story maps highlighting youth-led local sustainability initiatives.",
      progress: 0,
      isLocked: true,
      isCompleted: false,
      imageUrl: communityPowerImage,
      duration: "20 min",
    },
    {
      id: 7,
      title: "Your Sustainable Future: Next Steps",
      description: "Set your energy goals, access career toolkits, and join the pledge wall for action.",
      progress: 0,
      isLocked: true,
      isCompleted: false,
      imageUrl: sustainableEnergyImage,
      duration: "15 min",
    },
    {
      id: 8,
      title: "Capstone Quiz & Certificate",
      description: "Test your knowledge, earn badges, and get your shareable certificate for LinkedIn and social media.",
      progress: 0,
      isLocked: true,
      isCompleted: false,
      imageUrl: informedConsumerImage,
      duration: "30 min",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Modules</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Progress through 8 interactive modules to master energy aggregation and sustainability
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {modules.map((module, index) => (
                <div key={module.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ModuleCard {...module} />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <ProgressTracker
                totalModules={8}
                completedModules={0}
                points={0}
                badges={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
