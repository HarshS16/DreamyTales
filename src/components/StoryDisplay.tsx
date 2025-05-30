
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Square, Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface StoryDisplayProps {
  generatedStory: string;
  isGeneratingAudio: boolean;
  isPlaying: boolean;
  hasAudioUrl: boolean;
  onPlayAudio: () => void;
  onStopAudio: () => void;
  onGenerateAudio: () => void;
  onDownloadStory: () => void;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({
  generatedStory,
  isGeneratingAudio,
  isPlaying,
  hasAudioUrl,
  onPlayAudio,
  onStopAudio,
  onGenerateAudio,
  onDownloadStory
}) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Your Bedtime Story</h3>
            {generatedStory && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Badge variant="secondary" className="bg-yellow-300/20 text-yellow-300">
                  Ready to read!
                </Badge>
              </motion.div>
            )}
          </div>

          {generatedStory ? (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Textarea
                value={generatedStory}
                readOnly
                className="min-h-[300px] bg-white/20 border-white/30 text-white resize-none text-lg leading-relaxed"
              />
              
              <motion.div 
                className="flex gap-3 flex-wrap"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {!isPlaying ? (
                    <Button
                      onClick={hasAudioUrl ? onPlayAudio : onGenerateAudio}
                      disabled={isGeneratingAudio}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <Play size={16} />
                      {isGeneratingAudio ? 'Generating...' : hasAudioUrl ? 'Play Audio' : 'Generate Audio'}
                    </Button>
                  ) : (
                    <Button
                      onClick={onStopAudio}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                    >
                      <Square size={16} />
                      Stop Audio
                    </Button>
                  )}
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={onDownloadStory}
                    variant="outline"
                    className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10"
                  >
                    <Download size={16} />
                    Download Story
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="min-h-[300px] flex items-center justify-center text-purple-300 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <BookOpen size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Your magical story will appear here...</p>
                <p className="text-sm mt-2">Fill in the details and click "Generate Magical Story" to begin!</p>
              </motion.div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default StoryDisplay;
