import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, Volume2, ArrowLeft, Music, Disc } from 'lucide-react';
import NoiseOverlay from '../components/Noiseoverlay';
import CustomCursor from '../components/customcCursor';
import Navbar from '../components/navbar';

const ALL_SONGS = [
  { id: '01', title: 'Midnight Static', singer: 'mostafa', mood: 'Dreamy', duration: '3:34', color: 'text-neon-violet', bg: 'bg-neon-violet', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80' },
  { id: '02', title: 'Broken Frequencies', singer: 'Hameed', mood: 'Chaotic', duration: '4:11', color: 'text-neon-magenta', bg: 'bg-neon-magenta', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80' },
  { id: '03', title: 'Ghost in the Wire', singer: 'Poet X', mood: 'Melancholic', duration: '2:58', color: 'text-neon-cyan', bg: 'bg-neon-cyan', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=800&q=80' },
  { id: '04', title: 'Neon Rain', singer: 'Poet X', mood: 'Euphoric', duration: '5:02', color: 'text-neon-lime', bg: 'bg-neon-lime', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', cover: 'https://images.unsplash.com/photo-1514525253344-f81f3f776a20?w=800&q=80' },
  { id: '05', title: 'Signal Lost', singer: 'Hameed', mood: 'Ambient', duration: '3:47', color: 'text-ash/40', bg: 'bg-ash/40', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80' },
  { id: '06', title: 'Digital Echo', singer: 'Poet Y', mood: 'Atmospheric', duration: '4:22', color: 'text-neon-violet', bg: 'bg-neon-violet', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80' },
  { id: '07', title: 'Cyber Pulse', singer: 'mostafa', mood: 'Energetic', duration: '3:15', color: 'text-neon-magenta', bg: 'bg-neon-magenta', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80' },
  { id: '08', title: 'Vapor Wave', singer: 'Hameed', mood: 'Chill', duration: '5:45', color: 'text-neon-cyan', bg: 'bg-neon-cyan', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', cover: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?w=800&q=80' },
];

const SINGERS = ['All', ...new Set(ALL_SONGS.map(s => s.singer))];

export default function MoreSongs() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentSong, setCurrentSong] = useState(ALL_SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const filteredSongs = activeTab === 'All' 
    ? ALL_SONGS 
    : ALL_SONGS.filter(s => s.singer === activeTab);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const nextSong = () => {
    const currentIndex = ALL_SONGS.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % ALL_SONGS.length;
    setCurrentSong(ALL_SONGS[nextIndex]);
    setIsPlaying(true);
  };

  const prevSong = () => {
    const currentIndex = ALL_SONGS.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + ALL_SONGS.length) % ALL_SONGS.length;
    setCurrentSong(ALL_SONGS[prevIndex]);
    setIsPlaying(true);
  };

  const selectSong = (song) => {
    setCurrentSong(song);
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
          <Link to="/home" className="inline-flex items-center gap-2 text-ash/40 hover:text-white transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Home</span>
          </Link>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-ash/10 pb-4">
            {SINGERS.map(singer => (
              <button
                key={singer}
                onClick={() => setActiveTab(singer)}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 transition-all relative ${
                  activeTab === singer ? 'text-neon-magenta' : 'text-ash/40 hover:text-ash'
                }`}
              >
                {singer}
                {activeTab === singer && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-neon-magenta"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Player Section */}
            <div className="sticky top-32">
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 bg-ash/5 border border-ash/10 rounded-2xl overflow-hidden group shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSong.cover}
                    src={currentSong.cover}
                    alt={currentSong.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: isPlaying ? 360 : 0
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 20, 
                      ease: "linear" 
                    }}
                    className={`w-64 h-64 rounded-full border border-dashed ${currentSong.color} opacity-20`}
                  />
                  <Disc className={`w-32 h-32 ${currentSong.color} opacity-40 animate-pulse`} />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-void via-void/80 to-transparent">
                  <h2 className="text-4xl font-bold tracking-tighter mb-1">{currentSong.title}</h2>
                  <div className="flex items-center gap-3">
                    <p className={`text-xs uppercase tracking-[0.3em] ${currentSong.color}`}>{currentSong.mood}</p>
                    <span className="w-1 h-1 rounded-full bg-ash/20" />
                    <p className="text-xs uppercase tracking-[0.3em] text-ash/40">{currentSong.singer}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 max-w-md mx-auto lg:mx-0">
                {/* Progress Bar */}
                <div className="h-1.5 bg-ash/10 rounded-full overflow-hidden mb-6 cursor-pointer group relative" onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const pct = x / rect.width;
                  audioRef.current.currentTime = pct * audioRef.current.duration;
                }}>
                  <motion.div 
                    className={`h-full ${currentSong.bg} relative z-10`}
                    style={{ width: `${progress}%` }}
                  />
                  <div className="absolute inset-0 bg-ash/5 group-hover:bg-ash/10 transition-colors" />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between px-4">
                  <button onClick={prevSong} className="p-2 text-ash/40 hover:text-white transition-colors hover:scale-110">
                    <SkipBack className="w-6 h-6" />
                  </button>
                  
                  <button 
                    onClick={togglePlay}
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${currentSong.bg} text-void hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)] group`}
                  >
                    {isPlaying ? (
                      <Pause className="w-10 h-10 fill-current" />
                    ) : (
                      <Play className="w-10 h-10 fill-current ml-1" />
                    )}
                  </button>

                  <button onClick={nextSong} className="p-2 text-ash/40 hover:text-white transition-colors hover:scale-110">
                    <SkipForward className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Playlist Section */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-ash/40 mb-8">// {activeTab} Songs</h3>
              <div className="grid gap-2">
                {filteredSongs.map((song) => (
                  <button
                    key={song.id}
                    onClick={() => selectSong(song)}
                    className={`w-full flex items-center gap-6 p-4 rounded-xl transition-all group ${
                      currentSong.id === song.id ? 'bg-ash/10 border border-ash/10' : 'hover:bg-ash/5 border border-transparent'
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={song.cover} alt={song.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                      {currentSong.id === song.id && isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-void/40">
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
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h4 className={`font-medium transition-colors ${currentSong.id === song.id ? 'text-white' : 'text-ash/60 group-hover:text-ash'}`}>
                        {song.title}
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-ash/40">{song.singer} • {song.mood}</p>
                    </div>

                    <span className="font-mono text-xs text-ash/20">{song.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextSong}
      />
    </div>
  );
}
