import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DecryptedText = ({ text, speed = 50, maxIterations = 10, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isDecrypted, setIsDecrypted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Characters to cycle through (Matrix/Cyber style)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    useEffect(() => {
        if (!isInView || isDecrypted) return;

        let interval;
        let iteration = 0;

        const startDecryption = () => {
            interval = setInterval(() => {
                setDisplayText(prev =>
                    text.split("").map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    }).join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setIsDecrypted(true);
                }

                iteration += 1 / (maxIterations / text.length); // Speed control
            }, speed);
        };

        startDecryption();

        return () => clearInterval(interval);
    }, [isInView, text, speed, maxIterations, characters, isDecrypted]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
};

export default DecryptedText;
