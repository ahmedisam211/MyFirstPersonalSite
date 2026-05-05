import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // CRITICAL: This was likely missing
import CustomCursor from '../components/CustomcCursor';
import React, { useState } from 'react';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const [runCount, setRunCount] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        if (runCount < 3) {
            // Jumps further to avoid overlapping with the central text
            const minJump = 200;
            const maxJump = 200;
            
            const randomX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (maxJump - minJump) + minJump);
            const randomY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (maxJump - minJump) + minJump);
            
            setPosition({ x: randomX, y: randomY });
            setRunCount(prev => prev + 1);
        }
    };

    return (
        /* Added cursor-none to hide default mouse and use your CustomCursor */
        <div className="min-h-screen flex items-center justify-center p-6 bg-onyx overflow-hidden cursor-none">
            <div className="max-w-md w-full relative">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-light text-ash/20">404</h1>
                        <div className="h-0.5 w-16 bg-neon-cyan/30 mx-auto"></div>
                    </div>
                    
                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-ash">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The page <span className="font-medium text-neon-magenta">"{pageName}"</span> could not be found.
                        </p>
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-6 flex justify-center">
                        <motion.button 
                            onMouseEnter={handleMouseEnter}
                            animate={{ x: position.x, y: position.y }}
                            onClick={() => { 
                                if (runCount >= 3) window.location.href = '/'
                            }} 
                            whileHover={runCount >= 3 ? { scale: 1.1 } : {}}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            
                            className={`flex items-center font-mono text-xs uppercase tracking-widest transition-colors duration-300 px-4 py-2 border cursor-none ${
                                runCount < 3 
                                ? 'text-ash/40 border-transparent' 
                                : 'text-neon-cyan border-neon-cyan/30'
                            }`}
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            {runCount < 3 ? "Try to catch me" : " you should go back"}
                        </motion.button>
                    </div>
                </div>
            </div>
            <CustomCursor />
        </div>
    );
}