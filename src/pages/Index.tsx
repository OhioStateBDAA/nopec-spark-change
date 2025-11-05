import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-energy.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/70" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Community Power:<br />
            Energy Aggregation & Sustainability
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Learn how to make a real impact on energy consumption and sustainability in your community with NOPEC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/modules">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Learning <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
            <div className="text-center p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empower Change</h3>
              <p className="text-muted-foreground">
                Learn how collective action can reduce energy costs and carbon emissions
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-muted-foreground">
                Discover how your community can work together for sustainable energy
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Ready</h3>
              <p className="text-muted-foreground">
                Gain shareable credentials for LinkedIn and build energy sector skills
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-secondary-foreground" />
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
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6">
              Explore Course Modules <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
