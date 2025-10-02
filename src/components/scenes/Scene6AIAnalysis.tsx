import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene6AIAnalysisProps {
  onNext: () => void;
}

const measurements = [
  { label: "Body Length", value: "158 cm", delay: 500 },
  { label: "Height at Withers", value: "135 cm", delay: 1000 },
  { label: "Rump Angle", value: "23°", delay: 1500 },
  { label: "Chest Width", value: "45 cm", delay: 2000 },
];

export const Scene6AIAnalysis = ({ onNext }: Scene6AIAnalysisProps) => {
  const [progress, setProgress] = useState(0);
  const [visibleMeasurements, setVisibleMeasurements] = useState<number[]>([]);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onNext(), 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Show measurements progressively
    measurements.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMeasurements(prev => [...prev, index]);
      }, measurements[index].delay);
    });

    return () => clearInterval(progressInterval);
  }, [onNext]);

  return (
    <DemoScene className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI Analysis in Progress</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Extracting Body Measurements</h2>
          <p className="text-muted-foreground">Step 3 of 4 • Analyzing 50+ structural parameters</p>
        </div>

        <Card className="p-8 shadow-elevated mb-6">
          {/* Mock Image with Skeleton Overlay */}
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg mb-6 relative overflow-hidden border-2 border-primary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl opacity-40">🐄</span>
              
              {/* AI Analysis Overlay */}
              {progress > 20 && (
                <div className="absolute inset-0 animate-in fade-in">
                  {/* Keypoint markers */}
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <div className="absolute top-1/3 left-2/3 w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <div className="absolute bottom-1/3 left-2/5 w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.6s' }} />
                  
                  {/* Measurement lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <line x1="33%" y1="25%" x2="66%" y2="33%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4" />
                    <line x1="50%" y1="50%" x2="40%" y2="66%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-center text-muted-foreground mt-2">
              {progress < 100 ? 'Processing...' : 'Analysis Complete!'} {progress}%
            </p>
          </div>

          {/* Measurements */}
          <div className="grid grid-cols-2 gap-4">
            {measurements.map((measurement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all ${
                  visibleMeasurements.includes(index)
                    ? 'bg-accent/10 border-accent/30 animate-in fade-in slide-in-from-bottom-4'
                    : 'bg-muted/20 border-muted opacity-40'
                }`}
              >
                <p className="text-sm text-muted-foreground mb-1">{measurement.label}</p>
                <p className="text-2xl font-bold text-foreground">
                  {visibleMeasurements.includes(index) ? measurement.value : '---'}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-sm text-primary font-medium">
            ✨ No more manual tape measures! AI extracts precise measurements in seconds.
          </p>
        </div>
      </div>
    </DemoScene>
  );
};
