import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Edit } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene7ReviewScoresProps {
  onNext: () => void;
}

const scores = [
  { category: "Dairy Strength", score: 8.5, color: "from-primary to-primary/80" },
  { category: "Rump Structure", score: 8.0, color: "from-primary to-primary/80" },
  { category: "Feet & Legs", score: 9.0, color: "from-accent to-accent/80" },
  { category: "Udder System", score: 8.8, color: "from-accent to-accent/80" },
];

export const Scene7ReviewScores = ({ onNext }: Scene7ReviewScoresProps) => {
  return (
    <DemoScene>
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Auto-Generated Score Card</h2>
          <p className="text-muted-foreground">Step 4 of 4 • Review and confirm</p>
        </div>

        <Card className="p-8 shadow-elevated mb-6">
          <div className="flex items-center justify-between mb-6 pb-6 border-b">
            <div>
              <p className="text-sm text-muted-foreground">Animal ID</p>
              <p className="text-lg font-bold">370012345678</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Breed</p>
              <p className="text-lg font-bold">Gir</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Evaluation Date</p>
              <p className="text-lg font-bold">Today</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {scores.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{item.category}</span>
                  <span className="text-2xl font-bold text-foreground">{item.score}/10</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${item.score * 10}%`,
                      animationDelay: `${index * 150}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-accent to-accent/90 rounded-lg text-center mb-6">
            <p className="text-sm text-accent-foreground/80 mb-1">Overall Classification Score</p>
            <p className="text-5xl font-bold text-accent-foreground mb-2">8.6/10</p>
            <p className="text-lg font-medium text-accent-foreground">Excellent</p>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-start gap-3">
            <Edit className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Professional Override Available</p>
              <p className="text-xs text-muted-foreground">
                As a trained evaluator, you can review and adjust any score if needed, with a reason for data integrity.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button 
            variant="outline"
            size="lg"
            className="flex-1"
          >
            Verify & Edit
          </Button>
          <Button 
            onClick={onNext}
            size="lg"
            className="flex-1 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-elevated"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Confirm & Submit
          </Button>
        </div>
      </div>
    </DemoScene>
  );
};
