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

  // Disable audio functionality for GitHub Pages to prevent CORS issues
  useEffect(() => {
    // Audio is disabled for production deployment
    return;
  }, [inView, isPlaying, audioLoaded, volume, sectionId]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      {/* Audio disabled for GitHub Pages deployment */}
    </div>
  );
};

export default SectionMusicPlayer;