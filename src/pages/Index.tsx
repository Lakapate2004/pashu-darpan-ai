import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Scene1Intro } from "@/components/scenes/Scene1Intro";
import { Scene2Login } from "@/components/scenes/Scene2Login";
import { Scene3Dashboard } from "@/components/scenes/Scene3Dashboard";
import { Scene4AnimalID } from "@/components/scenes/Scene4AnimalID";
import { Scene5ImageCapture } from "@/components/scenes/Scene5ImageCapture";
import { Scene6AIAnalysis } from "@/components/scenes/Scene6AIAnalysis";
import { Scene7ReviewScores } from "@/components/scenes/Scene7ReviewScores";
import { Scene8Submission } from "@/components/scenes/Scene8Submission";
import { Scene9Impact } from "@/components/scenes/Scene9Impact";

const Index = () => {
  const [currentScene, setCurrentScene] = useState(1);

  const nextScene = () => setCurrentScene(prev => prev + 1);
  const restart = () => setCurrentScene(1);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentScene === 1 && <Scene1Intro key="scene1" onNext={nextScene} />}
        {currentScene === 2 && <Scene2Login key="scene2" onNext={nextScene} />}
        {currentScene === 3 && <Scene3Dashboard key="scene3" onNext={nextScene} />}
        {currentScene === 4 && <Scene4AnimalID key="scene4" onNext={nextScene} />}
        {currentScene === 5 && <Scene5ImageCapture key="scene5" onNext={nextScene} />}
        {currentScene === 6 && <Scene6AIAnalysis key="scene6" onNext={nextScene} />}
        {currentScene === 7 && <Scene7ReviewScores key="scene7" onNext={nextScene} />}
        {currentScene === 8 && <Scene8Submission key="scene8" onNext={nextScene} />}
        {currentScene === 9 && <Scene9Impact key="scene9" onRestart={restart} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
