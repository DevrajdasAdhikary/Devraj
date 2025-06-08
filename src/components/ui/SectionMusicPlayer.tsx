import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionMusicPlayerProps {
  sectionId: string;
  musicUrl: string;
  volume?: number;
}

const SectionMusicPlayer: React.FC<SectionMusicPlayerProps> = ({ 
  sectionId, 
  musicUrl, 
  volume = 0.3 
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const handleCanPlay = () => {
      setAudioLoaded(true);
    };

    const handleError = (e: Event) => {
      console.log(`Audio error for ${sectionId}:`, e);
      setAudioLoaded(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, [sectionId, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioLoaded) return;

    if (inView && !isPlaying) {
      // User interaction is required for audio to play
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log(`Audio play failed for ${sectionId}:`, error);
        }
      };

      // Add a small delay to ensure smooth transitions
      const timer = setTimeout(playAudio, 200);
      return () => clearTimeout(timer);
    } else if (!inView && isPlaying) {
      // Fade out and pause
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(audio.volume - 0.05, 0);
        } else {
          audio.pause();
          audio.volume = volume;
          setIsPlaying(false);
          clearInterval(fadeOut);
        }
      }, 50);

      return () => clearInterval(fadeOut);
    }
  }, [inView, isPlaying, audioLoaded, volume, sectionId]);

  // Fade in effect when starting to play
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isPlaying) return;

    audio.volume = 0;
    const fadeIn = setInterval(() => {
      if (audio.volume < volume - 0.05) {
        audio.volume = Math.min(audio.volume + 0.05, volume);
      } else {
        audio.volume = volume;
        clearInterval(fadeIn);
      }
    }, 50);

    return () => clearInterval(fadeIn);
  }, [isPlaying, volume]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <audio
        ref={audioRef}
        preload="metadata"
        crossOrigin="anonymous"
      >
        <source src={musicUrl} type="audio/mpeg" />
        <source src={musicUrl.replace('.mp3', '.ogg')} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SectionMusicPlayer;