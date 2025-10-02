import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, RefreshCw, PlusCircle } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene3DashboardProps {
  onNext: () => void;
}

export const Scene3Dashboard = ({ onNext }: Scene3DashboardProps) => {
  return (
    <DemoScene className="bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-2xl w-full">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Welcome, Mr. Kumar!</h2>
          <p className="text-muted-foreground">Animal Typer • Rashtriya Gokul Mission</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <Clock className="w-8 h-8 text-secondary mb-3" />
            <p className="text-3xl font-bold text-foreground mb-1">5</p>
            <p className="text-sm text-muted-foreground">Pending Evaluations</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CheckCircle className="w-8 h-8 text-accent mb-3" />
            <p className="text-3xl font-bold text-foreground mb-1">12</p>
            <p className="text-sm text-muted-foreground">Completed Today</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <RefreshCw className="w-8 h-8 text-primary mb-3" />
            <p className="text-sm font-medium text-accent mb-1">✓ Synced</p>
            <p className="text-sm text-muted-foreground">with BPA Server</p>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-muted/20 shadow-elevated">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mx-auto mb-4">
              <PlusCircle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Begin a new animal classification with AI-powered analysis
            </p>
            <Button 
              onClick={onNext}
              size="lg"
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground shadow-elevated px-8"
            >
              Start New Classification
            </Button>
          </div>
        </Card>
      </div>
    </DemoScene>
  );
};
