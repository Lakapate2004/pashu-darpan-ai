import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, LogIn } from "lucide-react";
import { DemoScene } from "../DemoScene";

interface Scene2LoginProps {
  onNext: () => void;
}

export const Scene2Login = ({ onNext }: Scene2LoginProps) => {
  return (
    <DemoScene className="bg-gradient-to-br from-primary/5 to-background">
      <Card className="max-w-md w-full p-8 shadow-elevated">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
              <span className="text-2xl">🐄</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Welcome to Pashu-Darpan</h2>
          <p className="text-sm text-muted-foreground">Rashtriya Gokul Mission</p>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm">Seamless Integration</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Use your existing Bharat Pashudhan credentials. No new passwords needed.
                </p>
              </div>
            </div>
          </div>

          <Button 
            onClick={onNext}
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground py-6"
            size="lg"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Login with Bharat Pashudhan (BPA)
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Single sign-on • Secure authentication • Government verified
          </p>
        </div>
      </Card>
    </DemoScene>
  );
};
