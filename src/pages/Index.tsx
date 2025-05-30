
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';
import { useTTS } from '@/hooks/useTTS';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import StoryGenerator from '@/components/StoryGenerator';
import StoryDisplay from '@/components/StoryDisplay';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  const [childName, setChildName] = useState('');
  const [theme, setTheme] = useState('');
  const [character, setCharacter] = useState('');
  const [generatedStory, setGeneratedStory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const { 
    generateAudio, 
    playAudio, 
    stopAudio, 
    saveApiKey,
    isGenerating: isGeneratingAudio, 
    isPlaying, 
    audioUrl: hasAudioUrl 
  } = useTTS();

  const generateStory = async () => {
    if (!childName || !theme || !character) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, choose a theme and character first!",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI story generation (you'll need to integrate with your preferred LLM API)
    const storyPrompt = `Create a gentle, soothing bedtime story for a child named ${childName}. The story should feature ${character} in ${theme}. Make it calming, positive, and about 200-300 words long. End with a peaceful, sleepy conclusion.`;
    
    // Mock story generation - replace with actual AI API call
    setTimeout(() => {
      const mockStory = `Once upon a time, in a ${theme.toLowerCase()}, there lived ${character.toLowerCase()} named Whiskers. ${childName}, this magical friend was about to embark on the most wonderful adventure.

Whiskers discovered a path lined with glowing flowers that seemed to dance in the gentle evening breeze. As our friend walked along this enchanted trail, tiny fireflies began to join the journey, creating a soft, golden light that made everything feel safe and warm.

Soon, Whiskers came across a beautiful clearing where all the forest animals had gathered for their nightly song. The rabbits hummed gentle melodies, the owls added soft hoots, and the crickets provided a peaceful rhythm. ${childName}, it was the most beautiful lullaby anyone had ever heard.

As the moon rose high in the star-filled sky, Whiskers found the perfect spot under a large, friendly tree. The tree's branches seemed to reach down like gentle arms, creating a cozy shelter. All the animal friends gathered around, and together they watched the stars twinkle like diamonds against the deep blue night.

${childName}, as Whiskers closed their eyes and listened to the gentle sounds of the night, a feeling of peace and happiness filled their heart. And soon, with the moon watching over and the stars standing guard, everyone in the magical land drifted off to the sweetest dreams.

The end. Sweet dreams, ${childName}. 🌙✨`;

      setGeneratedStory(mockStory);
      setIsGenerating(false);
      toast({
        title: "Story Generated!",
        description: "Your magical bedtime story is ready!",
      });
    }, 3000);
  };

  const handleGenerateAudio = async () => {
    await generateAudio(generatedStory);
  };

  const downloadStory = () => {
    if (!generatedStory) {
      toast({
        title: "No Story Yet",
        description: "Please generate a story first!",
        variant: "destructive"
      });
      return;
    }

    const element = document.createElement('a');
    const file = new Blob([generatedStory], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${childName}_bedtime_story.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Story Downloaded!",
      description: "Your bedtime story has been saved to your device.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <Header />
      <HeroSection />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <StoryGenerator
            childName={childName}
            setChildName={setChildName}
            theme={theme}
            setTheme={setTheme}
            character={character}
            setCharacter={setCharacter}
            isGenerating={isGenerating}
            onGenerateStory={generateStory}
            onSaveApiKey={saveApiKey}
          />

          <StoryDisplay
            generatedStory={generatedStory}
            isGeneratingAudio={isGeneratingAudio}
            isPlaying={isPlaying}
            hasAudioUrl={hasAudioUrl}
            onPlayAudio={playAudio}
            onStopAudio={stopAudio}
            onGenerateAudio={handleGenerateAudio}
            onDownloadStory={downloadStory}
          />
        </motion.div>

        <FeaturesSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
