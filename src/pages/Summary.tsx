import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, Download, ExternalLink, Star, Users, 
  Calendar, Award, Medal, Crown, Gift,
  Image as ImageIcon, Play, FileText
} from "lucide-react";

const Summary = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const finalResults = [
    { 
      rank: 1, 
      team: "Code Wizards", 
      project: "SmartInventory AI",
      score: 950,
      members: ["Alice Chen", "Bob Wilson", "Carol Davis"],
      description: "AI-powered inventory management with 95% accuracy prediction",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      github: "https://github.com/codewizards/smartinventory",
      demo: "https://smartinventory-demo.com",
      prize: "$15,000 + Internships"
    },
    { 
      rank: 2, 
      team: "Tech Titans", 
      project: "EcoTrack",
      score: 890,
      members: ["David Kim", "Eva Rodriguez", "Frank Zhang"],
      description: "Carbon footprint tracking platform for small businesses",
      tech: ["Vue.js", "Node.js", "MongoDB", "D3.js"],
      github: "https://github.com/techtitans/ecotrack",
      demo: "https://ecotrack-demo.com",
      prize: "$10,000 + Mentorship"
    },
    { 
      rank: 3, 
      team: "Dev Dragons", 
      project: "HealthSync",
      score: 820,
      members: ["Grace Liu", "Henry Johnson", "Iris Park"],
      description: "Telemedicine platform connecting rural patients with doctors",
      tech: ["React Native", "Firebase", "WebRTC", "Express"],
      github: "https://github.com/devdragons/healthsync",
      demo: "https://healthsync-demo.com",
      prize: "$5,000 + AWS Credits"
    }
  ];

  const galleryItems = [
    { type: "image", title: "Opening Ceremony", src: "/api/placeholder/400/300" },
    { type: "video", title: "Team Formation", src: "/api/placeholder/400/300" },
    { type: "image", title: "Coding Marathon", src: "/api/placeholder/400/300" },
    { type: "image", title: "Mentor Sessions", src: "/api/placeholder/400/300" },
    { type: "video", title: "Final Presentations", src: "/api/placeholder/400/300" },
    { type: "image", title: "Award Ceremony", src: "/api/placeholder/400/300" }
  ];

  const sponsors = [
    { name: "TechCorp", tier: "Platinum", logo: "/api/placeholder/120/60" },
    { name: "InnovateLab", tier: "Gold", logo: "/api/placeholder/120/60" },
    { name: "StartupHub", tier: "Silver", logo: "/api/placeholder/120/60" },
    { name: "DevTools Inc", tier: "Bronze", logo: "/api/placeholder/120/60" }
  ];

  const testimonials = [
    {
      name: "Alice Chen",
      team: "Code Wizards", 
      role: "Winner",
      quote: "This hackathon was an incredible experience! The mentorship and resources provided were exceptional.",
      avatar: "/api/placeholder/50/50"
    },
    {
      name: "Dr. Sarah Martinez",
      role: "Mentor",
      quote: "Amazing to see such innovative solutions from talented developers. The future is bright!",
      avatar: "/api/placeholder/50/50"
    },
    {
      name: "Mike Johnson",
      role: "Sponsor Representative",
      quote: "We're excited to offer internships to several participants. Great talent pool!",
      avatar: "/api/placeholder/50/50"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <h1 className="text-2xl font-bold">TechHack 2024</h1>
            </div>
            <Badge className="mb-4 bg-success/20 text-success border-success/30">
              <Trophy className="w-4 h-4 mr-2" />
              Event Completed
            </Badge>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              48 hours of innovation, creativity, and coding excellence. Here are the amazing results 
              from our incredible participants!
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="results" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Final Leaderboard
              </h2>
              <p className="text-muted-foreground">
                Congratulations to all participants for their outstanding work!
              </p>
            </div>

            <div className="space-y-4">
              {finalResults.map((result, index) => (
                <Card key={index} className={`p-6 bg-gradient-card border-border/50 ${
                  index === 0 ? 'shadow-glow' : ''
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                        index === 0 ? 'bg-warning/20 text-warning' :
                        index === 1 ? 'bg-muted text-muted-foreground' :
                        'bg-amber-500/20 text-amber-600'
                      }`}>
                        {index === 0 ? <Crown className="w-6 h-6" /> :
                         index === 1 ? <Medal className="w-6 h-6" /> :
                         <Award className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{result.project}</h3>
                          <Badge variant="outline">#{result.rank}</Badge>
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {result.score} pts
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{result.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {result.members.join(", ")}
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          {result.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">{result.prize}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={result.github} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={result.demo} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">All Project Submissions</h2>
              <p className="text-muted-foreground">
                Browse through all the amazing projects created during the hackathon
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {finalResults.map((project, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-accent-glow transition-smooth">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{project.project}</h3>
                      <Badge variant="outline">#{project.rank}</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Event Gallery</h2>
              <p className="text-muted-foreground">
                Relive the amazing moments from TechHack 2024
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-accent-glow transition-smooth cursor-pointer">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center relative">
                    {item.type === 'video' ? (
                      <Play className="w-12 h-12 text-primary" />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-primary" />
                    )}
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Certificates & Awards</h2>
              <p className="text-muted-foreground">
                Download your participation certificate and view special awards
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-border/50">
                <div className="text-center space-y-4">
                  <Award className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Participation Certificate</h3>
                  <p className="text-muted-foreground">
                    Download your official certificate of participation in TechHack 2024
                  </p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border/50">
                <div className="text-center space-y-4">
                  <Trophy className="w-12 h-12 text-warning mx-auto" />
                  <h3 className="text-xl font-semibold">Achievement Badges</h3>
                  <p className="text-muted-foreground">
                    Showcase your hackathon achievements on LinkedIn and other platforms
                  </p>
                  <div className="flex justify-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Participant
                    </Badge>
                    <Badge className="bg-success/20 text-success border-success/30">
                      Team Player  
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Get Badge Kit
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
              <p className="text-muted-foreground">
                Hear from participants, mentors, and sponsors about their TechHack 2024 experience
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="w-4 h-4 fill-warning text-warning" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3 italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} {testimonial.team && `• ${testimonial.team}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Sponsors Section */}
        <Card className="mt-12 p-8 bg-gradient-card border-border/50">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Thank You to Our Sponsors</h3>
            <p className="text-muted-foreground">
              This event wouldn't be possible without our amazing sponsors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="h-16 bg-muted/20 rounded-lg flex items-center justify-center">
                  <span className="font-medium text-muted-foreground">{sponsor.name}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {sponsor.tier}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Event Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">127</div>
            <div className="text-muted-foreground">Total Participants</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">42</div>
            <div className="text-muted-foreground">Teams Formed</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-success mb-2">38</div>
            <div className="text-muted-foreground">Projects Submitted</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-warning mb-2">15</div>
            <div className="text-muted-foreground">Mentors</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Summary;