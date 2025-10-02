import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, RefreshCw, ArrowRight } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene8SubmissionProps {
  onNext: () => void;
}

export const Scene8Submission = ({ onNext }: Scene8SubmissionProps) => {
  const [syncing, setSyncing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSyncing(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DemoScene className="bg-gradient-to-br from-accent/5 to-background">
      <Card className="max-w-lg w-full p-12 shadow-elevated text-center">
        {syncing ? (
          <div className="animate-in fade-in">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-10 h-10 text-primary animate-spin" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Syncing with BPA Server...</h2>
            <p className="text-muted-foreground">
              Uploading images, measurements, and scores
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-accent">Success!</h2>
            <p className="text-lg text-foreground mb-6">
              Classification for Animal <span className="font-mono font-bold">370012345678</span> has been auto-recorded in BPA
            </p>
            
            <div className="p-4 bg-muted/50 rounded-lg mb-8 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">Images saved securely</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">Measurements recorded</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">Scores submitted to central database</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">Available for scientific analysis</span>
              </div>
            </div>

            <Button 
              onClick={onNext}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
            >
              See the Impact <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </Card>
    </DemoScene>
  );
};
