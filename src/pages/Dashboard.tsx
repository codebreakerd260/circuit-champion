import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Timer, Users, MessageSquare, CheckSquare, Upload, 
  Bell, BookOpen, Phone, Trophy, Target, FileText,
  LogOut, Settings
} from "lucide-react";

const Dashboard = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [todos, setTodos] = useState([
    { id: 1, text: "Set up development environment", completed: true },
    { id: 2, text: "Design system architecture", completed: true }, 
    { id: 3, text: "Implement core features", completed: false },
    { id: 4, text: "Create presentation", completed: false },
    { id: 5, text: "Final testing", completed: false }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progressSteps = [
    { name: "Planning", completed: true },
    { name: "Development", completed: true },
    { name: "Testing", completed: false },
    { name: "Presentation", completed: false }
  ];

  const leaderboard = [
    { rank: 1, team: "Code Wizards", score: 850, progress: 85 },
    { rank: 2, team: "Tech Titans", score: 720, progress: 80 },
    { rank: 3, team: "Dev Dragons", score: 680, progress: 75 },
    { rank: 4, team: "Byte Busters", score: 590, progress: 65 },
    { rank: 5, team: "Your Team", score: 540, progress: 60 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <div>
                <h1 className="text-xl font-bold">TechHack 2024</h1>
                <div className="text-sm text-muted-foreground">Team: Byte Busters (#TB2024)</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                Round 2: Development
              </Badge>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Actions Bar */}
      <div className="border-b border-border bg-muted/20 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications (3)
            </Button>
            <Button variant="ghost" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Guidelines
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Next deadline: MVP Demo in 6 hours
          </div>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-120px)]">
        {/* Left Sidebar */}
        <div className="w-80 border-r border-border bg-card/30 p-6 space-y-6">
          <Card className="p-4 bg-gradient-card border-border/50">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Problem Statement
            </h3>
            <Tabs defaultValue="problem" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="problem">Problem</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
              </TabsList>
              <TabsContent value="problem" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Develop an AI-powered platform that helps small businesses 
                  optimize their inventory management and predict demand patterns.
                </p>
              </TabsContent>
              <TabsContent value="solution" className="mt-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Our Approach:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Machine learning for demand prediction</li>
                    <li>• Real-time inventory tracking</li>
                    <li>• Smart reorder recommendations</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="p-4 bg-gradient-card border-border/50">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              Mentor Calls
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Sarah Chen</div>
                  <div className="text-xs text-muted-foreground">AI/ML Expert</div>
                </div>
                <Button size="sm" variant="outline">Call</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Mike Johnson</div>
                  <div className="text-xs text-muted-foreground">Business Strategy</div>
                </div>
                <Button size="sm" variant="outline">Call</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* Timer and Progress */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Timer className="w-5 h-5 text-primary" />
                Time Remaining
              </h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground">Until round deadline</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-semibold mb-4">Progress Tracker</h3>
              <div className="space-y-3">
                {progressSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      step.completed 
                        ? 'bg-primary border-primary' 
                        : 'border-muted-foreground'
                    }`}></div>
                    <span className={`text-sm ${
                      step.completed ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Team Activity */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Team Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">AJ</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Alex just pushed backend API updates</div>
                  <div className="text-xs text-muted-foreground">2 minutes ago</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-accent">SM</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Sarah completed UI mockups</div>
                  <div className="text-xs text-muted-foreground">15 minutes ago</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 border-l border-border bg-card/30 p-6 space-y-6">
          <Card className="p-4 bg-gradient-card border-border/50">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-success" />
              Todo List
            </h3>
            <div className="space-y-2">
              {todos.map(todo => (
                <div key={todo.id} className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={todo.completed}
                    className="w-4 h-4 accent-primary"
                    onChange={() => {
                      setTodos(todos.map(t => 
                        t.id === todo.id ? {...t, completed: !t.completed} : t
                      ));
                    }}
                  />
                  <span className={`text-sm ${
                    todo.completed ? 'line-through text-muted-foreground' : ''
                  }`}>
                    {todo.text}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border/50">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Upload className="w-4 h-4 text-warning" />
              Submission
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Project URL</label>
                <Input placeholder="https://github.com/..." className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Demo Video</label>
                <Input type="file" accept="video/*" className="mt-1" />
              </div>
              <Button variant="hero" className="w-full">
                Submit Project
              </Button>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border/50">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-accent" />
              Team Chat
            </h3>
            <div className="space-y-2 mb-3 max-h-32 overflow-y-auto">
              <div className="text-xs">
                <span className="font-medium text-primary">Alex:</span>
                <span className="text-muted-foreground ml-1">API is ready for testing!</span>
              </div>
              <div className="text-xs">
                <span className="font-medium text-accent">Sarah:</span>
                <span className="text-muted-foreground ml-1">Great! UI components are done</span>
              </div>
            </div>
            <Textarea 
              placeholder="Type a message..." 
              className="text-sm h-20"
            />
            <Button size="sm" className="w-full mt-2">Send</Button>
          </Card>
        </div>
      </div>

      {/* Bottom Leaderboard */}
      <div className="border-t border-border bg-muted/20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-warning" />
            Current Leaderboard
          </h3>
          <Button variant="ghost" size="sm">View Full Rankings</Button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {leaderboard.map((team, index) => (
            <Card key={index} className={`p-3 text-center ${
              team.team === 'Your Team' 
                ? 'bg-primary/10 border-primary/30' 
                : 'bg-card/50'
            }`}>
              <div className="text-2xl font-bold text-primary">#{team.rank}</div>
              <div className="text-sm font-medium">{team.team}</div>
              <div className="text-xs text-muted-foreground">{team.score} pts</div>
              <Progress value={team.progress} className="mt-2 h-1" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;