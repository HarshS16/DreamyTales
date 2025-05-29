
import React, { useState } from 'react';
import { Moon, Star, BookOpen, Play, Pause, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [childName, setChildName] = useState('');
  const [theme, setTheme] = useState('');
  const [character, setCharacter] = useState('');
  const [generatedStory, setGeneratedStory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');

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

  const generateAudio = async () => {
    if (!generatedStory) {
      toast({
        title: "No Story Yet",
        description: "Please generate a story first!",
        variant: "destructive"
      });
      return;
    }

    // This would integrate with a text-to-speech API like ElevenLabs
    toast({
      title: "Audio Feature",
      description: "Audio generation would integrate with a TTS service like ElevenLabs. Please add your API key to enable this feature.",
    });
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-yellow-200 animate-pulse">
          <Star size={24} />
        </div>
        <div className="absolute top-20 right-20 text-yellow-300 animate-pulse delay-1000">
          <Star size={16} />
        </div>
        <div className="absolute top-40 left-1/4 text-yellow-200 animate-pulse delay-2000">
          <Star size={20} />
        </div>
        <div className="absolute bottom-40 right-1/3 text-yellow-300 animate-pulse delay-500">
          <Star size={18} />
        </div>
        <div className="absolute top-60 right-10 text-yellow-200 animate-pulse delay-1500">
          <Star size={14} />
        </div>
        <div className="absolute bottom-60 left-20 text-yellow-300 animate-pulse delay-3000">
          <Star size={22} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Moon className="text-yellow-300" size={48} />
            <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Dreamy Tales
            </h1>
            <BookOpen className="text-yellow-300" size={48} />
          </div>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Create magical bedtime stories just for you! Let AI weave enchanting tales that will carry you to dreamland.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
          {/* Story Generator Form */}
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-yellow-300" size={24} />
                <h2 className="text-2xl font-bold text-white">Create Your Story</h2>
              </div>

              <div>
                <label className="block text-purple-200 mb-2 font-medium">What's your name?</label>
                <Input
                  placeholder="Enter your name..."
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-purple-300"
                />
              </div>

              <div>
                <label className="block text-purple-200 mb-2 font-medium">Choose your adventure theme</label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Pick a magical theme..." />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
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
              </div>

              <Button
                onClick={generateStory}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105"
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
            </div>
          </Card>

          {/* Story Display */}
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Your Bedtime Story</h3>
                {generatedStory && (
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-yellow-300/20 text-yellow-300">
                      Ready to read!
                    </Badge>
                  </div>
                )}
              </div>

              {generatedStory ? (
                <div className="space-y-4">
                  <Textarea
                    value={generatedStory}
                    readOnly
                    className="min-h-[300px] bg-white/20 border-white/30 text-white resize-none text-lg leading-relaxed"
                  />
                  
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={generateAudio}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <Play size={16} />
                      Generate Audio
                    </Button>
                    
                    <Button
                      onClick={downloadStory}
                      variant="outline"
                      className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10"
                    >
                      <Download size={16} />
                      Download Story
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="min-h-[300px] flex items-center justify-center text-purple-300 text-center">
                  <div>
                    <BookOpen size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Your magical story will appear here...</p>
                    <p className="text-sm mt-2">Fill in the details and click "Generate Magical Story" to begin!</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">✨ Magical Features ✨</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">AI-Generated Stories</h4>
              <p className="text-purple-200">Unique tales created just for you every time</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Soothing Audio</h4>
              <p className="text-purple-200">Stories read aloud like grandma's voice</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Save & Share</h4>
              <p className="text-purple-200">Keep your favorite stories forever</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
