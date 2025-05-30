import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ApiKeyInput from '@/components/ApiKeyInput';

interface StoryGeneratorProps {
  childName: string;
  setChildName: (name: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
  character: string;
  setCharacter: (character: string) => void;
  isGenerating: boolean;
  onGenerateStory: () => void;
  onSaveApiKey: (apiKey: string) => void;
}

const themes = [
  'Magical Forest Adventure',
  'Underwater Kingdom',
  'Space Adventure',
  'Fairy Tale Castle',
  'Animal Friends',
  'Rainbow Land',
  'Cozy Village',
  'Dream World'
];

const characters = [
  'A brave little bunny',
  'A friendly dragon',
  'A wise owl',
  'A magical unicorn',
  'A curious kitten',
  'A gentle elephant',
  'A playful dolphin',
  'A kind fairy'
];

const StoryGenerator: React.FC<StoryGeneratorProps> = ({
  childName,
  setChildName,
  theme,
  setTheme,
  character,
  setCharacter,
  isGenerating,
  onGenerateStory,
  onSaveApiKey
}) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="space-y-6"
    >
      <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Create Your Story</h2>
          
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-purple-200 mb-2 font-medium">What's your name?</label>
            <Input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Enter your name..."
              className="bg-white/20 border-white/30 text-white placeholder-purple-300"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-purple-200 mb-2 font-medium">Choose your magical theme</label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Pick a theme..." />
              </SelectTrigger>
              <SelectContent>
                {themes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <label className="block text-purple-200 mb-2 font-medium">Who will be your story friend?</label>
            <Select value={character} onValueChange={setCharacter}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Choose your character..." />
              </SelectTrigger>
              <SelectContent>
                {characters.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <label className="block text-purple-200 mb-2 font-medium">Gemini API Key</label>
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Enter your Gemini API key..."
                onChange={(e) => onSaveApiKey(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder-purple-300"
              />
            </div>
            <p className="text-purple-200 text-xs mt-2">
              Get your API key from{' '}
              <a 
                href="https://makersuite.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
              >
                Google AI Studio
              </a>
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              onClick={onGenerateStory}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 text-lg transition-all duration-300"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Creating your story...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles size={20} />
                  Generate Magical Story
                </div>
              )}
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default StoryGenerator;
