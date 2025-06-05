
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { toast } from '@/hooks/use-toast';
// import { useTTS } from '@/hooks/useTTS';
// import Header from '@/components/Header';
// import HeroSection from '@/components/HeroSection';
// import Footer from '@/components/Footer';
// import StoryGenerator from '@/components/StoryGenerator';
// import StoryDisplay from '@/components/StoryDisplay';
// import FeaturesSection from '@/components/FeaturesSection';
// import { GeminiService } from '@/services/geminiService';
// import AudioPlayer from '@/components/AudioPlayer';

// const Index = () => {
//   const [childName, setChildName] = useState('');
//   const [theme, setTheme] = useState('');
//   const [character, setCharacter] = useState('');
//   const [generatedStory, setGeneratedStory] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [geminiService, setGeminiService] = useState<GeminiService | null>(null);

//   const { 
//     generateAudio, 
//     playAudio, 
//     stopAudio, 
//     isGenerating: isGeneratingAudio, 
//     isPlaying, 
//     audioUrl 
//   } = useTTS();

//   useEffect(() => {
//     try {
//       const service = new GeminiService();
//       setGeminiService(service);
//     } catch (error) {
//       console.error('Failed to initialize Gemini service:', error);
//       toast({
//         title: "Error",
//         description: "Failed to initialize story generation service. Please check your environment configuration.",
//         variant: "destructive"
//       });
//     }
//   }, []);

//   const generateStory = async () => {
//     if (!childName || !theme || !character) {
//       toast({
//         title: "Missing Information",
//         description: "Please fill in your name, choose a theme and character first!",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!geminiService) {
//       console.error('GeminiService is not initialized');
//       toast({
//         title: "Service Unavailable",
//         description: "Story generation service is not available. Please check if the API key is configured correctly.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsGenerating(true);

//     try {
//       const storyPrompt = `Create a gentle, soothing bedtime story for a child named ${childName}. The story should feature ${character} in ${theme}. Make it calming, positive, and about 200-300 words long. End with a peaceful, sleepy conclusion.`;
//       const story = await geminiService.generateStory(storyPrompt);

//       if (!story) {
//         throw new Error('Generated story is empty');
//       }

//       setGeneratedStory(story);

//       toast({
//         title: "Story Generated!",
//         description: "Your magical bedtime story is ready!",
//       });
//     } catch (error) {
//       console.error('Error in generateStory:', error);
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to generate story. Please try again.",
//         variant: "destructive"
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleGenerateAudio = async () => {
//     if (!generatedStory) {
//       toast({
//         title: "No Story Yet",
//         description: "Please generate a story before generating audio.",
//         variant: "destructive"
//       });
//       return;
//     }
//     await generateAudio(generatedStory);
//   };

//   const downloadStory = () => {
//     if (!generatedStory) {
//       toast({
//         title: "No Story Yet",
//         description: "Please generate a story first!",
//         variant: "destructive"
//       });
//       return;
//     }

//     const element = document.createElement('a');
//     const file = new Blob([generatedStory], { type: 'text/plain' });
//     element.href = URL.createObjectURL(file);
//     element.download = `${childName}_bedtime_story.txt`;
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);

//     toast({
//       title: "Story Downloaded!",
//       description: "Your bedtime story has been saved to your device.",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden pb-20">
//       <Header />
//       <HeroSection />

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         <motion.div
//           className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <StoryGenerator
//             childName={childName}
//             setChildName={setChildName}
//             theme={theme}
//             setTheme={setTheme}
//             character={character}
//             setCharacter={setCharacter}
//             isGenerating={isGenerating}
//             onGenerateStory={generateStory}
//           />

//           <StoryDisplay
//             generatedStory={generatedStory}
//             isGeneratingAudio={isGeneratingAudio}
//             isPlaying={isPlaying}
//             audioUrl={audioUrl}
//             onPlayAudio={playAudio}
//             onStopAudio={stopAudio}
//             onGenerateAudio={handleGenerateAudio}
//             onDownloadStory={downloadStory}
//           />
//         </motion.div>

//         {/* 🔗 About link scroll target */}
//         <section id="features">
//           <FeaturesSection />
//         </section>
//       </div>

//       <Footer />

//       {audioUrl && (
//         <AudioPlayer
//           audioUrl={audioUrl}
//           isPlaying={isPlaying}
//           onPlay={playAudio}
//           onPause={stopAudio}
//         />
//       )}
//     </div>
//   );
// };

// export default Index;


import React, { useState, useEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';
import { useTTS } from '@/hooks/useTTS';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import StoryGenerator from '@/components/StoryGenerator';
import StoryDisplay from '@/components/StoryDisplay';
import FeaturesSection from '@/components/FeaturesSection';
import { GeminiService } from '@/services/geminiService';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  const [childName, setChildName] = useState('');
  const [theme, setTheme] = useState('');
  const [character, setCharacter] = useState('');
  const [generatedStory, setGeneratedStory] = useState('');
  const [pastStories, setPastStories] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [geminiService, setGeminiService] = useState<GeminiService | null>(null);
  

  const {
    generateAudio,
    playAudio,
    stopAudio,
    isGenerating: isGeneratingAudio,
    isPlaying,
    audioUrl,
  } = useTTS();

  // Load saved stories from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('pastStories');
    if (stored) {
      setPastStories(JSON.parse(stored));
    }

    try {
      const service = new GeminiService();
      setGeminiService(service);
    } catch (error) {
      console.error('Failed to initialize Gemini service:', error);
      toast({
        title: "Error",
        description: "Failed to initialize story generation service. Please check your environment configuration.",
        variant: "destructive",
      });
    }
  }, []);

  const generateStory = async () => {
    if (!childName || !theme || !character) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, choose a theme and character first!",
        variant: "destructive",
      });
      return;
    }

    if (!geminiService) {
      console.error('GeminiService is not initialized');
      toast({
        title: "Service Unavailable",
        description: "Story generation service is not available. Please check if the API key is configured correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      const storyPrompt = `Create a gentle, soothing bedtime story for a child named ${childName}. The story should feature ${character} in ${theme}. Make it calming, positive, and about 200-300 words long. End with a peaceful, sleepy conclusion.`;
      const story = await geminiService.generateStory(storyPrompt);

      if (!story) {
        throw new Error('Generated story is empty');
      }

      setGeneratedStory(story);

      // Save story to localStorage
      const updatedStories = [story, ...pastStories].slice(0, 10);
      setPastStories(updatedStories);
      localStorage.setItem('pastStories', JSON.stringify(updatedStories));

      toast({
        title: "Story Generated!",
        description: "Your magical bedtime story is ready!",
      });
    } catch (error) {
      console.error('Error in generateStory:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate story. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateAudio = async () => {
    if (!generatedStory) {
      toast({
        title: "No Story Yet",
        description: "Please generate a story before generating audio.",
        variant: "destructive",
      });
      return;
    }
    await generateAudio(generatedStory);
  };

  const downloadStory = () => {
    if (!generatedStory) {
      toast({
        title: "No Story Yet",
        description: "Please generate a story first!",
        variant: "destructive",
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden pb-20">
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
          />

          <StoryDisplay
            generatedStory={generatedStory}
            isGeneratingAudio={isGeneratingAudio}
            isPlaying={isPlaying}
            audioUrl={audioUrl}
            onPlayAudio={playAudio}
            onStopAudio={stopAudio}
            onGenerateAudio={handleGenerateAudio}
            onDownloadStory={downloadStory}
          />
        </motion.div>

        {/* Features */}
        <section id="features">
          <FeaturesSection />
        </section>

        {/* Past Stories Section */}
        {pastStories.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">📚 Your Past Stories</h3>
            <div className="grid gap-4 max-h-64 overflow-y-auto">
              {pastStories.map((story, index) => (
                <div
                  key={index}
                  className="p-4 bg-purple-800/40 rounded-lg text-purple-100 text-sm border border-purple-500"
                >
                  {story}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />

      {audioUrl && (
        <AudioPlayer
          audioUrl={audioUrl}
          isPlaying={isPlaying}
          onPlay={playAudio}
          onPause={stopAudio}
        />
      )}
    </div>
  );
};

export default Index;
