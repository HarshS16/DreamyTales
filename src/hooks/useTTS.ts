
// // import { useState, useCallback } from 'react';
// // import { TTSService } from '@/services/ttsService';
// // import { toast } from '@/hooks/use-toast';

// // export const useTTS = () => {
// //   const [isGenerating, setIsGenerating] = useState(false);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [audioUrl, setAudioUrl] = useState<string>('');
// //   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

// //   const generateAudio = useCallback(async (text: string, apiKey?: string) => {
// //     if (!text.trim()) {
// //       toast({
// //         title: "No Text",
// //         description: "Please provide text to convert to speech.",
// //         variant: "destructive"
// //       });
// //       return;
// //     }

// //     // Get API key from localStorage if not provided
// //     const elevenLabsApiKey = apiKey || localStorage.getItem('elevenlabs_api_key');
    
// //     if (!elevenLabsApiKey) {
// //       toast({
// //         title: "API Key Required",
// //         description: "Please enter your ElevenLabs API key to generate audio.",
// //         variant: "destructive"
// //       });
// //       return;
// //     }

// //     setIsGenerating(true);
    
// //     try {
// //       const ttsService = new TTSService(elevenLabsApiKey);
// //       const url = await ttsService.generateAudio({ 
// //         text,
// //         voiceId: 'pNczCjzI2devNBz1zQrb' // Brian - calm, soothing voice perfect for bedtime stories
// //       });
      
// //       setAudioUrl(url);
      
// //       toast({
// //         title: "Audio Generated!",
// //         description: "Your bedtime story audio is ready to play.",
// //       });
// //     } catch (error) {
// //       console.error('TTS Error:', error);
// //       toast({
// //         title: "Audio Generation Failed",
// //         description: "There was an error generating the audio. Please check your API key and try again.",
// //         variant: "destructive"
// //       });
// //     } finally {
// //       setIsGenerating(false);
// //     }
// //   }, []);

// //   const playAudio = useCallback(() => {
// //     if (!audioUrl) {
// //       toast({
// //         title: "No Audio",
// //         description: "Please generate audio first.",
// //         variant: "destructive"
// //       });
// //       return;
// //     }

// //     if (audio) {
// //       audio.pause();
// //       audio.currentTime = 0;
// //     }

// //     const newAudio = new Audio(audioUrl);
// //     setAudio(newAudio);
// //     setIsPlaying(true);

// //     newAudio.onended = () => {
// //       setIsPlaying(false);
// //     };

// //     newAudio.onerror = () => {
// //       setIsPlaying(false);
// //       toast({
// //         title: "Playback Error",
// //         description: "There was an error playing the audio.",
// //         variant: "destructive"
// //       });
// //     };

// //     newAudio.play();
// //   }, [audioUrl, audio]);

// //   const stopAudio = useCallback(() => {
// //     if (audio) {
// //       audio.pause();
// //       audio.currentTime = 0;
// //       setIsPlaying(false);
// //     }
// //   }, [audio]);

// //   const saveApiKey = useCallback((apiKey: string) => {
// //     localStorage.setItem('elevenlabs_api_key', apiKey);
// //     toast({
// //       title: "API Key Saved",
// //       description: "Your ElevenLabs API key has been saved locally.",
// //     });
// //   }, []);

// //   return {
// //     generateAudio,
// //     playAudio,
// //     stopAudio,
// //     saveApiKey,
// //     isGenerating,
// //     isPlaying,
// //     audioUrl: !!audioUrl
// //   };
// // };


// import { useState, useCallback } from 'react';
// import { TTSService } from '@/services/ttsService';
// import { toast } from '@/hooks/use-toast';

// export const useTTS = () => {
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioUrl, setAudioUrl] = useState<string>('');
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

//   // ✅ Load API key from .env
//   const elevenLabsApiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

//   const generateAudio = useCallback(async (text: string) => {
//     if (!text.trim()) {
//       toast({
//         title: "No Text",
//         description: "Please provide text to convert to speech.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!elevenLabsApiKey) {
//       toast({
//         title: "API Key Missing",
//         description: "The ElevenLabs API key is missing from your .env file.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsGenerating(true);

//     try {
//       const ttsService = new TTSService(elevenLabsApiKey);
//       const url = await ttsService.generateAudio({ 
//         text,
//         voiceId: 'Z3R5wn05IrDiVCyEkUrK' // Brian - calm, soothing voice
//       });

//       setAudioUrl(url);

//       toast({
//         title: "Audio Generated!",
//         description: "Your bedtime story audio is ready to play.",
//       });
//     } catch (error) {
//       console.error('TTS Error:', error);
//       toast({
//         title: "Audio Generation Failed",
//         description: "There was an error generating the audio. Please check your API key and try again.",
//         variant: "destructive"
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [elevenLabsApiKey]);

//   const playAudio = useCallback(() => {
//     if (!audioUrl) {
//       toast({
//         title: "No Audio",
//         description: "Please generate audio first.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0;
//     }

//     const newAudio = new Audio(audioUrl);
//     setAudio(newAudio);
//     setIsPlaying(true);

//     newAudio.onended = () => {
//       setIsPlaying(false);
//     };

//     newAudio.onerror = () => {
//       setIsPlaying(false);
//       toast({
//         title: "Playback Error",
//         description: "There was an error playing the audio.",
//         variant: "destructive"
//       });
//     };

//     newAudio.play();
//   }, [audioUrl, audio]);

//   const stopAudio = useCallback(() => {
//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0;
//       setIsPlaying(false);
//     }
//   }, [audio]);

//   return {
//     generateAudio,
//     playAudio,
//     stopAudio,
//     isGenerating,
//     isPlaying,
//     audioUrl: !!audioUrl
//   };
// };


// import { useState, useCallback, useRef, useEffect } from 'react';
// import { TTSService } from '@/services/ttsService';
// import { toast } from '@/hooks/use-toast';

// export const useTTS = () => {
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioUrl, setAudioUrl] = useState<string>('');

//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const elevenLabsApiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

//   const generateAudio = useCallback(async (text: string) => {
//     if (!text.trim()) {
//       toast({
//         title: "No Text",
//         description: "Please provide text to convert to speech.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!elevenLabsApiKey) {
//       toast({
//         title: "API Key Missing",
//         description: "The ElevenLabs API key is missing from your .env file.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsGenerating(true);

//     try {
//       const ttsService = new TTSService(elevenLabsApiKey);
//       const url = await ttsService.generateAudio({ 
//         text,
//         voiceId: 'Z3R5wn05IrDiVCyEkUrK' // Brian - calm, soothing voice
//       });

//       setAudioUrl(url);

//       // Reset existing audio if any when new URL arrives
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.src = url;
//         audioRef.current.load();
//       } else {
//         audioRef.current = new Audio(url);
//       }

//       toast({
//         title: "Audio Generated!",
//         description: "Your bedtime story audio is ready to play.",
//       });
//     } catch (error) {
//       console.error('TTS Error:', error);
//       toast({
//         title: "Audio Generation Failed",
//         description: "There was an error generating the audio. Please check your API key and try again.",
//         variant: "destructive"
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [elevenLabsApiKey]);

//   const playAudio = useCallback(() => {
//     if (!audioUrl) {
//       toast({
//         title: "No Audio",
//         description: "Please generate audio first.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!audioRef.current) {
//       audioRef.current = new Audio(audioUrl);
//     }

//     const audio = audioRef.current;

//     audio.play()
//       .then(() => setIsPlaying(true))
//       .catch((error) => {
//         console.error("Audio play error:", error);
//         toast({
//           title: "Playback Error",
//           description: "There was an error playing the audio.",
//           variant: "destructive"
//         });
//       });

//     audio.onended = () => {
//       setIsPlaying(false);
//     };

//     audio.onerror = () => {
//       setIsPlaying(false);
//       toast({
//         title: "Playback Error",
//         description: "There was an error playing the audio.",
//         variant: "destructive"
//       });
//     };
//   }, [audioUrl]);

//   const stopAudio = useCallback(() => {
//     const audio = audioRef.current;
//     if (audio) {
//       audio.pause();
//       // Do NOT reset currentTime to 0 here, to allow resume from pause
//       setIsPlaying(false);
//     }
//   }, []);

//   // Optional cleanup: stop audio if component unmounts
//   useEffect(() => {
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//     };
//   }, []);

//   return {
//     generateAudio,
//     playAudio,
//     stopAudio,
//     isGenerating,
//     isPlaying,
//     audioUrl,
//   };
// };


// import { useState, useCallback } from 'react';
// import { TTSService } from '@/services/ttsService';
// import { toast } from '@/hooks/use-toast';

// export const useTTS = () => {
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioUrl, setAudioUrl] = useState<string>('');
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
//   const [playbackRate, setPlaybackRate] = useState(1);

//   const elevenLabsApiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

//   const generateAudio = useCallback(async (text: string) => {
//     if (!text.trim()) {
//       toast({
//         title: "No Text",
//         description: "Please provide text to convert to speech.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!elevenLabsApiKey) {
//       toast({
//         title: "API Key Missing",
//         description: "The ElevenLabs API key is missing from your .env file.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsGenerating(true);

//     try {
//       const ttsService = new TTSService(elevenLabsApiKey);
//       const url = await ttsService.generateAudio({
//         text,
//         voiceId: 'Z3R5wn05IrDiVCyEkUrK' // calm, soothing voice
//       });

//       // Stop and reset previous audio
//       if (audio) {
//         audio.pause();
//         audio.currentTime = 0;
//         setIsPlaying(false);
//       }

//       setAudioUrl(url);

//       const newAudio = new Audio(url);
//       newAudio.playbackRate = playbackRate;
//       newAudio.onended = () => setIsPlaying(false);
//       newAudio.onerror = () => {
//         setIsPlaying(false);
//         toast({
//           title: "Playback Error",
//           description: "There was an error playing the audio.",
//           variant: "destructive"
//         });
//       };

//       setAudio(newAudio);

//       toast({
//         title: "Audio Generated!",
//         description: "Your bedtime story audio is ready to play.",
//       });
//     } catch (error) {
//       console.error('TTS Error:', error);
//       toast({
//         title: "Audio Generation Failed",
//         description: "There was an error generating the audio.",
//         variant: "destructive"
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [elevenLabsApiKey, audio, playbackRate]);

//   const playAudio = useCallback(() => {
//     if (!audio) {
//       toast({
//         title: "No Audio",
//         description: "Please generate audio first.",
//         variant: "destructive"
//       });
//       return;
//     }

//     // Stop any current playback first
//     audio.pause();
//     audio.currentTime = 0;
//     audio.playbackRate = playbackRate;

//     audio.play().then(() => {
//       setIsPlaying(true);
//     }).catch((err) => {
//       console.error('Playback error:', err);
//       toast({
//         title: "Playback Failed",
//         description: "Could not start audio playback.",
//         variant: "destructive"
//       });
//     });
//   }, [audio, playbackRate]);

//   const stopAudio = useCallback(() => {
//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0;
//       setIsPlaying(false);
//     }
//   }, [audio]);

//   const changePlaybackSpeed = useCallback((rate: number) => {
//     setPlaybackRate(rate);
//     if (audio) {
//       audio.playbackRate = rate;
//     }
//   }, [audio]);

//   return {
//     generateAudio,
//     playAudio,
//     stopAudio,
//     changePlaybackSpeed,
//     isGenerating,
//     isPlaying,
//     audioUrl,
//     playbackRate,
//   };
// };



// import { useState, useCallback } from 'react';
// import { TTSService } from '@/services/ttsService';
// import { toast } from '@/hooks/use-toast';

// export const useTTS = () => {
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioUrl, setAudioUrl] = useState<string>('');
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
//   const [playbackRate, setPlaybackRate] = useState(1);

//   const elevenLabsApiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

//   const destroyAudio = () => {
//     if (audio) {
//       audio.pause();
//       audio.src = '';
//       audio.load();
//       setIsPlaying(false);
//       setAudio(null);
//     }
//   };

//   const generateAudio = useCallback(async (text: string) => {
//     if (!text.trim()) {
//       toast({
//         title: "No Text",
//         description: "Please provide text to convert to speech.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!elevenLabsApiKey) {
//       toast({
//         title: "API Key Missing",
//         description: "The ElevenLabs API key is missing from your .env file.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsGenerating(true);
//     destroyAudio();

//     try {
//       const ttsService = new TTSService(elevenLabsApiKey);
//       const url = await ttsService.generateAudio({
//         text,
//         voiceId: 'Z3R5wn05IrDiVCyEkUrK' // calm, soothing voice
//       });

//       setAudioUrl(url);

//       const newAudio = new Audio(url);
//       newAudio.playbackRate = playbackRate;

//       newAudio.onended = () => setIsPlaying(false);
//       newAudio.onerror = () => {
//         setIsPlaying(false);
//         toast({
//           title: "Playback Error",
//           description: "There was an error playing the audio.",
//           variant: "destructive"
//         });
//       };

//       setAudio(newAudio);

//       toast({
//         title: "Audio Generated!",
//         description: "Your bedtime story audio is ready to play.",
//       });
//     } catch (error) {
//       console.error('TTS Error:', error);
//       toast({
//         title: "Audio Generation Failed",
//         description: "There was an error generating the audio.",
//         variant: "destructive"
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [elevenLabsApiKey, playbackRate]);

//   const playAudio = useCallback(() => {
//     if (!audio) {
//       toast({
//         title: "No Audio",
//         description: "Please generate audio first.",
//         variant: "destructive"
//       });
//       return;
//     }

//     try {
//       audio.pause(); // just in case
//       audio.currentTime = 0;
//       audio.playbackRate = playbackRate;

//       audio.play().then(() => {
//         setIsPlaying(true);
//       }).catch((err) => {
//         console.error('Playback error:', err);
//         toast({
//           title: "Playback Failed",
//           description: "Could not start audio playback.",
//           variant: "destructive"
//         });
//       });
//     } catch (err) {
//       console.error('Playback error:', err);
//     }
//   }, [audio, playbackRate]);

//   const stopAudio = useCallback(() => {
//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0;
//       setIsPlaying(false);
//     }
//   }, [audio]);

//   const changePlaybackSpeed = useCallback((rate: number) => {
//     setPlaybackRate(rate);
//     if (audio) {
//       const wasPlaying = !audio.paused;

//       audio.pause();
//       audio.currentTime = 0;
//       audio.playbackRate = rate;

//       if (wasPlaying) {
//         audio.play().then(() => {
//           setIsPlaying(true);
//         }).catch(err => {
//           console.error('Playback error after speed change:', err);
//           setIsPlaying(false);
//         });
//       }
//     }
//   }, [audio]);

//   return {
//     generateAudio,
//     playAudio,
//     stopAudio,
//     changePlaybackSpeed,
//     isGenerating,
//     isPlaying,
//     audioUrl,
//     playbackRate,
//   };
// };




import { useState, useCallback } from 'react';
import { TTSService } from '@/services/ttsService';
import { toast } from '@/hooks/use-toast';

export const useTTS = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string>('');

  const elevenLabsApiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

  const generateAudio = useCallback(async (text: string) => {
    if (!text.trim()) {
      toast({
        title: "No Text",
        description: "Please provide text to convert to speech.",
        variant: "destructive"
      });
      return;
    }

    if (!elevenLabsApiKey) {
      toast({
        title: "API Key Missing",
        description: "The ElevenLabs API key is missing from your .env file.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      const ttsService = new TTSService(elevenLabsApiKey);
      const url = await ttsService.generateAudio({
        text,
        voiceId: 'Z3R5wn05IrDiVCyEkUrK' // calm, soothing voice
      });

      // Stop playback flag just in case
      setIsPlaying(false);
      setAudioUrl(url);

      toast({
        title: "Audio Generated!",
        description: "Your bedtime story audio is ready to play.",
      });
    } catch (error) {
      console.error('TTS Error:', error);
      toast({
        title: "Audio Generation Failed",
        description: "There was an error generating the audio.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  }, [elevenLabsApiKey]);

  const playAudio = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const stopAudio = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return {
    generateAudio,
    playAudio,
    stopAudio,
    isGenerating,
    isPlaying,
    audioUrl
  };
};
