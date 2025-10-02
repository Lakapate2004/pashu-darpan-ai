import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tag, ArrowRight } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene4AnimalIDProps {
  onNext: () => void;
}

export const Scene4AnimalID = ({ onNext }: Scene4AnimalIDProps) => {
  const [tagId, setTagId] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = () => {
    if (!showDetails) {
      setShowDetails(true);
      setTimeout(() => {
        // Auto-progress after showing details
      }, 1500);
    } else {
      onNext();
    }
  };

  return (
    <DemoScene>
      <Card className="max-w-lg w-full p-8 shadow-elevated">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Tag className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Animal Identification</h2>
              <p className="text-sm text-muted-foreground">Step 1 of 4</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Enter 12-Digit Animal Tag ID
            </label>
            <Input 
              type="text"
              placeholder="370012345678"
              value={tagId}
              onChange={(e) => {
                setTagId(e.target.value);
                if (e.target.value.length === 12) {
                  setShowDetails(true);
                }
              }}
              maxLength={12}
              className="text-lg h-14"
            />
            <p className="text-xs text-muted-foreground mt-2">
              The unique ear tag number assigned to the animal
            </p>
          </div>

          {showDetails && (
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Breed:</span>
                <span className="font-medium text-foreground">Gir</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Age:</span>
                <span className="font-medium text-foreground">4 Years, 2 Months</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Lactation Number:</span>
                <span className="font-medium text-foreground">3</span>
              </div>
              <div className="pt-2 border-t border-accent/20">
                <p className="text-xs text-accent flex items-center gap-1">
                  <span className="text-base">✓</span> Data fetched from BPA database
                </p>
              </div>
            </div>
          )}

          <Button 
            onClick={handleSubmit}
            disabled={tagId.length !== 12}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
          >
            {showDetails ? (
              <>Proceed to Image Capture <ArrowRight className="w-5 h-5 ml-2" /></>
            ) : (
              "Fetch Animal Details"
            )}
          </Button>
        </div>
      </Card>
    </DemoScene>
  );
};
