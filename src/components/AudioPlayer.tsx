// import React, { useEffect, useRef, useState } from 'react';

// interface AudioPlayerProps {
//   audioUrl: string;
//   isPlaying: boolean;
//   onPlay: () => void;
//   onPause: () => void;
// }

// const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, isPlaying, onPlay, onPause }) => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (!audioRef.current) {
//       audioRef.current = new Audio(audioUrl);
//     } else if (audioRef.current.src !== audioUrl) {
//       audioRef.current.src = audioUrl;
//       setProgress(0);
//     }

//     const audio = audioRef.current;

//     const updateProgress = () => {
//       if (audio.duration) {
//         setProgress((audio.currentTime / audio.duration) * 100);
//       }
//     };

//     audio.addEventListener('timeupdate', updateProgress);

//     if (isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }

//     return () => {
//       audio.removeEventListener('timeupdate', updateProgress);
//     };
//   }, [audioUrl, isPlaying]);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       onPause();
//     } else {
//       onPlay();
//     }
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 text-white p-4 flex items-center justify-between z-50">
//       <button
//         onClick={handlePlayPause}
//         aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
//         className="mr-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded"
//       >
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <div className="flex-1">
//         <div className="h-2 bg-gray-700 rounded overflow-hidden">
//           <div
//             className="h-full bg-indigo-500 transition-all duration-300"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;

import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

interface AudioPlayerProps {
  audioUrl: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, isPlaying, onPlay, onPause }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sync play/pause state with actual audio element
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Handle play failure (e.g., user hasn't interacted with page yet)
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Skip backward 10 seconds
  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
  };

  // Skip forward 10 seconds
  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      audioRef.current.duration || Infinity
    );
  };

  // Toggle play/pause button handler
  const togglePlayPause = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 text-white flex items-center justify-center gap-6 p-4 shadow-lg z-50">
      <audio ref={audioRef} src={audioUrl} preload="auto" />

      {/* Skip Backward 10s */}
      <button
        onClick={skipBackward}
        className="text-xl hover:text-indigo-400 transition"
        aria-label="Skip backward 10 seconds"
        title="Skip backward 10 seconds"
      >
        <FaBackward />
      </button>

      {/* Play / Pause */}
      <button
        onClick={togglePlayPause}
        className="text-3xl px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition shadow-lg"
        aria-label={isPlaying ? "Pause" : "Play"}
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Skip Forward 10s */}
      <button
        onClick={skipForward}
        className="text-xl hover:text-indigo-400 transition"
        aria-label="Skip forward 10 seconds"
        title="Skip forward 10 seconds"
      >
        <FaForward />
      </button>
    </div>
  );
};

export default AudioPlayer;
