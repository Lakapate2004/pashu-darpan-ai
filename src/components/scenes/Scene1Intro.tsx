import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ruler, Smartphone, TrendingUp, AlertCircle } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene1IntroProps {
  onNext: () => void;
}

export const Scene1Intro = ({ onNext }: Scene1IntroProps) => {
  return (
    <DemoScene>
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Pashu-Darpan
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-Powered Animal Type Classification System
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Rashtriya Gokul Mission | Government of India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Old Way */}
          <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">The Old Way</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Manual Measuring</p>
                  <p className="text-sm text-muted-foreground">Time-consuming tape measurements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Subjective Scoring</p>
                  <p className="text-sm text-muted-foreground">Different evaluators, different results</p>
                </div>
              </div>
            </div>

            <div className="text-center p-4 bg-background/50 rounded-lg">
              <p className="text-sm font-medium text-destructive">
                ⚠️ Slow, inconsistent, and error-prone
              </p>
            </div>
          </Card>

          {/* New Way */}
          <Card className="p-8 border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 shadow-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Smartphone className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">The New Way</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-xs text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">AI-Powered Analysis</p>
                  <p className="text-sm text-muted-foreground">Instant measurements via smartphone camera</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-xs text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Objective & Standardized</p>
                  <p className="text-sm text-muted-foreground">Consistent data across all evaluations</p>
                </div>
              </div>
            </div>

            <div className="text-center p-4 bg-gradient-to-r from-accent to-primary rounded-lg">
              <p className="text-sm font-medium text-white">
                ✨ Fast, accurate, and scientifically reliable
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground shadow-elevated px-8 py-6 text-lg"
          >
            See How It Works →
          </Button>
        </div>
      </div>
    </DemoScene>
  );
};
