import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, CheckCircle2 } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene5ImageCaptureProps {
  onNext: () => void;
}

const captureViews = [
  { id: 1, name: "Side Profile (Left)", icon: "📷", instruction: "Align the animal's left side within the silhouette" },
  { id: 2, name: "Rear View", icon: "📸", instruction: "Capture rump and leg structure from behind" },
  { id: 3, name: "Front View", icon: "📹", instruction: "Center the chest width view" },
];

export const Scene5ImageCapture = ({ onNext }: Scene5ImageCaptureProps) => {
  const [capturedViews, setCapturedViews] = useState<number[]>([]);
  const [activeView, setActiveView] = useState(1);

  const handleCapture = (viewId: number) => {
    if (!capturedViews.includes(viewId)) {
      setCapturedViews([...capturedViews, viewId]);
      
      // Auto-advance to next view or finish
      if (viewId < 3) {
        setTimeout(() => setActiveView(viewId + 1), 800);
      } else {
        setTimeout(() => onNext(), 1200);
      }
    }
  };

  const currentView = captureViews.find(v => v.id === activeView);
  const allCaptured = capturedViews.length === 3;

  return (
    <DemoScene className="bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">AI-Guided Image Capture</h2>
          <p className="text-muted-foreground">Step 2 of 4 • Follow the on-screen guides</p>
        </div>

        <div className="grid gap-4 mb-8">
          {captureViews.map((view) => (
            <Card 
              key={view.id}
              className={`p-4 transition-all ${
                activeView === view.id 
                  ? 'border-2 border-primary shadow-elevated' 
                  : capturedViews.includes(view.id)
                  ? 'border-accent bg-accent/5'
                  : 'opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{view.icon}</span>
                  <div>
                    <p className="font-medium">{view.name}</p>
                    {activeView === view.id && !capturedViews.includes(view.id) && (
                      <p className="text-sm text-muted-foreground">{view.instruction}</p>
                    )}
                  </div>
                </div>
                {capturedViews.includes(view.id) && (
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Mock Camera View */}
        <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-dashed border-primary/30 mb-6">
          <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-4 border-primary/40 border-dashed rounded-lg w-4/5 h-4/5 flex items-center justify-center">
                <span className="text-6xl opacity-50">🐄</span>
              </div>
            </div>
          </div>
          
          {currentView && !capturedViews.includes(activeView) && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                {currentView.instruction}
              </p>
              <Button
                onClick={() => handleCapture(activeView)}
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground"
              >
                <Camera className="w-5 h-5 mr-2" />
                Capture {currentView.name}
              </Button>
            </div>
          )}

          {allCaptured && (
            <div className="text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
              </div>
              <p className="font-medium text-accent">All images captured successfully!</p>
              <p className="text-sm text-muted-foreground mt-1">Proceeding to AI analysis...</p>
            </div>
          )}
        </Card>

        <div className="flex justify-center gap-2">
          {captureViews.map((view) => (
            <div
              key={view.id}
              className={`h-2 w-16 rounded-full transition-all ${
                capturedViews.includes(view.id) ? 'bg-accent' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </DemoScene>
  );
};
