import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentText, setCurrentText] = useState("INITIALIZING_SYSTEM");

    const loadingTexts = [
        "INITIALIZING_SYSTEM",
        "LOADING_NEURAL_NETWORKS",
        "DECRYPTING_ASSETS",
        "CONNECTING_TO_ANTHARLOKA",
        "OPTIMIZING_REALITY_ENGINE",
        "ACCESS_GRANTED"
    ];

    useEffect(() => {
        // Progress bar animation
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Small delay on 100%
                    return 100;
                }
                // Random increment
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    // Cycle text based on progress
    useEffect(() => {
        const textIndex = Math.min(
            Math.floor((progress / 100) * (loadingTexts.length - 1)),
            loadingTexts.length - 1
        );
        setCurrentText(loadingTexts[textIndex]);
    }, [progress]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#000000',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: "'Orbitron', sans-serif"
            }}
        >
            {/* Container */}
            <div style={{ width: '300px', textAlign: 'center' }}>

                {/* Header Text */}
                <h2 style={{
                    color: 'var(--cyan)',
                    fontSize: '1.5rem',
                    marginBottom: '2rem',
                    letterSpacing: '0.2em'
                }}>
                    AI VERSE STUDIOS
                </h2>

                {/* Text Status */}
                <div style={{
                    height: '20px',
                    marginBottom: '1rem',
                    color: 'var(--text-gray)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em'
                }}>
                    {`> ${currentText}...`}
                </div>

                {/* Progress Bar Container */}
                <div style={{
                    width: '100%',
                    height: '2px',
                    background: 'rgba(0, 240, 255, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Fill */}
                    <motion.div
                        style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: 'var(--cyan)',
                            boxShadow: '0 0 10px var(--cyan-glow)'
                        }}
                    />
                </div>

                {/* Percentage */}
                <div style={{
                    marginTop: '0.5rem',
                    textAlign: 'right',
                    color: 'var(--cyan)',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                }}>
                    {Math.min(progress, 100)}%
                </div>

            </div>

            {/* Decorative corners */}
            <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                width: '20px',
                height: '20px',
                borderTop: '2px solid var(--cyan)',
                borderLeft: '2px solid var(--cyan)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem',
                width: '20px',
                height: '20px',
                borderBottom: '2px solid var(--cyan)',
                borderRight: '2px solid var(--cyan)'
            }} />

        </motion.div>
    );
};

export default Preloader;
