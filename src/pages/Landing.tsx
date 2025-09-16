import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, Users, Trophy, Code, Lightbulb, Target } from "lucide-react";
import heroImage from "@/assets/hero-hackathon.jpg";

const Landing = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tracks = [
    {
      title: "AI Innovation",
      description: "Build intelligent solutions using machine learning and AI",
      icon: Lightbulb,
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Web Development",
      description: "Create amazing web applications and platforms",
      icon: Code,
      color: "bg-accent/20 text-accent"
    },
    {
      title: "Mobile Solutions", 
      description: "Develop mobile apps that solve real-world problems",
      icon: Target,
      color: "bg-success/20 text-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <h1 className="text-xl font-bold">TechHack 2024</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
              <a href="#tracks" className="text-muted-foreground hover:text-foreground transition-smooth">Tracks</a>
              <a href="#prizes" className="text-muted-foreground hover:text-foreground transition-smooth">Prizes</a>
              <Button variant="hero" asChild>
                <Link to="/dashboard">Join Hackathon</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            48 Hour Challenge
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Build the Future
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 500+ developers, designers, and innovators in our biggest hackathon yet. 
            Build amazing projects, learn new skills, and compete for incredible prizes.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center gap-6">
                <Timer className="w-6 h-6 text-primary" />
                <div className="grid grid-cols-4 gap-4 text-center">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit}>
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground uppercase">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/dashboard">Register Now</Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Competition Tracks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your track and build something amazing. Each track has unique challenges and prizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-smooth">
                <div className={`w-12 h-12 rounded-lg ${track.color} flex items-center justify-center mb-4`}>
                  <track.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-muted-foreground">{track.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Participants
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">$50K+</div>
              <div className="text-muted-foreground flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4" />
                In Prizes
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-success">48</div>
              <div className="text-muted-foreground flex items-center justify-center gap-2">
                <Timer className="w-4 h-4" />
                Hours to Build
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded"></div>
            <span className="font-semibold">TechHack 2024</span>
          </div>
          <p className="text-muted-foreground">
            Ready to build something incredible? Join us now!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;