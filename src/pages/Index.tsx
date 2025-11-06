import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-energy.jpg";

// Using Storyset mascot-style illustration - minimal clean style
const heroMascot = "https://stories.freepiklabs.com/storage/12245/Forest-01.svg";

const Index = () => {
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
            <Link to="/impact-quiz">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-2xl bg-accent/90 border-2 border-accent text-accent-foreground hover:bg-accent hover:scale-105 transition-all backdrop-blur-sm shadow-xl font-bold"
              >
                ⚡ What's Your Energy Personality? 🌍
              </Button>
            </Link>
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

      {/* NOPEC Support Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How NOPEC Supports You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As a not-for-profit energy aggregator, NOPEC puts members first with exclusive benefits and unwavering support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Lower Energy Costs</h3>
              <p className="text-muted-foreground text-center">
                Leverage collective buying power to secure competitive rates and save money on your energy bills
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-secondary/10 hover:border-secondary/30">
              <div className="w-16 h-16 bg-gradient-warning rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-card-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Community First</h3>
              <p className="text-muted-foreground text-center">
                As a not-for-profit, every decision we make prioritizes member benefits over corporate profits
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-accent/10 hover:border-accent/30">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Energy Education</h3>
              <p className="text-muted-foreground text-center">
                Free resources, workshops, and courses to help you understand and optimize your energy usage
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
    </div>
  );
};

export default Index;
