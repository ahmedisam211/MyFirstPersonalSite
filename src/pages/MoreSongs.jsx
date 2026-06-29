import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, Volume2, ArrowLeft, Music } from 'lucide-react';
import NoiseOverlay from '../components/Noiseoverlay';
import CustomCursor from '../components/CustomcCursor';
import Navbar from '../components/navbar';

const ALL_SONGS = [
  { id: '01', title: 'Midnight Static', mood: 'Dreamy', duration: '3:34', color: 'text-neon-violet', bg: 'bg-neon-violet', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: '02', title: 'Broken Frequencies', mood: 'Chaotic', duration: '4:11', color: 'text-neon-magenta', bg: 'bg-neon-magenta', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: '03', title: 'Ghost in the Wire', mood: 'Melancholic', duration: '2:58', color: 'text-neon-cyan', bg: 'bg-neon-cyan', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: '04', title: 'Neon Rain', mood: 'Euphoric', duration: '5:02', color: 'text-neon-lime', bg: 'bg-neon-lime', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: '05', title: 'Signal Lost', mood: 'Ambient', duration: '3:47', color: 'text-ash/40', bg: 'bg-ash/40', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: '06', title: 'Digital Echo', mood: 'Atmospheric', duration: '4:22', color: 'text-neon-violet', bg: 'bg-neon-violet', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id: '07', title: 'وطني وكفى', mood: 'Energetic', duration: '8:21', color: 'text-neon-magenta', bg: 'bg-neon-magenta', url: 'http://16.16.159.45/music/1.mp3' },
  { id: '08', title: 'Vapor Wave', mood: 'Chill', duration: '5:45', color: 'text-neon-cyan', bg: 'bg-neon-cyan', url: 'https://cdn.hackclub.com/019f10ba-a182-7a0c-afd8-f067a820905d/%D8%A5%D9%84%D8%A7%20%D9%86%D9%88%D8%B1%D9%8A%20%D8%A7%D9%84%D9%81%D9%8A%D9%87%D8%A7%20%D8%A3%D9%83%D8%AA%D8%B1.mp3' },
];

export default function MoreSongs() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const currentSong = ALL_SONGS[currentSongIndex];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleEnded = () => {
    nextSong();
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % ALL_SONGS.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + ALL_SONGS.length) % ALL_SONGS.length);
    setIsPlaying(true);
  };

  const selectSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-void text-ash selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />

      <main className="px-6 md:px-10 pt-32 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-ash/40 hover:text-white transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Home</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Player Section */}
            <div className="sticky top-32">
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 bg-ash/5 border border-ash/10 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: isPlaying ? [1, 1.1, 1] : 1,
                      rotate: isPlaying ? 360 : 0
                    }}
                    transition={{ 
                      scale: { repeat: Infinity, duration: 2 },
                      rotate: { repeat: Infinity, duration: 20, ease: "linear" }
                    }}
                    className={`w-48 h-48 rounded-full border-2 border-dashed ${currentSong.color} opacity-20`}
                  />
                  <Music className={`w-24 h-24 ${currentSong.color} opacity-40`} />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-void to-transparent">
                  <h2 className="text-3xl font-bold tracking-tighter mb-1">{currentSong.title}</h2>
                  <p className={`text-xs uppercase tracking-[0.3em] ${currentSong.color}`}>{currentSong.mood}</p>
                </div>
              </div>

              <div className="mt-8 max-w-md mx-auto lg:mx-0">
                {/* Progress Bar */}
                <div className="h-1 bg-ash/10 rounded-full overflow-hidden mb-6 cursor-pointer group" onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const pct = x / rect.width;
                  audioRef.current.currentTime = pct * audioRef.current.duration;
                }}>
                  <motion.div 
                    className={`h-full ${currentSong.bg}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <button onClick={prevSong} className="p-2 text-ash/40 hover:text-white transition-colors">
                    <SkipBack className="w-6 h-6" />
                  </button>
                  
                  <button 
                    onClick={togglePlay}
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${currentSong.bg} text-void hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                  </button>

                  <button onClick={nextSong} className="p-2 text-ash/40 hover:text-white transition-colors">
                    <SkipForward className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Playlist Section */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-ash/40 mb-8">// Playlist</h3>
              {ALL_SONGS.map((song, index) => (
                <button
                  key={song.id}
                  onClick={() => selectSong(index)}
                  className={`w-full flex items-center gap-6 p-4 rounded-xl transition-all group ${
                    currentSongIndex === index ? 'bg-ash/10' : 'hover:bg-ash/5'
                  }`}
                >
                  <span className={`font-mono text-xs ${currentSongIndex === index ? currentSong.color : 'text-ash/20'}`}>
                    {song.id}
                  </span>
                  
                  <div className="flex-1 text-left">
                    <h4 className={`font-medium transition-colors ${currentSongIndex === index ? 'text-white' : 'text-ash/60 group-hover:text-ash'}`}>
                      {song.title}
                    </h4>
                    <p className="text-[10px] uppercase tracking-widest text-ash/40">{song.mood}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    {currentSongIndex === index && isPlaying && (
                      <div className="flex gap-0.5 items-end h-3">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [4, 12, 6, 10, 4] }}
                            transition={{ repeat: Infinity, duration: 0.5 + Math.random() }}
                            className={`w-0.5 ${song.bg}`}
                          />
                        ))}
                      </div>
                    )}
                    <span className="font-mono text-xs text-ash/20">{song.duration}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        autoPlay={isPlaying}
      />
    </div>
  );
}
