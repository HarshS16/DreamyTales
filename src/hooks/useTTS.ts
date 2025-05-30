
import { useState, useCallback } from 'react';
import { TTSService } from '@/services/ttsService';
import { toast } from '@/hooks/use-toast';

export const useTTS = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const generateAudio = useCallback(async (text: string, apiKey?: string) => {
    if (!text.trim()) {
      toast({
        title: "No Text",
        description: "Please provide text to convert to speech.",
        variant: "destructive"
      });
      return;
    }

    // Get API key from localStorage if not provided
    const elevenLabsApiKey = apiKey || localStorage.getItem('elevenlabs_api_key');
    
    if (!elevenLabsApiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your ElevenLabs API key to generate audio.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const ttsService = new TTSService(elevenLabsApiKey);
      const url = await ttsService.generateAudio({ 
        text,
        voiceId: 'pNczCjzI2devNBz1zQrb' // Brian - calm, soothing voice perfect for bedtime stories
      });
      
      setAudioUrl(url);
      
      toast({
        title: "Audio Generated!",
        description: "Your bedtime story audio is ready to play.",
      });
    } catch (error) {
      console.error('TTS Error:', error);
      toast({
        title: "Audio Generation Failed",
        description: "There was an error generating the audio. Please check your API key and try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const playAudio = useCallback(() => {
    if (!audioUrl) {
      toast({
        title: "No Audio",
        description: "Please generate audio first.",
        variant: "destructive"
      });
      return;
    }

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(audioUrl);
    setAudio(newAudio);
    setIsPlaying(true);

    newAudio.onended = () => {
      setIsPlaying(false);
    };

    newAudio.onerror = () => {
      setIsPlaying(false);
      toast({
        title: "Playback Error",
        description: "There was an error playing the audio.",
        variant: "destructive"
      });
    };

    newAudio.play();
  }, [audioUrl, audio]);

  const stopAudio = useCallback(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  }, [audio]);

  const saveApiKey = useCallback((apiKey: string) => {
    localStorage.setItem('elevenlabs_api_key', apiKey);
    toast({
      title: "API Key Saved",
      description: "Your ElevenLabs API key has been saved locally.",
    });
  }, []);

  return {
    generateAudio,
    playAudio,
    stopAudio,
    saveApiKey,
    isGenerating,
    isPlaying,
    audioUrl: !!audioUrl
  };
};
