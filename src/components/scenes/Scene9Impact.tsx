import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Zap, Shield, Users } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene9ImpactProps {
  onRestart: () => void;
}

const benefits = [
  {
    icon: Target,
    title: "Increased Accuracy",
    description: "Eliminates human bias and measurement errors",
    color: "from-accent to-accent/80"
  },
  {
    icon: Zap,
    title: "Enhanced Efficiency",
    description: "Reduces evaluation time by over 60%",
    color: "from-secondary to-secondary/80"
  },
  {
    icon: Shield,
    title: "Scientific Integrity",
    description: "Provides reliable, standardized data for RGM",
    color: "from-primary to-primary/80"
  },
  {
    icon: Users,
    title: "User-Friendly",
    description: "Designed for field personnel with minimal training",
    color: "from-primary to-primary/80"
  }
];

export const Scene9Impact = ({ onRestart }: Scene9ImpactProps) => {
  return (
    <DemoScene className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Powering India's Dairy Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pashu-Darpan transforms cattle evaluation with AI, ensuring accurate data for the Rashtriya Gokul Mission's breeding programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-elevated text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join the Future of Animal Breeding
            </h3>
            <p className="text-muted-foreground mb-6">
              Pashu-Darpan seamlessly integrates with the Bharat Pashudhan App, providing field officers with cutting-edge AI technology to support India's indigenous cattle improvement programs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={onRestart}
                size="lg"
                variant="outline"
                className="border-2"
              >
                Watch Demo Again
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground shadow-elevated"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Rashtriya Gokul Mission • Government of India • Department of Animal Husbandry & Dairying</p>
        </div>
      </div>
    </DemoScene>
  );
};
